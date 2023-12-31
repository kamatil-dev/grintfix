<template>
  <section
    class="flex flex-col gap-4"
    :class="{ 'text-center': center, 'px-10 sm:px-20 my-10 ': !no_padding }"
  >
    <h2 v-if="title" class="text-3xl" v-html="title"></h2>
    <span v-if="description" class="text-md" v-html="description"></span>
    <slot name="default" class="text-md"></slot>
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
  center: {
    type: Boolean,
  },
  no_padding: {
    type: Boolean,
  },
});
</script>
