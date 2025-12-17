<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

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

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const heroContent = document.querySelector(".hero__content");
  const heroContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        heroContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  heroContentObserver.observe(heroContent);

  // Overview Section
  const overviewContent = document.querySelector(".overview__content");
  const overviewImage = document.querySelector(".overview__image");
  const overviewContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        overviewContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  const overviewImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[-100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        overviewImageObserver.unobserve(entry.target);
      }
    });
  }, options);
  overviewContentObserver.observe(overviewContent);
  overviewImageObserver.observe(overviewImage);

  // features section
  const featuresList = document.querySelector(".features__list");
  const featuresListObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let items = entry.target.querySelectorAll(".features__item");
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.classList.remove("opacity-0", "translate-y-10");
          item.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            item.style.transitionDelay = "0s";
          }, 500);
        });
        let statNumbers = entry.target.querySelectorAll(".stat-number");
        statNumbers.forEach((statNumber, index) => {
          animateCount(statNumber, 0, statNumber.dataset.end);
        });
        featuresListObserver.unobserve(entry.target);
      }
    });
  }, options);
  featuresListObserver.observe(featuresList);
});

function animateCount(el, start, end, duration = 1500) {
  const startTime = performance.now();

  function loop(now) {
    const timeFraction = Math.min((now - startTime) / duration, 1);
    let progress = eqal(timeFraction);
    const value = Math.floor(start + (end - start) * progress);
    el.textContent = value;

    if (timeFraction < 1) {
      requestAnimationFrame(loop);
    }
  }

  requestAnimationFrame(loop);
}
// 例子一 : 等速
function eqal(timeFraction) {
  return timeFraction;
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="hero__section relative py-20 bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          :href="`${pathUrl}/services-overview`"
          @click.prevent="router.go(-1)"
          class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
        >
          <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
          Back to Overview
        </a>
        <div class="hero__content text-center opacity-0 translate-y-10 transition-all duration-500">
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

    <!-- Overview Section -->
    <section class="overview__section py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="overview__content opacity-0 translate-x-[100px] transition-all duration-500">
            <h2 class="overview__title text-4xl text-gray-900 mb-6">Clean Air, Healthy Life</h2>
            <p class="overview__description text-lg text-gray-700 leading-relaxed mb-6">
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
          <div class="overview__image opacity-0 translate-x-[-100px] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1616401582858-75e01ae760c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Air Purification System"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section
      class="features__section py-20 bg-gradient-to-br from-green-900 to-teal-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="features__list grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="features__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div class="text-5xl mb-2 text-emerald-300">
                <span data-end="99" class="stat-number"></span>
                <span>%</span>
              </div>
              <div class="text-teal-200">Particle Removal Rate</div>
            </div>
          </div>
          <div class="features__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div class="text-5xl mb-2 text-emerald-300">
                <span data-end="50" class="stat-number"></span>
                <span>%</span>
              </div>
              <div class="text-teal-200">Energy Savings</div>
            </div>
          </div>
          <div class="features__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div class="text-5xl mb-2 text-emerald-300">
                <span data-end="10" class="stat-number"></span>
                <span>yr</span>
              </div>
              <div class="text-teal-200">Product Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
