<script setup>
import Header from "../components/layout/header.vue";
import Footer from "../components/layout/footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
