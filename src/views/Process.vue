<script setup>
import { ref, onMounted, onUnmounted, toRaw } from "vue";
import { useSeoMeta, useHead } from "@unhead/vue";
import DefaultLayout from "@/layouts/default.vue";
import ImageSlider from "@/components/ImageSlider.vue";
// config
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;
// components
import Icon from "@/components/base/Icon.vue";

// SEO Meta
useSeoMeta({
  title: "Investment Process - From Showroom to IPO in 6 Steps | InvesTexas",
  description:
    "Complete investment journey: Product showroom, 60,000 sqft office space, pilot production support, custom factory building, brand marketing (38 years exp), and Nasdaq IPO support with NY finance partners.",
  keywords:
    "investment process Texas, showroom Houston, pilot production USA Mexico, Made in USA factory, brand marketing, IPO support, Nasdaq listing, Texas business setup, 60000 sqft facility, New York finance partners",

  // Open Graph
  ogTitle: "Investment Process - Complete Support from Showroom to IPO",
  ogDescription:
    "6 strategic steps to establish your business in Texas: Showroom → Office → Pilot Production → Factory → Brand Marketing → IPO. 38 years experience, NY finance partners.",
  ogImage: "https://via.placeholder.com/1200x630?text=Investment+Process",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "6-Step Investment Process - Showroom to Nasdaq IPO",
  twitterDescription:
    "Complete business setup in Texas: 60,000 sqft facility, pilot production, custom factory, brand marketing, and IPO support.",
  twitterImage: "https://via.placeholder.com/1200x630?text=Investment+Process",

  // Additional SEO
  robots: "index, follow",
  author: "InvesTexas",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Investment Process in Texas - From Showroom to IPO",
        description:
          "Six strategic steps to establish and grow your business in Texas, from initial showroom to going public on Nasdaq.",
        totalTime: "P12M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Product Showroom with Market Survey",
            text: "Start with Showroom in USMCA. We have Showroom with Multimedia Facility and offer Free Promotion to all Harwin International Wholesalers. Market Survey across USA supported by Sinopac VP Felix Fu.",
            itemListElement: [
              {
                "@type": "HowToDirection",
                text: "Showroom with Multimedia Facility",
              },
              {
                "@type": "HowToDirection",
                text: "Free Promotion to Harwin International Wholesalers",
              },
              {
                "@type": "HowToDirection",
                text: "Market Survey across USA",
              },
            ],
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Showroom Office - Start Product Sale & Setup Company",
            text: "60,000 sq. ft. Building on 3.8 acres City Block at Center of Harwin Wholesale District. Office Space at reasonable price with Excellent Company Operation Consultancy by Dr. Lin.",
            itemListElement: [
              {
                "@type": "HowToDirection",
                text: "60,000 sq. ft. Building on 3.8 acres",
              },
              {
                "@type": "HowToDirection",
                text: "Center of Harwin Wholesale District",
              },
              {
                "@type": "HowToDirection",
                text: "Expert consultancy by Dr. Lin",
              },
            ],
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Pilot Run Operation Support - Test Production",
            text: "50,000 sqft Manufacturing Floor Space + 120,000 sqft Outlet Show Space. Test production in USA or Mexico with only One Engineer needed.",
            itemListElement: [
              {
                "@type": "HowToDirection",
                text: "50,000 sqft Manufacturing Floor Space",
              },
              {
                "@type": "HowToDirection",
                text: "120,000 sqft Outlet Show Space",
              },
              {
                "@type": "HowToDirection",
                text: "Full support for pilot production",
              },
            ],
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Finance to Build Factory - Start Made in USA",
            text: "Strong Construction Team to build Custom Facility. Chief Architect GREG SHENG has strong engineering background for tailored facility design.",
            itemListElement: [
              {
                "@type": "HowToDirection",
                text: "Custom Building to fit your needs",
              },
              {
                "@type": "HowToDirection",
                text: "Strong Construction Team",
              },
              {
                "@type": "HowToDirection",
                text: "Chief Architect: GREG SHENG",
              },
            ],
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Pool Brand Marketing - Increase Company Profit",
            text: "38 years International Marketing experience. Brand Name Sales development with After Sale Service. Operations in both USA & Mexico alongside Pan-American Highway System.",
            itemListElement: [
              {
                "@type": "HowToDirection",
                text: "38 years International Marketing experience",
              },
              {
                "@type": "HowToDirection",
                text: "Brand Name Sales development",
              },
              {
                "@type": "HowToDirection",
                text: "Operations in both USA & Mexico",
              },
            ],
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Finance & Go Public Support - Including Nasdaq",
            text: "Working with Finance Companies in New York for Finance Loan & Go Public Support. Partners include American Wall Street Listed Group Inc, Cannondale Financial LLC, and Project Master LLC.",
            itemListElement: [
              {
                "@type": "HowToDirection",
                text: "New York Finance Company partnerships",
              },
              {
                "@type": "HowToDirection",
                text: "Property/Finance as Share Partner option",
              },
              {
                "@type": "HowToDirection",
                text: "Special Profit Guaranteed Program",
              },
            ],
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Complete Investment Process Support",
        description:
          "End-to-end support for establishing and growing your business in Texas, from initial showroom to IPO.",
        provider: {
          "@type": "Organization",
          name: "InvesTexas",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Investment Process Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Product Showroom & Market Survey",
                description:
                  "Multimedia facility with free promotion to Harwin International Wholesalers",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "60,000 sq.ft. Office Space",
                description: "Center of Harwin Wholesale District with expert consultancy",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pilot Production Support",
                description: "50,000 sqft manufacturing space in USA or Mexico",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Factory Construction",
                description: "Made in USA facility with expert engineering team",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brand Marketing Services",
                description: "38 years international marketing experience",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "IPO & Finance Support",
                description: "Nasdaq listing support with New York finance partners",
              },
            },
          ],
        },
      }),
    },
  ],
});
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
        class="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-sky-500 to-sky-700 origin-top hidden lg:block transition-all duration-100"
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
                class="w-20 h-20 bg-gradient-to-br from-sky-700 to-sky-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-300 cursor-pointer"
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
                  class="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 lg:hidden"
                >
                  {{ step.number }}
                </div>
                <div
                  class="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-white"
                >
                  <Icon :name="step.icon" size="24" class="text-sky-600" />
                </div>
              </div>

              <div>
                <h3 class="text-3xl text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-xl text-sky-600 mb-4">{{ step.subtitle }}</p>
                <p class="text-gray-700 leading-relaxed mb-6">{{ step.description }}</p>

                <div class="bg-sky-50 p-6 rounded-xl border border-sky-100">
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
              class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl mx-auto mb-3 border-2 border-white/30 group-hover:bg-sky-500 group-hover:border-sky-400 transition-all duration-300 group-hover:scale-105"
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
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-700 to-sky-500 text-white rounded-lg hover:from-sky-800 hover:to-sky-600 transition-all shadow-lg shadow-sky-500/20"
          >
            Schedule a Consultation
            <Icon name="arrow_forward" size="20" class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
