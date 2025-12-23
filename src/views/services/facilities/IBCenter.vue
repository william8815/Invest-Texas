<script setup>
import { ref, onMounted, onUnmounted, toRaw } from "vue";
import { useRouter } from "vue-router";
import { useSeoMeta, useHead } from "@unhead/vue";
const router = useRouter();

import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

// SEO Meta
useSeoMeta({
  title: "International Biz Center - 60,000 sqft Houston Wholesale Facility | InvesTexas",
  description:
    "60,000 sqft landmark building on Harwin Drive, Houston's largest wholesale area. Showroom from $250/mo, Virtual Office $99/mo. 38 years experience, FTZ member, national sales support.",
  keywords:
    "International Biz Center, Houston wholesale, Harwin Drive, 60000 sqft facility, wholesale showroom Houston, office rental Houston, virtual office $99, FTZ member, Houston business center, Texas wholesale district",

  // Open Graph
  ogTitle: "International Biz Center - Houston's Premier Wholesale Facility",
  ogDescription:
    "60,000 sqft on Harwin Drive. Showroom $250/mo, Virtual Office $99/mo. Landmark building with 38 years FTZ expertise and national sales support.",
  ogImage:
    "https://images.unsplash.com/photo-1726802147453-a3c55327e1ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "International Biz Center - 60,000 sqft Houston Wholesale Hub",
  twitterDescription:
    "Premier wholesale facility on Harwin Drive. From $99/mo virtual office to full showroom spaces. 38 years experience.",
  twitterImage:
    "https://images.unsplash.com/photo-1726802147453-a3c55327e1ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",

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
        "@type": "Place",
        name: "International Biz Center",
        description:
          "60,000 sqft landmark building at the center of Houston's largest wholesale area on Harwin Drive. Offering wholesale showroom, office spaces, and national-wide sales support.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Harwin Drive",
          addressLocality: "Houston",
          addressRegion: "Texas",
          addressCountry: "US",
        },
        url: "http://www.InternationalBizCenter.com",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Wholesale Showroom Space",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Private Office Spaces",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Retail Store Fronts",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Multimedia Facilities",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "US Foreign Trade Zone Access",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "High-Speed Internet",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Security Systems",
            value: true,
          },
        ],
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Size",
            value: "60,000 sqft",
          },
          {
            "@type": "PropertyValue",
            name: "Location Type",
            value: "Landmark building on Harwin Drive",
          },
          {
            "@type": "PropertyValue",
            name: "Experience",
            value: "38 years in International Business",
          },
          {
            "@type": "PropertyValue",
            name: "FTZ Status",
            value: "Regular/Active member of US Foreign Trade Zone",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Offer",
        name: "International Biz Center Office & Showroom Rental",
        description: "Flexible office and showroom spaces in Houston's premier wholesale district",
        priceSpecification: [
          {
            "@type": "UnitPriceSpecification",
            name: "Showroom Office Rental",
            price: "250",
            priceCurrency: "USD",
            unitText: "per month",
            minPrice: "250",
          },
          {
            "@type": "UnitPriceSpecification",
            name: "Virtual Office",
            price: "99",
            priceCurrency: "USD",
            unitText: "per month",
            minPrice: "99",
          },
          {
            "@type": "UnitPriceSpecification",
            name: "Multimedia Showroom Space",
            price: "50",
            priceCurrency: "USD",
            unitText: "per 27 cuft per month",
          },
        ],
        seller: {
          "@type": "Organization",
          name: "InvesTexas",
        },
        areaServed: {
          "@type": "City",
          name: "Houston",
          containedIn: {
            "@type": "State",
            name: "Texas",
          },
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is International Biz Center located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "International Biz Center is located on Harwin Drive in Houston, Texas, at the center of Houston's largest wholesale area. It's a landmark building with 3-side street access.",
            },
          },
          {
            "@type": "Question",
            name: "What is the size of the facility?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The facility is 60,000 square feet, offering wholesale showroom space, private offices, retail store fronts, and multimedia facilities.",
            },
          },
          {
            "@type": "Question",
            name: "What are the rental prices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Showroom Office Rental starts from $250/month, Virtual Office from $99/month, and Multimedia Showroom Space is $50 per 27 cubic feet per month.",
            },
          },
          {
            "@type": "Question",
            name: "What makes International Biz Center special?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It's a landmark building featured in Yelp magazine, located at the center of Harwin Wholesale District. Sinopac has 38 years of international business experience and is a Regular/Active member of the US Foreign Trade Zone, providing national-wide sales support.",
            },
          },
        ],
      }),
    },
  ],
});

// images
import facility1_1 from "@/assets/images/facilities/facility1_1.png";
import facility1_2 from "@/assets/images/facilities/facility1_2.png";
import facility1_3 from "@/assets/images/facilities/facility1_3.jpg";
import facility1_4 from "@/assets/images/facilities/facility1_4.png";

// Hero 圖片載入狀態
const heroImageLoaded = ref(false);

const facilities = ref({
  "international-biz-center": {
    title: "International Biz Center",
    tagline: "60,000 sqft @ Center of Houston Wholesale Area",
    location: "Harwin Drive, Houston, Texas",
    website: "www.InternationalBizCenter.com",
    heroImage:
      "https://images.unsplash.com/photo-1726802147453-a3c55327e1ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGhvdXN0b258ZW58MXx8fHwxNzY0MTY2OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Houston is the largest city in Texas, Harwin Drive is the largest Wholesale Area in Houston. Subject Facility offer Wholesale Showroom, Office & Stores plus support National wide sales. International Biz Center is the Landmark on Harwin Drive, as per magazine yelp report.",
    highlights: [
      "Located at the center of Harwin Wholesale District with 3-side Street Surrounded",
      "Landmark building featured in Yelp magazine",
      "Sinopac has been serving in International Biz 38 years as a Regular/Active member of US Foreign Trade Zone",
      "National-wide sales support infrastructure",
      "Easy access from major highways",
    ],
    pricing: [
      { item: "Showroom Office Rental", price: "From $250/month" },
      { item: "Virtual Office", price: "From $99/month" },
      { item: "Multimedia Showroom Space", price: "$50 per 27 cuft/month" },
    ],
    features: [
      "Wholesale Showroom Space",
      "Private Office Spaces",
      "Retail Store Fronts",
      "Multimedia Facilities",
      "Conference Rooms",
      "Loading Docks",
      "Ample Parking",
      "Security Systems",
      "High-Speed Internet",
      "US Foreign Trade Zone Access",
    ],
    // 圖片區
    images: [
      {
        url: facility1_1,
        alt: "facility1_1",
        aspect: "799/378",
        imageLoaded: false,
        active: true,
      },
      {
        url: facility1_2,
        alt: "facility1_2",
        aspect: "1013/419",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility1_3,
        alt: "facility1_3",
        aspect: "697/446",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility1_4,
        alt: "facility1_4",
        aspect: "931/726",
        imageLoaded: false,
        active: false,
      },
    ],
  },
});

const facility = ref({});
facility.value = facilities.value["international-biz-center"];

// 根據 aspect ratio 計算容器寬度（固定高度 300px）
const getImageWidth = (aspect, fixHeight = 300) => {
  if (!aspect) return fixHeight;
  const [width, height] = aspect.split("/").map(Number);
  const ratio = width / height;
  return Math.round(fixHeight * ratio); // 高度固定 300px，寬度 = 300 * 寬高比
};

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

  // Description Section
  const descriptionAbout = document.querySelector(".description__about");
  const descriptionAboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let title = entry.target.querySelector(".about__title");
        let description = entry.target.querySelector(".about__description");
        title.classList.remove("opacity-0", "translate-y-10");
        title.classList.add("opacity-100", "translate-y-0");
        setTimeout(() => {
          description.classList.remove("opacity-0", "translate-y-10");
          description.classList.add("opacity-100", "translate-y-0");
        }, 200);
        descriptionAboutObserver.unobserve(entry.target);
      }
    });
  }, options);
  descriptionAboutObserver.observe(descriptionAbout);

  const descriptionHighlights = document.querySelector(".description__highlights");
  const descriptionHighlightsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let title = entry.target.querySelector(".highlights__title");
        let list = entry.target.querySelector(".highlights__list");
        title.classList.remove("opacity-0", "translate-y-10");
        title.classList.add("opacity-100", "translate-y-0");
        setTimeout(() => {
          list.classList.remove("opacity-0", "translate-y-10");
          list.classList.add("opacity-100", "translate-y-0");
        }, 200);
        descriptionHighlightsObserver.unobserve(entry.target);
      }
    });
  }, options);
  descriptionHighlightsObserver.observe(descriptionHighlights);

  const descriptionFeatures = document.querySelector(".description__features");
  const descriptionFeaturesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let title = entry.target.querySelector(".features__title");
        let items = entry.target.querySelectorAll(".features__item");
        title.classList.remove("opacity-0", "translate-y-10");
        title.classList.add("opacity-100", "translate-y-0");
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.classList.remove("opacity-0", "translate-y-10");
          item.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            item.style.transitionDelay = "0s";
          }, 500);
        });
        descriptionFeaturesObserver.unobserve(entry.target);
      }
    });
  }, options);
  descriptionFeaturesObserver.observe(descriptionFeatures);

  const descriptionImages = document.querySelector(".description__images");
  const descriptionImagesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let title = entry.target.querySelector(".images__title");
        let list = entry.target.querySelector(".images__list");
        title.classList.remove("opacity-0", "translate-y-10");
        title.classList.add("opacity-100", "translate-y-0");
        list.classList.remove("opacity-0");
        list.classList.add("opacity-100");
        descriptionImagesObserver.unobserve(entry.target);
      }
    });
  }, options);
  descriptionImagesObserver.observe(descriptionImages);

  // Pricing Section
  const pricingCard = document.querySelector(".pricing__card");
  const pricingCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[50px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        pricingCardObserver.unobserve(entry.target);
      }
    });
  }, options);
  pricingCardObserver.observe(pricingCard);

  // Info Card Section
  const infoCard = document.querySelector(".info__card");
  const infoCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[50px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
      }
    });
  }, options);
  infoCardObserver.observe(infoCard);

  // CTA Section
  const ctaContent = document.querySelector(".cta__content");
  const ctaContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, options);
  ctaContentObserver.observe(ctaContent);

  // 初始化圖片滾動陰影
  initScrollShadow();
});

// 圖片滾動容器的陰影狀態
const imagesWrapperRef = ref(null);
const imagesListRef = ref(null);
const showLeftShadow = ref(false);
const showRightShadow = ref(true);
const handleImagesScroll = () => {
  if (!imagesListRef.value) return;
  const { scrollLeft, scrollWidth, clientWidth } = imagesListRef.value;

  // 左邊有內容可滾動
  showLeftShadow.value = scrollLeft > 0;
  // 右邊有內容可滾動（留一點緩衝）
  showRightShadow.value = scrollLeft < scrollWidth - clientWidth - 1;
};

const initScrollShadow = () => {
  if (imagesListRef.value) {
    handleImagesScroll();
  }
};

onUnmounted(() => {
  // 清理事件監聽（如果需要）
});

const activeIndex = ref(0);
const handlePrev = () => {
  if (activeIndex.value === 0) return;
  facility.value.images[activeIndex.value].active = false;
  facility.value.images[activeIndex.value - 1].active = true;
  activeIndex.value--;
  // 讓容器水平滾動至 active image 的索引位置
  let imagesWrapper = toRaw(imagesWrapperRef.value);
  let imageList = toRaw(imagesListRef.value);
  let activeElement = imageList.querySelectorAll(".image__item")[activeIndex.value];
  let wrapperRect = imagesWrapper.getBoundingClientRect();
  let itemRect = activeElement.getBoundingClientRect();
  console.log(activeElement);

  // 讓容器水平滾動至 active image 的索引位置
  imageList?.scrollBy({
    left: itemRect.left - wrapperRect.left,
    behavior: "smooth",
  });
};
const handleNext = () => {
  if (activeIndex.value === facility.value.images.length - 1) return;
  facility.value.images[activeIndex.value].active = false;
  facility.value.images[activeIndex.value + 1].active = true;
  activeIndex.value++;
  let imagesWrapper = toRaw(imagesWrapperRef.value);
  let imageList = toRaw(imagesListRef.value);
  let activeElement = imageList.querySelectorAll(".image__item")[activeIndex.value];
  let wrapperRect = imagesWrapper.getBoundingClientRect();
  let itemRect = activeElement.getBoundingClientRect();

  // 讓容器水平滾動至 active image 的索引位置
  imageList?.scrollBy({
    left: itemRect.left - wrapperRect.left,
    behavior: "smooth",
  });
};

// image viewer
import ImageViewer from "@/components/ImageViewer.vue";
const showImageViewer = ref(false);
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section class="hero__section relative h-96 overflow-hidden">
      <!-- Hero Skeleton -->
      <div
        v-if="!heroImageLoaded"
        class="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"
      ></div>
      <!-- Hero Image -->
      <img
        :src="facility.heroImage"
        :alt="facility.title"
        loading="lazy"
        class="w-full h-full object-cover transition-opacity duration-500"
        :class="heroImageLoaded ? 'opacity-100' : 'opacity-0'"
        @load="heroImageLoaded = true"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-sky-800/70" />

      <div class="absolute inset-0 flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a
            :href="`${pathUrl}/services-overview`"
            class="inline-flex items-center text-white mb-6 hover:text-sky-200 transition-colors"
            @click.prevent="router.go(-1)"
          >
            <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
            Back to Overview
          </a>
          <div class="hero__content opacity-0 translate-y-10 transition-all duration-500">
            <h1 class="text-5xl md:text-6xl text-white mb-4">
              {{ facility.title }}
            </h1>
            <p class="text-xl text-sky-100 mb-4">{{ facility.tagline }}</p>
            <div class="flex md:items-center flex-col md:flex-row text-sky-100">
              <span class="flex items-center">
                <Icon name="map_pin" size="16" class="mr-2" />
                {{ facility.location }}
              </span>
              <a
                :href="`http://${facility.website}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center hover:text-white transition-colors"
              >
                <Icon name="lang" size="16" class="mr-2" />
                {{ facility.website }}
                <Icon name="link_external" size="16" class="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section
      class="description__section py-20 bg-transparent overflow-x-hidden lg:overflow-x-visible"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <div class="description__about">
              <h2
                class="about__title text-3xl text-gray-900 mb-6 opacity-0 translate-y-10 transition-all duration-500"
              >
                About This Facility
              </h2>
              <p
                class="about__description text-lg text-gray-700 leading-relaxed mb-8 opacity-0 translate-y-10 transition-all duration-500"
              >
                {{ facility.description }}
              </p>
            </div>
            <div class="description__highlights">
              <h3
                class="highlights__title text-2xl text-gray-900 mb-6 opacity-0 translate-y-10 transition-all duration-500"
              >
                Key Highlights
              </h3>
              <div
                class="highlights__list space-y-4 mb-12 opacity-0 translate-y-10 transition-all duration-500"
              >
                <div
                  v-for="(highlight, index) in facility.highlights"
                  :key="index"
                  class="flex items-start space-x-3"
                >
                  <Icon name="check" size="16" class="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <p class="text-gray-700">{{ highlight }}</p>
                </div>
              </div>
            </div>
            <div class="description__features">
              <h3
                class="features__title text-2xl text-gray-900 mb-6 opacity-0 translate-y-10 transition-all duration-500"
              >
                Features & Amenities
              </h3>
              <div class="features__list grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div
                  v-for="(feature, index) in facility.features"
                  :key="index"
                  class="features__item flex items-center space-x-2 p-3 bg-sky-100 rounded-lg opacity-0 translate-y-10 transition-all duration-500"
                >
                  <div class="w-2 h-2 bg-sky-600 rounded-full flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
            </div>
            <div class="description__images">
              <h3
                class="images__title text-2xl text-gray-900 mb-6 opacity-0 translate-y-10 transition-all duration-500"
              >
                Reference Images
              </h3>
              <!-- 圖片滾動容器（含陰影提示） -->
              <div ref="imagesWrapperRef" class="images__wrapper relative">
                <!-- 左側陰影 -->
                <div
                  class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-sky-50 to-transparent pointer-events-none z-10 transition-opacity duration-300"
                  :class="showLeftShadow ? 'opacity-100' : 'opacity-0'"
                ></div>
                <!-- 右側陰影 -->
                <div
                  class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-sky-50 to-transparent pointer-events-none z-10 transition-opacity duration-300"
                  :class="showRightShadow ? 'opacity-100' : 'opacity-0'"
                ></div>
                <!-- 圖片列表 -->
                <div
                  ref="imagesListRef"
                  class="images__list flex flex-nowrap overflow-x-auto scrollbar-hide opacity-0 transition-all duration-500"
                  @scroll="handleImagesScroll"
                >
                  <div
                    v-for="(image, index) in facility.images"
                    :key="index"
                    class="image__item h-[200px] lg:h-[300px] flex-shrink-0 px-2 relative"
                    :class="`w-[${getImageWidth(image.aspect, 200)}px] lg:w-[${getImageWidth(image.aspect, 300)}px]`"
                  >
                    <!-- Skeleton -->
                    <div
                      v-if="!image.imageLoaded"
                      class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-lg flex items-center justify-center mx-2"
                    >
                      <div class="text-center">
                        <div
                          class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <Icon name="buildings" size="16" class="text-gray-400" />
                        </div>
                        <p class="text-gray-400 text-xs">Loading...</p>
                      </div>
                    </div>
                    <!-- 實際圖片 -->
                    <img
                      :src="image.url"
                      :alt="image.alt"
                      loading="lazy"
                      class="w-full h-full object-contain transition-opacity duration-500"
                      :class="image.imageLoaded ? 'opacity-100' : 'opacity-0'"
                      @load="image.imageLoaded = true"
                    />
                  </div>
                </div>
              </div>
              <!-- prev and next button -->
              <div
                v-if="facility.images?.length > 1"
                class="flex items-center justify-between gap-4 mt-4"
              >
                <div class="flex items-center gap-4">
                  <button
                    class="bg-gradient-to-r from-sky-700 to-sky-500 rounded-lg flex items-center justify-center p-[2px] disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-opacity duration-300"
                    :disabled="activeIndex === 0"
                    @click="handlePrev()"
                  >
                    <span
                      class="px-4 py-2 w-full h-full bg-white rounded-lg flex items-center justify-center"
                    >
                      <Icon name="arrow_down" size="24" class="rotate-90" />
                    </span>
                  </button>
                  <button
                    class="bg-gradient-to-r from-sky-700 to-sky-500 rounded-lg flex items-center justify-center p-[2px] disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-opacity duration-300"
                    :disabled="activeIndex === facility.images?.length - 1"
                    @click="handleNext()"
                  >
                    <span
                      class="px-4 py-2 w-full h-full bg-white rounded-lg flex items-center justify-center"
                    >
                      <Icon name="arrow_down" size="24" class="rotate-[-90deg]" />
                    </span>
                  </button>
                </div>
                <button
                  class="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-sky-700 to-sky-500 text-white rounded-lg hover:from-sky-800 hover:to-sky-600 transition-all shadow-lg shadow-sky-500/20 group"
                  @click="showImageViewer = true"
                >
                  <Icon name="eye" size="24" />
                  <span>View Image</span>
                </button>
              </div>

              <!-- image viewer -->
              <div>
                <ImageViewer
                  :images="facility.images"
                  v-model:visible="showImageViewer"
                  :initial-index="activeIndex"
                />
              </div>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-[100px]">
              <div
                class="pricing__card bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-2xl border border-sky-200 opacity-0 translate-x-[50px] transition-all duration-500"
              >
                <h3 class="text-2xl text-gray-900 mb-6 flex items-center">
                  <Icon name="dollar" size="16" class="w-6 h-6 mr-2 text-sky-600" />
                  Pricing
                </h3>
                <div class="space-y-4 mb-8">
                  <div
                    v-for="(price, index) in facility.pricing"
                    :key="index"
                    class="bg-white p-4 rounded-lg"
                  >
                    <div class="text-sm text-gray-600 mb-1">{{ price.item }}</div>
                    <div class="text-xl text-sky-600">{{ price.price }}</div>
                  </div>
                </div>

                <a
                  href="/contact"
                  class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-700 to-sky-500 text-white rounded-lg hover:from-sky-800 hover:to-sky-600 transition-all shadow-lg shadow-sky-500/20"
                >
                  Schedule a Tour
                  <Icon name="arrow_forward" size="16" class="ml-2 w-5 h-5" />
                </a>
              </div>

              <div
                class="info__card mt-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 opacity-0 translate-x-[50px] transition-all duration-500"
              >
                <h4 class="text-lg text-gray-900 mb-4">Need More Information?</h4>
                <p class="text-sm text-gray-600 mb-4">
                  Contact Dr. Frank Lin for a personalized tour and detailed pricing.
                </p>
                <div class="space-y-2 text-sm">
                  <a
                    href="mailto:Contact@InvesTexas.com"
                    class="text-sky-600 hover:text-sky-700 block"
                  >
                    Contact@InvesTexas.com
                  </a>
                  <a href="tel:+17137833122" class="text-sky-600 hover:text-sky-700 block">
                    +1-713-783-3122
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta__section py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="cta__content opacity-0 translate-y-10 transition-all duration-500">
          <h2 class="text-4xl mb-6">Ready to Get Started?</h2>
          <p class="text-xl text-sky-600 mb-8">Schedule a visit to see this facility in person</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-700 to-sky-500 text-white rounded-lg hover:from-sky-800 hover:to-sky-600 transition-all shadow-lg shadow-sky-500/20 group"
            >
              Schedule a Visit
            </a>
            <a
              href="/pricing"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
            >
              View All Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
/* 隱藏 scrollbar 但保留滾動功能 */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
