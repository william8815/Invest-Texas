<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

const facilities = {
  "international-biz-center": {
    title: "International Biz Center",
    tagline: "60,000 sqft @ Center of Houston Wholesale Area",
    location: "Harwin Drive, Houston, Texas",
    website: "www.InternationalBizCenter.com",
    heroImage:
      "https://images.unsplash.com/photo-1726802147453-a3c55327e1ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGhvdXN0b258ZW58MXx8fHwxNzY0MTY2OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Houston is the largest city in Texas, Harwin Drive is the largest Wholesale Area in Houston. Subject Facility offer Wholesale Showroom, Office & Stores plus support National wide sales. International Biz Center is the Landmark on Harwin Drive, as per magazine yelp report.",
    highlights: [
      "Located at the center of Harwin Wholesale District with 3-side Street Surrounded",
      "Landmark building featured in Yelp magazine",
      "Sinopac has been serving in International Biz 38 years as a Regular/Active member of US Foreign Trade Zone",
      "National-wide sales support infrastructure",
      "Easy access from major highways",
    ],
    pricing: [
      { item: "Showroom Office Rental", price: "From $250/month" },
      { item: "Virtual Office", price: "From $99/month" },
      { item: "Multimedia Showroom Space", price: "$50 per 27 cuft/month" },
    ],
    features: [
      "Wholesale Showroom Space",
      "Private Office Spaces",
      "Retail Store Fronts",
      "Multimedia Facilities",
      "Conference Rooms",
      "Loading Docks",
      "Ample Parking",
      "Security Systems",
      "High-Speed Internet",
      "US Foreign Trade Zone Access",
    ],
  },
};

const facility = ref(facilities["international-biz-center"]);

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
});
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section class="hero__section relative h-96 overflow-hidden">
      <img :src="facility.heroImage" :alt="facility.title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />

      <div class="absolute inset-0 flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a
            :href="`${pathUrl}/services-overview`"
            class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
            @click.prevent="router.go(-1)"
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
    <section class="description__section py-20 bg-white">
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
              <div class="features__list grid grid-cols-1 md:grid-cols-2 gap-4">
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
