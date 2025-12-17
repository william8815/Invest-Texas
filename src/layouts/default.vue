<script setup>
import Header from "../components/layout/header.vue";
import Footer from "../components/layout/footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col w-full overflow-x-hidden">
    <Header class="fixed top-0 left-0 w-full z-50" />
    <main class="grow mt-[70px]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
