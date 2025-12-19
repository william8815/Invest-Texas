<script setup>
import { onMounted } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

const investmentProjects = [
  {
    icon: "cpu",
    title: "X * AI PC",
    description: "We will use AI PC Products in our RV Product",
    href: "projects_X-AI-PC",
  },
  {
    icon: "wind",
    title: "IonOxy Air System",
    description: "We will use Patented Ion-Oxygen Products in our RV Product",
    href: "projects_Ionoxy-Air",
  },
  {
    icon: "home",
    title: "Modular HomeLift",
    description: "We could use Patented Home Lift Products in our 2 Floor RV Product",
    href: "projects_Home-Lift",
  },
  {
    icon: "buildings",
    title: "Leisure RV Villas",
    description: "We could use our RV in our Leisure (RV) Villas",
    href: "projects_RV-Villas",
  },
  {
    icon: "villa",
    title: "School Front Villas",
    description: "We are developing Villas Condo in front of New School District",
    href: "projects_School-Villas",
  },
  {
    icon: "dollar",
    title: "Finance / Go Public",
    description: "We could Finance Investor for their operation or even go public",
    href: "projects_Finance-Ipo",
  },
];

const facilities = [
  {
    isd: "international-biz-center",
    title: "International Biz Center",
    size: "60,000 sqft",
    location: "Center of Houston Wholesale Area",
    description:
      "Houston is the largest city in Texas, Harwin Drive is the largest Wholesale Area in Houston. International Biz Center is the Landmark on Harwin Drive.",
    features: [
      "Wholesale Showroom & Office",
      "National-wide sales support",
      "Landmark location on Harwin Drive",
      "US Foreign Trade Zone member",
      "Rental from $250/month",
    ],
    website: "www.InternationalBizCenter.com",
    image:
      "https://images.unsplash.com/photo-1726802147453-a3c55327e1ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGhvdXN0b258ZW58MXx8fHwxNzY0MTY2OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link_name: "facility_IBCenter",
  },
  {
    id: "usmca-park",
    title: "USMCA Park",
    size: "480 acres",
    location: "Cross USA Hwy 69",
    description:
      "80 acres New School District & Gas Store have been in USMCA Park. 400 acres Golden Property Development to be the Future Utopia for Biz & Life.",
    features: [
      "School, Gas Station built-in",
      "US FTZ 171 Reservation",
      "4D AI Green Construction Idea",
      "Access to Interstate Hwy 69",
      "Pan-America Highway connection",
      "20 miles to IAH Airport",
      "40 miles to Houston Ocean Port",
    ],
    website: "www.USMCAPARK.US",
    image:
      "https://images.unsplash.com/photo-1649206349711-74ec8951dbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXhhcyUyMGFlcmlhbCUyMHZpZXclMjBpbmR1c3RyaWFsJTIwcGFya3xlbnwxfHx8fDE3NjQxNjY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link_name: "facility_USMCAPark",
  },
  {
    id: "texas69-outlet",
    title: "Texas*69 Global Outlet Place",
    size: "18 acres",
    location: "US Cross Country Hwy 69 @ E. River Rd",
    description:
      "1,600 ft. frontage on US Cross Country Hwy 69. Right at Intersection of Hwy 69 & East River Dr. Excellent for both Local & Export Sales to Latin Countries.",
    features: [
      "1,600 ft. Highway frontage",
      "Strategic intersection location",
      "Part of Pan-American Highway",
      "Land Sale from $250k/acre",
      "Land Rental from $1,000/ac/month",
    ],
    website: "www.Texas69.us",
    image:
      "https://images.unsplash.com/photo-1758429551604-885ca2c55ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cmFuc3BvcnRhdGlvbiUyMGhpZ2h3YXl8ZW58MXx8fHwxNzY0MTY2OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link_name: "facility_Texas69",
  },
  {
    id: "mexican-facility",
    title: "Mexican Facility - Lintel de Mex",
    size: "50,000 sqft + 120,000 sqft",
    location: "Reynosa, Tamaulipas, Mexico",
    description:
      "Support Low Cost Manufacturing or After-Sales Service. Manufacturing Floor Space + Outlet Show Space to serve Latin Area.",
    features: [
      "50,000 sqft Manufacturing Floor",
      "120,000 sqft Outlet Show Space",
      "Only One Engineer needed for pilot run",
      "Floor Space Rental $0.35/sqft/month",
      "Latin America market access",
    ],
    website: "www.Lintelmex.com",
    image:
      "https://images.unsplash.com/photo-1599765824376-a87eb981b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGZsb29yfGVufDF8fHx8MTc2NDA3MzQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    link_name: "facility_Lintel",
  },
];

const infrastructureHighlights = [
  { icon: "buildings", label: "60K+ sqft", description: "Houston Facility" },
  { icon: "earth", label: "480 Acres", description: "USMCA Park" },
  { icon: "factory", label: "50K sqft", description: "Mexico Manufacturing" },
  { icon: "truck", label: "Pan-American", description: "Highway Access" },
];

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  // Hero Section
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

  // Investment Projects
  const projectsTitle = document.querySelector(".projects__title");
  const projectsDescription = document.querySelector(".projects__description");
  const projectsTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        projectsTitleObserver.unobserve(entry.target);
      }
    });
  }, options);
  const projectsDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        projectsDescriptionObserver.unobserve(entry.target);
      }
    });
  }, options);
  projectsTitleObserver.observe(projectsTitle);
  projectsDescriptionObserver.observe(projectsDescription);

  const projectsList = document.querySelector(".projects__list");
  const projectsListObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let items = entry.target.querySelectorAll(".projects__item");
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.classList.remove("opacity-0", "translate-x-10");
          item.classList.add("opacity-100", "translate-x-0");
          setTimeout(() => {
            item.style.transitionDelay = "0s";
          }, 500);
        });
        projectsListObserver.unobserve(entry.target);
      }
    });
  }, options);
  projectsListObserver.observe(projectsList);

  // Facilities
  const facilitiesTitle = document.querySelector(".facilities__title");
  const facilitiesDescription = document.querySelector(".facilities__description");
  const facilitiesTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        facilitiesTitleObserver.unobserve(entry.target);
      }
    });
  }, options);
  const facilitiesDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        facilitiesDescriptionObserver.unobserve(entry.target);
      }
    });
  }, options);
  facilitiesTitleObserver.observe(facilitiesTitle);
  facilitiesDescriptionObserver.observe(facilitiesDescription);

  const facilitiesItems = document.querySelectorAll(".facilities__item");
  const facilitiesItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        facilitiesItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  facilitiesItems.forEach((item) => {
    facilitiesItemsObserver.observe(item);
  });

  // Infrastructure Highlights
  const infrastructureTitle = document.querySelector(".infrastructure__title");
  const infrastructureDescription = document.querySelector(".infrastructure__description");
  const infrastructureTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[-100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        infrastructureTitleObserver.unobserve(entry.target);
      }
    });
  }, options);
  const infrastructureDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        infrastructureDescriptionObserver.unobserve(entry.target);
      }
    });
  }, options);
  infrastructureTitleObserver.observe(infrastructureTitle);
  infrastructureDescriptionObserver.observe(infrastructureDescription);

  const infrastructureList = document.querySelector(".infrastructure__list");
  const infrastructureListObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let items = entry.target.querySelectorAll(".infrastructure__item");
      if (entry.isIntersecting) {
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.classList.remove("opacity-0", "translate-y-10");
          item.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            item.style.transitionDelay = "0s";
          }, 500);
        });
        infrastructureListObserver.unobserve(entry.target);
      }
    });
  }, options);
  infrastructureListObserver.observe(infrastructureList);

  // CTA Section
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
      class="hero__section relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-900 text-white overflow-x-hidden"
    >
      <div
        class="hero__content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-500"
      >
        <div class="text-center">
          <h1 class="hero__title text-5xl md:text-6xl mb-6">Master Plan & Facilities</h1>
          <p class="hero__description text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive infrastructure and investment opportunities across Texas and Mexico
          </p>
        </div>
      </div>
    </section>

    <!-- Investment Projects -->
    <section class="projects__section py-20 bg-white overflow-x-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="projects__title text-4xl text-gray-900 mb-4 opacity-0 translate-y-10 transition-all duration-500"
          >
            Investment Projects
          </h2>
          <p
            class="projects__description text-xl text-gray-600 opacity-0 translate-y-10 transition-all duration-500"
          >
            Innovative projects available for investors
          </p>
        </div>

        <div className="projects__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            v-for="project in investmentProjects"
            :key="project.title"
            class="projects__item opacity-0 translate-x-10 transition-all duration-500 block bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl border border-blue-100 group hover:shadow-lg"
            :href="`${pathUrl}${project.href}`"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-sky-500 to-amber-400 rounded-lg flex items-center justify-center text-white mb-4 shadow-md"
            >
              <Icon :name="project.icon" size="24" />
            </div>
            <h3 class="text-xl text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600">{{ project.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Main Facilities -->
    <section class="facilities__section py-20 bg-transparent overflow-x-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="facilities__title text-4xl text-gray-900 mb-4 opacity-0 translate-y-10 transition-all duration-500"
          >
            Our Facilities
          </h2>
          <p
            class="facilities__description text-xl text-gray-600 opacity-0 translate-y-10 transition-all duration-500"
          >
            Strategic locations across USA and Mexico
          </p>
        </div>

        <div class="facilities__list grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="facility in facilities"
            :key="facility.id"
            class="facilities__item opacity-0 translate-y-10 transition-all duration-500 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl"
          >
            <div class="w-full h-64">
              <img :src="facility.image" :alt="facility.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-8">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-2xl text-gray-900 mb-2">{{ facility.title }}</h3>
                  <div class="flex items-center gap-4 text-sm text-gray-600">
                    <span class="flex items-center gap-1">
                      <Icon name="buildings" size="16" />
                      {{ facility.size }}
                    </span>
                    <span class="flex items-center gap-1">
                      <Icon name="earth" size="16" />
                      {{ facility.location }}
                    </span>
                  </div>
                </div>
              </div>

              <p class="text-gray-700 mb-6 leading-relaxed">{{ facility.description }}</p>

              <div class="mb-6">
                <h4 class="text-sm text-gray-500 mb-3">KEY FEATURES</h4>
                <ul class="space-y-2">
                  <li
                    v-for="feature in facility.features.slice(0, 3)"
                    :key="feature"
                    class="flex items-start space-x-2 text-sm text-gray-700"
                  >
                    <div class="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  :href="`http://${facility.website}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-700 text-sm"
                >
                  {{ facility.website }}
                </a>
                <a
                  :href="`${pathUrl}${facility.link_name}`"
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all group"
                >
                  Learn More
                  <Icon
                    name="arrow_forward"
                    size="16"
                    class="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infrastructure Highlights -->
    <section
      class="infrastructure__section py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white overflow-x-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="infrastructure__title text-4xl mb-4 opacity-0 translate-x-[-100px] transition-all duration-500"
          >
            Complete Infrastructure Support
          </h2>
          <p
            class="infrastructure__description text-xl text-blue-100 opacity-0 translate-x-[100px] transition-all duration-500"
          >
            Everything you need for successful business operations
          </p>
        </div>

        <div class="infrastructure__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="item in infrastructureHighlights"
            :key="item.label"
            class="infrastructure__item text-center opacity-0 translate-y-10 transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30"
            >
              <Icon :name="item.icon" size="24" />
            </div>
            <div class="text-2xl mb-1">{{ item.label }}</div>
            <div class="text-blue-200">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta__section py-20 bg-white overflow-x-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="cta__content opacity-0 translate-y-10 transition-all duration-500">
          <h2 class="cta__title text-4xl text-gray-900 mb-6">Explore Our Facilities</h2>
          <p class="cta__description text-xl text-gray-600 mb-8">
            Schedule a visit to see how our infrastructure can support your business
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              :href="`${pathUrl}contact`"
              class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20 group"
            >
              Schedule a Visit
              <Icon
                name="arrow_forward"
                size="16"
                class="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              :href="`${pathUrl}site-location`"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
            >
              View Location Details
            </a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
