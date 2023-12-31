<template>
  <section class="px-10 sm:px-20 py-10">
    <div v-if="title || description" class="mb-12 text-center">
      <h2 v-if="title" class="text-3xl" v-html="title"></h2>
      <span
        v-if="description"
        class="text-xl mb-12"
        v-html="description"
      ></span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <a
        v-for="item in items"
        href="#"
        class="no-underline group h-[200px] sm:h-auto before:bg-black/75 hover:before:bg-secondary/85 relative flex flex-col gap-2 bg-cover p-6 min-h-50 bg-no-repeat text-white text-center justify-center place-items-center before:content-empty before:bg-black before:opacity-70 before:w-full before:h-full before:absolute"
        :style="`background-image: url('${item.image}')`"
      >
        <img
          v-if="item.icon"
          :src="item.icon"
          class="group-hover:hidden bg-secondary p-4 h-8"
          style="
            clip-path: polygon(
              25% 5%,
              75% 5%,
              100% 50%,
              75% 95%,
              25% 95%,
              0% 50%
            );
          "
          alt=""
        />
        <h3 class="font-bold z-1" v-html="item.title"></h3>
        <span
          v-if="item.description"
          class="hidden group-hover:block z-1"
          v-html="item.description"
        ></span>
      </a>
    </div>
  </section>
</template>

<script setup>
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
</script>
