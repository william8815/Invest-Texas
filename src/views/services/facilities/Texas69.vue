<script setup>
import { ref } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

const facilities = {
  "texas69-outlet": {
    title: "Texas*69 Global Outlet Place",
    tagline: "18 acres with 1,600 ft. frontage on US Cross Country Hwy 69",
    location: "Hwy 69 @ E. River Rd, Texas",
    website: "www.Texas69.us",
    heroImage:
      "https://images.unsplash.com/photo-1758429551604-885ca2c55ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cmFuc3BvcnRhdGlvbiUyMGhpZ2h3YXl8ZW58MXx8fHwxNzY0MTY2OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Subject Property is right at Intersection of Hwy 69 & East River Dr. Subject Property is right on the Cross USA Hwy 69 which is Part of Pan-American Highway. Pan American Highway System, North to Canada and South to Chile & Argentina. Subject Place is excellent not only for Local Sales, but also for export Sales to Latin Countries.",
    highlights: [
      "1,600 ft. highway frontage - premium visibility",
      "Strategic intersection location at Hwy 69 & E. River Dr",
      "Part of Pan-American Highway System",
      "Direct route from Canada to Argentina",
      "Excellent for local and export sales",
      "High traffic volume area",
      "Easy access for commercial vehicles",
    ],
    pricing: [
      { item: "Land Sale", price: "From $250,000/acre" },
      { item: "Land Rental", price: "From $1,000/acre/month" },
    ],
    features: [
      "18 Acres Total",
      "1,600 ft Highway Frontage",
      "Corner Location",
      "Pan-American Highway Access",
      "High Visibility",
      "Commercial Zoning",
      "Utilities Available",
      "Easy Truck Access",
      "Export-Friendly Location",
      "Latin America Market Gateway",
    ],
  },
};

const facility = ref(facilities["texas69-outlet"]);
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section class="relative h-96 overflow-hidden">
      <img :src="facility.heroImage" :alt="facility.title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />

      <div class="absolute inset-0 flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a
            :href="`/services-overview`"
            class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
            Back to Overview
          </a>
          <div>
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
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <h2 class="text-3xl text-gray-900 mb-6">About This Facility</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              {{ facility.description }}
            </p>

            <h3 class="text-2xl text-gray-900 mb-6">Key Highlights</h3>
            <div class="space-y-4 mb-12">
              <div
                v-for="(highlight, index) in facility.highlights"
                :key="index"
                class="flex items-start space-x-3"
              >
                <Icon name="check" size="16" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p class="text-gray-700">{{ highlight }}</p>
              </div>
            </div>

            <h3 class="text-2xl text-gray-900 mb-6">Features & Amenities</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(feature, index) in facility.features"
                :key="index"
                class="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg"
              >
                <div class="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-24">
              <div
                class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200"
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

              <div class="mt-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
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
    <section class="py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
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
