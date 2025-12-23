<script setup>
import { ref, onMounted } from "vue";
import { useSeoMeta, useHead } from "@unhead/vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

// SEO Meta
useSeoMeta({
  title: "Contact Us - Houston Office & Global Locations | InvesTexas",
  description:
    "Contact InvesTexas: Houston HQ (713-783-3122), Mexico facility (899-951-3028), Taiwan liaison office (2-8758-5888). Email: Contact@InvesTexas.com. Office hours: Mon-Fri 9AM-6PM CST.",
  keywords:
    "contact InvesTexas, Houston office, 7400 Harwin Drive, Texas investment contact, Sinopac headquarters, Mexico facility contact, Taiwan liaison office, Dr Frank Lin contact, business hours Houston",

  // Open Graph
  ogTitle: "Contact InvesTexas - Houston, Mexico & Taiwan Offices",
  ogDescription:
    "3 global offices ready to serve you: Houston TX (HQ), Reynosa Mexico, Taipei Taiwan. Call +1-713-783-3122 or email Contact@InvesTexas.com",
  ogImage: "https://via.placeholder.com/1200x630?text=Contact+InvesTexas",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "Contact InvesTexas - 3 Global Office Locations",
  twitterDescription:
    "Houston HQ, Mexico facility, Taiwan liaison. Phone: +1-713-783-3122. Email: Contact@InvesTexas.com",
  twitterImage: "https://via.placeholder.com/1200x630?text=Contact+InvesTexas",

  // Additional SEO
  robots: "index, follow",
  author: "InvesTexas",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "InvesTexas - Sinopac International Group",
        description: "Investment opportunities in Texas with global office support",
        email: "Contact@InvesTexas.com",
        telephone: "+1-713-783-3122",
        url: "http://www.Sinopac.us",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7400 Harwin Drive",
          addressLocality: "Houston",
          addressRegion: "TX",
          postalCode: "77036",
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+1-713-783-3122",
            contactType: "customer service",
            email: "Contact@InvesTexas.com",
            areaServed: "US",
            availableLanguage: ["English", "Chinese"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+52-899-951-3028",
            contactType: "customer service",
            email: "Lintelmex@gmail.com",
            areaServed: "MX",
            availableLanguage: ["Spanish", "English"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+886-2-8758-5888",
            contactType: "customer service",
            email: "info@usmcapark.com.tw",
            areaServed: "TW",
            availableLanguage: ["Chinese", "English"],
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "InvesTexas Office Locations",
        description: "Three global office locations serving international investors",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Place",
              name: "Sinopac Headquarter Building",
              description: "Main headquarters in Houston, Texas",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7400 Harwin Drive",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77036",
                addressCountry: "US",
              },
              telephone: "+1-713-783-3122",
              faxNumber: "+1-713-780-4626",
              email: "Contact@InvesTexas.com",
              contactPoint: {
                "@type": "ContactPoint",
                name: "Dr. Frank Lin",
                contactType: "Director",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Place",
              name: "Lintel de Mexico",
              description: "Manufacturing facility in Reynosa, Mexico",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Brecha 99, Parque Industrial Reynosa",
                addressLocality: "CD Reynosa",
                addressRegion: "Tamaulipas",
                postalCode: "88790",
                addressCountry: "MX",
              },
              telephone: "+52-899-951-3028",
              email: "Lintelmex@gmail.com",
              contactPoint: {
                "@type": "ContactPoint",
                name: "Mr. Luis G Rodrigue",
                contactType: "General Manager",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Place",
              name: "USMCA Park Asian Liaison Office",
              description: "Asian liaison office in Taipei, Taiwan",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15F, No. 552, Sec. 5, ZhongXiao E Rd, Xinyi Dist",
                addressLocality: "Taipei City",
                postalCode: "110",
                addressCountry: "TW",
              },
              telephone: "+886-2-8758-5888",
              email: "info@usmcapark.com.tw",
              contactPoint: {
                "@type": "ContactPoint",
                name: "VP Johnson Lee",
                contactType: "Vice President",
              },
            },
          },
        ],
      }),
    },
  ],
});

// images
import contact1_1 from "@/assets/images/contact/contact1_1.png";
import contact2_1 from "@/assets/images/contact/contact2_1.jpg";
import contact3_1 from "@/assets/images/contact/contact3_1.png";

// 圖片載入狀態追蹤在 offices 資料內

const offices = ref([
  {
    name: "Sinopac Headquarter Building",
    location: "Houston, Texas, USA",
    address: "7400 Harwin Drive, Houston, TX 77036",
    email: ["Contact@InvesTexas.com", "USA@Sinopac.us"],
    phone: "+1-713-783-3122",
    fax: "+1-713-780-4626",
    contact: "Dr. Frank Lin",
    website: "www.Sinopac.us",
    imagePlaceholder: true,
    image: contact1_1,
    imageLoaded: false,
  },
  {
    name: "Lintel de Mexico",
    location: "Reynosa, Tamaulipas, Mexico",
    address: "Brecha 99, Parque Industrial Reynosa, CD Reynosa, Tam. 88790, Mexico ",
    email: ["Lintelmex@gmail.com"],
    phone: "+52-899-951-3028",
    contact: "Mr. Luis G Rodrigue, GM",
    website: "www.lintelMex.com",
    imagePlaceholder: true,
    image: contact2_1,
    imageLoaded: false,
  },
  {
    name: "USMCA Park Asian Liaison Office",
    location: "Taipei, Taiwan (R.O.C)",
    address: "15F, No. 552, Sec. 5, ZhongXiao E Rd, Xinyi Dist, Taipei City 110, Taiwan",
    email: ["info@usmcapark.com.tw"],
    phone: "+886-2-8758-5888",
    contact: "VP Johnson Lee",
    imagePlaceholder: true,
    image: contact3_1,
    imageLoaded: false,
  },
]);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});

const handleSubmit = (e) => {
  e.preventDefault();
  // Form submission logic here
  console.log("Form submitted:", formData.value);
};

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

  // Office Section
  const officeTitle = document.querySelector(".office__title");
  const officeTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        officeTitleObserver.unobserve(entry.target);
      }
    });
  }, options);
  officeTitleObserver.observe(officeTitle);

  // Contact Info
  const contactInfo = document.querySelector(".contact__info");
  const contactInfoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        contactInfoObserver.unobserve(entry.target);
      }
    });
  }, options);
  contactInfoObserver.observe(contactInfo);

  const contactInfoLeft = document.querySelector(".contact__infoLeft");
  const contactInfoLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[-100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        contactInfoLeftObserver.unobserve(entry.target);
      }
    });
  }, options);
  contactInfoLeftObserver.observe(contactInfoLeft);

  const contactInfoRight = document.querySelector(".contact__infoRight");
  const contactInfoRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-x-[100px]");
        entry.target.classList.add("opacity-100", "translate-x-0");
        contactInfoRightObserver.unobserve(entry.target);
      }
    });
  }, options);
  contactInfoRightObserver.observe(contactInfoRight);

  // Office List
  const officeItems = document.querySelectorAll(".office__item");
  const officeItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        officeItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  officeItems.forEach((item) => {
    officeItemsObserver.observe(item);
  });
});
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="hero__section relative py-20 bg-gradient-to-br from-sky-900 to-sky-800 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="hero__content text-center opacity-0 translate-y-10 transition-all duration-500">
          <h1 class="text-5xl md:text-6xl mb-6">Get In Touch</h1>
          <p class="text-xl text-sky-100 max-w-3xl mx-auto">
            Contact us to discuss your investment opportunities in Texas
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="contact__section py-20 bg-white overflow-x-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12">
          <!-- <div>
            <h2 class="text-3xl text-gray-900 mb-6">Send Us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm text-gray-700 mb-2"> Your Name * </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  v-model="formData.name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="email" class="block text-sm text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    v-model="formData.email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm text-gray-700 mb-2"> Phone Number </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    v-model="formData.phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label for="company" class="block text-sm text-gray-700 mb-2"> Company Name </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  v-model="formData.company"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label for="message" class="block text-sm text-gray-700 mb-2"> Message * </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  v-model="formData.message"
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your investment interests..."
                />
              </div>

              <button
                type="submit"
                class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Icon name="send" size="20" class="w-5 h-5" />
              </button>
            </form>
          </div> -->

          <div class="space-y-8">
            <div
              class="contact__info opacity-0 translate-y-10 transition-all duration-500 text-center"
            >
              <h2 class="text-4xl text-gray-900 mb-4">Contact Information</h2>
              <p class="text-xl text-gray-600">
                We're here to answer your questions and help you get started with your investment in
                Texas.
              </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div
                class="space-y-6 contact__infoLeft opacity-0 translate-x-[-100px] transition-all duration-500"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="mail" size="20" class="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 class="text-lg text-gray-900 mb-1">Email</h3>
                    <a href="mailto:Contact@InvesTexas.com" class="text-sky-600 hover:text-sky-700">
                      Contact@InvesTexas.com
                    </a>
                    <span>, </span>
                    <a href="mailto:USA@Sinopac.us" class="text-sky-600 hover:text-sky-700">
                      USA@Sinopac.us
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="phone" size="20" class="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 class="text-lg text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+17137833122" class="text-gray-700 hover:text-sky-600">
                      +1-713-783-3122
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="map_pin" size="20" class="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 class="text-lg text-gray-900 mb-1">Address</h3>
                    <p class="text-gray-700">7400 Harwin Drive Houston, TX 77036 United States</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="earth" size="20" class="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 class="text-lg text-gray-900 mb-1">Website</h3>
                    <a
                      href="http://www.sinopac.us"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sky-600 hover:text-sky-700"
                    >
                      www.Sinopac.us
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="contact__infoRight bg-gradient-to-r from-sky-50 to-sky-100 p-6 rounded-xl border border-sky-200 opacity-0 translate-x-[100px] transition-all duration-500"
              >
                <h3 class="text-lg text-gray-900 mb-3">Office Hours</h3>
                <div class="space-y-2 text-gray-700">
                  <div class="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <p class="text-sm text-gray-600 mt-4">CST (Central Standard Time)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="office__section py-20 bg-transparent overflow-x-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="office__title text-center mb-16 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 class="text-4xl text-gray-900 mb-4">Our Offices</h2>
          <p class="text-xl text-gray-600">Visit us at any of our three locations</p>
        </div>

        <div class="office__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(office, index) in offices"
            :key="index"
            class="office__item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl opacity-0 translate-y-10 transition-all duration-500"
          >
            <div v-if="office.image" class="h-48 relative">
              <!-- Skeleton -->
              <div
                v-if="!office.imageLoaded"
                class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center"
              >
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <Icon name="map_pin" size="20" class="text-gray-400" />
                  </div>
                  <p class="text-gray-400 text-sm">Loading...</p>
                </div>
              </div>
              <!-- 實際圖片 -->
              <img
                :src="office.image"
                :alt="office.name"
                loading="lazy"
                class="w-full h-full object-cover transition-opacity duration-500"
                :class="office.imageLoaded ? 'opacity-100' : 'opacity-0'"
                @load="office.imageLoaded = true"
              />
            </div>
            <div
              v-else
              class="h-48 bg-gradient-to-r from-sky-700 to-sky-500 flex items-center justify-center text-white"
            >
              <div class="text-center p-6">
                <Icon name="map_pin" size="20" class="w-12 h-12 mx-auto mb-2" />
                <p class="text-sm">{{ office.location }}</p>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl text-gray-900 mb-3">{{ office.name }}</h3>

              <div v-if="office.address" class="mb-4 text-sm text-gray-600">
                <Icon name="map_pin" size="20" class="w-4 h-4 inline mr-2" />
                {{ office.address }}
              </div>

              <div class="space-y-2 text-sm">
                <div class="flex items-start space-x-2 text-gray-700">
                  <Icon name="mail" size="20" class="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div v-for="(email, idx) in office.email" :key="idx">
                      <a :href="`mailto:${email}`" class="text-sky-600 hover:text-sky-700">
                        {{ email }}
                      </a>
                    </div>
                  </div>
                </div>

                <div v-if="office.phone" class="flex items-center space-x-2 text-gray-700">
                  <Icon name="phone" size="20" class="w-4 h-4 flex-shrink-0" />
                  <a :href="`tel:${office.phone}`" class="text-gray-700 hover:text-sky-600">
                    {{ office.phone }}
                  </a>
                </div>

                <div v-if="office.contact" class="text-gray-700 mt-3">
                  <strong>Contact:</strong> {{ office.contact }}
                </div>

                <div v-if="office.website" class="mt-4">
                  <a
                    :href="`http://${office.website}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sky-600 hover:text-sky-700 text-sm flex items-center space-x-1"
                  >
                    <Icon name="earth" size="20" class="w-4 h-4" />
                    <span>{{ office.website }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
