<script setup>
import Icon from "@/components/base/Icon.vue";
</script>

<template>
  <footer class="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center"
            >
              <span class="text-white">IT</span>
            </div>
            <div class="text-lg">InvesTexas</div>
          </div>
          <p class="text-gray-400 text-sm mb-4">A division of Sinopac International Corp.</p>
          <p class="text-gray-400 text-sm">
            Best destination for Trump's tariffs solution with finance & IPO support.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg mb-4">Why Texas</h3>
          <ul class="space-y-2">
            <li>
              <a href="/tariff-advantage" class="text-gray-400 hover:text-white transition-colors"
                >Tariff Solution</a
              >
            </li>
            <li>
              <a href="/site-location" class="text-gray-400 hover:text-white transition-colors"
                >Strategic Location</a
              >
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg mb-4">Services</h3>
          <ul class="space-y-2">
            <li>
              <a href="/process" class="text-gray-400 hover:text-white transition-colors"
                >Entry Process</a
              >
            </li>
            <li>
              <a href="/master-plan" class="text-gray-400 hover:text-white transition-colors"
                >Facilities</a
              >
            </li>
            <li>
              <a href="/pricing" class="text-gray-400 hover:text-white transition-colors"
                >Pricing</a
              >
            </li>
            <li>
              <a href="/team" class="text-gray-400 hover:text-white transition-colors">Team</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg mb-4">Contact</h3>
          <ul class="space-y-3">
            <li class="flex items-start space-x-2 text-gray-400 text-sm">
              <Icon name="mail" size="20" />
              <a href="mailto:Contact@InvesTexas.com" class="hover:text-white transition-colors">
                Contact@InvesTexas.com
              </a>
            </li>
            <li class="flex items-start space-x-2 text-gray-400 text-sm">
              <Icon name="phone" size="20" />
              <a href="tel:+17137833122" class="hover:text-white transition-colors">
                +1-713-783-3122
              </a>
            </li>
            <li class="flex items-start space-x-2 text-gray-400 text-sm">
              <Icon name="map_pin" size="20" />
              <span>7400 Harwin Drive<br />Houston, TX 77036</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">
            © 2025 InvesTexas - Sinopac International Corp. All rights reserved.
          </p>
          <div class="flex items-center space-x-6">
            <a
              href="http://www.sinopac.us"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Sinopac.us
            </a>
            <a
              href="http://www.usmcapark.us"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              USMCAPARK.US
            </a>
            <a
              href="http://www.lintelmex.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              LintelmMex.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
