<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div class="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-white" />

    <svg
      v-for="cloud in cloudList"
      :key="cloud.id"
      class="absolute animate-cloud-horizontal cloud-soft-shadow"
      :style="{
        top: cloud.top + '%',
        width: cloud.size + 'px',
        animationDuration: cloud.duration + 's',
        animationDelay: cloud.delay + 's',
        opacity: cloud.opacity,
      }"
      viewBox="0 0 200 100"
    >
      <defs>
        <linearGradient :id="'cloud-grad-' + cloud.id" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f0f9ff" />
        </linearGradient>
      </defs>
      <path :d="cloudPaths[cloud.pathIndex]" :fill="`url(#cloud-grad-${cloud.id})`" />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cloudPaths = [
  "M 30 60 Q 20 40 40 35 Q 45 20 65 25 Q 80 15 95 30 Q 110 25 115 40 Q 130 35 125 55 Q 120 70 100 65 Q 80 75 60 70 Q 40 75 30 60",
  "M 25 65 Q 15 45 35 40 Q 40 25 60 30 Q 75 20 90 35 Q 105 30 110 45 Q 125 40 130 55 Q 135 70 115 70 Q 95 80 75 75 Q 55 80 35 75 Q 20 75 25 65",
  "M 20 70 Q 10 50 30 45 Q 35 30 55 35 Q 70 25 85 40 Q 100 35 105 50 Q 120 45 125 60 Q 130 75 110 75 Q 90 85 70 80 Q 50 85 30 80 Q 15 80 20 70",
];

const cloudList = ref([]);
const getRandom = (min, max) => Math.random() * (max - min) + min;

onMounted(() => {
  const count = 10;
  const tempClouds = [];

  for (let i = 0; i < count; i++) {
    tempClouds.push({
      id: i,
      top: getRandom(5, 75),
      size: getRandom(200, 450), // 稍微調大一點點，更有份量
      duration: getRandom(45, 80), // 速度調得更悠閒
      delay: getRandom(-80, 0),
      opacity: getRandom(0.7, 0.9), // 提高透明度，讓陰影更明顯
      pathIndex: Math.floor(getRandom(0, 3)),
    });
  }
  cloudList.value = tempClouds;
});
</script>

<style scoped>
@keyframes cloud-horizontal {
  from {
    transform: translateX(-150%);
  }
  to {
    transform: translateX(110vw);
  }
}

.animate-cloud-horizontal {
  animation-name: cloud-horizontal;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

/* 核心優化：雲朵陰影效果 */
.cloud-soft-shadow {
  /* drop-shadow 參數說明：
     x: 0, y: 10px (向下偏移), blur: 15px (模糊度), color: 帶藍調的灰色 
  */
  filter: drop-shadow(0px 12px 10px rgba(186, 230, 253, 0.5));
}
</style>
