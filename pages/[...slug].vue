<template>
  <ContentRenderer :value="data">
    <template #not-found>
      <h1>Document not found</h1>
    </template>
    <template #empty>
      <h1>Document is empty</h1>
    </template>
    <h1
      v-if="data.header === undefined || data.header === true"
      class="text-center text-white text-4xl bg-primary py-16 mt-0 px-10 sm:px-20"
    >
      {{ data.title }}
    </h1>
    <div
      v-if="
        Array.isArray($route.params.slug) &&
        $route.params.slug.includes('blog') &&
        ((Language === 'ar' && $route.params.slug.length > 1) ||
          (Language === 'en' && $route.params.slug.length > 2))
      "
      class="flex sm:flex-row flex-col gap-16 place-items-center px-10 sm:px-20"
    >
      <div class="sm:basis-2/3 flex flex-col gap-6 w-full">
        <div v-if="data.image" class="relative">
          <img
            :src="data.image.src"
            class="rounded-lg w-full h-82 object-cover"
            alt=""
          />
          <span
            class="bg-secondary text-white after:border-s-secondary rounded-br-lg absolute -bottom-5 right-0 flex gap-4 px-4 py-2 after:content-empty after:w-0 after:h-0 after:border-transparent after:border-style-solid after:border-t-[20px] after:border-b-[20px] after:border-s-[25px] after:absolute after:top-0 after:end-[-28px]"
          >
            <div class="flex gap-6 place-items-center">
              <div class="flex gap-2 place-items-center">
                <img
                  src="/assets/icons/formkit_time.png"
                  class="h-4 filter-invert filter-brightness-0"
                  alt=""
                />
                {{ formatDate(data.date) }}
              </div>
              <div class="hidden sm:flex gap-2 place-items-center">
                <img
                  src="/assets/icons/eos-icons_pipeline-outlined.png"
                  class="h-4"
                  alt=""
                />
                {{ data.tags }}
              </div>
            </div>
          </span>
        </div>
        <ContentRendererMarkdown :value="data" />
      </div>
      <div class="sm:basis-1/3 flex flex-col gap-6"></div>
    </div>
    <ContentRendererMarkdown v-else :value="data" />
  </ContentRenderer>
</template>
<script setup>
const route = useRoute(),
  Language = useGlobalCookie("Language"),
  contentPath =
    (Language.value === "ar" &&
    (route.path.split("/").length <= 1 || route.path.split("/")[1] !== "ar")
      ? "/ar"
      : "") + route.path;
const { data } = await useAsyncData(contentPath, () =>
  queryContent(contentPath).findOne()
);
useContentHead(data);
</script>
