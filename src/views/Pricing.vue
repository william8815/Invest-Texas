<script setup>
import { ref, onMounted } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

const pricingTiers = [
  {
    icon: "buildings",
    category: "Office & Showroom Spaces",
    items: [
      { service: "Virtual Office", price: "From $99/month", note: "Include basic Showroom Space" },
      {
        service: "Multimedia Product Showroom Space",
        price: "From $50 per 27 cuft/month",
        note: null,
      },
      { service: "Operation Office Space", price: "From $1.20/sqft/month", note: null },
      {
        service: "Sales Showroom Office",
        price: "From $1.50/sqft/month",
        note: "With whole glass frontage",
      },
    ],
  },
  {
    icon: "file_text",
    category: "Business Setup Services",
    items: [
      {
        service: "US Visa Application",
        price: "Free Service",
        note: "With our other service (only Lawyer & CPA Charge)",
      },
      {
        service: "Company Setup Service",
        price: "Free Service",
        note: "With our other service (only Lawyer & CPA Charge)",
      },
    ],
  },
  {
    icon: "factory",
    category: "Manufacturing & Development",
    items: [
      { service: "Manufacturing Space or Custom Building", price: "Market Price", note: null },
      { service: "Foreign Trade Zone Space Rental & Operation", price: "Market Price", note: null },
    ],
  },
  {
    icon: "earth",
    category: "Global Services",
    items: [
      { service: "American Continental After-Sale Service", price: "Negotiable", note: null },
      { service: "Global Marketing Service", price: "Negotiable", note: null },
      {
        service: "Mexico Facility for Low Cost Service/Manufacturing",
        price: "Negotiable",
        note: null,
      },
    ],
  },
  {
    icon: "dollar",
    category: "Finance & Investment",
    items: [
      {
        service: "Operation Loan & Company Go Public Service",
        price: "Negotiable",
        note: "In USMCA Countries",
      },
      { service: "USMCA Materials Purchasing Service", price: "Negotiable", note: null },
    ],
  },
  {
    icon: "hand_shake",
    category: "Custom Solutions",
    items: [
      { service: "Custom Request Service", price: "Negotiable", note: "Tailored to your needs" },
    ],
  },
];

const valueAddedServices = [
  "38 years of international business experience",
  "US Foreign Trade Zone (FTZ) expertise",
  "Access to New York finance partners",
  "Pan-American Highway logistics support",
  "Market survey and wholesale promotion",
  "Company operation consultancy by Dr. Lin",
  "After-sales service infrastructure",
];

const specialOffers = [
  {
    title: "Property Partnership",
    description:
      "Our property or finance support could be part of your investment as share partner",
  },
  {
    title: "Profit Guarantee",
    description: "Your investment could be guaranteed by our Special Profit Guaranteed Program",
  },
  {
    title: "Flexible Terms",
    description: "Negotiate custom terms that work best for your business model",
  },
];

const notablePricing = [
  { label: "Virtual Office", price: "$99", period: "/month" },
  { label: "Showroom Office", price: "$250", period: "/month" },
  { label: "Texas69 Land", price: "$250k", period: "/acre" },
  { label: "Mexico Floor", price: "$0.35", period: "/sqft/month" },
];

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

  // Pricing Tables
  const pricingCards = document.querySelectorAll(".pricing__card");
  const pricingCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let items = entry.target.querySelectorAll(".pricing__item");
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.classList.remove("opacity-0", "translate-x-10");
          item.classList.add("opacity-100", "translate-x-0");
          setTimeout(() => {
            item.style.transitionDelay = "0s";
          }, 500);
        });
        pricingCardsObserver.unobserve(entry.target);
      }
    });
  }, options);
  pricingCards.forEach((card) => {
    pricingCardsObserver.observe(card);
  });

  // Value Added Services
  const servicesContent = document.querySelector(".services__content");
  const servicesContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        servicesContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  servicesContentObserver.observe(servicesContent);

  const servicesItems = document.querySelectorAll(".services__item");
  const servicesItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        setTimeout(() => {
          entry.target.style.transitionDelay = "0s";
        }, 500);
        servicesItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  servicesItems.forEach((item) => {
    servicesItemsObserver.observe(item);
  });

  // Special Offers
  const offersContent = document.querySelector(".offers__content");
  const offersContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        offersContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  offersContentObserver.observe(offersContent);

  const offersItems = document.querySelectorAll(".offers__item");
  const offersItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        setTimeout(() => {
          entry.target.style.transitionDelay = "0s";
        }, 500);
        offersItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  offersItems.forEach((item) => {
    offersItemsObserver.observe(item);
  });

  // Notable Pricing
  const notableContent = document.querySelector(".notable__content");
  const notableContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        notableContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  notableContentObserver.observe(notableContent);

  const notableItems = document.querySelectorAll(".notable__item");
  const notableItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        setTimeout(() => {
          entry.target.style.transitionDelay = "0s";
        }, 500);
        notableItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  notableItems.forEach((item) => {
    notableItemsObserver.observe(item);
  });

  // CTA
  const ctaContent = document.querySelector(".cta__content");
  const ctaContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        ctaContentObserver.unobserve(entry.target);
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
          <h1 class="text-5xl md:text-6xl mb-6">Pricing & Services</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent pricing for all our facilities and services
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Tables -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-12">
          <div
            v-for="tier in pricingTiers"
            :key="tier.category"
            class="pricing__card bg-white rounded-2xl shadow-xl overflow-hidden opacity-0 translate-y-10 transition-all duration-500"
          >
            <div class="bg-gradient-to-r from-sky-600 to-amber-500 p-6">
              <div class="flex items-center space-x-3 text-white">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon :name="tier.icon" size="24" />
                </div>
                <h2 class="text-2xl">{{ tier.category }}</h2>
              </div>
            </div>

            <div class="p-8">
              <div class="space-y-6">
                <div
                  v-for="item in tier.items"
                  :key="item.service"
                  class="pricing__item flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 opacity-0 translate-x-10 transition-all duration-500"
                >
                  <div class="flex-1 mb-2 md:mb-0">
                    <h3 class="text-lg text-gray-900 mb-1">{{ item.service }}</h3>
                    <p v-if="item.note" class="text-sm text-gray-600">{{ item.note }}</p>
                  </div>
                  <div class="flex items-center">
                    <span class="text-xl text-amber-600 font-semibold whitespace-nowrap">
                      {{ item.price }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Added Services -->
    <section
      class="services__section py-20 bg-gradient-to-br from-blue-900 to-emerald-900 text-white"
    >
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="services__content text-center mb-12 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 class="text-4xl mb-4">Value-Added Services Included</h2>
          <p class="text-xl text-blue-100">Additional benefits that come with our partnership</p>
        </div>

        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div class="services__list grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="service in valueAddedServices"
              :key="service"
              class="services__item flex items-start space-x-3 opacity-0 translate-y-10 transition-all duration-500"
            >
              <Icon name="check" size="24" class="text-green-400 flex-shrink-0 mt-0.5" />
              <span class="text-blue-100">{{ service }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="offers__section py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="offers__content text-center mb-12 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 class="text-4xl text-gray-900 mb-4">Flexible Investment Options</h2>
          <p class="text-xl text-gray-600">We offer multiple ways to structure your investment</p>
        </div>

        <div class="offers__list grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="option in specialOffers"
            :key="option.title"
            class="offers__item bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-xl border border-blue-100 opacity-0 translate-y-10 transition-all duration-500"
          >
            <h3 class="text-xl text-gray-900 mb-3">{{ option.title }}</h3>
            <p class="text-gray-700">{{ option.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notable Pricing -->
    <section class="notable__section py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="notable__content text-center mb-12 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 class="text-4xl text-gray-900 mb-4">Quick Price Reference</h2>
          <p class="text-xl text-gray-600">Starting prices for popular services</p>
        </div>

        <div class="notable__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in notablePricing"
            :key="item.label"
            class="notable__item bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-100 hover:border-blue-300 opacity-0 translate-y-10 transition-all duration-500"
          >
            <div class="text-sm text-gray-600 mb-2">{{ item.label }}</div>
            <div class="text-3xl text-amber-600 font-bold mb-1">{{ item.price }}</div>
            <div class="text-sm text-gray-500">{{ item.period }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta__section py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="cta__content text-center opacity-0 translate-y-10 transition-all duration-500">
          <h2 class="text-4xl mb-6">Ready to Discuss Your Needs?</h2>
          <p class="text-xl text-blue-100 mb-8">
            Contact us for a customized quote tailored to your business requirements
          </p>
          <a
            :href="`${pathUrl}contact`"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20 group"
          >
            Get a Custom Quote
            <Icon
              name="arrow_forward"
              size="20"
              class="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
