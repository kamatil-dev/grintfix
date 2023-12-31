<template>
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat bg-center flex flex-col gap-12 px-10 sm:px-20 py-10 text-center place-content-center text-white bg-fixed after:content-empty after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-black/50"
    :style="`background-image:url('${image}')`"
  >
    <div v-if="title || description" class="z-1">
      <h3
        v-if="title"
        class="px-10 sm:px-20 text-4xl my-0 font-bold tracking-tight"
        v-html="title"
      ></h3>
      <h4 v-if="description" class="px-10 sm:px-20" v-html="description"></h4>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 z-1">
      <div
        v-for="item of items"
        class="flex flex-col gap-4 place-items-center space-y-0"
      >
        <img v-if="item.icon" :src="item.icon" class="h-16 w-fit" alt="" />
        <h4 v-if="item.title" v-html="item.title"></h4>
        <p v-if="item.description" v-html="item.description"></p>
      </div>
    </div>
  </div>
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
  image: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
  },
});
</script>
