<script setup>
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

const partners = [
  "American Wall Street Listed Group Inc",
  "Cannondale Financial LLC",
  "Project Master LLC",
];
</script>

<template>
  <DefaultLayout>
    <section
      class="relative py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          :href="`/services-overview`"
          class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
        >
          <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
          Back to Overview
        </a>
        <div class="text-center">
          <Icon name="trending_up" size="20" class="w-20 h-20 mx-auto mb-6 text-emerald-400" />
          <h1 class="text-5xl md:text-6xl mb-6">Finance & Go Public</h1>
          <p class="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto">
            IPO Support & Financial Services
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-4xl text-gray-900 mb-6">Your Path to Going Public</h2>
            <p class="text-lg text-gray-700 mb-6">
              We partner with leading New York financial institutions to provide comprehensive IPO
              support and financing solutions. Our team guides you through every step of the
              process, from initial preparation to successful listing on NASDAQ or other major
              exchanges.
            </p>
            <div class="mb-6">
              <h3 class="text-xl text-gray-900 mb-3">Our Finance Partners:</h3>
              <ul class="space-y-2">
                <li
                  v-for="(partner, idx) in partners"
                  :key="idx"
                  class="flex items-start space-x-3"
                >
                  <Icon
                    name="buildings"
                    size="16"
                    class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1"
                  />
                  <span class="text-gray-700">{{ partner }}</span>
                </li>
              </ul>
            </div>
            <a
              href="/contact"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg hover:from-emerald-700 hover:to-teal-600 transition-all shadow-lg"
            >
              Schedule Consultation <Icon name="arrow_forward" size="16" class="ml-2 w-5 h-5" />
            </a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Financial Services"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div>
              <div className="text-5xl mb-2 text-emerald-300">
                <span>3</span>
              </div>
              <div className="text-teal-200">NY Finance Partners</div>
            </div>
          </div>
          <div>
            <div>
              <div className="text-5xl mb-2 text-emerald-300">
                <span>38 yrs</span>
              </div>
              <div className="text-teal-200">Industry Experience</div>
            </div>
          </div>
          <div>
            <div>
              <div className="text-5xl mb-2 text-emerald-300">
                <span>100%</span>
              </div>
              <div className="text-teal-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
