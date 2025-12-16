<script setup>
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";
</script>

<template>
  <DefaultLayout>
    <section
      class="relative py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          :href="`/services-overview`"
          class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
        >
          <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
          Back to Overview
        </a>
        <div class="text-center">
          <Icon name="camping" size="20" class="w-20 h-20 mx-auto mb-6 text-amber-400" />
          <h1 class="text-5xl md:text-6xl mb-6">Leisure RV Villas</h1>
          <p class="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto">
            Luxury RV Resort Community
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-4xl text-gray-900 mb-6">Premium RV Living</h2>
            <p class="text-lg text-gray-700 mb-6">
              Experience the perfect blend of adventure and luxury at our Leisure RV Villas. Located
              along Highway 69, our resort-style community offers full hookups, modern amenities,
              and a vibrant community atmosphere.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg hover:from-amber-700 hover:to-orange-600 transition-all shadow-lg"
            >
              Explore Community <Icon name="arrow_forward" size="16" class="ml-2 w-5 h-5" />
            </a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="RV Resort"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
