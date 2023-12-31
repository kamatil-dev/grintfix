<template>
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat bg-center h-[calc(100vh-157px)] sm:h-[calc(100vh-175px)] flex flex-col text-center place-content-center text-white bg-fixed after:content-empty after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-black/50"
    :style="`background-image:url('${image}')`"
  >
    <h1
      class="px-10 sm:px-20 text-4xl font-bold tracking-tight z-1"
      v-html="title"
    ></h1>
    <h2 class="px-10 sm:px-20 z-1" v-html="description"></h2>
  </div>
</template>
<script setup>
defineProps({
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
});
</script>
