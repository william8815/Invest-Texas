<script setup>
import { ref } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

const advantages = [
  {
    icon: "check_field",
    title: "Avoid Heavy Import Tariffs",
    description:
      "Manufacture or assemble in Texas/Mexico to qualify for duty-free or reduced tariff treatment under USMCA",
  },
  {
    icon: "dollar",
    title: "Free Duty Sales in USA",
    description:
      "Products manufactured within USMCA zone can be sold duty-free throughout the United States",
  },
  {
    icon: "earth",
    title: "Low Duty Global Sales",
    description: "Export to international markets with competitive advantages and lower duty rates",
  },
  {
    icon: "trending_down",
    title: "Reduced Operating Costs",
    description:
      "Lower manufacturing costs in Mexico combined with US market access and infrastructure",
  },
];

const benefits = [
  "Bypass Trump's tariff policies on direct imports from certain countries",
  "Qualify for USMCA (United States-Mexico-Canada Agreement) benefits",
  "Access to US Foreign Trade Zone (FTZ) designation for additional tax benefits",
  "Combine low-cost Mexican manufacturing with US quality standards",
  "Maintain 'Made in USA' or 'Made in North America' product status",
  "Reduce supply chain risks and shipping times",
];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="relative py-20 bg-gradient-to-br from-green-900 via-blue-900 to-blue-800 text-white overflow-hidden"
    >
      <!-- Decorative Elements -->
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-block mb-6">
            <Icon name="trending_down" size="20" class="w-20 h-20 mx-auto text-green-400" />
          </div>
          <h1 class="text-5xl md:text-6xl mb-6">Trump's Tariff Solution</h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Navigate the new tariff landscape with strategic manufacturing and assembly in the USMCA
            zone
          </p>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- The Challenge -->
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200"
          >
            <h2 class="text-3xl text-gray-900 mb-6">The Challenge</h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1"
                >
                  !
                </div>
                <p class="text-gray-700">
                  Heavy tariffs on imports from certain countries can increase costs by 25% or more
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1"
                >
                  !
                </div>
                <p class="text-gray-700">
                  Direct imports face increasing regulatory scrutiny and delays
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1"
                >
                  !
                </div>
                <p class="text-gray-700">
                  Rising costs threaten profit margins and market competitiveness
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1"
                >
                  !
                </div>
                <p className="text-gray-700">Supply chain disruptions impact business stability</p>
              </div>
            </div>
            <div class="mt-8">
              <div class="w-full h-48 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyYXBoJTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzY0MTY2OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Challenge"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <!-- The Solution -->
          <div
            class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200"
          >
            <h2 class="text-3xl text-gray-900 mb-6">The Solution</h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <Icon
                  name="check_outline"
                  size="20"
                  class="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                />
                <p class="text-gray-700">
                  Establish operations in Texas with access to USMCA benefits
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <Icon
                  name="check_outline"
                  size="20"
                  class="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                />
                <p class="text-gray-700">
                  Utilize Mexican facility for low-cost manufacturing when needed
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <Icon
                  name="check_outline"
                  size="20"
                  class="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                />
                <p class="text-gray-700">
                  Qualify for duty-free sales throughout the United States
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <Icon
                  name="check_outline"
                  size="20"
                  class="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                />
                <p class="text-gray-700">Export globally with competitive advantages</p>
              </div>
            </div>
            <div class="mt-8">
              <div class="w-full h-48 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2NDA4MTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Solution"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tariff Comparison Table -->
    <section class="py-20 bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl mb-4">Cost Comparison Analysis</h2>
          <p class="text-xl text-blue-200">See the dramatic savings with our USMCA solution</p>
        </div>

        <div class="overflow-x-auto">
          <table
            class="w-full border-collapse bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
          >
            <thead>
              <tr class="bg-white/10 border-b border-white/20">
                <th class="p-6 text-left text-lg">Scenario</th>
                <th class="p-6 text-center text-lg">Tariff Rate</th>
                <th class="p-6 text-center text-lg">Cost Impact</th>
                <th class="p-6 text-center text-lg">Time to Market</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-white/10 bg-red-500/20">
                <td class="p-6">
                  <div class="text-lg">Direct Import from China</div>
                  <div class="text-sm text-red-200">Traditional method</div>
                </td>
                <td class="p-6 text-center">
                  <div class="text-3xl text-red-300">
                    <!-- <AnimatedCounter target="{60}" suffix="%" duration="{2.5}" /> -->
                    <span>60%</span>
                  </div>
                </td>
                <td class="p-6 text-center">
                  <div class="text-3xl text-red-300">
                    <!-- <AnimatedCounter target="{45}" prefix="+" suffix="%" duration="{2.5}" /> -->
                    <span>+45%</span>
                  </div>
                </td>
                <td class="p-6 text-center text-red-200">45-60 days</td>
              </tr>

              <tr class="border-b border-white/10 bg-amber-500/20">
                <td class="p-6">
                  <div class="text-lg">Direct Manufacturing in USA</div>
                  <div class="text-sm text-amber-200">High labor costs</div>
                </td>
                <td class="p-6 text-center">
                  <div class="text-3xl text-amber-300">
                    <!-- <AnimatedCounter target="{0}" suffix="%" duration="{2.5}" /> -->
                    <span>0%</span>
                  </div>
                </td>
                <td class="p-6 text-center">
                  <div class="text-3xl text-amber-300">
                    <!-- <AnimatedCounter target="{35}" prefix="+" suffix="%" duration="{2.5}" /> -->
                    <span>+35%</span>
                  </div>
                </td>
                <td class="p-6 text-center text-amber-200">30-45 days</td>
              </tr>

              <tr class="bg-green-500/20 border border-green-400/50">
                <td class="p-6">
                  <div class="text-lg flex items-center gap-2">
                    <span class="text-2xl">✓</span>
                    InvesTexas USMCA Solution
                  </div>
                  <div class="text-sm text-green-200">Best option - Texas + Mexico</div>
                </td>
                <td class="p-6 text-center">
                  <div class="text-4xl text-green-300">
                    <!-- <AnimatedCounter target="{0}" suffix="%" duration="{2.5}" /> -->
                    <span>0%</span>
                  </div>
                  <div class="text-sm text-green-200 mt-1">Duty-free</div>
                </td>
                <td class="p-6 text-center">
                  <div class="text-4xl text-green-300">
                    <!-- <AnimatedCounter target="{0}" prefix="" suffix="%" duration="{2.5}" /> -->
                    <span>0%</span>
                  </div>
                  <div class="text-sm text-green-200 mt-1">Optimized</div>
                </td>
                <td class="p-6 text-center text-green-200">15-30 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Savings Highlight -->
        <div class="mt-12 text-center">
          <div
            class="inline-block bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 shadow-2xl"
          >
            <div class="text-lg text-white mb-2">Average Savings with InvesTexas</div>
            <div class="text-6xl text-white mb-2">
              <!-- <AnimatedCounter target="{40}" suffix="%" duration="{3}" /> -->
              <span>40%</span>
            </div>
            <div class="text-xl text-green-100">Compared to traditional import methods</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Advantages -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-900 mb-4">Strategic Advantages</h2>
          <p class="text-xl text-gray-600">How InvesTexas helps you navigate tariff policies</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(advantage, index) in advantages"
            :key="index"
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white mb-6"
            >
              <Icon :name="advantage.icon" size="30" />
            </div>
            <h3 class="text-2xl text-gray-900 mb-3">{{ advantage.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits List -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl text-gray-900 mb-4">Complete Tariff Policy Benefits</h2>
          <p class="text-xl text-gray-600">
            Everything you need to succeed in the new trade environment
          </p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
          <div class="space-y-4">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="flex items-start space-x-4 p-4 bg-white rounded-lg"
            >
              <div class="flex items-start space-x-4 p-4 bg-white rounded-lg">
                <Icon
                  name="check_outline"
                  size="20"
                  class="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                />
                <p class="text-gray-700">{{ benefit }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- USMCA & FTZ Section -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl mb-6">USMCA & Foreign Trade Zone Benefits</h2>
            <p class="text-lg text-blue-100 mb-6">
              Sinopac has been serving in International Business for 38 years as a Regular/Active
              member of US Foreign Trade Zone.
            </p>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-green-900 text-xs flex-shrink-0 mt-1"
                >
                  ✓
                </div>
                <p class="text-blue-100">Access to US FTZ 171 designation at USMCA Park</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-green-900 text-xs flex-shrink-0 mt-1"
                >
                  ✓
                </div>
                <p class="text-blue-100">Defer, reduce, or eliminate customs duties</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-green-900 text-xs flex-shrink-0 mt-1"
                >
                  ✓
                </div>
                <p class="text-blue-100">Streamlined customs procedures and compliance</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-green-900 text-xs flex-shrink-0 mt-1"
                >
                  ✓
                </div>
                <p class="text-blue-100">Expert guidance through 38 years of experience</p>
              </div>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 class="text-2xl mb-6">How It Works</h3>
            <div class="space-y-6">
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-md"
                  >
                    1
                  </div>
                  <h4 class="text-lg">Import Materials</h4>
                </div>
                <p class="text-sm text-blue-100 ml-11">Tariff-deferred entry into FTZ</p>
              </div>
              <Icon name="arrow_forward" size="20" class="text-amber-400" />
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-md"
                  >
                    2
                  </div>
                  <h4 class="text-lg">Manufacture/Assemble</h4>
                </div>
                <p class="text-sm text-blue-100 ml-11">Value-added operations</p>
              </div>
              <Icon name="arrow_forward" size="20" class="text-amber-400" />
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-md"
                  >
                    3
                  </div>
                  <h4 class="text-lg">Distribute</h4>
                </div>
                <p class="text-sm text-blue-100 ml-11">
                  Export or domestic sale with optimized duty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 class="text-4xl text-gray-900 mb-6">Ready to Navigate Tariff Policies?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Contact us to learn how we can help your business thrive in the new trade environment
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              :href="`${pathUrl}contact`"
              class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20 group"
            >
              Get Started
              <Icon
                name="arrow_forward"
                size="20"
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              :href="`${pathUrl}services-overview`"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
            >
              View Facilities
            </a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
