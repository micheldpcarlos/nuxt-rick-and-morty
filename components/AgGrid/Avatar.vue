<script setup lang="ts">
const props = defineProps(["params"]);
</script>

<template>
  <div class="h-full flex items-center">
    <Avatar :image="params.value" shape="circle" />
  </div>
</template>

<style scoped></style>
