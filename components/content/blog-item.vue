<template>
  <NuxtLink
    :to="to(article._path.split('/').slice(2).join('/'))"
    class="flex flex-col gap-4 no-underline"
    :class="reverse ? 'text-white' : 'text-black'"
  >
    <div class="relative">
      <img
        v-if="article.image"
        :src="article.image.src"
        class="rounded-lg w-full h-42 object-cover"
        alt=""
      />
      <span
        :class="
          reverse
            ? 'bg-white text-gray-500 after:border-s-white'
            : 'bg-secondary text-white after:border-s-secondary'
        "
        class="rounded-br-lg absolute -bottom-5 right-0 flex gap-4 px-4 py-2 place-items-center after:content-empty after:w-0 after:h-0 after:border-transparent after:border-style-solid after:border-t-[20px] after:border-b-[20px] after:border-s-[25px] after:absolute after:top-0 after:end-[-28px]"
      >
        <img
          src="/assets/icons/formkit_time.png"
          class="h-4"
          :class="{ 'filter-invert filter-brightness-0': !reverse }"
          alt=""
        />
        {{ formatDate(article.date) }}
      </span>
    </div>
    <h3 class="mb-0">{{ article.title }}</h3>
    <p class="mt-0">{{ article.description }}</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    required: true,
  },
  reverse: {
    type: Boolean,
    required: false,
  },
});
</script>
