<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

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

  // Overview Section
  const overviewContent = document.querySelector(".overview__content");
  const overviewImage = document.querySelector(".overview__image");
  const overviewContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        overviewContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  const overviewImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[-100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        overviewImageObserver.unobserve(entry.target);
      }
    });
  }, options);
  overviewContentObserver.observe(overviewContent);
  overviewImageObserver.observe(overviewImage);
});
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="hero__section relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          :href="`${pathUrl}/services-overview`"
          @click.prevent="router.go(-1)"
          class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
        >
          <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
          Back to Overview
        </a>
        <div class="hero__content text-center opacity-0 translate-y-10 transition-all duration-500">
          <Icon name="graduation_cap" size="20" class="w-20 h-20 mx-auto mb-6 text-blue-400" />
          <h1 class="text-5xl md:text-6xl mb-6">School Front Villas</h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Educational Community Living
          </p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="overview__content opacity-0 translate-x-[100px] transition-all duration-500">
            <h2 class="text-4xl text-gray-900 mb-6">Family-Friendly Living</h2>
            <p class="text-lg text-gray-700 mb-6">
              School Front Villas offer families the perfect combination of quality housing and
              educational access. Located adjacent to top-rated schools, our community is designed
              for families who value education and community.
            </p>
            <a
              href="/contact"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg hover:from-blue-700 hover:to-indigo-600 transition-all shadow-lg"
            >
              Learn More <Icon name="arrow_forward" size="16" class="ml-2 w-5 h-5" />
            </a>
          </div>
          <div class="overview__image opacity-0 translate-x-[-100px] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Family Community"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
