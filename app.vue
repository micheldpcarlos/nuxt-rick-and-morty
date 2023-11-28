<script setup>
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
