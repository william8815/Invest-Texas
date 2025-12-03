<script setup>
import { ref } from "vue";
import DefaultLayout from "@/layouts/default.vue";
// config
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;
// components
import Icon from "@/components/base/Icon.vue";

const steps = [
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
    image:
      "https://images.unsplash.com/photo-1697869812795-8a8014cd53a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDE2NjkwNnww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1599765824376-a87eb981b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGZsb29yfGVufDF8fHx8MTc2NDA3MzQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY0MTY3MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      "After Sale Service support",
      "Operations in both USA & Mexico",
      "Alongside Hwy 69 - Pan-American Highway",
      "Branch offices for after-sales service",
    ],
    imagePlaceholder: "Houston & Mexico Operations + Pan-American Highway",
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
  },
];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section  -->
    <section
      class="relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-blue-900 text-white overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl mb-6">Investment Process</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Six strategic steps to establish and grow your business in Texas
          </p>
        </div>
      </div>
    </section>

    <!-- Steps with Timeline -->
    <section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div
        class="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-sky-600 to-amber-500 origin-top hidden lg:block"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-24">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="flex flex-col gap-12 items-center relative"
            :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Timeline Dot  -->
            <div class="absolute left-1/2 -translate-x-1/2 hidden lg:block z-10">
              <div>
                <div
                  class="w-20 h-20 bg-gradient-to-br from-sky-600 to-amber-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-white"
                >
                  {{ step.number }}
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 lg:w-1/2">
              <div class="flex items-center gap-4 mb-6">
                <!-- Mobile Number Badge -->
                <div
                  class="w-16 h-16 bg-gradient-to-br from-sky-600 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 lg:hidden"
                >
                  {{ step.number }}
                </div>
                <!-- icon -->
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
                  <div>
                    <ul class="space-y-3">
                      <li
                        v-for="feature in step.features"
                        :key="feature"
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
            </div>

            <!-- Image -->
            <div class="flex-1 lg:w-1/2 w-full">
              <div>
                <template v-if="step.image">
                  <div class="w-full h-80 object-cover rounded-2xl shadow-2xl">
                    <img :src="step.image" :alt="step.title" class="w-full h-full object-cover" />
                  </div>
                </template>
                <template v-else>
                  <div
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
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Visual -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl mb-4">Your Journey to Success</h2>
          <p class="text-xl text-blue-200">From showroom to IPO - we support you every step</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div v-for="step in steps" :key="step.number" class="text-center group cursor-pointer">
            <div
              class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl mx-auto mb-3 border-2 border-white/30 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-300"
            >
              {{ step.number }}
            </div>
            <p class="text-sm text-blue-200 group-hover:text-white transition-colors">
              {{ step.title }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
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
