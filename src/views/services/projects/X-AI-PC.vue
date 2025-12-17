<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

// 圖標旋轉動畫
const iconStyle = ref({});
let animationFrame;
let startTime;

const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;
  const progress = (elapsed % 3000) / 3000; // 3秒循環

  let rotation = 0;
  if (progress < 0.33) {
    rotation = progress * 3 * 5; // 0 到 5 度
  } else if (progress < 0.66) {
    rotation = 5 - (progress - 0.33) * 3 * 10; // 5 到 -5 度
  } else {
    rotation = -5 + (progress - 0.66) * 3 * 5; // -5 到 0 度
  }

  iconStyle.value = {
    transform: `rotate(${rotation}deg)`,
    transition: "transform 0.1s linear",
  };

  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  animationFrame = requestAnimationFrame(animate);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});

const features = [
  {
    icon: "cpu",
    title: "Advanced AI Processing",
    description: "Dedicated AI neural processing units for machine learning tasks",
  },
  {
    icon: "trending_up",
    title: "Superior Performance",
    description: "10x faster AI inference compared to traditional CPUs",
  },
  {
    icon: "earth",
    title: "USMCA Compliant",
    description: "Manufactured in Texas, duty-free across North America",
  },
  {
    icon: "dollar",
    title: "Competitive Pricing",
    description: "Cost-effective production with premium quality",
  },
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

  // features section
  const featuresTitle = document.querySelector(".features__title");
  const featuresDescription = document.querySelector(".features__description");
  const featuresTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        featuresTitleObserver.unobserve(entry.target);
      }
    });
  }, options);
  const featuresDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        featuresDescriptionObserver.unobserve(entry.target);
      }
    });
  }, options);
  featuresTitleObserver.observe(featuresTitle);
  featuresDescriptionObserver.observe(featuresDescription);

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
        featuresListObserver.unobserve(entry.target);
      }
    });
  }, options);
  featuresListObserver.observe(featuresList);

  // investment opportunity section
  const investmentList = document.querySelector(".investment__list");
  const investmentListObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let items = entry.target.querySelectorAll(".investment__item");
        let statNumbers = entry.target.querySelectorAll(".stat-number");
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.classList.remove("opacity-0", "translate-y-10");
          item.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            item.style.transitionDelay = "0s";
          }, 500);
        });
        statNumbers.forEach((statNumber, index) => {
          animateCount(statNumber, 0, statNumber.dataset.end);
        });
        investmentListObserver.unobserve(entry.target);
      }
    });
  }, options);
  investmentListObserver.observe(investmentList);

  // cta section
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
      class="hero__section relative py-20 bg-gradient-to-br from-sky-900 via-purple-900 to-blue-900 text-white overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          :href="`/services-overview`"
          class="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
        >
          <Icon name="arrow_forward" size="16" class="mr-2 rotate-180" />
          Back to Overview
        </a>
        <div class="hero__content text-center opacity-0 translate-y-10 transition-all duration-500">
          <div class="inline-block mb-6" :style="iconStyle">
            <Icon name="cpu" size="20" class="w-20 h-20 mx-auto text-cyan-400" />
          </div>
          <h1 class="hero__title text-5xl md:text-6xl mb-6">X * AI PC</h1>
          <p class="hero__description text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            AI-Powered Computing Solutions for the Next Generation
          </p>
        </div>
      </div>
    </section>

    <!-- Project Overview -->
    <section class="overview__section py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="overview__content opacity-0 translate-x-[100px] transition-all duration-500">
            <h2 class="overview__title text-4xl text-gray-900 mb-6">
              Revolutionary AI Computing Platform
            </h2>
            <p class="overview__description text-lg text-gray-700 leading-relaxed mb-6">
              The X * AI PC represents the next evolution in personal computing, integrating
              cutting-edge artificial intelligence capabilities directly into hardware architecture.
              This project combines advanced AI processing units with traditional computing power to
              deliver unprecedented performance for both consumer and enterprise applications.
            </p>
            <p class="overview__description text-lg text-gray-700 leading-relaxed mb-6">
              Manufactured in our Texas facilities with components from our USMCA supply chain, the
              X * AI PC qualifies for duty-free sales throughout North America while maintaining
              competitive pricing in global markets.
            </p>
            <div class="flex gap-4 overview__buttons">
              <a
                href="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20"
              >
                Invest in This Project
                <Icon name="arrow_forward" size="16" class="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          <div class="overview__image opacity-0 translate-x-[-100px] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1593376853899-fbb47a057c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="AI PC Technology"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="features__section py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="features__title text-4xl text-gray-900 mb-4 opacity-0 translate-y-10 transition-all duration-500"
          >
            Key Features & Advantages
          </h2>
          <p
            class="features__description text-xl text-gray-600 opacity-0 translate-y-10 transition-all duration-500"
          >
            What makes X * AI PC stand out in the market
          </p>
        </div>
        <div class="features__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" :delay="index * 0.1">
            <div
              class="features__item h-full bg-white p-6 rounded-xl shadow-lg hover:shadow-xl opacity-0 translate-y-10 transition-all duration-500"
            >
              <div
                class="w-14 h-14 bg-gradient-to-br from-sky-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4"
              >
                <Icon :name="feature.icon" size="16" class="w-8 h-8" />
              </div>
              <h3 class="text-xl text-gray-900 mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment Opportunity -->
    <section
      class="investment__section py-20 bg-gradient-to-br from-sky-900 to-purple-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="investment__list grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="investment__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div class="text-5xl mb-2 text-amber-300">
                <span>$</span>
                <span data-end="150" class="stat-number"></span>
                <span>M</span>
              </div>
              <div class="text-blue-200">Market Opportunity</div>
            </div>
          </div>
          <div class="investment__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div class="text-5xl mb-2 text-amber-300">
                <span data-end="35" class="stat-number"></span>
                <span>%</span>
              </div>
              <div class="text-blue-200">Projected ROI (3 years)</div>
            </div>
          </div>
          <div class="investment__item opacity-0 translate-y-10 transition-all duration-500">
            <div>
              <div class="text-5xl mb-2 text-amber-300">
                <span data-end="2024" class="stat-number"></span>
              </div>
              <div class="text-blue-200">Production Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta__section py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="cta__content opacity-0 translate-y-10 transition-all duration-500">
          <h2 class="text-4xl text-gray-900 mb-6">Ready to Invest in AI Computing?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Join us in revolutionizing the future of personal computing
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20 group"
            >
              Contact Us
              <Icon
                name="arrow_forward"
                size="16"
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/pricing"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
            >
              View Investment Options
            </a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
