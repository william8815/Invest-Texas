<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

import Icon from "@/components/base/Icon.vue";

import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

// Navigation items
const navItems = [
  {
    label: "Why Texas",
    children: [
      {
        label: "Tariff Solution",
        path: "tariff-advantage",
        description: "Navigate Trump's tariff policies",
      },
      {
        label: "Strategic Location",
        path: "site-location",
        description: "Tri-modal transportation access",
      },
    ],
  },
  {
    label: "Process",
    path: "process",
  },
  {
    label: "Services",
    path: "services-overview",
    // megaMenuSections: [
    //   {
    //     title: "FACILITIES",
    //     items: [
    //       {
    //         label: "Houston IBC",
    //         path: "facility_IBCenter",
    //         description: "60,000 sqft in Houston",
    //       },
    //       {
    //         label: "USMCA Park",
    //         path: "facility_USMCAPark",
    //         description: "480 acres development",
    //       },
    //       {
    //         label: "Texas*69 Outlet",
    //         path: "facility_Texas69",
    //         description: "18 acres highway frontage",
    //       },
    //       {
    //         label: "Mexico Facility",
    //         path: "facility_Lintel",
    //         description: "Low-cost manufacturing",
    //       },
    //     ],
    //   },
    //   {
    //     title: "PROJECTS",
    //     items: [
    //       {
    //         label: "X * AI PC",
    //         path: "projects_X-AI-PC",
    //         description: "AI-powered computing solutions",
    //       },
    //       {
    //         label: "IonOxy Air System",
    //         path: "projects_Ionoxy-Air",
    //         description: "Advanced air purification",
    //       },
    //       {
    //         label: "Modular HomeLift",
    //         path: "projects_Home-Lift",
    //         description: "Residential elevator systems",
    //       },
    //       {
    //         label: "Leisure RV Villas",
    //         path: "projects_RV-Villas",
    //         description: "Luxury RV accommodations",
    //       },
    //       {
    //         label: "School Front Villas",
    //         path: "projects_School-Villas",
    //         description: "Educational community living",
    //       },
    //       {
    //         label: "Finance / Go Public",
    //         path: "projects_Finance-Ipo",
    //         description: "IPO & financing support",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    label: "Pricing",
    path: "pricing",
  },
  {
    label: "Team",
    path: "team",
  },
];

// State
const isOpen = ref(false);
const activeDropdown = ref(null);
const activeMegaSection = ref("FACILITIES");
const mobileOpenMenu = ref(null);
const mobileOpenSubMenu = ref(null);
const isMegaMenuHovered = ref(false);

let closeTimeout = null;

// Computed
const showMegaMenu = computed(() => {
  // (activeDropdown.value === "Why Texas" || activeDropdown.value === "Services")
  return activeDropdown.value !== null && activeDropdown.value === "Why Texas";
});

const activeItem = computed(() => {
  return navItems.find((item) => item.label === activeDropdown.value);
});

// Methods
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

const handleNavItemEnter = (label) => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
  activeDropdown.value = label;
  if (label === "Services") {
    activeMegaSection.value = "FACILITIES";
  }
};

const handleNavItemLeave = () => {
  closeTimeout = setTimeout(() => {
    if (!isMegaMenuHovered.value) {
      activeDropdown.value = null;
    }
  }, 150);
};

const handleMegaMenuEnter = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
  isMegaMenuHovered.value = true;
};

const handleMegaMenuLeave = () => {
  isMegaMenuHovered.value = false;
  activeDropdown.value = null;
};

const toggleMobileMenu = (label) => {
  mobileOpenMenu.value = mobileOpenMenu.value === label ? null : label;
  mobileOpenSubMenu.value = null;
};

const toggleMobileSubMenu = (label) => {
  mobileOpenSubMenu.value = mobileOpenSubMenu.value === label ? null : label;
};

// Watch for body overflow control
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

// Cleanup
onUnmounted(() => {
  document.body.style.overflow = "visible";
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
});
</script>

<template>
  <nav class="bg-white/40 backdrop-blur-md shadow-md sticky top-0 z-40 h-[70px]">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full">
      <div class="h-full grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center">
        <!-- Left: Logo -->
        <div class="justify-self-start">
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

        <!-- Center: Desktop Navigation -->
        <div class="hidden lg:flex items-center justify-center space-x-0.5">
          <div
            v-for="item in navItems"
            :key="item.label"
            @mouseenter="handleNavItemEnter(item.label)"
            @mouseleave="handleNavItemLeave"
          >
            <a
              v-if="item.path"
              :href="`${pathUrl}${item.path}`"
              :class="[
                'px-3 h-[100%] rounded-lg transition-colors text-[15px] whitespace-nowrap',
                isPathActive(item) ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600',
              ]"
            >
              {{ item.label }}
            </a>
            <button
              v-else
              :class="[
                'px-3 rounded-lg transition-colors flex items-center space-x-1 text-[15px] whitespace-nowrap',
                isPathActive(item) ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600',
              ]"
            >
              <span>{{ item.label }}</span>
              <Icon name="arrow_down" size="20" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Right: CTA Button & Mobile Menu Button -->
        <div class="justify-self-end flex items-center gap-3">
          <a
            :href="`${pathUrl}contact`"
            class="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all text-sm sm:text-base group"
          >
            <span class="hidden sm:inline">Contact Us</span>
            <span class="sm:hidden">Contact</span>
          </a>

          <button
            @click="isOpen = !isOpen"
            class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Icon v-if="isOpen" name="close" size="20" class="w-5 h-5" />
            <Icon v-else name="menu" size="20" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Unified Mega Menu Container -->
    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      leave-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="opacity-0 h-0"
      enter-to-class="opacity-100 h-auto"
      leave-from-class="opacity-100 h-auto"
      leave-to-class="opacity-0 h-0"
    >
      <div
        v-if="showMegaMenu"
        class="hidden lg:block absolute top-full left-0 w-screen bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
        @mouseenter="handleMegaMenuEnter"
        @mouseleave="handleMegaMenuLeave"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <!-- Why Texas Content -->
          <Transition
            mode="out-in"
            enter-active-class="transition-all duration-300"
            leave-active-class="transition-all duration-300"
            enter-from-class="opacity-0 -translate-x-5"
            enter-to-class="opacity-100 translate-x-0"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 translate-x-5"
          >
            <div v-if="activeDropdown === 'Why Texas' && activeItem?.children" key="why-texas">
              <div class="max-w-md">
                <div class="space-y-2">
                  <a
                    v-for="child in activeItem.children"
                    :key="child.path"
                    :href="`${pathUrl}${child.path}`"
                    class="block px-6 py-4 hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 rounded-lg transition-colors group/item"
                  >
                    <div class="text-gray-900 group-hover/item:text-sky-600 transition-colors mb-1">
                      {{ child.label }}
                    </div>
                    <div v-if="child.description" class="text-sm text-gray-500">
                      {{ child.description }}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- Services Content -->
            <div
              v-else-if="activeDropdown === 'Services' && activeItem?.megaMenuSections"
              key="services"
            >
              <div class="grid grid-cols-4 gap-8">
                <!-- Left Column: Parent Categories -->
                <div class="col-span-1 border-r border-gray-200 pr-6">
                  <div class="space-y-1">
                    <button
                      v-for="section in activeItem.megaMenuSections"
                      :key="section.title"
                      @mouseenter="activeMegaSection = section.title"
                      :class="[
                        'w-full text-left px-4 py-3 rounded-lg transition-all',
                        activeMegaSection === section.title
                          ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100',
                      ]"
                    >
                      <div class="text-sm uppercase tracking-wide">
                        {{ section.title }}
                      </div>
                    </button>
                  </div>
                </div>

                <!-- Right Column: Child Items -->
                <div class="col-span-3">
                  <Transition
                    mode="out-in"
                    enter-active-class="transition-all duration-300"
                    leave-active-class="transition-all duration-300"
                    enter-from-class="opacity-0 translate-x-5"
                    enter-to-class="opacity-100 translate-x-0"
                    leave-from-class="opacity-100 translate-x-0"
                    leave-to-class="opacity-0 -translate-x-5"
                  >
                    <div>
                      <div v-for="section in activeItem.megaMenuSections" :key="section.title">
                        <div
                          v-show="activeMegaSection === section.title"
                          class="grid grid-cols-1 md:grid-cols-2 gap-2"
                        >
                          <a
                            v-for="menuItem in section.items"
                            :key="menuItem.path"
                            :href="`${pathUrl}${menuItem.path}`"
                            class="block px-6 py-4 rounded-lg hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 transition-colors group/item"
                          >
                            <div
                              class="text-gray-900 group-hover/item:text-sky-600 transition-colors mb-1"
                            >
                              {{ menuItem.label }}
                            </div>
                            <div v-if="menuItem.description" class="text-sm text-gray-500">
                              {{ menuItem.description }}
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Decorative Bottom Bar -->
        <div class="h-1 bg-gradient-to-r from-sky-600 via-cyan-500 to-amber-500" />
      </div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        @click="isOpen = false"
        class="lg:hidden fixed inset-0 bg-black/70 z-[9998] h-screen w-screen"
      />
    </Transition>

    <!-- Drawer -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      leave-active-class="transition-transform duration-300 ease-in-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        class="lg:hidden fixed top-0 right-0 h-screen w-full max-w-[300px] bg-white z-[9999] shadow-2xl overflow-y-auto"
      >
        <!-- Drawer Header -->
        <div
          class="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between z-10 h-[70px]"
        >
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-gradient-to-br from-sky-600 to-cyan-600 rounded-lg flex items-center justify-center text-white"
            >
              <span class="text-sm">IT</span>
            </div>
            <span class="text-gray-900">Menu</span>
          </div>
          <button
            @click="isOpen = false"
            class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Icon name="close" size="20" class="w-5 h-5" />
          </button>
        </div>

        <!-- Drawer Content -->
        <div class="px-4 py-4 space-y-2">
          <div v-for="item in navItems" :key="item.label">
            <!-- Simple link -->
            <a
              v-if="item.path"
              :href="`${pathUrl}${item.path}`"
              @click="isOpen = false"
              :class="[
                'block px-4 py-3 rounded-lg transition-colors',
                isPathActive(item)
                  ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100',
              ]"
            >
              {{ item.label }}
            </a>

            <!-- Regular dropdown (Why Texas) -->
            <div v-else-if="item.children">
              <button
                @click="toggleMobileMenu(item.label)"
                :class="[
                  'w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors',
                  isPathActive(item) ? 'bg-sky-50 text-sky-600' : 'text-gray-700 hover:bg-gray-100',
                ]"
              >
                <span>{{ item.label }}</span>
                <Icon
                  name="arrow_down"
                  size="20"
                  class="w-5 h-5"
                  :class="[mobileOpenMenu === item.label ? 'rotate-180' : '']"
                />
              </button>
              <Transition
                enter-active-class="transition-all duration-200"
                leave-active-class="transition-all duration-200"
                enter-from-class="h-0 opacity-0"
                enter-to-class="h-auto opacity-100"
                leave-from-class="h-auto opacity-100"
                leave-to-class="h-0 opacity-0"
              >
                <div v-if="mobileOpenMenu === item.label" class="overflow-hidden">
                  <div class="pl-4 pt-2 space-y-1">
                    <a
                      v-for="child in item.children"
                      :key="child.path"
                      :href="`${pathUrl}${child.path}`"
                      @click="isOpen = false"
                      class="block px-4 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                    >
                      {{ child.label }}
                    </a>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Three-level nested accordion (Services) -->
            <div v-else-if="item.megaMenuSections">
              <button
                @click="toggleMobileMenu(item.label)"
                :class="[
                  'w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors',
                  isPathActive(item) ? 'bg-sky-50 text-sky-600' : 'text-gray-700 hover:bg-gray-100',
                ]"
              >
                <span>{{ item.label }}</span>
                <Icon
                  name="arrow_down"
                  size="20"
                  class="w-5 h-5"
                  :class="[mobileOpenMenu === item.label ? 'rotate-180' : '']"
                />
              </button>
              <Transition
                enter-active-class="transition-all duration-200"
                leave-active-class="transition-all duration-200"
                enter-from-class="h-0 opacity-0"
                enter-to-class="h-auto opacity-100"
                leave-from-class="h-auto opacity-100"
                leave-to-class="h-0 opacity-0"
              >
                <div v-if="mobileOpenMenu === item.label" class="overflow-hidden">
                  <div class="pl-4 pt-2 space-y-2">
                    <div v-for="section in item.megaMenuSections" :key="section.title">
                      <!-- Second level: Section headers -->
                      <button
                        @click="toggleMobileSubMenu(section.title)"
                        class="w-full flex items-center justify-between px-4 py-2 text-sm bg-sky-50 text-sky-700 rounded-lg hover:bg-sky-100 transition-colors"
                      >
                        <span class="uppercase tracking-wide">{{ section.title }}</span>
                        <Icon
                          name="arrow_down"
                          size="20"
                          class="w-5 h-5"
                          :class="[mobileOpenSubMenu === section.title ? 'rotate-180' : '']"
                        />
                      </button>
                      <!-- Third level: Actual items -->
                      <Transition
                        enter-active-class="transition-all duration-200"
                        leave-active-class="transition-all duration-200"
                        enter-from-class="h-0 opacity-0"
                        enter-to-class="h-auto opacity-100"
                        leave-from-class="h-auto opacity-100"
                        leave-to-class="h-0 opacity-0"
                      >
                        <div v-if="mobileOpenSubMenu === section.title" class="overflow-hidden">
                          <div class="pl-4 pt-1 space-y-1">
                            <a
                              v-for="menuItem in section.items"
                              :key="menuItem.path"
                              :href="`${pathUrl}${menuItem.path}`"
                              @click="isOpen = false"
                              class="block px-4 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                            >
                              {{ menuItem.label }}
                            </a>
                          </div>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
