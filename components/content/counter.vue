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
    <div class="flex flex-col sm:flex-row gap-6 justify-between">
      <div
        v-for="item of items"
        class="shadow flex gap-4 py-6 px-8 place-items-center text-3xl"
      >
        <span class="text-secondary font-semibold">
          {{ item.count }}
        </span>
        {{ item.title }}
      </div>
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
