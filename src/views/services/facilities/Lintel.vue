<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useSeoMeta, useHead } from "@unhead/vue";
const router = useRouter();
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

// SEO Meta
useSeoMeta({
  title: "Mexican Facility - Lintel de Mex | Low-Cost Manufacturing & Latin America Gateway",
  description:
    "50,000 sqft manufacturing + 120,000 sqft outlet space in Reynosa, Mexico. Only ONE engineer needed for pilot run. USMCA benefits, $0.35/sqft/month. Perfect for low-cost production & Latin America market access.",
  keywords:
    "Mexico manufacturing, Lintel de Mex, Reynosa facility, USMCA manufacturing, low cost production Mexico, pilot run support, Latin America manufacturing, after-sales service Mexico, Pan-American Highway, Mexico outlet space",

  // Open Graph
  ogTitle: "Lintel de Mex - Low-Cost Manufacturing Facility in Mexico | USMCA Benefits",
  ogDescription:
    "170,000 sqft total space in Reynosa, Mexico. 50k sqft manufacturing + 120k sqft outlet. Only 1 engineer needed. USMCA qualified. $0.35/sqft/month.",
  ogImage:
    "https://images.unsplash.com/photo-1599765824376-a87eb981b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "Lintel de Mex - Mexico Manufacturing Facility with USMCA Benefits",
  twitterDescription:
    "50k sqft manufacturing + 120k sqft outlet in Reynosa. Only 1 engineer for pilot run. USMCA qualified. From $0.35/sqft/month.",
  twitterImage:
    "https://images.unsplash.com/photo-1599765824376-a87eb981b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",

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
        name: "Mexican Facility - Lintel de Mex",
        description:
          "50,000 sqft Manufacturing Floor + 120,000 sqft Outlet Show Space serving Latin American market with comprehensive manufacturing and showroom capabilities.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Reynosa",
          addressRegion: "Tamaulipas",
          addressCountry: "Mexico",
        },
        url: "http://www.Lintelmex.com",
        geo: {
          "@type": "GeoCoordinates",
          description: "Reynosa, Tamaulipas, Mexico - Near US border",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Manufacturing Floor Space",
            value: "50,000 square feet",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Outlet Show Space",
            value: "120,000 square feet",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Pilot Run Capabilities",
            value: "Only ONE engineer needed",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "USMCA Qualified",
            value: "Duty-free US market access",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "US Border Proximity",
            value: "Near US border for easy logistics",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Pan-American Highway Access",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "After-Sales Service Center",
            value: "Full infrastructure support",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Latin Market Gateway",
            value: "Access to Latin American markets",
          },
        ],
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Total Manufacturing Space",
            value: "50,000 sqft",
          },
          {
            "@type": "PropertyValue",
            name: "Total Outlet Space",
            value: "120,000 sqft",
          },
          {
            "@type": "PropertyValue",
            name: "Minimum Staff Required",
            value: "Only ONE engineer for pilot run",
          },
          {
            "@type": "PropertyValue",
            name: "Trade Agreement",
            value: "USMCA qualified for duty-free US access",
          },
          {
            "@type": "PropertyValue",
            name: "Cost Advantage",
            value: "Low-cost manufacturing location",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Manufacturing & Production Support",
        name: "Lintel de Mex Manufacturing Services",
        description:
          "Low-cost manufacturing and pilot run support in Mexico with USMCA benefits and Latin America market access.",
        provider: {
          "@type": "Organization",
          name: "InvesTexas - Lintel de Mex",
        },
        areaServed: [
          {
            "@type": "Place",
            name: "United States",
            description: "USMCA duty-free access",
          },
          {
            "@type": "Place",
            name: "Latin America",
            description: "Regional market gateway",
          },
          {
            "@type": "Place",
            name: "Mexico",
            description: "Local manufacturing base",
          },
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Floor Space Rental",
            price: "0.35",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "0.35",
              priceCurrency: "USD",
              unitText: "per square foot per month",
            },
          },
          {
            "@type": "Offer",
            name: "Pilot Run Support",
            description: "Only ONE engineer needed for pilot run production",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              price: "Negotiable",
            },
          },
          {
            "@type": "Offer",
            name: "After-Sales Service",
            description: "Comprehensive after-sales service infrastructure",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              price: "Negotiable",
            },
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Manufacturing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Low-Cost Manufacturing",
                description: "Cost-effective production in Mexico",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pilot Run Production",
                description: "Test production with minimal staffing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "USMCA Market Access",
                description: "Duty-free access to US market",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Latin America Distribution",
                description: "Gateway to Latin American markets",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Engineering Support",
                description: "Professional engineering assistance",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Quality Control Systems",
                description: "Comprehensive quality assurance",
              },
            },
          ],
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
            name: "What is the size of Lintel de Mex facility?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Lintel de Mex offers 50,000 square feet of manufacturing floor space and 120,000 square feet of outlet show space, totaling 170,000 square feet to serve the Latin American market.",
            },
          },
          {
            "@type": "Question",
            name: "How many staff do I need for pilot run production?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You need only ONE engineer to support pilot run production in our facility. This significantly reduces your initial staffing costs and operational complexity.",
            },
          },
          {
            "@type": "Question",
            name: "What are the USMCA benefits for manufacturing in Mexico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our USMCA-qualified facility provides duty-free access to the US market. This means products manufactured here can enter the United States without import duties, significantly reducing your costs and improving competitiveness.",
            },
          },
          {
            "@type": "Question",
            name: "What is the rental cost for manufacturing space?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Floor space rental is $0.35 per square foot per month. Pilot run support and after-sales service pricing are negotiable based on your specific needs.",
            },
          },
          {
            "@type": "Question",
            name: "Why choose Mexico for manufacturing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Key advantages include: low-cost manufacturing, USMCA benefits for US market access, proximity to US border, gateway to Latin America markets, location alongside Pan-American Highway, comprehensive after-sales service infrastructure, and minimal staffing requirements for pilot runs.",
            },
          },
        ],
      }),
    },
  ],
});

// images
import facility4_1 from "@/assets/images/facilities/facility4_1.png";
import facility4_2 from "@/assets/images/facilities/facility4_2.jpg";

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
  "mexican-facility": {
    title: "Mexican Facility - Lintel de Mex",
    tagline: "50,000 sqft Manufacturing + 120,000 sqft Outlet Show Space to serve for Latin Area",
    location: "Reynosa, Tamaulipas, Mexico",
    website: "www.Lintelmex.com",
    heroImage:
      "https://images.unsplash.com/photo-1599765824376-a87eb981b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGZsb29yfGVufDF8fHx8MTc2NDA3MzQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Support Low Cost Manufacturing or After-Sales Service. You need only One Engineer to support Pilot Run Production in our facility. Our facility serves the Latin American market with comprehensive manufacturing and showroom capabilities.",
    highlights: [
      "Only ONE Engineer needed for pilot run production",
      "Low-cost manufacturing advantages",
      "USMCA benefits for duty-free US market access",
      "Proximity to US border",
      "Latin America market gateway",
      "Alongside Pan-American Highway",
      "After-sales service infrastructure",
    ],
    pricing: [
      { item: "Floor Space Rental", price: "$0.35/sqft/month" },
      { item: "Pilot Run Support", price: "Negotiable" },
      { item: "After-Sales Service", price: "Negotiable" },
    ],
    features: [
      "50,000 sqft Manufacturing Floor",
      "120,000 sqft Outlet Show Space",
      "Pilot Run Capabilities",
      "Low-Cost Production",
      "USMCA Qualified",
      "Latin Market Access",
      "Engineering Support",
      "Quality Control Systems",
      "After-Sales Service Center",
      "Pan-American Highway Access",
    ],
    images: [
      {
        url: facility4_1,
        alt: "facility4_1",
        aspect: "1080/720",
        imageLoaded: false,
        active: true,
      },
      {
        url: facility4_2,
        alt: "facility4_2",
        aspect: "1080/720",
        imageLoaded: false,
        active: false,
      },
    ],
  },
});

const facility = ref({});
facility.value = facilities.value["mexican-facility"];

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
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />

      <div class="absolute inset-0 flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a
            :href="`${pathUrl}/services-overview`"
            @click.prevent="router.go(-1)"
            class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
            Back to Overview
          </a>
          <div class="hero__content opacity-0 translate-y-10 transition-all duration-500">
            <h1 class="text-5xl md:text-6xl text-white mb-4">
              {{ facility.title }}
            </h1>
            <p class="text-xl text-blue-100 mb-4">{{ facility.tagline }}</p>
            <div class="flex items-center space-x-4 text-blue-100">
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
    <section class="description__section py-20">
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
                  <Icon
                    name="check"
                    size="16"
                    class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                  />
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
                  class="features__item flex items-center space-x-2 p-3 bg-blue-50 rounded-lg opacity-0 translate-y-10 transition-all duration-500"
                >
                  <div class="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
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
              <div class="images__wrapper relative">
                <!-- 左側陰影 -->
                <div
                  class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10 transition-opacity duration-300"
                  :class="showLeftShadow ? 'opacity-100' : 'opacity-0'"
                ></div>
                <!-- 右側陰影 -->
                <div
                  class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none z-10 transition-opacity duration-300"
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
                    class="h-[200px] lg:h-[300px] flex-shrink-0 px-2 relative"
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
                          <Icon name="factory" size="16" class="text-gray-400" />
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
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-[100px]">
              <div
                class="pricing__card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 opacity-0 translate-x-[50px] transition-all duration-500"
              >
                <h3 class="text-2xl text-gray-900 mb-6 flex items-center">
                  <Icon name="dollar" size="16" class="w-6 h-6 mr-2 text-blue-600" />
                  Pricing
                </h3>
                <div class="space-y-4 mb-8">
                  <div
                    v-for="(price, index) in facility.pricing"
                    :key="index"
                    class="bg-white p-4 rounded-lg"
                  >
                    <div class="text-sm text-gray-600 mb-1">{{ price.item }}</div>
                    <div class="text-xl text-blue-600">{{ price.price }}</div>
                  </div>
                </div>

                <a
                  href="/contact"
                  class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20"
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
                    class="text-blue-600 hover:text-blue-700 block"
                  >
                    Contact@InvesTexas.com
                  </a>
                  <a href="tel:+17137833122" class="text-blue-600 hover:text-blue-700 block">
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
    <section class="cta__section py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="cta__content opacity-0 translate-y-10 transition-all duration-500">
          <h2 class="text-4xl mb-6">Ready to Get Started?</h2>
          <p class="text-xl text-blue-100 mb-8">Schedule a visit to see this facility in person</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Schedule a Visit
            </a>
            <a
              href="/pricing"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
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
