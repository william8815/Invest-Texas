<script setup>
import { computed } from "vue";

import mail from "@/assets/icons/mail.svg";
import phone from "@/assets/icons/phone.svg";
import map_pin from "@/assets/icons/map-pin.svg";
import arrow_down from "@/assets/icons/arrow-down.svg";
import arrow_forward from "@/assets/icons/arrow-forward.svg";
import dollar from "@/assets/icons/dollar.svg";
import earth from "@/assets/icons/earth.svg";
import trending_up from "@/assets/icons/trending-up.svg";
import buildings from "@/assets/icons/buildings.svg";
import group from "@/assets/icons/group.svg";

const icons = {
  mail,
  phone,
  map_pin,
  arrow_down,
  arrow_forward,
  dollar,
  earth,
  trending_up,
  buildings,
  group,
};

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 16 },
});
</script>

<template>
  <component :is="icons[name]" v-bind="$attrs" :width="size" :height="size" />
</template>
