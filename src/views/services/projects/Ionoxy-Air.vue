<script setup>
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

import { ref, onMounted, onUnmounted } from "vue";

// 圖標上下浮動動畫
const iconStyle = ref({});
let animationFrame;
let startTime;

const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;
  const progress = (elapsed % 2000) / 2000; // 2秒循環

  // 計算 y 軸位移: 0 -> -10 -> 0
  let yOffset = 0;
  if (progress < 0.5) {
    yOffset = -progress * 2 * 10; // 0 到 -10
  } else {
    yOffset = -10 + (progress - 0.5) * 2 * 10; // -10 到 0
  }

  iconStyle.value = {
    transform: `translateY(${yOffset}px)`,
    transition: "transform 0.1s linear",
  };

  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  animationFrame = requestAnimationFrame(animate);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});

const features = [
  "Medical-grade HEPA filtration",
  "Negative ion generation",
  "Oxygen enrichment technology",
  "Smart air quality monitoring",
  "Energy-efficient operation",
];
</script>

<template>
  <DefaultLayout>
    <section
      class="relative py-20 bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          :href="`/services-overview`"
          class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
        >
          <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
          Back to Overview
        </a>
        <div class="text-center">
          <div class="inline-block mb-6" :style="iconStyle">
            <Icon name="wind" size="20" class="w-20 h-20 mx-auto text-emerald-400" />
          </div>
          <h1 class="text-5xl md:text-6xl mb-6">IonOxy Air System</h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Advanced Air Purification Technology for Healthier Living
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl text-gray-900 mb-6">Clean Air, Healthy Life</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              The IonOxy Air System combines ionization and oxygenation technology to provide the
              most advanced air purification solution on the market. Our system eliminates 99.97% of
              airborne particles, bacteria, and viruses while enriching indoor air with negative
              ions for improved health and well-being.
            </p>
            <div class="space-y-4 mb-6">
              <div v-for="(feature, idx) in features" :key="idx" class="flex items-start space-x-3">
                <Icon name="leaf" size="16" class="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
            <router-link
              to="/contact"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg hover:from-green-700 hover:to-teal-600 transition-all shadow-lg"
            >
              Learn More
              <Icon name="arrow_forward" size="16" class="ml-2 w-5 h-5" />
            </router-link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1616401582858-75e01ae760c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Air Purification System"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-green-900 to-teal-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div>
              <div class="text-5xl mb-2 text-emerald-300">
                <span>99%</span>
              </div>
              <div class="text-teal-200">Particle Removal Rate</div>
            </div>
          </div>
          <div>
            <div>
              <div class="text-5xl mb-2 text-emerald-300">
                <span>50%</span>
              </div>
              <div class="text-teal-200">Energy Savings</div>
            </div>
          </div>
          <div>
            <div>
              <div class="text-5xl mb-2 text-emerald-300">
                <span>10 yr</span>
              </div>
              <div class="text-teal-200">Product Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
