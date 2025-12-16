<script setup>
import { ref } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

const offices = [
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
  },
  {
    name: "Lintel de Mexico",
    location: "Reynosa, Tamaulipas, Mexico",
    email: ["Lintelmex@gmail.com"],
    phone: "+52-899-951-3028",
    contact: "Mr. Luis G Rodrigue, GM",
    website: "www.lintelMex.com",
    imagePlaceholder: true,
  },
  {
    name: "USMCA Park Asian Liaison Office",
    location: "Taipei, Taiwan (R.O.C)",
    address: "15F, No. 552, Sec. 5, ZhongXiao E Rd, Xinyi Dist, Taipei City 110, Taiwan",
    email: ["info@usmcapark.com.tw"],
    phone: "+886-2-8758-5888",
    imagePlaceholder: true,
  },
];

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
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl mb-6">Get In Touch</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Contact us to discuss your investment opportunities in Texas
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
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
          </div>

          <!-- Quick Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl text-gray-900 mb-6">Contact Information</h2>
              <p class="text-gray-600 mb-8">
                We're here to answer your questions and help you get started with your investment in
                Texas.
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="mail" size="20" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg text-gray-900 mb-1">Email</h3>
                  <a href="mailto:Contact@InvesTexas.com" class="text-blue-600 hover:text-blue-700">
                    Contact@InvesTexas.com
                  </a>
                  <br />
                  <a href="mailto:USA@Sinopac.us" class="text-blue-600 hover:text-blue-700">
                    USA@Sinopac.us
                  </a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="phone" size="20" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 class="text-lg text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+17137833122" class="text-gray-700 hover:text-blue-600">
                    +1-713-783-3122
                  </a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="map_pin" size="20" class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 class="text-lg text-gray-900 mb-1">Address</h3>
                  <p class="text-gray-700">
                    7400 Harwin Drive<br />
                    Houston, TX 77036<br />
                    United States
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="earth" size="20" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 class="text-lg text-gray-900 mb-1">Website</h3>
                  <a
                    href="http://www.sinopac.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-700"
                  >
                    www.Sinopac.us
                  </a>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100"
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
    </section>

    <!-- Office Locations -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-900 mb-4">Our Offices</h2>
          <p class="text-xl text-gray-600">Visit us at any of our three locations</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(office, index) in offices"
            :key="index"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              class="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white"
            >
              <div class="text-center p-6">
                <Icon name="map_pin" size="20" class="w-12 h-12 mx-auto mb-2" />
                <p class="text-sm">{office.location}</p>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl text-gray-900 mb-3">{office.name}</h3>

              <div v-if="office.address" class="mb-4 text-sm text-gray-600">
                <Icon name="map_pin" size="20" class="w-4 h-4 inline mr-2" />
                {{ office.address }}
              </div>

              <div class="space-y-2 text-sm">
                <div class="flex items-start space-x-2 text-gray-700">
                  <Icon name="mail" size="20" class="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div v-for="(email, idx) in office.email" :key="idx">
                      <a :href="`mailto:${email}`" class="text-blue-600 hover:text-blue-700">
                        {{ email }}
                      </a>
                    </div>
                  </div>
                </div>

                <div v-if="office.phone" class="flex items-center space-x-2 text-gray-700">
                  <Icon name="phone" size="20" class="w-4 h-4 flex-shrink-0" />
                  <a :href="`tel:${office.phone}`" class="text-gray-700 hover:text-blue-600">
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
                    class="text-blue-600 hover:text-blue-700 text-sm flex items-center space-x-1"
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
