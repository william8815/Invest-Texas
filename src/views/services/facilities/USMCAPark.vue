<script setup>
import { ref, onMounted, onUnmounted, toRaw } from "vue";
import { useRouter } from "vue-router";
import { useSeoMeta, useHead } from "@unhead/vue";
const router = useRouter();
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

// SEO Meta
useSeoMeta({
  title: "USMCA Park - 480 Acres Development with FTZ 171 on Highway 69 | InvesTexas",
  description:
    "480 acres Texas development on Interstate Hwy 69 with school district, gas station, and US FTZ 171. Land from $250k/acre. 20mi to Houston Airport, 40mi to Port. Pan-American Highway access.",
  keywords:
    "USMCA Park, 480 acres Texas, Highway 69 development, FTZ 171, Texas land sale, Pan-American Highway, Houston Airport 20 miles, Houston Port 40 miles, Texas industrial park, 4D AI Green Construction",

  // Open Graph
  ogTitle: "USMCA Park - 480 Acres on Highway 69 with FTZ 171",
  ogDescription:
    "Future Utopia for Business & Life. 480 acres with school, gas station built-in. Highway 69 access, 20mi to airport, 40mi to port. Land from $250k/acre.",
  ogImage:
    "https://images.unsplash.com/photo-1649206349711-74ec8951dbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "USMCA Park - 480 Acres Texas Development on Highway 69",
  twitterDescription:
    "School district & gas station built-in. FTZ 171, Pan-American Highway, 20mi to airport, 40mi to port. From $250k/acre.",
  twitterImage:
    "https://images.unsplash.com/photo-1649206349711-74ec8951dbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",

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
        name: "USMCA Park",
        description:
          "480 acres Golden Property development on Interstate Highway 69 with school district, gas station, and US Foreign Trade Zone 171 reservation. Future Utopia for Business & Life with 4D AI Green Construction.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cross USA Hwy 69",
          addressRegion: "Texas",
          addressCountry: "US",
        },
        url: "http://www.USMCAPARK.US",
        geo: {
          "@type": "GeoCoordinates",
          description: "Located on Interstate Highway 69 in Texas",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "New School District",
            value: "80 acres",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Gas Station & Store",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Highway 69 Frontage",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Pan-American Highway Access",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "US Foreign Trade Zone 171",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "4D AI Green Construction",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Airport Proximity",
            value: "20 miles to Houston International Airport",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Seaport Proximity",
            value: "40 miles to Houston Ocean Port",
          },
        ],
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Total Size",
            value: "480 acres",
          },
          {
            "@type": "PropertyValue",
            name: "Developed Area",
            value: "80 acres with school district and gas station",
          },
          {
            "@type": "PropertyValue",
            name: "Available for Development",
            value: "400 acres",
          },
          {
            "@type": "PropertyValue",
            name: "Highway Access",
            value: "Interstate Hwy 69 - Cross USA Highway (West to East, Ocean to Ocean)",
          },
          {
            "@type": "PropertyValue",
            name: "Continental Connection",
            value: "Pan-American Highway System (Canada to Argentina)",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "USMCA Park Land Development",
        description:
          "480 acres prime Texas land on Highway 69 with FTZ 171 designation, school district, and complete infrastructure",
        offers: [
          {
            "@type": "Offer",
            name: "Land Sale",
            price: "250000",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "250000",
              priceCurrency: "USD",
              unitText: "per acre",
              minPrice: "250000",
            },
          },
          {
            "@type": "Offer",
            name: "Land Rental",
            price: "1000",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "1000",
              priceCurrency: "USD",
              unitText: "per acre per month",
              minPrice: "1000",
            },
          },
          {
            "@type": "Offer",
            name: "Custom Building",
            description: "Custom building services available at market price",
          },
        ],
        category: "Industrial Park Development",
        brand: {
          "@type": "Brand",
          name: "InvesTexas",
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
            name: "What is the size of USMCA Park?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "USMCA Park is 480 acres total. 80 acres have been developed with a new school district and gas station, while 400 acres are available for future business and life development.",
            },
          },
          {
            "@type": "Question",
            name: "Where is USMCA Park located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "USMCA Park is located on Cross USA Highway 69 in Texas. It has direct access to Interstate Hwy 69, which connects to the Pan-American Highway System spanning from Canada to Argentina. It's 20 miles from Houston International Airport and 40 miles from Houston Ocean Port.",
            },
          },
          {
            "@type": "Question",
            name: "What is the land price at USMCA Park?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Land sale starts from $250,000 per acre. Land rental is available from $1,000 per acre per month. Custom building services are also available at market price.",
            },
          },
          {
            "@type": "Question",
            name: "What is US Foreign Trade Zone 171?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "USMCA Park has US FTZ 171 reservation, which provides significant customs and tax benefits for international trade operations. This designation allows businesses to defer, reduce, or eliminate customs duties on imported goods.",
            },
          },
          {
            "@type": "Question",
            name: "What transportation access does USMCA Park have?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "USMCA Park has tri-modal transportation access: 1) Interstate Highway 69 (Cross USA Highway and Pan-American Highway System), 2) 20 miles to Houston International Airport for global air connectivity, and 3) 40 miles to Houston Ocean Port for worldwide ocean shipping.",
            },
          },
        ],
      }),
    },
  ],
});

// images
import facility2_1 from "@/assets/images/facilities/facility2_1.png";
import facility2_2 from "@/assets/images/facilities/facility2_2.png";
import facility2_3 from "@/assets/images/facilities/facility2_3.png";
import facility2_4 from "@/assets/images/facilities/facility2_4.png";
import facility2_5 from "@/assets/images/facilities/facility2_5.png";
import facility2_6 from "@/assets/images/facilities/facility2_6.png";
import facility2_7 from "@/assets/images/facilities/facility2_7.png";
import facility2_8 from "@/assets/images/facilities/facility2_8.png";
import facility2_9 from "@/assets/images/facilities/facility2_9.png";

// Hero 圖片載入狀態
const heroImageLoaded = ref(false);

// 根據 aspect ratio 計算容器寬度
const getImageWidth = (aspect, fixHeight = 300) => {
  if (!aspect) return fixHeight;
  const [width, height] = aspect.split("/").map(Number);
  const ratio = width / height;
  return Math.round(fixHeight * ratio);
};

const facilities = ref({
  "usmca-park": {
    title: "USMCA Park",
    tagline:
      "480 acres Development with School, Gas Station , Store Built-in and US FTZ 171 Reservation",
    location: "Cross USA Hwy 69, Texas",
    website: "www.USMCAPARK.US",
    heroImage:
      "https://images.unsplash.com/photo-1649206349711-74ec8951dbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXhhcyUyMGFlcmlhbCUyMHZpZXclMjBpbmR1c3RyaWFsJTIwcGFya3xlbnwxfHx8fDE3NjQxNjY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "80 acres New School District & Gas Store have been in USMCA Park which is on Cross USA Hwy 69. 400 acres Golden Property Development to be the Future Utopia for Biz & Life. 4D AI Green Construction Idea will be applied to this Future Biz & Life Utopia Development.Subject Property has following Features: 1. Access  to Interstate Hwy 69 which connect to all US West to East, Ocean to Ocean Highway, to support US National-Wide Highway Transportation. 2. Hwy 69 is conneted to Pan-America Highway System which is from Canada to Argentina to support Whole American Continental Highway Transportation. 3. Subject Property is only about 20 miles to Houston International Airport to support Air Transportation to the Whole World. 4. Subject Property is only about 40 miles to Houston Ocean Port to support Ocean Transportation to the Whole World.USMCA Park is located on Cross USA Hwy 69, it connect to Pan-America Highway and nearby Houston Ocean Port. USMCA Park is located nearby both International Airport & Ocean Port to support Global Transportation. USMCA PARK  can support Investor not only Marketing across USA, but also to the World",
    highlights: [
      "480 acres Golden Property - Future Utopia for Business & Life",
      "80 acres already developed with New School District & Gas Store",
      "Located on Interstate Hwy 69 - Cross USA Highway (West to East, Ocean to Ocean)",
      "Connected to Pan-American Highway System spanning Canada to Argentina",
      "20 miles to Houston International Airport - Global air connectivity",
      "40 miles to Houston Ocean Port - Worldwide ocean shipping access",
      "4D AI Green Construction technology for sustainable development",
    ],
    pricing: [
      { item: "Land Sale", price: "From $250,000/acre" },
      { item: "Land Rental", price: "From $1,000/acre/month" },
      { item: "Custom Building", price: "Market Price" },
    ],
    features: [
      "New School District (80 acres)",
      "Gas Station & Store Built-in",
      "Highway 69 Frontage",
      "Pan-American Highway Access",
      "Airport & Seaport Proximity",
      "US Foreign Trade Zone 171",
      "4D AI Green Construction",
      "Utilities Infrastructure",
      "Future Residential Development",
      "Business Park Zoning",
    ],
    images: [
      {
        url: facility2_1,
        alt: "facility2_1",
        aspect: "853/363",
        imageLoaded: false,
        active: true,
      },
      {
        url: facility2_2,
        alt: "facility2_2",
        aspect: "172/133",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility2_3,
        alt: "facility2_3",
        aspect: "158/107",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility2_4,
        alt: "facility2_4",
        aspect: "599/339",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility2_5,
        alt: "facility2_5",
        aspect: "164/147",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility2_6,
        alt: "facility2_6",
        aspect: "697/899",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility2_7,
        alt: "facility2_7",
        aspect: "739/439",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility2_8,
        alt: "facility2_8",
        aspect: "595/372",
        imageLoaded: false,
        active: false,
      },
      {
        url: facility2_9,
        alt: "facility2_9",
        aspect: "38/27",
        imageLoaded: false,
        active: false,
      },
    ],
  },
});

const facility = ref({});
facility.value = facilities.value["usmca-park"];

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
            @click.prevent="router.go(-1)"
            class="inline-flex items-center text-white mb-6 hover:text-sky-200 transition-colors"
          >
            <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
            Back to Overview
          </a>
          <div class="hero__content opacity-0 translate-y-10 transition-all duration-500">
            <h1 class="text-5xl md:text-6xl text-white mb-4">
              {{ facility.title }}
            </h1>
            <p class="text-xl text-sky-100 mb-4">{{ facility.tagline }}</p>
            <div class="flex items-center space-x-4 text-sky-100">
              <span class="flex items-center">
                <Icon name="map_pin" size="16" class="mr-2" />
                {{ facility.location }}
              </span>
              <span>•</span>
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
                  class="highlights__item flex items-start space-x-3"
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
                    :style="{ width: `${getImageWidth(image.aspect, 300)}px` }"
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
                          <Icon name="map_pin" size="16" class="text-gray-400" />
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
