<script setup>
import Header from "../components/layout/header.vue";
import Footer from "../components/layout/footer.vue";
import SkBackground from "../components/layout/skBackground.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col w-full">
    <SkBackground />
    <Header class="fixed top-0 left-0 w-full z-50" />
    <main class="grow mt-[70px]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
