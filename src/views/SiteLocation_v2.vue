<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
// component
import TexasMapVisualization from "@/components/TexasMapVisualization.vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Refs
const containerRef = ref(null);
const stickyContainer = ref(null);

// Card refs
const highwayCard = ref(null);
const airportCard = ref(null);
const portCard = ref(null);
const amenityCards = ref([]);

// Map container ref
const mapContainer = ref(null);

// Animation state
const animationState = ref({
  // Map position: 0 = right, 1 = left
  mapPosition: 0,
  // Active section: 'highway' | 'airport' | 'port' | 'amenity-0' ~ 'amenity-8' | 'none'
  activeSection: "none",
  // Route draw progress (0-1)
  routeProgress: 0,
  // Card opacity and position
  cardOpacity: 0,
  cardX: 0,
  cardY: 0,
});

// Current active amenity index for surrounding section
const activeAmenityIndex = ref(0);

// Data
const sections = [
  {
    id: "highway",
    title: "Interstate Highway 69",
    subtitle: "Cross USA Transportation Backbone",
    description:
      "Direct access to Interstate Highway 69, the critical north-south corridor connecting Canada to Mexico. Part of the Pan-American Highway System, providing seamless continental distribution.",
    image:
      "https://images.unsplash.com/photo-1729879679733-8ca2ac28fcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    distance: "On-site Access",
    features: [
      "Ocean to ocean connectivity",
      "Pan-American Highway connection",
      "Direct Canada-Mexico route",
      "Efficient continental distribution",
    ],
    icon: "navigation",
    color: "sky",
  },
  {
    id: "airport",
    title: "Houston IAH International Airport",
    subtitle: "Global Air Transportation Hub",
    description:
      "Only 15-20 miles from George Bush Intercontinental Airport, one of the busiest airports in the United States with connections to over 180 destinations worldwide.",
    image:
      "https://images.unsplash.com/photo-1762648137108-ccc7fac73b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    distance: "~15-20 miles",
    features: [
      "180+ worldwide destinations",
      "Major cargo handling facility",
      "Express air freight services",
      "24/7 international operations",
    ],
    icon: "plane",
    color: "cyan",
  },
  {
    id: "port",
    title: "Houston Ocean Port",
    subtitle: "America's Largest Container Port",
    description:
      "Approximately 30-40 miles from the Port of Houston, the #1 port in the United States for foreign tonnage. Complete access to international maritime shipping lanes.",
    image:
      "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    distance: "~30-40 miles",
    features: [
      "#1 US port for foreign tonnage",
      "Global shipping connectivity",
      "Container & bulk cargo services",
      "Strategic Gulf Coast location",
    ],
    icon: "ship",
    color: "blue",
  },
];

const amenities = [
  {
    icon: "cart",
    name: "Gas & Cafe",
    distance: "On-site",
    x: 52,
    y: 46,
    image:
      "https://images.unsplash.com/photo-1670451509978-2808dd55c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "On-site convenience store and fuel station for daily needs",
  },
  {
    icon: "park",
    name: "City Park",
    distance: "Across street",
    x: 42,
    y: 54,
    image:
      "https://images.unsplash.com/photo-1696079196661-a5cbfb884255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Public park directly across the street with green spaces and walking trails",
  },
  {
    icon: "hospital",
    name: "Hospital",
    distance: "~2 miles",
    x: 62,
    y: 42,
    image:
      "https://images.unsplash.com/photo-1662414185445-b9a05e26dba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Modern medical facility with emergency and specialized care",
  },
  {
    icon: "cart",
    name: "Walmart Plaza",
    distance: "~3 miles",
    x: 36,
    y: 48,
    image:
      "https://images.unsplash.com/photo-1708484061139-6a6a8daacccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Major retail center with grocery and general merchandise",
  },
  {
    icon: "waves",
    name: "Double Lake Park",
    distance: "~10 miles",
    x: 66,
    y: 52,
    image:
      "https://images.unsplash.com/photo-1764072955152-5d1ff1610ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Recreation area with fishing, camping, and water activities",
  },
  {
    icon: "cart",
    name: "Valley Ranch Center",
    distance: "~10 miles",
    x: 58,
    y: 62,
    image:
      "https://images.unsplash.com/photo-1717535334631-b8dfaffb8d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Modern shopping mall with dining and entertainment options",
  },
  {
    icon: "buildings",
    name: "Grand Texas Park",
    distance: "~15 miles",
    x: 44,
    y: 66,
    image:
      "https://images.unsplash.com/photo-1664305693514-a41cab4db858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Family entertainment complex with theme park and attractions",
  },
  {
    icon: "buildings",
    name: "Downtown Houston",
    distance: "~25 miles",
    x: 32,
    y: 62,
    image:
      "https://images.unsplash.com/photo-1653149870708-50f54131a536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Houston city center with business district and cultural venues",
  },
  {
    icon: "cart",
    name: "Chinatown",
    distance: "~30 miles",
    x: 28,
    y: 54,
    image:
      "https://images.unsplash.com/photo-1762956786482-0912f5322fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Asian cultural district with authentic dining and shopping",
  },
];

// Computed: current active amenity data
const currentAmenity = computed(() => amenities[activeAmenityIndex.value]);

// Computed: is in amenity section
const isAmenitySection = computed(() => animationState.value.activeSection.startsWith("amenity-"));

// GSAP context
let ctx = null;

// Helper function to convert dvh to percentage of total container height
const dvhToPercent = (dvh) => {
  const totalHeight = 840; // Total container height in dvh
  return (dvh / totalHeight) * 100;
};

// GSAP Scroll Animations
// onMounted(() => {
//   if (!containerRef.value) return;

//   ctx = gsap.context(() => {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: containerRef.value,
//           start: "top 70%",
//           end: `${dvhToPercent(80)}% top`,
//           toggleActions: "play reverse play reverse",
//         },
//       })
//       .fromTo(highwayCard.value, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: containerRef.value,
//           start: `${dvhToPercent(80)}% top`,
//           end: `${dvhToPercent(100)}% top`,
//           toggleActions: "play reverse play reverse",
//         },
//       })
//       .to(highwayCard.value, { opacity: 0, x: -100, duration: 1 });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: containerRef.value,
//           start: `${dvhToPercent(100)}% top`,
//           end: `${dvhToPercent(180)}% top`,
//           toggleActions: "play reverse play reverse",
//         },
//       })
//       .fromTo(airportCard.value, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: containerRef.value,
//           start: `${dvhToPercent(180)}% top`,
//           end: `${dvhToPercent(200)}% top`,
//           scrub: 1,
//           onUpdate: (self) => {
//             animationState.value.routeProgress = 1 - self.progress;
//             animationState.value.mapPosition = 1 - self.progress;
//           },
//         },
//       })
//       .to(airportCard.value, { opacity: 0, x: 100, duration: 1 });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: containerRef.value,
//           start: `${dvhToPercent(200)}% top`,
//           end: `${dvhToPercent(280)}% top`,
//           scrub: 1,
//           onUpdate: (self) => {
//             animationState.value.activeSection = "port";
//             animationState.value.routeProgress = self.progress;
//           },
//         },
//       })
//       .fromTo(portCard.value, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: containerRef.value,
//           start: `${dvhToPercent(280)}% top`,
//           end: `${dvhToPercent(300)}% top`,
//           scrub: 1,
//           onUpdate: (self) => {
//             animationState.value.routeProgress = 1 - self.progress;
//             animationState.value.mapPosition = self.progress;
//           },
//         },
//       })
//       .to(portCard.value, { opacity: 0, x: -100, duration: 1 });

//     amenities.forEach((amenity, index) => {
//       const startDvh = 300 + index * 60;
//       const showEndDvh = startDvh + 50;
//       const transitionEndDvh = startDvh + 60;

//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: containerRef.value,
//             start: `${dvhToPercent(startDvh)}% top`,
//             end: `${dvhToPercent(showEndDvh)}% top`,
//             scrub: 1,
//             onUpdate: (self) => {
//               animationState.value.activeSection = `amenity-${index}`;
//               animationState.value.routeProgress = self.progress;
//               animationState.value.mapPosition = 1; // Keep map on left
//               activeAmenityIndex.value = index;
//             },
//           },
//         })
//         .fromTo(
//           `.amenity-card-${index}`,
//           { opacity: 0, y: 100 },
//           { opacity: 1, y: 0, duration: 1 }
//         );

//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: containerRef.value,
//             start: `${dvhToPercent(showEndDvh)}% top`,
//             end: `${dvhToPercent(transitionEndDvh)}% top`,
//             scrub: 1,
//             onUpdate: (self) => {
//               animationState.value.routeProgress = 1 - self.progress;
//               animationState.value.mapPosition = 1; // Keep map on left
//             },
//           },
//         })
//         .to(`.amenity-card-${index}`, { opacity: 0, y: -100, duration: 1 });
//     });
//   }, containerRef.value);
// });

// onUnmounted(() => {
//   if (ctx) ctx.revert();
//   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// });

// Computed styles for map container position
const mapContainerStyle = computed(() => {
  const position = animationState.value.mapPosition;
  // position: 0 = right side (left: 50%), 1 = left side (left: 0%)
  const leftPercent = 50 * (1 - position);
  return {
    left: `${leftPercent}%`,
  };
});

// Computed: map is on left side
const mapOnLeft = computed(() => animationState.value.mapPosition > 0.5);
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="relative pt-20 pb-10 bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-900 text-white"
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
      <div class="animate-bounce mt-10">
        <div class="flex flex-col items-center gap-2 text-blue-100">
          <span class="text-sm">Scroll to explore</span>
          <Icon name="navigation" size="24" class="w-5 h-5 rotate-180" />
        </div>
      </div>
    </section>

    <!-- Interactive Scroll Section - Desktop Only -->
    <div
      ref="containerRef"
      class="relative hidden lg:block bg-gradient-to-br from-slate-50 to-sky-50"
      style="height: 840dvh"
    >
      <!-- Sticky Container -->
      <div ref="stickyContainer" class="sticky top-0 h-screen overflow-hidden">
        <!-- Map Container (moves between left and right) -->
        <div
          ref="mapContainer"
          class="absolute top-0 w-1/2 h-full flex items-center justify-center p-8 transition-all duration-700 ease-out"
          :style="mapContainerStyle"
        >
          <div class="w-full max-w-2xl">
            <TexasMapVisualization
              :animation-state="animationState"
              :amenities="amenities"
              :active-amenity-index="activeAmenityIndex"
            />
          </div>
        </div>

        <!-- Left Side Cards Container -->
        <div class="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-12">
          <!-- Highway Card (appears on left when map is on right) -->
          <div
            ref="highwayCard"
            class="absolute max-w-lg opacity-0"
            :class="{ 'pointer-events-none': animationState.activeSection !== 'highway' }"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full text-sky-700 mb-6"
            >
              <Icon name="navigation" size="24" class="w-5 h-5" />
              <span class="text-sm uppercase tracking-wide">Transportation</span>
            </div>
            <h2 class="text-5xl text-gray-900 mb-4">{{ sections[0].title }}</h2>
            <p class="text-xl text-amber-600 mb-6">{{ sections[0].subtitle }}</p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">{{ sections[0].description }}</p>

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

          <!-- Port Card (appears on left when map is on right) -->
          <div
            ref="portCard"
            class="absolute max-w-lg opacity-0"
            :class="{ 'pointer-events-none': animationState.activeSection !== 'port' }"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6"
            >
              <Icon name="ship" size="24" class="w-5 h-5" />
              <span class="text-sm uppercase tracking-wide">Maritime</span>
            </div>
            <h2 class="text-5xl text-gray-900 mb-4">{{ sections[2].title }}</h2>
            <p class="text-xl text-amber-600 mb-6">{{ sections[2].subtitle }}</p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">{{ sections[2].description }}</p>

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

          <!-- Amenities Map Section (when map is on left) -->
          <div
            v-if="mapOnLeft && isAmenitySection"
            class="absolute inset-0 flex flex-col items-center justify-center p-12"
          >
            <!-- This area shows the map when it's on the left side -->
          </div>
        </div>

        <!-- Right Side Cards Container -->
        <div class="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center p-12">
          <!-- Airport Card (appears on right when map is on left) -->
          <div
            ref="airportCard"
            class="absolute max-w-lg opacity-0"
            :class="{ 'pointer-events-none': animationState.activeSection !== 'airport' }"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 mb-6"
            >
              <Icon name="plane" size="24" class="w-5 h-5" />
              <span class="text-sm uppercase tracking-wide">Aviation</span>
            </div>
            <h2 class="text-5xl text-gray-900 mb-4">{{ sections[1].title }}</h2>
            <p class="text-xl text-amber-600 mb-6">{{ sections[1].subtitle }}</p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">{{ sections[1].description }}</p>

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

          <!-- Amenity Cards (appear on right when map is on left) -->
          <div
            v-for="(amenity, index) in amenities"
            :key="index"
            :class="[
              'amenity-card-' + index,
              'absolute w-full max-w-xl opacity-0',
              { 'pointer-events-none': animationState.activeSection !== `amenity-${index}` },
            ]"
          >
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <!-- Image -->
              <div class="relative h-72 overflow-hidden">
                <img :src="amenity.image" :alt="amenity.name" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div class="absolute bottom-6 left-6 text-white">
                  <div class="flex items-center gap-3 mb-3">
                    <div
                      class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
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

                <p class="text-xl text-gray-700 leading-relaxed">{{ amenity.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <!-- Section indicators -->
          <div class="flex items-center gap-2">
            <div
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                animationState.activeSection === 'highway' ? 'bg-sky-600 scale-125' : 'bg-gray-300',
              ]"
              title="Highway 69"
            />
            <div
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                animationState.activeSection === 'airport'
                  ? 'bg-cyan-600 scale-125'
                  : 'bg-gray-300',
              ]"
              title="Airport"
            />
            <div
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                animationState.activeSection === 'port' ? 'bg-blue-600 scale-125' : 'bg-gray-300',
              ]"
              title="Port"
            />
            <div class="w-px h-4 bg-gray-300 mx-2" />
            <!-- Amenity indicators -->
            <div
              v-for="(_, index) in amenities"
              :key="index"
              :class="[
                'h-2 rounded-full transition-all duration-300',
                animationState.activeSection === `amenity-${index}`
                  ? 'w-6 bg-amber-500'
                  : 'w-2 bg-gray-300',
              ]"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Version -->
    <div class="lg:hidden bg-white">
      <!-- Transportation Sections -->
      <section v-for="section in sections" :key="section.id" class="py-16 px-4">
        <div class="max-w-2xl mx-auto">
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

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl mb-6">Experience Our Strategic Advantage</h2>
        <p class="text-xl text-blue-100 mb-8">
          See how our location connects you to continental and global markets
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors shadow-xl"
          >
            Schedule a Tour
          </router-link>
          <router-link
            to="/process"
            class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            View Entry Process
          </router-link>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
