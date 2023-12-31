<template>
  <section class="px-10 sm:px-20 my-10">
    <div
      :class="{
        'shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-400 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_15px] rounded-xl':
          !no_box,
      }"
      class="grid grid-cols-1 sm:grid-cols-2 place-items-center overflow-hidden"
    >
      <div class="p-5 space-y-4">
        <div v-if="title || description">
          <h2 v-if="title" class="text-3xl" v-html="title"></h2>
          <span v-if="description" class="text-md" v-html="description"></span>
        </div>
        <slot name="default"></slot>
      </div>
      <div
        :class="reverse ? 'order-first' : 'order-last'"
        class="w-full h-full overflow-hidden relative"
      >
        <img :src="image" class="absolute w-full h-full object-cover" alt="" />
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  reverse: {
    type: Boolean,
  },
  no_box: {
    type: Boolean,
  },
});
</script>
