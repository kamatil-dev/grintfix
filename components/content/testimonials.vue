<template>
  <section class="px-10 sm:px-20 py-10 bg-gray-100 text-center">
    <div v-if="title || description" class="mb-12">
      <h2 v-if="title" class="text-3xl" v-html="title"></h2>
      <span
        v-if="description"
        class="text-xl mb-12"
        v-html="description"
      ></span>
    </div>
    <div class="glide" id="testimonials">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li v-for="item in items" class="glide__slide py-5">
            <div
              class="bg-white rounded-lg flex flex-col min-h-55 gap-6 place-items-center relative p-5 text-center"
            >
              <img
                class="absolute -top-1 -left-1 h-7"
                src="/assets/icons/“.png"
                alt=""
              />
              <p>{{ item.description }}</p>
              <div class="flex gap-4 place-items-center">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  class="rounded-full h-12 w-12"
                  alt=""
                />
                <span v-if="item.title" class="font-semibold">{{
                  item.title
                }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Glide, {
  Breakpoints,
  Autoplay,
  Swipe,
} from "@glidejs/glide/dist/glide.modular.esm";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
  },
});
onMounted(() =>
  new Glide("#testimonials", {
    type: "carousel",
    autoplay: 3000,
    bound: true,
    direction: "rtl",
    perView: 3,
    gap: 40,
    peek: 20,
    breakpoints: {
      1024: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  }).mount({ Breakpoints, Autoplay, Swipe })
);
</script>
