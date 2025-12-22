<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import Icon from "@/components/base/Icon.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
  visible: {
    type: Boolean,
    default: false,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:visible", "update:images"]);

// 狀態管理
const currentIndex = ref(props.initialIndex);
const scale = ref(1);
const rotation = ref(0);
const translateX = ref(0);
const translateY = ref(0);
const isDragging = ref(false);
const dragStart = ref({ x: 0, y: 0 });

// 觸控相關
const touchStart = ref({ x: 0, y: 0 });
const touchDistance = ref(0);
const initialScale = ref(1);
const initialRotation = ref(0);

// 計算屬性
const currentImage = computed(() => {
  return props.images[currentIndex.value] || {};
});

const totalImages = computed(() => props.images.length);

const canGoPrev = computed(() => currentIndex.value > 0);
const canGoNext = computed(() => currentIndex.value < totalImages.value - 1);

const imageStyle = computed(() => {
  return {
    transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value}) rotate(${rotation.value}deg)`,
    transition: isDragging.value ? "none" : "transform 0.3s ease",
  };
});

// 縮放控制
const minScale = 0.5;
const maxScale = 3;
const scaleStep = 0.25;

const zoomIn = () => {
  if (scale.value < maxScale) {
    scale.value = Math.min(scale.value + scaleStep, maxScale);
  }
};

const zoomOut = () => {
  if (scale.value > minScale) {
    scale.value = Math.max(scale.value - scaleStep, minScale);
  }
};

const resetZoom = () => {
  scale.value = 1;
  translateX.value = 0;
  translateY.value = 0;
};

// 旋轉控制
const rotateLeft = () => {
  rotation.value -= 90;
};

const rotateRight = () => {
  rotation.value += 90;
};

const resetRotation = () => {
  rotation.value = 0;
};

// 重置所有變換
const resetTransform = () => {
  scale.value = 1;
  rotation.value = 0;
  translateX.value = 0;
  translateY.value = 0;
};

// 圖片切換
const goToPrev = () => {
  if (canGoPrev.value) {
    currentIndex.value--;
    resetTransform();
  }
};

const goToNext = () => {
  if (canGoNext.value) {
    currentIndex.value++;
    resetTransform();
  }
};

const goToIndex = (index) => {
  if (index >= 0 && index < totalImages.value) {
    currentIndex.value = index;
    resetTransform();
  }
};

// 關閉檢視器
const close = () => {
  emit("update:visible", false);
  // 延遲重置，等待關閉動畫完成
  setTimeout(() => {
    currentIndex.value = props.initialIndex;
    resetTransform();
  }, 300);
};

// 滑鼠拖曳
const handleMouseDown = (e) => {
  if (scale.value > 1) {
    isDragging.value = true;
    dragStart.value = {
      x: e.clientX - translateX.value,
      y: e.clientY - translateY.value,
    };
  }
};

const handleMouseMove = (e) => {
  if (isDragging.value && scale.value > 1) {
    translateX.value = e.clientX - dragStart.value.x;
    translateY.value = e.clientY - dragStart.value.y;
  }
};

const handleMouseUp = () => {
  isDragging.value = false;
};

// 滑鼠滾輪縮放
const handleWheel = (e) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
};

// 觸控事件處理
const handleTouchStart = (e) => {
  if (e.touches.length === 1) {
    // 單指拖曳
    if (scale.value > 1) {
      touchStart.value = {
        x: e.touches[0].clientX - translateX.value,
        y: e.touches[0].clientY - translateY.value,
      };
    } else {
      // 用於滑動切換圖片
      touchStart.value = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  } else if (e.touches.length === 2) {
    // 雙指縮放
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    touchDistance.value = Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY
    );
    initialScale.value = scale.value;
  }
};

const handleTouchMove = (e) => {
  if (e.touches.length === 1) {
    if (scale.value > 1) {
      // 縮放狀態下的拖曳
      translateX.value = e.touches[0].clientX - touchStart.value.x;
      translateY.value = e.touches[0].clientY - touchStart.value.y;
    }
  } else if (e.touches.length === 2) {
    // 雙指縮放
    e.preventDefault();
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    const currentDistance = Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY
    );
    const scaleChange = currentDistance / touchDistance.value;
    scale.value = Math.min(Math.max(initialScale.value * scaleChange, minScale), maxScale);
  }
};

const handleTouchEnd = (e) => {
  if (e.changedTouches.length === 1 && scale.value === 1) {
    // 檢查是否為滑動切換圖片
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.value.x;
    const deltaY = Math.abs(touch.clientY - touchStart.value.y);

    // 水平滑動距離大於 50px 且垂直滑動小於 30px
    if (Math.abs(deltaX) > 50 && deltaY < 30) {
      if (deltaX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
  }
};

// 鍵盤事件
const handleKeydown = (e) => {
  if (!props.visible) return;

  switch (e.key) {
    case "Escape":
      close();
      break;
    case "ArrowLeft":
      goToPrev();
      break;
    case "ArrowRight":
      goToNext();
      break;
    case "+":
    case "=":
      zoomIn();
      break;
    case "-":
      zoomOut();
      break;
    case "0":
      resetZoom();
      break;
  }
};

// 監聽 visible 變化
watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);

// 監聽 initialIndex 變化
watch(
  () => props.initialIndex,
  (newVal) => {
    currentIndex.value = newVal;
  }
);

// 生命週期
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
  document.body.style.overflow = "";
});
</script>

<template>
  <Teleport to="body">
    <Transition name="viewer-fade">
      <div
        v-if="visible"
        class="image-viewer fixed inset-0 z-[9999] bg-black/95 flex flex-col"
        @click.self="close"
      >
        <!-- 頂部工具列 -->
        <div class="viewer-header flex items-center justify-between px-4 py-3 bg-black/50">
          <!-- 圖片資訊 -->
          <div class="flex-1 text-white">
            <h3 class="text-lg font-medium truncate">{{ currentImage.name || "Image" }}</h3>
            <p class="text-sm text-gray-400">{{ currentIndex + 1 }} / {{ totalImages }}</p>
          </div>

          <!-- 關閉按鈕 -->
          <button
            @click="close"
            class="ml-4 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Close (ESC)"
          >
            <Icon name="close" size="24" />
          </button>
        </div>

        <!-- 圖片顯示區域 -->
        <div
          class="viewer-content flex-1 relative overflow-hidden flex items-center justify-center"
        >
          <!-- 左箭頭 -->
          <button
            v-if="canGoPrev"
            @click="goToPrev"
            class="absolute left-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
            title="Previous (←)"
          >
            <Icon name="arrow_forward" size="24" class="rotate-180" />
          </button>

          <!-- 圖片容器 -->
          <div
            class="image-container relative w-full h-full flex items-center justify-center cursor-move"
            @mousedown="handleMouseDown"
            @wheel.prevent="handleWheel"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <img
              :src="currentImage.url"
              :alt="currentImage.alt || currentImage.name"
              :style="imageStyle"
              class="max-w-[90%] max-h-[90%] object-contain select-none"
              draggable="false"
            />
          </div>

          <!-- 右箭頭 -->
          <button
            v-if="canGoNext"
            @click="goToNext"
            class="absolute right-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
            title="Next (→)"
          >
            <Icon name="arrow_forward" size="24" />
          </button>
        </div>

        <!-- 底部工具列 -->
        <div class="viewer-toolbar flex items-center justify-center gap-2 px-4 py-4 bg-black/50">
          <!-- 縮小 -->
          <button
            @click="zoomOut"
            :disabled="scale <= minScale"
            class="p-2 text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Zoom Out (-)"
          >
            <Icon name="zoom_out" size="20" />
          </button>

          <!-- 縮放比例顯示 -->
          <span class="px-3 py-1 text-white text-sm min-w-[60px] text-center">
            {{ Math.round(scale * 100) }}%
          </span>

          <!-- 放大 -->
          <button
            @click="zoomIn"
            :disabled="scale >= maxScale"
            class="p-2 text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Zoom In (+)"
          >
            <Icon name="zoom_in" size="20" />
          </button>

          <!-- 分隔線 -->
          <div class="w-px h-6 bg-white/20 mx-2"></div>

          <!-- 逆時針旋轉 -->
          <button
            @click="rotateLeft"
            class="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Rotate Left"
          >
            <Icon name="rotate_left" size="20" />
          </button>

          <!-- 順時針旋轉 -->
          <button
            @click="rotateRight"
            class="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Rotate Right"
          >
            <Icon name="rotate_right" size="20" />
          </button>

          <!-- 分隔線 -->
          <div class="w-px h-6 bg-white/20 mx-2"></div>

          <!-- 重置 -->
          <button
            @click="resetTransform"
            class="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Reset (0)"
          >
            <Icon name="refresh" size="20" />
          </button>
        </div>

        <!-- 縮圖列表（可選，移動端隱藏） -->
        <div
          v-if="totalImages > 1"
          class="viewer-thumbnails hidden md:flex items-center justify-center gap-2 px-4 py-3 bg-black/50 overflow-x-auto"
        >
          <button
            v-for="(image, index) in images"
            :key="index"
            @click="goToIndex(index)"
            class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all"
            :class="
              index === currentIndex
                ? 'border-blue-500 opacity-100'
                : 'border-transparent opacity-50 hover:opacity-75'
            "
          >
            <img
              :src="image.url"
              :alt="image.alt || image.name"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* 淡入淡出動畫 */
.viewer-fade-enter-active,
.viewer-fade-leave-active {
  transition: opacity 0.3s ease;
}

.viewer-fade-enter-from,
.viewer-fade-leave-to {
  opacity: 0;
}

/* 圖片容器 */
.image-container {
  touch-action: none;
}

/* 滾動條樣式 */
.viewer-thumbnails {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.viewer-thumbnails::-webkit-scrollbar {
  height: 6px;
}

.viewer-thumbnails::-webkit-scrollbar-track {
  background: transparent;
}

.viewer-thumbnails::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.viewer-thumbnails::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

/* 防止文字選取 */
.image-viewer * {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
