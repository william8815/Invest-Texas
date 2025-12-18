<script setup>
import { ref, onMounted, onUnmounted, toRaw } from "vue";
import DefaultLayout from "@/layouts/default.vue";
// config
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;
// components
import Icon from "@/components/base/Icon.vue";
// images
import process1_1 from "@/assets/images/process/process1_1.png";
import process2_1 from "@/assets/images/process/process2_1.jpg";
import process2_2 from "@/assets/images/process/process2_2.jpg";
import process3_1 from "@/assets/images/process/process3_1.jpg";
import process3_2 from "@/assets/images/process/process3_2.gif";
import process3_3 from "@/assets/images/process/process3_3.jpg";
import process3_4 from "@/assets/images/process/process3_4.jpg";
import process4_1 from "@/assets/images/process/process4_1.png";
import process5_1 from "@/assets/images/process/process5_1.jpg";
import process6_1 from "@/assets/images/process/process6_1.png";

// Scroll progress tracking
const progressRef = ref(null);
const scrollProgress = ref(0);

const updateScrollProgress = () => {
  if (!progressRef.value) return;
  const rect = progressRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const elementHeight = rect.height;

  const windowCenter = windowHeight / 2;
  let distance = windowCenter - rect.top;

  // 計算進度 (0 到 1)
  if (distance >= elementHeight) {
    scrollProgress.value = 1;
  } else if (distance <= 0) {
    scrollProgress.value = 0;
  } else {
    scrollProgress.value = distance / elementHeight;
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateScrollProgress);
  updateScrollProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollProgress);
});

const steps = ref([
  {
    number: 1,
    icon: "store",
    title: "Product Showroom with Market Survey",
    subtitle: "Start with Showroom in USMCA",
    description:
      "We have Showroom with Multimedia Facility. We offer all Showroom Members with Free Promotion to all Harwin International Wholesalers. We will help to do Marketing Survey in whole USA, supported by Sinopac VP Felix Fu.",
    features: [
      "Showroom with Multimedia Facility",
      "Free Promotion to Harwin International Wholesalers",
      "Market Survey across USA",
      "Supported by Sinopac VP Felix Fu",
    ],
    images: [
      {
        url: process1_1,
        alt: "process1_1",
        active: true,
      },
    ],
  },
  {
    number: 2,
    icon: "buildings",
    title: "Showroom Office",
    subtitle: "Start Product Sale & Setup Company",
    description:
      "60,000 sq. ft. Building on 3.8 acres City Block @ Center of Harwin Wholesale District. We offer Office Space at reasonable price + Excellent Company Operation Consultancy, hosted by Dr. Lin.",
    features: [
      "60,000 sq. ft. Building on 3.8 acres",
      "Center of Harwin Wholesale District",
      "Wholesale center lobby",
      "Wholesale Store-Front Walk-Isle",
      "Expert consultancy by Dr. Lin",
    ],
    imagePlaceholder: "Wholesale Center Lobby & Walk-Isle Images",
    images: [
      {
        url: process2_1,
        alt: "process2_1",
        active: true,
      },
      {
        url: process2_2,
        alt: "process2_2",
        active: false,
      },
    ],
  },
  {
    number: 3,
    icon: "factory",
    title: "Pilot Run Operation Support",
    subtitle: "Test Production in USA or Mexico",
    description:
      "50,000 sqft. Manufacturing Floor Space + 120,000 sqft. Outlet Show Space to serve for Latin Area. You need only One Engineer to support Pilot Run Production in our facility.",
    features: [
      "50,000 sqft. Manufacturing Floor Space",
      "120,000 sqft. Outlet Show Space",
      "Only One Engineer needed",
      "Full support for pilot production",
      "Detail info: www.Lintelmex.com",
    ],
    images: [
      {
        url: process3_1,
        alt: "process3_1",
        active: true,
      },
      {
        url: process3_2,
        alt: "process3_2",
        active: false,
      },
      {
        url: process3_3,
        alt: "process3_3",
        active: false,
      },
      {
        url: process3_4,
        alt: "process3_4",
        active: false,
      },
    ],
  },
  {
    number: 4,
    icon: "home",
    title: "Finance to Build Factory",
    subtitle: "Start 'Made in USA'",
    description:
      "We have strong Construction Team to build Custom Facility for your service. Our Chief Architect (GREG SHENG) has strong engineering background for your service.",
    features: [
      "Custom Building to fit your needs",
      "Strong Construction Team",
      "Chief Architect: GREG SHENG",
      "Strong engineering background",
      "Tailored facility design",
    ],
    images: [
      {
        url: process4_1,
        alt: "process4_1",
        active: true,
      },
    ],
  },
  {
    number: 5,
    icon: "trending_up",
    title: "Pool Brand Marketing",
    subtitle: "Increase Company Profit",
    description:
      "We have been doing International Marketing 38 years and will be happy to help our Investor to develop Brand Name Sales with After Sale Service. Since all our facility are alongside Hwy 69 which is part of Pan-American Highway System, we could support sales transportation in whole American Continental efficiently.",
    features: [
      "38 years International Marketing experience",
      "Brand Name Sales development",
      "Operations in both USA & Mexico",
      "Setup branch office to take care after sales service to back up our Brand Sales.",
      "Our 60,000 sq.ft. Operation Building in Houston, Texas, USA",
      "Our 50,000 sq.ft. Operation Building in Reynosa, Tam., Mexico",
      "Pan-America Highway System run from Canada toArgentina.",
    ],
    imagePlaceholder: "Houston & Mexico Operations + Pan-American Highway",
    images: [
      {
        url: process2_1,
        alt: "process2_1",
        active: true,
      },
      {
        url: process5_1,
        alt: "process5_1",
        active: false,
      },
    ],
  },
  {
    number: 6,
    icon: "dollar",
    title: "Finance & Go Public Support",
    subtitle: "Including Go Nasdaq Market",
    description:
      "We are working with some Finance Companies in New York and able to offer you Finance Loan & Go Public Support. We are confident to support your financial needs whenever you have proper established business.",
    features: [
      "New York Finance Company partnerships:",
      "• American Wall Street Listed Group Inc",
      "• Cannondale Financial LLC",
      "• Project Master LLC",
      "Property/Finance as Share Partner option",
      "Special Profit Guaranteed Program",
      "Consultant: Mr. Victor Zhang",
    ],
    imagePlaceholder: "Facility Images",
    images: [
      {
        url: process6_1,
        alt: "process6_1",
        active: true,
      },
    ],
  },
]);

// 這個 Class 是用來管理圖片輪播的
// 需要參數 : 容器元素(本身、寬度)、圖片列表(active, url, alt)
// 功能 : 可以透過 prev 和 next 來設置當前 active 的圖片
//
const imageSliderRef = ref(null);

const handlePrev = (images) => {
  const activeIndex = images.findIndex((item) => item.active);
  if (activeIndex === 0) return;
  images[activeIndex].active = false;
  images[activeIndex - 1].active = true;
  // 讓容器水平滾動至 active image 的索引位置
  let element = toRaw(imageSliderRef.value);
  element[0]?.scrollBy({
    left: -element[0].offsetWidth,
    behavior: "smooth",
  });
};
const handleNext = (images) => {
  const activeIndex = images.findIndex((item) => item.active);
  if (activeIndex === images.length - 1) return;
  images[activeIndex].active = false;
  images[activeIndex + 1].active = true;
  // 讓容器水平滾動至 active image 的索引位置
  let element = toRaw(imageSliderRef.value);
  element[0]?.scrollBy({
    left: element[0].offsetWidth,
    behavior: "smooth",
  });
};

import ImageSlider from "@/components/ImageSlider.vue";

// animation
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

  // Process Section
  const processItems = document.querySelectorAll(".process__item");
  const processItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let content = entry.target.querySelector(".process__content");
      let image = entry.target.querySelector(".process__image");
      if (entry.isIntersecting) {
        if (entry.target.dataset.index % 2 === 0) {
          content.classList.remove("opacity-0", "-translate-x-10");
          content.classList.add("opacity-100", "translate-x-0");
          image.classList.remove("opacity-0", "translate-x-10");
          image.classList.add("opacity-100", "translate-x-0");
        } else {
          content.classList.remove("opacity-0", "translate-x-10");
          content.classList.add("opacity-100", "translate-x-0");
          image.classList.remove("opacity-0", "-translate-x-10");
          image.classList.add("opacity-100", "translate-x-0");
        }
        processItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  processItems.forEach((item, index) => {
    processItemsObserver.observe(item);
  });

  const processDot = document.querySelectorAll(".process__dot");
  const processDotObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "scale-[0.5]");
        entry.target.classList.add("opacity-100", "scale-1", "rotate-[360deg]");
      }
    });
  }, options);
  processDot.forEach((dot) => {
    processDotObserver.observe(dot);
  });

  // Timeline Section
  const timeline__title = document.querySelector(".timeline__title");
  const timeline__description = document.querySelector(".timeline__description");
  const timelineTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[-100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        timelineTitleObserver.unobserve(entry.target);
      }
    });
  }, options);
  const timelineDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        timelineDescriptionObserver.unobserve(entry.target);
      }
    });
  }, options);
  timelineTitleObserver.observe(timeline__title);
  timelineDescriptionObserver.observe(timeline__description);

  const timeline_items = document.querySelectorAll(".timeline__item");
  const timelineItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        timelineItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  timeline_items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    timelineItemsObserver.observe(item);
  });

  // CTA Section
  const ctaContent = document.querySelector(".cta__content");
  const ctaContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        ctaContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  ctaContentObserver.observe(ctaContent);
});
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section  -->
    <section
      class="hero_section relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-blue-900 text-white overflow-hidden"
    >
      <div
        class="hero__content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-500"
      >
        <div class="text-center">
          <h1 class="hero__title text-5xl md:text-6xl mb-6">Investment Process</h1>
          <p class="hero__description text-xl text-blue-100 max-w-3xl mx-auto">
            Six strategic steps to establish and grow your business in Texas
          </p>
        </div>
      </div>
    </section>

    <section
      ref="progressRef"
      class="process__section py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-x-hidden"
    >
      <!-- Vertical Timeline Progress Bar -->
      <div
        class="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-sky-600 to-amber-500 origin-top hidden lg:block transition-all duration-100"
        :style="{
          transform: `scaleY(${scrollProgress})`,
          height: '100%',
        }"
      />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-24 process__list">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            :class="[
              'process__item flex flex-col gap-24 items-center relative',
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
            ]"
            :data-index="index"
          >
            <!-- Timeline Dot -->
            <div
              class="process__dot absolute left-1/2 -translate-x-1/2 hidden lg:block z-10 opacity-0 scale-[0.5] transition-all duration-500"
            >
              <div
                class="w-20 h-20 bg-gradient-to-br from-sky-600 to-amber-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                {{ step.number }}
              </div>
            </div>

            <!-- Content -->
            <div
              class="flex-1 lg:w-1/2 process__content opacity-0 transition-all duration-300"
              :class="index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'"
            >
              <div class="flex items-center gap-4 mb-6">
                <!-- Mobile Number Badge -->
                <div
                  class="w-16 h-16 bg-gradient-to-br from-sky-600 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 lg:hidden"
                >
                  {{ step.number }}
                </div>
                <div
                  class="w-12 h-12 bg-gradient-to-br from-sky-500 to-amber-400 rounded-xl flex items-center justify-center text-white"
                >
                  <Icon :name="step.icon" size="24" />
                </div>
              </div>

              <div>
                <h3 class="text-3xl text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-xl text-sky-600 mb-4">{{ step.subtitle }}</p>
                <p class="text-gray-700 leading-relaxed mb-6">{{ step.description }}</p>

                <div
                  class="bg-gradient-to-br from-sky-50 to-amber-50 p-6 rounded-xl border border-sky-100"
                >
                  <h4 class="text-lg text-gray-900 mb-4">Key Features:</h4>
                  <ul class="space-y-3">
                    <li
                      v-for="(feature, idx) in step.features"
                      :key="idx"
                      class="flex items-start space-x-3"
                    >
                      <div
                        class="w-5 h-5 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                      >
                        ✓
                      </div>
                      <span class="text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Image -->
            <div
              class="flex-1 lg:w-1/2 w-full process__image opacity-0 transition-all duration-300"
              :class="index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'"
            >
              <!-- image slider -->
              <ImageSlider
                v-model:images="step.images"
                :icon="step.icon"
                :imagePlaceholder="step.imagePlaceholder"
              />
              <!-- <div class="">
                <div v-if="step.images?.length">
                  <div
                    class="w-full h-80 rounded-lg shadow-2xl flex flex-nowrap overflow-x-hidden"
                    ref="imageSliderRef"
                  >
                    <img
                      v-for="(image, idx) in step.images"
                      :key="idx"
                      :src="image.url"
                      :alt="image.alt"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    v-if="step.images?.length > 1"
                    class="flex items-center justify-center gap-4 mt-4"
                  >
                    <button
                      class="bg-gradient-to-r from-sky-600 to-amber-500 rounded-lg flex items-center justify-center p-[2px]"
                      :class="{ 'opacity-50 cursor-not-allowed': step.images?.length === 1 }"
                      @click="handlePrev(step.images)"
                    >
                      <span
                        class="px-4 py-2 w-full h-full bg-white rounded-lg flex items-center justify-center"
                      >
                        prev
                      </span>
                    </button>
                    <button
                      class="bg-gradient-to-r from-sky-600 to-amber-500 rounded-lg flex items-center justify-center p-[2px]"
                      :class="{ 'opacity-50 cursor-not-allowed': step.images?.length === 1 }"
                      @click="handleNext(step.images)"
                    >
                      <span
                        class="px-4 py-2 w-full h-full bg-white rounded-lg flex items-center justify-center"
                      >
                        next
                      </span>
                    </button>
                  </div>
                </div>

                <div
                  v-else
                  class="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl flex items-center justify-center"
                >
                  <div class="text-center p-8">
                    <div
                      class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Icon :name="step.icon" size="24" />
                    </div>
                    <p class="text-gray-600">{{ step.imagePlaceholder }}</p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Visual -->
    <section
      class="timeline__section py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white overflow-x-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="timeline__title text-4xl mb-4 opacity-0 translate-x-[-100px] transition-all duration-500"
          >
            Your Journey to Success
          </h2>
          <p
            class="timeline__description text-xl text-blue-200 opacity-0 translate-x-[100px] transition-all duration-500"
          >
            From showroom to IPO - we support you every step
          </p>
        </div>
        <div class="timeline__list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="step in steps"
            :key="step.number"
            class="timeline__item text-center group cursor-pointer opacity-0 translate-y-10 transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl mx-auto mb-3 border-2 border-white/30 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-300 group-hover:scale-105"
            >
              {{ step.number }}
            </div>
            <p
              class="text-sm text-blue-200 group-hover:text-white transition-all duration-300 group-hover:scale-105"
            >
              {{ step.title }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta__section py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="cta__content opacity-0 translate-y-10 transition-all duration-500">
          <h2 class="text-4xl text-gray-900 mb-6">Ready to Start Your Investment Journey?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Contact Dr. Frank Lin to discuss which step is right for your business
          </p>
          <a
            :href="`${pathUrl}contact`"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20"
          >
            Schedule a Consultation
            <Icon name="arrow_forward" size="20" class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
