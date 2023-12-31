<template>
  <section class="px-10 sm:px-20 py-10 text-center">
    <div v-if="title || description" class="mb-12">
      <h2 v-if="title" class="text-3xl" v-html="title"></h2>
      <span
        v-if="description"
        class="text-xl mb-12"
        v-html="description"
      ></span>
    </div>
    <div class="glide" id="image-slider">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides flex place-items-center">
          <li v-for="item in items" class="glide__slide py-5">
            <img :src="item" class="rounded-lg h-75 w-full" alt="" />
          </li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          >
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          &lt;
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Glide, {
  Breakpoints,
  Autoplay,
  Swipe,
  Controls,
  Images,
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
  new Glide("#image-slider", {
    type: "carousel",
    autoplay: 3000,
    bound: true,
    direction: "rtl",
    perView: 4,
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
  }).mount({ Breakpoints, Autoplay, Swipe, Controls, Images })
);
</script>
