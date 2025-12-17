<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";
import { appConfig } from "@/config/env";
const pathUrl = appConfig.pathUrl;

const partners = [
  "American Wall Street Listed Group Inc",
  "Cannondale Financial LLC",
  "Project Master LLC",
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

  // Features Section
  const featuresList = document.querySelector(".features__list");
  const featuresListObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let items = entry.target.querySelectorAll(".features__item");
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.classList.remove("opacity-0", "translate-y-10");
          item.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            item.style.transitionDelay = "0s";
          }, 500);
        });
        let statNumbers = entry.target.querySelectorAll(".stat-number");
        statNumbers.forEach((statNumber, index) => {
          animateCount(statNumber, 0, statNumber.dataset.end);
        });
        featuresListObserver.unobserve(entry.target);
      }
    });
  }, options);
  featuresListObserver.observe(featuresList);
});

function animateCount(el, start, end, duration = 1500) {
  const startTime = performance.now();

  function loop(now) {
    const timeFraction = Math.min((now - startTime) / duration, 1);
    let progress = eqal(timeFraction);
    const value = Math.floor(start + (end - start) * progress);
    el.textContent = value;

    if (timeFraction < 1) {
      requestAnimationFrame(loop);
    }
  }

  requestAnimationFrame(loop);
}
// 例子一 : 等速
function eqal(timeFraction) {
  return timeFraction;
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="hero__section relative py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          :href="`${pathUrl}/services-overview`"
          @click.prevent="router.go(-1)"
          class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
        >
          <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
          Back to Overview
        </a>
        <div class="hero__content text-center opacity-0 translate-y-10 transition-all duration-500">
          <Icon name="trending_up" size="20" class="w-20 h-20 mx-auto mb-6 text-emerald-400" />
          <h1 class="text-5xl md:text-6xl mb-6">Finance & Go Public</h1>
          <p class="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto">
            IPO Support & Financial Services
          </p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="overview__content opacity-0 translate-x-[100px] transition-all duration-500">
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
          <div class="overview__image opacity-0 translate-x-[-100px] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Financial Services"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="features__list grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="features__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div className="text-5xl mb-2 text-emerald-300">
                <span data-end="3" class="stat-number"></span>
              </div>
              <div className="text-teal-200">NY Finance Partners</div>
            </div>
          </div>
          <div class="features__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div className="text-5xl mb-2 text-emerald-300">
                <span data-end="38" class="stat-number"></span>
                <span>yrs</span>
              </div>
              <div className="text-teal-200">Industry Experience</div>
            </div>
          </div>
          <div class="features__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div className="text-5xl mb-2 text-emerald-300">
                <span data-end="100" class="stat-number"></span>
                <span>%</span>
              </div>
              <div className="text-teal-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
