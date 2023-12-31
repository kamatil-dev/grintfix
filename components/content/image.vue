<template>
  <img :src="src" class="w-full min-h-75 h-full object-cover" alt="" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>
