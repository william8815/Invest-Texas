<script setup>
import { ref, toRaw, reactive } from "vue";
import Icon from "@/components/base/Icon.vue";

const images = defineModel("images", {
  type: Array,
  required: true,
});

const props = defineProps({
  icon: {
    type: String,
    default: "image",
  },
  imagePlaceholder: {
    type: String,
    default: "Image Placeholder",
  },
});

const imageSliderRef = ref(null);

// 圖片載入狀態（使用 reactive 物件追蹤每張圖片）
const imageLoadedStates = reactive({});

const handleImageLoad = (index) => {
  imageLoadedStates[index] = true;
};

const handlePrev = () => {
  const activeIndex = images.value.findIndex((item) => item.active);
  if (activeIndex === 0) return;
  images.value[activeIndex].active = false;
  images.value[activeIndex - 1].active = true;
  // 讓容器水平滾動至 active image 的索引位置
  let element = toRaw(imageSliderRef.value);
  element?.scrollBy({
    left: -element.offsetWidth,
    behavior: "smooth",
  });
};
const handleNext = () => {
  const activeIndex = images.value.findIndex((item) => item.active);
  if (activeIndex === images.value.length - 1) return;
  images.value[activeIndex].active = false;
  images.value[activeIndex + 1].active = true;
  // 讓容器水平滾動至 active image 的索引位置
  let element = toRaw(imageSliderRef.value);
  element?.scrollBy({
    left: element.offsetWidth,
    behavior: "smooth",
  });
};
</script>

<template>
  <div class="">
    <div v-if="images?.length">
      <div
        class="w-full h-80 rounded-lg shadow-2xl flex flex-nowrap overflow-x-hidden"
        ref="imageSliderRef"
      >
        <div v-for="(image, idx) in images" :key="idx" class="relative min-w-full h-full">
          <!-- Skeleton -->
          <div
            v-if="!imageLoadedStates[idx]"
            class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-lg flex items-center justify-center"
          >
            <div class="text-center">
              <div
                class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2"
              >
                <Icon :name="props.icon" size="20" class="text-gray-400" />
              </div>
              <p class="text-gray-400 text-sm">Loading...</p>
            </div>
          </div>
          <!-- 實際圖片 -->
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-full object-cover transition-opacity duration-500"
            :class="imageLoadedStates[idx] ? 'opacity-100' : 'opacity-0'"
            loading="lazy"
            @load="handleImageLoad(idx)"
          />
        </div>
      </div>

      <!-- prev and next button -->
      <div v-if="images?.length > 1" class="flex items-center justify-center gap-4 mt-4">
        <button
          class="bg-gradient-to-r from-sky-600 to-amber-500 rounded-lg flex items-center justify-center p-[2px]"
          @click="handlePrev()"
        >
          <span
            class="px-4 py-2 w-full h-full bg-white rounded-lg flex items-center justify-center"
          >
            <Icon name="arrow_down" size="24" class="rotate-90" />
          </span>
        </button>
        <button
          class="bg-gradient-to-r from-sky-600 to-amber-500 rounded-lg flex items-center justify-center p-[2px]"
          @click="handleNext()"
        >
          <span
            class="px-4 py-2 w-full h-full bg-white rounded-lg flex items-center justify-center"
          >
            <Icon name="arrow_down" size="24" class="rotate-[-90deg]" />
          </span>
        </button>
      </div>
    </div>

    <div
      v-else
      class="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl flex items-center justify-center"
    >
      <div class="text-center p-8">
        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon :name="props.icon" size="24" />
        </div>
        <p class="text-gray-600">{{ props.imagePlaceholder }}</p>
      </div>
    </div>
  </div>
</template>
