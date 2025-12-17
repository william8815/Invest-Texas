<script setup>
import { ref, onMounted, computed } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

// 各 Section 的文字內容
const sections = [
  {
    id: "highway",
    title: "Interstate Highway 69",
    subtitle: "Cross USA Transportation Backbone",
    description:
      "Direct access to Interstate Highway 69, the critical north-south corridor connecting Canada to Mexico. Part of the Pan-American Highway System, providing seamless continental distribution.",
    image:
      "https://images.unsplash.com/photo-1729879679733-8ca2ac28fcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXhhcyUyMGhpZ2h3YXklMjByb2FkJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzY0MjM2NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1762648137108-ccc7fac73b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwY2FyZ28lMjB0ZXJtaW5hbCUyMG1vZGVybnxlbnwxfHx8fDE3NjQyMzY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMHBvcnQlMjBjb250YWluZXJzJTIwY2FyZ298ZW58MXx8fHwxNzY0MjM2NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    distance: "~30-40 miles",
    features: [
      "#1 US port for foreign tonnage",
      "Global shipping connectivity",
      "Container & bulk cargo services",
      "Strategic Gulf Coast location",
    ],
  },
];

// 周邊設施數據 - 包含圖片和描述
const amenities = [
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
    image:
      "https://images.unsplash.com/photo-1670451509978-2808dd55c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBzdGF0aW9uJTIwY29udmVuaWVuY2UlMjBzdG9yZXxlbnwxfHx8fDE3NjQyMTYwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1696079196661-a5cbfb884255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGFyayUyMGdyZWVuJTIwc3BhY2V8ZW58MXx8fHwxNzY0Mjk3OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1662414185445-b9a05e26dba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NDI3OTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1708484061139-6a6a8daacccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxtYXJ0JTIwc2hvcHBpbmclMjBwbGF6YXxlbnwxfHx8fDE3NjQyOTc5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1764072955152-5d1ff1610ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwcGFyayUyMHJlY3JlYXRpb258ZW58MXx8fHwxNzY0Mjk3OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1717535334631-b8dfaffb8d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNlbnRlciUyMG1hbGx8ZW58MXx8fHwxNzY0Mjk3OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1664305693514-a41cab4db858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVtZSUyMHBhcmslMjBhbXVzZW1lbnR8ZW58MXx8fHwxNzY0Mjk3OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1653149870708-50f54131a536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzdG9uJTIwZG93bnRvd24lMjBza3lsaW5lfGVufDF8fHx8MTc2NDI5Nzk1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1762956786482-0912f5322fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYXRvd24lMjBhc2lhbiUyMGRpc3RyaWN0fGVufDF8fHx8MTc2NDI5Nzk1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Asian cultural district with authentic dining and shopping",
  },
];

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const highwayRef = ref(null);
const portRef = ref(null);
const airportRef = ref(null);
const surroundingAreaRef = ref(null);
const surroundingAreaMapRef = ref(null);
const activeAmenityIndex = ref(0);

onMounted(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: highwayRef.value,
      start: `top 80%`,
      end: `bottom 20%`,
      // markers: true,
      // toggleActions: "play reverse play reverse",
      onEnter: () => {
        isHighwayVisible.value = true;
      },
      onLeave: () => {
        isHighwayVisible.value = false;
      },
      onEnterBack: () => {
        isHighwayVisible.value = true;
      },
      onLeaveBack: () => {
        isHighwayVisible.value = false;
      },
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: portRef.value,
      start: `top 80%`,
      end: `bottom 20%`,
      // markers: true,
      // toggleActions: "play reverse play reverse",
      onEnter: () => {
        isPortVisible.value = true;
      },
      onLeave: () => {
        isPortVisible.value = false;
      },
      onEnterBack: () => {
        isPortVisible.value = true;
      },
      onLeaveBack: () => {
        isPortVisible.value = false;
      },
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: airportRef.value,
      start: `top 80%`,
      end: `bottom 20%`,
      // markers: true,
      // toggleActions: "play reverse play reverse",
      onEnter: () => {
        isAirportVisible.value = true;
      },
      onLeave: () => {
        isAirportVisible.value = false;
      },
      onEnterBack: () => {
        isAirportVisible.value = true;
      },
      onLeaveBack: () => {
        isAirportVisible.value = false;
      },
    },
  });
  let averageProgress = 1 / 9;
  gsap.timeline({
    scrollTrigger: {
      trigger: surroundingAreaRef.value,
      start: `top 70%`,
      end: `bottom 50%`,
      // markers: true,
      onUpdate: (self) => {
        activeAmenityIndex.value = Math.floor(self.progress / averageProgress);
      },
    },
  });
});
const isHighwayVisible = ref(false);
const highwayClasses = computed(() => {
  return {
    "opacity-0 translate-x-[-100%]": !isHighwayVisible.value,
    "opacity-100 translate-x-0": isHighwayVisible.value,
  };
});
const isPortVisible = ref(false);
const portClasses = computed(() => {
  return {
    "opacity-0 translate-x-[100%]": !isPortVisible.value,
    "opacity-100 translate-x-0": isPortVisible.value,
  };
});
const isAirportVisible = ref(false);
const airportClasses = computed(() => {
  return {
    "opacity-0 translate-x-[-100%]": !isAirportVisible.value,
    "opacity-100 translate-x-0": isAirportVisible.value,
  };
});
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <Icon name="map_pin" size="24" class="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h1 class="text-5xl md:text-6xl mb-6">Strategic Location in Texas</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Tri-modal transportation access: Highway, Airport, and Seaport connectivity for seamless
            global business operations
          </p>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div class="flex flex-col items-center gap-2 text-blue-100">
          <span class="text-sm">Scroll to explore</span>
          <Icon name="navigation" size="24" class="w-5 h-5 rotate-180" />
        </div>
      </div>
    </section>

    <!-- Interactive Scroll Section - Desktop Only -->
    <div class="relative hidden lg:block">
      <div class="">
        <!-- Highway Section -->
        <div class="grid grid-cols-[6fr_4fr] h-screen overflow-hidden">
          <div ref="highwayRef" class="p-12 duration-1000" :class="highwayClasses">
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
                <img
                  :src="sections[0].image"
                  :alt="sections[0].title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <!-- svg map -->
          <div>
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
        <div class="grid grid-cols-[4fr_6fr] h-screen overflow-hidden">
          <div>
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
          <div ref="portRef" class="p-12 duration-1000" :class="portClasses">
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
                <img
                  :src="sections[2].image"
                  :alt="sections[2].title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Airport Section -->
        <div class="grid grid-cols-[6fr_4fr] h-screen overflow-hidden">
          <div ref="airportRef" class="p-12 duration-1000" :class="airportClasses">
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
                <img
                  :src="sections[1].image"
                  :alt="sections[1].title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
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
        <div class="grid grid-cols-[5fr_5fr]">
          <div class="sticky top-[150px] grid grid-rows-[auto_1fr] h-[calc(100dvh-150px)]">
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
              class="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-opacity duration-200"
              :class="{
                'opacity-50': index !== activeAmenityIndex,
                'opacity-100': index === activeAmenityIndex,
              }"
            >
              <!-- Image -->
              <div class="relative h-80 overflow-hidden">
                <img :src="amenity.image" :alt="amenity.name" class="w-full h-full object-cover" />
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
    <div class="lg:hidden bg-white">
      <!-- Transportation Sections -->
      <section v-for="section in sections" :key="section.id" class="py-16 px-4">
        <div class="max-w-2xl mx-auto">
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
              <img :src="section.image" :alt="section.title" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <!-- Surrounding Area -->
      <section class="py-16 px-4 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl text-gray-900 mb-4">Surrounding Amenities</h2>
            <p class="text-xl text-gray-600">Complete infrastructure within easy reach</p>
          </div>

          <div class="grid grid-cols-1 gap-4">
            <div
              v-for="(amenity, index) in amenities"
              :key="index"
              class="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between"
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
    <section class="py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
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
