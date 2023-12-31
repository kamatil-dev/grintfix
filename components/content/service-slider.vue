<template>
  <section
    class="px-10 sm:px-20 py-10 text-center"
    :class="!reverse ? 'bg-primary text-white' : 'bg-white text-primary'"
  >
    <div v-if="title || description" class="mb-12">
      <h2 v-if="title" class="text-3xl" v-html="title"></h2>
      <span
        v-if="description"
        class="text-xl mb-12"
        v-html="description"
      ></span>
    </div>
    <div class="glide" id="service-slider">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li v-for="article in articles" class="glide__slide py-5">
            <NuxtLink
              :to="to(article._path.split('/').slice(2).join('/'))"
              class="flex flex-col gap-4 no-underline"
              :class="!reverse ? 'text-white' : 'text-black'"
            >
              <div class="relative">
                <img
                  v-if="article.image"
                  :src="article.image.src"
                  class="rounded-lg w-full h-42 object-cover"
                  alt=""
                />
              </div>
              <h3 class="mb-0">{{ article.title }}</h3>
            </NuxtLink>
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
  reverse: {
    type: Boolean,
  },
});

const Language = useGlobalCookie("Language"),
  { data: articles } = await useAsyncData(Language.value + "-services", () =>
    queryContent(Language.value + "/services")
      .sort({ date: -1 })
      .skip(1)
      .only(["title", "description", "image", "date", "_path"])
      .find()
  );

onMounted(() =>
  new Glide("#service-slider", {
    type: "carousel",
    autoplay: 3000,
    bound: true,
    direction: "rtl",
    perView: 4,
    gap: 40,
    breakpoints: {
      1024: {
        perView: 3,
      },
      600: {
        perView: 1,
      },
    },
  }).mount({ Breakpoints, Autoplay, Swipe })
);
</script>
