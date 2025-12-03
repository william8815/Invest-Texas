<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

import Icon from "@/components/base/Icon.vue";
// config
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

const navItems = [
  {
    label: "Why Texas",
    children: [
      {
        label: "Tariff Solution",
        path: "tariff-advantage",
        name: "tariff-advantage",
        description: "Navigate Trump's tariff policies",
      },
      {
        label: "Strategic Location",
        path: "site-location",
        name: "site-location ",
        description: "Tri-modal transportation access",
      },
    ],
  },
  {
    label: "Process",
    path: "process",
    name: "process",
  },
  {
    label: "Services",
    megaMenuSections: [
      {
        title: "FACILITIES",
        items: [
          {
            label: "Houston IBC",
            path: "facility_IBCenter",
            name: "facility-IBCenter",
            description: "60,000 sqft in Houston",
          },
          {
            label: "USMCA Park",
            path: "facility_USMCAPark",
            name: "facility-USMCAPark",
            description: "480 acres development",
          },
          {
            label: "Texas*69 Outlet",
            path: "facility_Texas69",
            name: "facility-Texas69",
            description: "18 acres highway frontage",
          },
          {
            label: "Mexico Facility",
            path: "facility_Lintel",
            name: "facility-Lintel",
            description: "Low-cost manufacturing",
          },
        ],
      },
      {
        title: "PROJECTS",
        items: [
          {
            label: "X * AI PC",
            path: "projects_X-AI-PC",
            name: "projects-X-AI-PC",
            description: "AI-powered computing solutions",
          },
          {
            label: "IonOxy Air System",
            path: "projects_Ionoxy-AI",
            name: "projects-Ionoxy-AI",
            description: "Advanced air purification",
          },
          {
            label: "Modular HomeLift",
            path: "projects_Home-Lift",
            name: "projects-Home-Lift",
            description: "Residential elevator systems",
          },
          {
            label: "Leisure RV Villas",
            path: "projects_RV-Villas",
            name: "projects-RV-Villas",
            description: "Luxury RV accommodations",
          },
          {
            label: "School Front Villas",
            path: "projects_School-Villas",
            name: "projects-School-Villas",
            description: "Educational community living",
          },
          {
            label: "Finance / Go Public",
            path: "projects_Finance-Ipo",
            name: "projects-Finance-Ipo",
            description: "IPO & financing support",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    path: "pricing",
    name: "pricing",
  },
  {
    label: "Team",
    path: "team",
    name: "team",
  },
];

const isPathActive = (item) => {
  if (item.path && route.path === item.path) return true;
  if (item.children) {
    return item.children.some((child) => route.path === child.path);
  }
  if (item.megaMenuSections) {
    return item.megaMenuSections.some((section) =>
      section.items.some((child) => route.path === child.path)
    );
  }
  return false;
};

const isOpen = ref(false);
const activeDropdown = ref(null);
const activeMegaSection = ref("FACILITIES");
const isMegaMenuHovered = ref(false);
const closeTimeoutRef = ref(null);

watch(
  () => isOpen.value,
  (state) => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);

const handleNavItemEnter = (label) => {
  // Clear any pending close timeout
  if (closeTimeoutRef.value) {
    clearTimeout(closeTimeoutRef.value);
  }

  activeDropdown.value = label;
  if (label === "Services") {
    activeMegaSection.value = "FACILITIES"; // Reset to first section when switching to Services
  }
};
const handleNavItemLeave = () => {
  // Set a timeout before closing - gives time for mouse to reach mega menu
  const timeout = setTimeout(() => {
    if (!isMegaMenuHovered) {
      activeDropdown.value = null;
    }
  }, 150); // 150ms delay

  if (closeTimeoutRef.value) {
    clearTimeout(closeTimeoutRef.value);
  }
  closeTimeoutRef.value = timeout;
};
</script>

<template>
  <div class="bg-white/40 backdrop-blur-md shadow-md sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-3 items-center">
        <!-- left: logo -->
        <div class="justify-self-start py-5">
          <a :href="`${pathUrl}home`" class="flex items-center space-x-3 group">
            <div
              class="w-12 h-12 bg-gradient-to-br from-sky-600 to-cyan-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow"
            >
              <span class="text-xl">IT</span>
            </div>
            <div class="hidden sm:block">
              <div class="text-xl text-gray-900">InvesTexas</div>
              <div class="text-xs text-gray-500">Invest in Texas</div>
            </div>
          </a>
        </div>

        <!-- center : Desktop Navigation -->
        <div class="hidden lg:flex items-center justify-center space-x-0.5">
          <div
            v-for="item in navItems"
            :key="item.id"
            @mouseEnter="handleNavItemEnter(item.label)"
            @mouseLeave="handleNavItemLeave"
          >
            <template v-if="item?.path">
              <a
                :href="`${pathUrl}${item.path}`"
                class="px-3 py-8 rounded-lg transition-colors text-[15px] whitespace-nowrap"
                :class="isPathActive(item) ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'"
                >{{ item.label }}</a
              >
            </template>
            <template v-else>
              <button
                class="px-3 py-8 rounded-lg transition-colors flex items-center space-x-1 text-[15px] whitespace-nowrap"
                :class="isPathActive(item) ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'"
              >
                <span>{{ item.label }}</span>
                <Icon name="arrow_down" size="20" />
              </button>
            </template>
          </div>
        </div>

        <!-- Right: CTA Button & Mobile Menu Button -->
        <div class="justify-self-end flex items-center gap-3 py-5">
          <a
            :href="`${pathUrl}contact`"
            class="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all text-sm sm:text-base group"
          >
            <span class="hidden sm:inline">Contact Us</span>
            <span class="sm:hidden">Contact</span>
          </a>
          <!-- mobile menu button -->
          <button
            class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            @click="isOpen = !isOpen"
          >
            {{ isOpen ? "X" : "三" }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- header -->
  <!-- <header>
    <h1 class="text-2xl font-bold underline">Invest in Texas</h1>
    <nav></nav>

    <div class=""></div>
  </header> -->
</template>
