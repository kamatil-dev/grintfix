<template>
  <section class="flex flex-col gap-4">
    <div v-if="title || description" class="mb-6">
      <h2 v-if="title" class="text-3xl" v-html="title"></h2>
      <span v-if="description" class="text-xl" v-html="description"></span>
    </div>
    <span
      v-for="item of items"
      class="text-primary flex place-items-center gap-2"
    >
      <img
        class="rtl:-scale-x-100"
        src="/assets/icons/heroicons_wrench-screwdriver.png"
        alt=""
      />
      {{ item }}
    </span>
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
