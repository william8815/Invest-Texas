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
import store from "@/assets/icons/store.svg";
import factory from "@/assets/icons/factory.svg";
import home from "@/assets/icons/home.svg";
import villa from "@/assets/icons/villa.svg";
import cpu from "@/assets/icons/cpu.svg";
import wind from "@/assets/icons/wind.svg";
import truck from "@/assets/icons/truck.svg";
import file_text from "@/assets/icons/file-text.svg";
import hand_shake from "@/assets/icons/hand-shake.svg";
import check from "@/assets/icons/check.svg";
import check_field from "@/assets/icons/check-field.svg";
import trending_down from "@/assets/icons/trending-down.svg";
import check_outline from "@/assets/icons/check-outline.svg";
import navigation from "@/assets/icons/navigation.svg";
import lang from "@/assets/icons/lang.svg";
import link_external from "@/assets/icons/link-external.svg";
import leaf from "@/assets/icons/leaf.svg";
import arrow_sync from "@/assets/icons/arrow-sync.svg";
import shield from "@/assets/icons/shield.svg";
import camping from "@/assets/icons/camping.svg";
import graduation_cap from "@/assets/icons/graduation-cap.svg";
import menu from "@/assets/icons/menu.svg";
import close from "@/assets/icons/close.svg";
import hospital from "@/assets/icons/hospital.svg";
import waves from "@/assets/icons/waves.svg";
import park from "@/assets/icons/park.svg";
import cart from "@/assets/icons/cart.svg";
import airplane from "@/assets/icons/airplane.svg";
import ship from "@/assets/icons/ship.svg";

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
  store,
  factory,
  home,
  villa,
  cpu,
  wind,
  truck,
  file_text,
  hand_shake,
  check,
  check_field,
  trending_down,
  check_outline,
  navigation,
  lang,
  link_external,
  leaf,
  arrow_sync,
  shield,
  camping,
  graduation_cap,
  menu,
  close,
  hospital,
  waves,
  park,
  cart,
  airplane,
  ship,
};

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 16 },
});
</script>

<template>
  <component :is="icons[name]" v-bind="$attrs" :width="size" :height="size" />
</template>
