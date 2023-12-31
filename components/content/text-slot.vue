<template>
  <section class="px-10 sm:px-20 my-10">
    <div
      :class="{
        'shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-400 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_15px] rounded-xl':
          no_box === false,
      }"
      class="grid grid-cols-1 sm:grid-cols-2 place-items-center overflow-hidden gap-6"
    >
      <div v-if="title || description" class="mb-6">
        <h2 v-if="title" class="text-3xl" v-html="title"></h2>
        <span v-if="description" class="text-xl" v-html="description"></span>
      </div>
      <slot name="default"></slot>
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
  reverse: {
    type: Boolean,
  },
  no_box: {
    type: Boolean,
  },
});
</script>
