<script setup>
import { ref } from "vue";
const { setInitialTheme } = useTheme();

onMounted(() => {
  setInitialTheme();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
