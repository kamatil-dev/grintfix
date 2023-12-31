<template>
  <section
    class="px-10 sm:px-20 py-10 flex flex-col sm:flex-row gap-12 sm:place-items-center justify-between"
  >
    <div>
      <div v-if="title || description" class="mb-12">
        <h2 v-if="title" class="text-3xl" v-html="title"></h2>
        <span
          v-if="description"
          class="text-xl mb-12"
          v-html="description"
        ></span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 grow">
        <div v-for="item in items" class="group flex gap-4">
          <img
            :src="item.image"
            class="bg-primary group-hover:bg-secondary p-4 h-8"
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
          <div class="flex flex-col justify-center gap-3 grow sm:grow-0">
            <span
              class="font-semibold pb-1 sm:border-0 border-b-1 border-b-style-solid border-gray"
              >{{ item.title }}</span
            >
            <span v-if="item.description">{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <img :src="image" class="h-auto sm:h-62" alt="" />
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
  image: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
  },
});
</script>
