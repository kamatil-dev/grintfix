<template>
  <section class="px-10 sm:px-20 py-10 bg-primary text-white text-center">
    <div v-if="title || description" class="mb-12">
      <h2 v-if="title" class="text-3xl" v-html="title"></h2>
      <span
        v-if="description"
        class="text-xl mb-12"
        v-html="description"
      ></span>
    </div>
    <div class="glide" id="blog-slider">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li v-for="article in articles" class="glide__slide py-5">
            <BlogItem :article="article" :reverse="title !== undefined" />
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
});

const Language = useGlobalCookie("Language"),
  { data: articles } = await useAsyncData(Language.value + "-articles", () =>
    queryContent(Language.value + "/blog")
      .sort({ date: -1 })
      .skip(1)
      .only(["title", "description", "image", "date", "_path"])
      .find()
  );

onMounted(() =>
  new Glide("#blog-slider", {
    type: "carousel",
    autoplay: 3000,
    bound: true,
    direction: "rtl",
    perView: 3,
    gap: 40,
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
