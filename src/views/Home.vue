<script setup>
import { ref, onMounted } from "vue";

// components
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";
// config
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

// images
const heroImage =
  "https://images.unsplash.com/photo-1695779539366-b221da6b9fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXhhcyUyMGJ1c2luZXNzJTIwc2t5bGluZSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQyMDQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
import usaFlag from "@/assets/images/flag/US.gif";
import txFlag from "@/assets/images/flag/Texas.gif";
import nyFlag from "@/assets/images/flag/NewYork.gif";

// data
const mainFeatures = [
  {
    icon: "dollar",
    title: "Trump's Tariff Solution",
    description:
      "Best destination to avoid heavy tariffs with free duty sales in USA and low duty global sales",
  },
  {
    icon: "earth",
    title: "Strategic Location",
    description:
      "Prime location in Texas with access to USMCA markets, Pan-American Highway, and major ports",
  },
  {
    icon: "trending_up",
    title: "Finance & IPO Support",
    description:
      "Complete support from New York finance partners for business growth and going public",
  },
  {
    icon: "buildings",
    title: "Complete Infrastructure",
    description:
      "60,000 sqft facility in Houston + 480 acres USMCA Park + Mexico manufacturing support",
  },
];
const quickStats = [
  { number: 60000, label: "Sq Ft Houston Facility", icon: "buildings", suffix: "" },
  { number: 480, label: "Acres USMCA Park", icon: "map_pin", suffix: "" },
  { number: 38, label: "Years Experience", icon: "trending_up", suffix: "+" },
  { number: 3, label: "NY Finance Partners", icon: "group", suffix: "" },
];

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// intersection observer
onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  // Hero Section
  const HeroFlags = document.querySelector(".hero__flags");
  const HeroFlagsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-[-10px]");
        entry.target.classList.add("opacity-100", "translate-y-[0px]");
        HeroFlagsObserver.unobserve(entry.target);
      }
    });
  }, options);
  HeroFlagsObserver.observe(HeroFlags);
  const HeroTitle = document.querySelector(".hero__title");
  const HeroTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-[-10px]");
        entry.target.classList.add("opacity-100", "translate-y-[0px]");
      }
    });
  }, options);
  HeroTitleObserver.observe(HeroTitle);
  const HeroDescription = document.querySelector(".hero__description");
  const HeroDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("opacity-100");
      }
    });
  }, options);
  HeroDescriptionObserver.observe(HeroDescription);
  const HeroCTA = document.querySelector(".hero__cta");
  const HeroCTAObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-[10px]");
        entry.target.classList.add("opacity-100", "translate-y-[0px]");
      }
    });
  }, options);
  HeroCTAObserver.observe(HeroCTA);

  const MainFeaturesTitle = document.querySelector(".main-features-title");
  // 創建 IntersectionObserver 物件
  const MainFeaturesTitleObserver = new IntersectionObserver((entries) => {
    // entries 為陣列，裝有進入視窗範圍的元素資訊，並執行後面的 callback 函式
    entries.forEach((entry) => {
      entry.target.classList.add("opacity-0", "translate-y-10");
      // 取消觀察指定元素
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        MainFeaturesTitleObserver.unobserve(entry.target);
      }
    });
  }, options);
  // 觀察指定元素
  MainFeaturesTitleObserver.observe(MainFeaturesTitle);

  const MainFeaturesContent = document.querySelectorAll(".main-features-content");
  const MainFeaturesContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.add("opacity-0", "translate-y-10");
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        MainFeaturesContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  MainFeaturesContent.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    MainFeaturesContentObserver.observe(el);
  });

  // Quick Stats
  const statItem = document.querySelectorAll(".stat-item");
  const statItemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-300");
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        let statNumber = entry.target.querySelector(".stat-number");
        animateCount(statNumber, 0, statNumber.dataset.end);
        statItemObserver.unobserve(entry.target);
      }
    });
  }, options);
  statItem.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    statItemObserver.observe(el);
  });

  // CTA
  const CTA = document.querySelector(".cta-section");
  const CTAObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.add("opacity-0", "translate-y-10");
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        CTAObserver.unobserve(entry.target);
      }
    });
  }, options);
  CTAObserver.observe(CTA);
});

function animateCount(el, start, end, duration = 1500) {
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + (end - start) * progress * 0.8);
    el.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="hero__section relative min-h-[90dvh] flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 w-full">
        <img
          :src="heroImage"
          alt="Texas Investment Opportunity"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-cyan-800/80 to-transparent"
        ></div>
      </div>
      <!-- content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <!-- flags  -->
          <div
            class="hero__flags flex items-center gap-4 mb-8 opacity-0 translate-y-[-10px] transition-all duration-1000"
          >
            <div
              class="w-16 h-12 bg-white/20 backdrop-blur-sm rounded border-2 border-white/30 flex items-center justify-center"
            >
              <!-- <span class="text-xs text-white">USA Flag</span> -->
              <img :src="usaFlag" alt="USA Flag" class="w-full h-full object-cover" />
            </div>
            <div
              class="w-16 h-12 bg-white/20 backdrop-blur-sm rounded border-2 border-white/30 flex items-center justify-center"
            >
              <!-- <span class="text-xs text-white">TX Flag</span> -->
              <img :src="txFlag" alt="TX Flag" class="w-full h-full object-cover" />
            </div>
            <div
              class="w-16 h-12 bg-white/20 backdrop-blur-sm rounded border-2 border-white/30 flex items-center justify-center"
            >
              <!-- <span class="text-xs text-white">NY Flag</span> -->
              <img :src="nyFlag" alt="NY Flag" class="w-full h-full object-cover" />
            </div>
          </div>

          <h1
            class="hero__title text-5xl md:text-6xl lg:text-7xl text-white mb-6 opacity-0 translate-y-[-10px] transition-all duration-1000 delay-[250ms]"
          >
            Best Property for Investing in Texas
          </h1>

          <div
            class="hero__description space-y-4 mb-8 opacity-0 transition-all duration-1000 delay-[500ms]"
          >
            <p class="text-xl md:text-2xl text-blue-100">
              Best Destination for Trump's Tariffs Solution
            </p>
            <p class="text-lg md:text-xl text-blue-100">
              Invest Texas with Finance & Go IPO support from New York
            </p>
            <p class="text-lg text-blue-200">
              We could support both Local & Global Marketing + Future Low Cost Manufacturing in
              Mexico
            </p>
            <p class="text-lg text-blue-200">
              Welcome to Invest Texas to enjoy Trump's Tariffs Policy for Free Duty Sales in USA +
              Low Duty Global Sales
            </p>
          </div>

          <div
            class="hero__cta flex flex-col sm:flex-row gap-4 opacity-0 translate-y-[10px] transition-all duration-1000 delay-[750ms]"
          >
            <a
              :href="`${pathUrl}process`"
              class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20 group"
            >
              View Investment Process
              <Icon
                name="arrow_forward"
                size="20"
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              :href="`${pathUrl}services-overview`"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      <!-- Scroll Indicator - 滾動提示動畫 -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          class="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div class="w-1.5 h-1.5 bg-white rounded-full scroll-indicator" />
        </div>
      </div>
    </section>
    <!-- Main Features : Why Choose InvesTexas? -->
    <section class="main-features py-20 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- title -->
        <div class="main-features-title text-center mb-16 duration-1000">
          <h2 class="text-4xl text-gray-900 mb-4">Why Choose InvesTexas?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic location, tariff advantages, and complete infrastructure for your business
            success
          </p>
        </div>
        <!-- content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(feature, index) in mainFeatures"
            :key="index"
            class="main-features-content bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 group hover:translate-y-[-10px] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-sky-500 to-amber-400 rounded-xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
            >
              <Icon :name="feature.icon" size="24" />
            </div>
            <h3 class="text-2xl text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats - 數字計數動畫 -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in quickStats" :key="index" class="text-center stat-item">
            <div class="flex justify-center mb-4 text-amber-400">
              <Icon :name="stat.icon" size="24" />
            </div>
            <div class="text-5xl mb-2 text-amber-300">
              <span class="stat-number" :data-end="stat.number">0</span>
              <span>{{ stat.suffix }}</span>
            </div>
            <div class="text-blue-200">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section - 滾動淡入 -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="cta-section text-center duration-1000">
          <h2 class="text-4xl text-gray-900 mb-6">Ready to Start Your Investment Journey?</h2>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join successful businesses that have already established their presence in Texas.
            Schedule a consultation with our expert team today.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              :href="`${pathUrl}contact`"
              class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20 group"
            >
              Schedule a Visit
              <Icon
                name="arrow_forward"
                size="20"
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.scroll-indicator {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(100%);
  }
}
</style>
