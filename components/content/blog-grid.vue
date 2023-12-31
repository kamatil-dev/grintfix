<template>
  <section
    :class="title ? 'bg-primary text-white' : ''"
    class="px-10 sm:px-20 py-10 text-center"
  >
    <div v-if="title || description" class="mb-12">
      <h2 v-if="title" class="text-3xl" v-html="title"></h2>
      <span
        v-if="description"
        class="text-xl mb-12"
        v-html="description"
      ></span>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <BlogItem
        v-for="article in articles"
        :article="article"
        :reverse="title !== undefined"
      />
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
});

const Language = useGlobalCookie("Language"),
  { data: articles } = await useAsyncData(Language.value + "-articles", () =>
    queryContent(Language.value + "/blog")
      .sort({ date: -1 })
      .skip(1)
      .only(["title", "description", "image", "date", "_path"])
      .find()
  );
</script>
