<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { useSeoMeta, useHead } from "@unhead/vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

// SEO Meta
useSeoMeta({
  title: "Strategic Location in Texas - Tri-Modal Transportation Hub | InvesTexas",
  description:
    "Prime Texas location with Highway 69 access, 15-20 miles to Houston IAH Airport (180+ destinations), 30-40 miles to Port of Houston (#1 US port). Complete tri-modal transportation connectivity.",
  keywords:
    "Texas strategic location, Interstate Highway 69, Houston IAH Airport, Port of Houston, tri-modal transportation, Pan-American Highway, USMCA Park location, Texas logistics hub, global transportation access",

  // Open Graph
  ogTitle: "Strategic Location in Texas - Highway, Airport & Seaport Access",
  ogDescription:
    "Tri-modal transportation access: On-site Highway 69, 15-20mi to Houston Airport (180+ destinations), 30-40mi to #1 US Port. Seamless global business operations.",
  ogImage:
    "https://images.unsplash.com/photo-1729879679733-8ca2ac28fcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "Strategic Texas Location - Complete Transportation Connectivity",
  twitterDescription:
    "Highway 69 on-site, Houston Airport 15-20mi, #1 US Port 30-40mi. Perfect location for global business.",
  twitterImage:
    "https://images.unsplash.com/photo-1729879679733-8ca2ac28fcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",

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
        name: "USMCA Park - InvesTexas",
        description:
          "Strategic location in Texas with tri-modal transportation access: Highway, Airport, and Seaport connectivity for seamless global business operations.",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Texas",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          description: "Strategic location near Houston with excellent transportation access",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Interstate Highway 69 Access",
            value: "On-site",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Houston IAH International Airport",
            value: "15-20 miles",
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Port of Houston",
            value: "30-40 miles",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Transportation Access Points",
        description: "Tri-modal transportation connectivity for USMCA Park",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Place",
              name: "Interstate Highway 69",
              description:
                "Cross USA Transportation Backbone - Direct access to Interstate Highway 69, connecting Canada to Mexico via Pan-American Highway System",
              amenityFeature: [
                "Ocean to ocean connectivity",
                "Pan-American Highway connection",
                "Direct Canada-Mexico route",
                "Efficient continental distribution",
              ],
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Airport",
              name: "Houston IAH International Airport",
              description:
                "Global Air Transportation Hub - Only 15-20 miles away with connections to over 180 destinations worldwide",
              amenityFeature: [
                "180+ worldwide destinations",
                "Major cargo handling facility",
                "Express air freight services",
                "24/7 international operations",
              ],
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Place",
              name: "Houston Ocean Port",
              description:
                "America's Largest Container Port - Approximately 30-40 miles away, #1 port in the United States for foreign tonnage",
              amenityFeature: [
                "#1 US port for foreign tonnage",
                "Global shipping connectivity",
                "Container & bulk cargo services",
                "Strategic Gulf Coast location",
              ],
            },
          },
        ],
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
            name: "How far is USMCA Park from Houston International Airport?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "USMCA Park is only 15-20 miles from George Bush Intercontinental Airport (IAH), one of the busiest airports in the United States with connections to over 180 destinations worldwide.",
            },
          },
          {
            "@type": "Question",
            name: "What highway access does the location have?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The property has direct on-site access to Interstate Highway 69, the critical north-south corridor connecting Canada to Mexico. It's part of the Pan-American Highway System, providing seamless continental distribution.",
            },
          },
          {
            "@type": "Question",
            name: "How close is the Port of Houston?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Port of Houston is approximately 30-40 miles away. It's the #1 port in the United States for foreign tonnage, providing complete access to international maritime shipping lanes.",
            },
          },
          {
            "@type": "Question",
            name: "What amenities are nearby?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The location has comprehensive amenities including on-site gas station and cafe, city park across the street, hospital (2 miles), Walmart Plaza (3 miles), and various shopping centers, parks, and entertainment venues within 10-30 miles.",
            },
          },
        ],
      }),
    },
  ],
});

// images
import siteLocation1_1 from "@/assets/images/siteLocation/siteLocation1_1.png";
import siteLocation1_2 from "@/assets/images/siteLocation/siteLocation1_2.png";
import siteLocation1_3 from "@/assets/images/siteLocation/siteLocation1_3.png";
import siteLocation1_4 from "@/assets/images/siteLocation/siteLocation1_4.png";
import siteLocation1_5 from "@/assets/images/siteLocation/siteLocation1_5.png";
import siteLocation1_6 from "@/assets/images/siteLocation/siteLocation1_6.png";
import siteLocation1_7 from "@/assets/images/siteLocation/siteLocation1_7.png";
import siteLocation1_8 from "@/assets/images/siteLocation/siteLocation1_8.png";
import siteLocation1_9 from "@/assets/images/siteLocation/siteLocation1_9.png";
import siteLocation1_10 from "@/assets/images/siteLocation/siteLocation1_10.png";
import siteLocation1_11 from "@/assets/images/siteLocation/siteLocation1_11.png";

// 各 Section 的文字內容
const sections = ref([
  {
    id: "highway",
    title: "Interstate Highway 69",
    subtitle: "Cross USA Transportation Backbone",
    description:
      "Direct access to Interstate Highway 69, the critical north-south corridor connecting Canada to Mexico. Part of the Pan-American Highway System, providing seamless continental distribution.",
    image:
      "https://images.unsplash.com/photo-1729879679733-8ca2ac28fcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXhhcyUyMGhpZ2h3YXklMjByb2FkJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzY0MjM2NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageLoaded: false,
    distance: "On-site Access",
    features: [
      "Ocean to ocean connectivity",
      "Pan-American Highway connection",
      "Direct Canada-Mexico route",
      "Efficient continental distribution",
    ],
  },
  {
    id: "airport",
    title: "Houston IAH International Airport",
    subtitle: "Global Air Transportation Hub",
    description:
      "Only 15-20 miles from George Bush Intercontinental Airport, one of the busiest airports in the United States with connections to over 180 destinations worldwide.",
    image: siteLocation1_8,
    imageLoaded: false,
    distance: "~15-20 miles",
    features: [
      "180+ worldwide destinations",
      "Major cargo handling facility",
      "Express air freight services",
      "24/7 international operations",
    ],
  },
  {
    id: "port",
    title: "Houston Ocean Port",
    subtitle: "America's Largest Container Port",
    description:
      "Approximately 30-40 miles from the Port of Houston, the #1 port in the United States for foreign tonnage. Complete access to international maritime shipping lanes.",
    image: siteLocation1_11,
    imageLoaded: false,
    distance: "~30-40 miles",
    features: [
      "#1 US port for foreign tonnage",
      "Global shipping connectivity",
      "Container & bulk cargo services",
      "Strategic Gulf Coast location",
    ],
  },
]);

// 周邊設施數據 - 包含圖片和描述
const amenities = ref([
  {
    icon: "cart",
    name: "Gas & Cafe",
    distance: "On-site",
    x: 50,
    y: 48,
    titleX: 62,
    titleY: 49,
    distanceX: 62,
    distanceY: 52,
    image: siteLocation1_1,
    imageLoaded: false,
    description: "On-site convenience store and fuel station for daily needs",
  },
  {
    icon: "park",
    name: "City Park",
    distance: "Across street",
    x: 42,
    y: 54,
    titleX: 42,
    titleY: 62,
    distanceX: 54,
    distanceY: 56,
    image: siteLocation1_2,
    imageLoaded: false,
    description: "Public park directly across the street with green spaces and walking trails",
  },
  {
    icon: "hospital",
    name: "Hospital",
    distance: "~2 miles",
    x: 58,
    y: 42,
    titleX: 58,
    titleY: 35,
    distanceX: 60,
    distanceY: 48,
    image: siteLocation1_3,
    imageLoaded: false,
    description: "Modern medical facility with emergency and specialized care",
  },
  {
    icon: "cart",
    name: "Walmart Plaza",
    distance: "~3 miles",
    x: 38,
    y: 48,
    titleX: 38,
    titleY: 40,
    distanceX: 42,
    distanceY: 55,
    image: siteLocation1_4,
    imageLoaded: false,
    description: "Major retail center with grocery and general merchandise",
  },
  {
    icon: "park",
    name: "Double Lake Park",
    distance: "~10 miles",
    x: 62,
    y: 48,
    titleX: 62,
    titleY: 40,
    distanceX: 62,
    distanceY: 55,
    image: siteLocation1_5,
    imageLoaded: false,
    description: "Recreation area with fishing, camping, and water activities",
  },
  {
    icon: "cart",
    name: "Valley Ranch Center",
    distance: "~10 miles",
    x: 58,
    y: 56,
    titleX: 57,
    titleY: 64,
    distanceX: 63,
    distanceY: 52,
    image: siteLocation1_7,
    imageLoaded: false,
    description: "Modern shopping mall with dining and entertainment options",
  },
  {
    icon: "park",
    name: "Grand Texas Park",
    distance: "~15 miles",
    x: 50,
    y: 60,
    titleX: 50,
    titleY: 68,
    distanceX: 57,
    distanceY: 55,
    image: siteLocation1_6,
    imageLoaded: false,
    description: "Family entertainment complex with theme park and attractions",
  },
  {
    icon: "buildings",
    name: "Downtown Houston",
    distance: "~25 miles",
    x: 42,
    y: 62,
    titleX: 42,
    titleY: 70,
    distanceX: 53,
    distanceY: 58,
    image: siteLocation1_7,
    imageLoaded: false,
    description: "Houston city center with business district and cultural venues",
  },
  {
    icon: "cart",
    name: "Chinatown",
    distance: "~30 miles",
    x: 38,
    y: 58,
    titleX: 38,
    titleY: 65,
    distanceX: 50,
    distanceY: 58,
    image: siteLocation1_10,
    imageLoaded: false,
    description: "Asian cultural district with authentic dining and shopping",
  },
]);

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const surroundingAreaRef = ref(null);
const activeAmenityIndex = ref(0);
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

  // Highway Section
  const highwaySection = document.querySelector(".highway__section");
  const highwaySectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let highwayContent = entry.target.querySelector(".highway__content");
        let highwayMap = entry.target.querySelector(".highway__map");
        highwayContent.classList.remove("opacity-0", "translate-x-[-100%]");
        highwayContent.classList.add("opacity-100", "translate-x-0");
        highwayMap.classList.remove("opacity-0", "translate-x-[100%]");
        highwayMap.classList.add("opacity-100", "translate-x-0");
        highwaySectionObserver.unobserve(entry.target);
      }
    });
  }, options);
  highwaySectionObserver.observe(highwaySection);

  // Port Section
  const portSection = document.querySelector(".port__section");
  const portSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let portContent = entry.target.querySelector(".port__content");
        let portMap = entry.target.querySelector(".port__map");
        portContent.classList.remove("opacity-0", "translate-x-[100%]");
        portContent.classList.add("opacity-100", "translate-x-0");
        portMap.classList.remove("opacity-0", "translate-x-[-100%]");
        portMap.classList.add("opacity-100", "translate-x-0");
        portSectionObserver.unobserve(entry.target);
      }
    });
  }, options);
  portSectionObserver.observe(portSection);

  // Airport Section
  const airportSection = document.querySelector(".airport__section");
  const airportSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let airportContent = entry.target.querySelector(".airport__content");
        let airportMap = entry.target.querySelector(".airport__map");
        airportContent.classList.remove("opacity-0", "translate-x-[-100%]");
        airportContent.classList.add("opacity-100", "translate-x-0");
        airportMap.classList.remove("opacity-0", "translate-x-[100%]");
        airportMap.classList.add("opacity-100", "translate-x-0");
        airportSectionObserver.unobserve(entry.target);
      }
    });
  }, options);
  airportSectionObserver.observe(airportSection);

  let averageProgress = 1 / 9;
  gsap.timeline({
    scrollTrigger: {
      trigger: surroundingAreaRef.value,
      start: `top 80%`,
      end: `bottom 20%`,
      // markers: true,
      onUpdate: (self) => {
        activeAmenityIndex.value = Math.floor(self.progress / averageProgress);
      },
    },
  });

  // mobile version
  const siteLocationMobileItems = document.querySelectorAll(".siteLocationMobile__item");
  const siteLocationMobileItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        siteLocationMobileItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  siteLocationMobileItems.forEach((item) => {
    siteLocationMobileItemsObserver.observe(item);
  });

  // surrounding area Section
  const surroundingAreaContent = document.querySelector(".surroundingArea__content");
  const surroundingAreaContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        surroundingAreaContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  surroundingAreaContentObserver.observe(surroundingAreaContent);

  const surroundingAreaItems = document.querySelectorAll(".surroundingArea__item");
  const surroundingAreaItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-10");
        entry.target.classList.add("opacity-100", "translate-x-0");
        surroundingAreaItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  surroundingAreaItems.forEach((item) => {
    surroundingAreaItemsObserver.observe(item);
  });

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
});
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="hero__section relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="hero__content text-center opacity-0 translate-y-10 transition-all duration-500">
          <Icon name="map_pin" size="24" class="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h1 class="text-5xl md:text-6xl mb-6">Strategic Location in Texas</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Tri-modal transportation access: Highway, Airport, and Seaport connectivity for seamless
            global business operations
          </p>
        </div>
      </div>
    </section>

    <!-- Interactive Scroll Section - Desktop Only -->
    <div class="hidden lg:block">
      <div class="siteLocation__container">
        <!-- Highway Section -->
        <div class="highway__section grid grid-cols-[1fr_1fr] overflow-x-hidden">
          <div
            class="highway__content p-12 duration-500 opacity-0 translate-x-[-100%] transition-all"
          >
            <div class="max-w-lg">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full text-sky-700 mb-6"
              >
                <Icon name="navigation" size="24" class="w-5 h-5" />
                <span class="text-sm uppercase tracking-wide">Transportation</span>
              </div>
              <h2 class="text-5xl text-gray-900 mb-4">{{ sections[0].title }}</h2>
              <p class="text-xl text-amber-600 mb-6">{{ sections[0].subtitle }}</p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                {{ sections[0].description }}
              </p>

              <div class="space-y-3 mb-8">
                <div
                  v-for="(feature, i) in sections[0].features"
                  :key="i"
                  class="flex items-center gap-3"
                >
                  <div
                    class="w-5 h-5 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs"
                  >
                    ✓
                  </div>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>

              <div class="relative h-48 rounded-xl overflow-hidden shadow-xl">
                <!-- Skeleton -->
                <div
                  v-if="!sections[0].imageLoaded"
                  class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center"
                >
                  <Icon name="navigation" size="32" class="text-gray-400" />
                </div>
                <img
                  :src="sections[0].image"
                  :alt="sections[0].title"
                  loading="lazy"
                  class="w-full h-full object-cover transition-opacity duration-500"
                  :class="sections[0].imageLoaded ? 'opacity-100' : 'opacity-0'"
                  @load="sections[0].imageLoaded = true"
                />
              </div>
            </div>
          </div>
          <!-- svg map -->
          <div class="highway__map duration-500 opacity-0 translate-x-[100%] transition-all">
            <svg
              viewBox="0 0 100 100"
              class="w-full h-full"
              style="filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))"
            >
              <path
                d="M 30,20 L 70,20 L 75,30 L 80,45 L 75,60 L 70,75 L 60,85 L 45,85 L 35,80 L 25,70 L 20,55 L 20,40 L 25,30 Z"
                fill="url(#texasGradient)"
                stroke="#0369a1"
                stroke-width="0.5"
              />

              <defs>
                <linearGradient id="texasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.2" />
                  <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.3" />
                </linearGradient>
              </defs>

              <g>
                <circle cx="50" cy="50" r="3" fill="#f59e0b" stroke="#fff" stroke-width="1" />
                <circle cx="50" cy="50" r="3" fill="#f59e0b" opacity="0.3">
                  <animate attribute-name="r" from="3" to="8" dur="2s" repeat-count="indefinite" />
                  <animate
                    attribute-name="opacity"
                    from="0.3"
                    to="0"
                    dur="2s"
                    repeat-count="indefinite"
                  />
                </circle>
              </g>

              <!-- {/* HW69 Route - Section 1 */} -->
              <g>
                <!-- {/* Highway Line - 向上 */} -->
                <path
                  d="M 50,50 L 50,10"
                  stroke="#0ea5e9"
                  stroke-width="2"
                  stroke-dasharray="5,3"
                  fill="none"
                  stroke-dashoffset="40"
                >
                  <!-- <animate
                    attributeName="stroke-dashoffset"
                    from="40"
                    to="0"
                    dur="1s"
                    fill="freeze"
                    begin="0.3s"
                  /> -->
                </path>
                <!-- {/* Highway Line - 向下 */} -->
                <path
                  d="M 50,50 L 50,90"
                  stroke="#0ea5e9"
                  stroke-width="2"
                  stroke-dasharray="5,3"
                  fill="none"
                  stroke-dashoffset="40"
                >
                  <!-- <animate
                    attributeName="stroke-dashoffset"
                    from="40"
                    to="0"
                    dur="1s"
                    fill="freeze"
                    begin="0.3s"
                  /> -->
                </path>
                <text x="55" y="25" font-size="4" fill="#0369a1" font-weight="500">
                  HW 69 North
                </text>
                <text x="55" y="75" font-size="4" fill="#0369a1" font-weight="500">
                  HW 69 South
                </text>
              </g>

              <!-- {/* Park Label */} -->
              <text
                :x="50"
                :y="58"
                font-size="3"
                fill="#f59e0b"
                text-anchor="middle"
                font-weight="bold"
              >
                USMCA Park
              </text>
            </svg>
          </div>
        </div>

        <!-- port Section -->
        <div class="port__section grid grid-cols-[1fr_1fr] overflow-x-hidden">
          <div class="port__map duration-500 opacity-0 translate-x-[-100%] transition-all">
            <svg
              viewBox="0 0 100 100"
              class="w-full h-full"
              style="filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))"
            >
              <path
                d="M 30,20 L 70,20 L 75,30 L 80,45 L 75,60 L 70,75 L 60,85 L 45,85 L 35,80 L 25,70 L 20,55 L 20,40 L 25,30 Z"
                fill="url(#texasGradient)"
                stroke="#0369a1"
                stroke-width="0.5"
              />

              <defs>
                <linearGradient id="texasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.2" />
                  <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.3" />
                </linearGradient>
              </defs>

              <g>
                <circle cx="50" cy="50" r="3" fill="#f59e0b" stroke="#fff" stroke-width="1" />
                <circle cx="50" cy="50" r="3" fill="#f59e0b" opacity="0.3">
                  <animate attribute-name="r" from="3" to="8" dur="2s" repeat-count="indefinite" />
                  <animate
                    attribute-name="opacity"
                    from="0.3"
                    to="0"
                    dur="2s"
                    repeat-count="indefinite"
                  />
                </circle>
              </g>

              <!-- {/* Port - Section 3 */} -->
              <g>
                <circle cx="35" cy="70" r="4" fill="#0284c7" stroke="#fff" stroke-width="1" />
                <text x="31.5" y="72" font-size="5" fill="#fff">⚓</text>

                <line
                  x1="50"
                  y1="50"
                  x2="35"
                  y2="70"
                  stroke="#0284c7"
                  stroke-width="1"
                  stroke-dasharray="2,2"
                />
                <text x="45" y="62" font-size="3" fill="#0369a1">30-40mi</text>
              </g>

              <!-- {/* Park Label */} -->
              <text
                :x="50"
                :y="45"
                font-size="3"
                fill="#f59e0b"
                text-anchor="middle"
                font-weight="bold"
              >
                USMCA Park
              </text>
            </svg>
          </div>
          <div class="port__content p-12 duration-500 opacity-0 translate-x-[100%] transition-all">
            <div class="max-w-lg">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6"
              >
                <Icon name="ship" size="24" class="w-5 h-5" />
                <span class="text-sm uppercase tracking-wide">Maritime</span>
              </div>
              <h2 class="text-5xl text-gray-900 mb-4">{{ sections[2].title }}</h2>
              <p class="text-xl text-amber-600 mb-6">{{ sections[2].subtitle }}</p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                {{ sections[2].description }}
              </p>

              <div class="space-y-3 mb-8">
                <div
                  v-for="(feature, i) in sections[2].features"
                  :key="i"
                  class="flex items-center gap-3"
                >
                  <div
                    class="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs"
                  >
                    ✓
                  </div>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>

              <div class="relative h-48 rounded-xl overflow-hidden shadow-xl">
                <!-- Skeleton -->
                <div
                  v-if="!sections[2].imageLoaded"
                  class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center"
                >
                  <Icon name="ship" size="32" class="text-gray-400" />
                </div>
                <img
                  :src="sections[2].image"
                  :alt="sections[2].title"
                  loading="lazy"
                  class="w-full h-full object-cover transition-opacity duration-500"
                  :class="sections[2].imageLoaded ? 'opacity-100' : 'opacity-0'"
                  @load="sections[2].imageLoaded = true"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Airport Section -->
        <div class="airport__section grid grid-cols-[1fr_1fr] overflow-x-hidden">
          <div
            class="airport__content p-12 duration-500 opacity-0 translate-x-[-100%] transition-all"
          >
            <div class="max-w-lg">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 mb-6"
              >
                <Icon name="plane" size="24" class="w-5 h-5" />
                <span class="text-sm uppercase tracking-wide">Aviation</span>
              </div>
              <h2 class="text-5xl text-gray-900 mb-4">{{ sections[1].title }}</h2>
              <p class="text-xl text-amber-600 mb-6">{{ sections[1].subtitle }}</p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                {{ sections[1].description }}
              </p>

              <div class="space-y-3 mb-8">
                <div
                  v-for="(feature, i) in sections[1].features"
                  :key="i"
                  class="flex items-center gap-3"
                >
                  <div
                    class="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center text-white text-xs"
                  >
                    ✓
                  </div>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>

              <div class="relative h-48 rounded-xl overflow-hidden shadow-xl">
                <!-- Skeleton -->
                <div
                  v-if="!sections[1].imageLoaded"
                  class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center"
                >
                  <Icon name="plane" size="32" class="text-gray-400" />
                </div>
                <img
                  :src="sections[1].image"
                  :alt="sections[1].title"
                  loading="lazy"
                  class="w-full h-full object-cover transition-opacity duration-500"
                  :class="sections[1].imageLoaded ? 'opacity-100' : 'opacity-0'"
                  @load="sections[1].imageLoaded = true"
                />
              </div>
            </div>
          </div>
          <div class="airport__map duration-500 opacity-0 translate-x-[100%] transition-all">
            <svg
              viewBox="0 0 100 100"
              class="w-full h-full"
              style="filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))"
            >
              <path
                d="M 30,20 L 70,20 L 75,30 L 80,45 L 75,60 L 70,75 L 60,85 L 45,85 L 35,80 L 25,70 L 20,55 L 20,40 L 25,30 Z"
                fill="url(#texasGradient)"
                stroke="#0369a1"
                stroke-width="0.5"
              />

              <defs>
                <linearGradient id="texasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.2" />
                  <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.3" />
                </linearGradient>
              </defs>

              <g>
                <circle cx="50" cy="50" r="3" fill="#f59e0b" stroke="#fff" stroke-width="1" />
                <circle cx="50" cy="50" r="3" fill="#f59e0b" opacity="0.3">
                  <animate attribute-name="r" from="3" to="8" dur="2s" repeat-count="indefinite" />
                  <animate
                    attribute-name="opacity"
                    from="0.3"
                    to="0"
                    dur="2s"
                    repeat-count="indefinite"
                  />
                </circle>
              </g>

              <!-- {/* Airport - Section 2 */} -->
              <g>
                <!-- {/* Airport marker */} -->
                <circle cx="65" cy="35" r="4" fill="#06b6d4" stroke="#fff" stroke-width="1" />
                <text x="61.5" y="37" font-size="5" fill="#fff">✈</text>

                <!-- {/* Distance line */} -->
                <line
                  x1="50"
                  y1="50"
                  x2="65"
                  y2="35"
                  stroke="#06b6d4"
                  stroke-width="1"
                  stroke-dasharray="2,2"
                />
                <text x="59" y="46" font-size="3" fill="#0369a1">15-20mi</text>
              </g>

              <!-- {/* Park Label */} -->
              <text
                :x="50"
                :y="58"
                font-size="3"
                fill="#f59e0b"
                text-anchor="middle"
                font-weight="bold"
              >
                USMCA Park
              </text>
            </svg>
          </div>
        </div>

        <!-- surrounding area Section -->
        <div class="grid grid-cols-[1fr_1fr]">
          <div class="p-12 sticky top-[150px] grid grid-rows-[auto_1fr] h-[calc(100dvh-150px)]">
            <div class="text-center mb-8">
              <h2 class="text-4xl text-gray-900 mb-3">Everything Within Reach</h2>
              <p class="text-lg text-gray-600">Scroll to explore each location</p>
            </div>
            <svg
              viewBox="0 0 100 100"
              class="w-full h-full"
              style="filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))"
            >
              <path
                d="M 30,20 L 70,20 L 75,30 L 80,45 L 75,60 L 70,75 L 60,85 L 45,85 L 35,80 L 25,70 L 20,55 L 20,40 L 25,30 Z"
                fill="url(#texasGradient)"
                stroke="#0369a1"
                stroke-width="0.5"
              />

              <defs>
                <linearGradient id="texasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.2" />
                  <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.3" />
                </linearGradient>
              </defs>

              <g>
                <circle cx="50" cy="50" r="3" fill="#f59e0b" stroke="#fff" stroke-width="1" />
                <circle cx="50" cy="50" r="3" fill="#f59e0b" opacity="0.3">
                  <animate attribute-name="r" from="3" to="8" dur="2s" repeat-count="indefinite" />
                  <animate
                    attribute-name="opacity"
                    from="0.3"
                    to="0"
                    dur="2s"
                    repeat-count="indefinite"
                  />
                </circle>
              </g>

              <g>
                <g v-for="(amenity, index) in amenities" :key="index">
                  <circle
                    :cx="amenity.x"
                    :cy="amenity.y"
                    r="3"
                    :fill="index === activeAmenityIndex ? '#0ea5e9' : 'transparent'"
                    :stroke="index === activeAmenityIndex ? '#fff' : 'none'"
                    :stroke-width="index === activeAmenityIndex ? 1 : 0"
                  />

                  <text
                    :x="amenity.titleX"
                    :y="amenity.titleY"
                    font-size="3"
                    :fill="index === activeAmenityIndex ? '#0f172a' : 'transparent'"
                    text-anchor="middle"
                    font-weight="700"
                  >
                    {{ amenity.name }}
                  </text>
                  <text
                    :x="amenity.distanceX"
                    :y="amenity.distanceY"
                    font-size="2.2"
                    :fill="index === activeAmenityIndex ? '#0369a1' : 'transparent'"
                    text-anchor="middle"
                    font-weight="600"
                  >
                    {{ amenity.distance }}
                  </text>
                  <line
                    :x1="50"
                    :y1="50"
                    :x2="amenity.x"
                    :y2="amenity.y"
                    :stroke="index === activeAmenityIndex ? '#0ea5e9' : 'transparent'"
                    stroke-width="0.8"
                  />
                </g>
              </g>

              <text
                :x="50"
                :y="45"
                font-size="3"
                fill="#f59e0b"
                text-anchor="middle"
                font-weight="bold"
              >
                USMCA Park
              </text>
            </svg>
          </div>
          <div
            class="p-12 flex flex-col items-center justify-center gap-2"
            ref="surroundingAreaRef"
          >
            <div
              v-for="(amenity, index) in amenities"
              :key="amenity.id"
              class="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-200"
              :class="{
                'opacity-50 scale-95 translate-x-[30px]': index !== activeAmenityIndex,
                'opacity-100 scale-100 translate-x-0': index === activeAmenityIndex,
              }"
            >
              <!-- Image -->
              <div class="relative h-80 overflow-hidden">
                <!-- Skeleton -->
                <div
                  v-if="!amenity.imageLoaded"
                  class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center z-10"
                >
                  <div class="text-center">
                    <div
                      class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2"
                    >
                      <Icon :name="amenity.icon" size="24" class="text-gray-400" />
                    </div>
                    <p class="text-gray-400 text-sm">Loading...</p>
                  </div>
                </div>
                <img
                  :src="amenity.image"
                  :alt="amenity.name"
                  loading="lazy"
                  class="w-full h-full object-cover transition-opacity duration-500"
                  :class="amenity.imageLoaded ? 'opacity-100' : 'opacity-0'"
                  @load="amenity.imageLoaded = true"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div class="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                    >
                      <Icon :name="amenity.icon" size="24" class="w-6 h-6" />
                    </div>
                  </div>
                  <h3 class="text-4xl mb-2">{{ amenity.name }}</h3>
                </div>
              </div>

              <!-- Content -->
              <div class="p-8">
                <div
                  class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full text-sky-700 mb-6"
                >
                  <Icon name="map_pin" size="24" class="w-5 h-5" />
                  <span class="text-sm tracking-wide">{{ amenity.distance }} from USMCA Park</span>
                </div>

                <p class="text-xl text-gray-700 leading-relaxed">
                  {{ amenity.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Version: Simple Card Layout -->
    <div class="lg:hidden bg-white overflow-x-hidden">
      <!-- Transportation Sections -->
      <section v-for="section in sections" :key="section.id" class="py-16 px-4">
        <div
          class="max-w-2xl mx-auto siteLocationMobile__item opacity-0 translate-y-10 transition-all duration-500"
        >
          <div>
            <div class="mb-8">
              <h2 class="text-4xl text-gray-900 mb-4">{{ section.title }}</h2>
              <p class="text-xl text-amber-600 mb-4">{{ section.subtitle }}</p>
              <p class="text-lg text-gray-600 mb-6">{{ section.description }}</p>

              <div
                class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full text-sky-700 mb-6"
              >
                <Icon name="map_pin" size="24" class="w-4 h-4" />
                <span class="text-sm">{{ section.distance }}</span>
              </div>

              <div class="space-y-3 mb-8">
                <div
                  v-for="(feature, i) in section.features"
                  :key="i"
                  class="flex items-center gap-3"
                >
                  <div
                    class="w-5 h-5 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs"
                  >
                    ✓
                  </div>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
            </div>

            <div class="relative h-64 rounded-xl overflow-hidden shadow-xl">
              <!-- Skeleton -->
              <div
                v-if="!section.imageLoaded"
                class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center"
              >
                <Icon name="map_pin" size="32" class="text-gray-400" />
              </div>
              <img
                :src="section.image"
                :alt="section.title"
                loading="lazy"
                class="w-full h-full object-cover transition-opacity duration-500"
                :class="section.imageLoaded ? 'opacity-100' : 'opacity-0'"
                @load="section.imageLoaded = true"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Surrounding Area -->
      <section class="surroundingArea__section py-16 px-4 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div class="max-w-2xl mx-auto">
          <div
            class="surroundingArea__content text-center mb-12 opacity-0 translate-y-10 transition-all duration-500"
          >
            <h2 class="text-4xl text-gray-900 mb-4">Surrounding Amenities</h2>
            <p class="text-xl text-gray-600">Complete infrastructure within easy reach</p>
          </div>

          <div class="surroundingArea__list grid grid-cols-1 gap-4">
            <div
              v-for="(amenity, index) in amenities"
              :key="index"
              class="surroundingArea__item opacity-0 translate-x-10 transition-all duration-500 bg-white p-6 rounded-xl shadow-lg flex items-center justify-between"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white"
                >
                  <Icon :name="amenity.icon" size="24" class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-gray-900">{{ amenity.name }}</div>
                  <div class="text-sm text-gray-500">{{ amenity.distance }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- CTA -->
    <section
      class="cta__section py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white overflow-x-hidden"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="cta__content opacity-0 translate-y-10 transition-all duration-500">
          <h2 class="text-4xl mb-6">Experience Our Strategic Advantage</h2>
          <p class="text-xl text-blue-100 mb-8">
            See how our location connects you to continental and global markets
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              Schedule a Tour
            </a>
            <a
              href="/process"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View Entry Process
            </a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
