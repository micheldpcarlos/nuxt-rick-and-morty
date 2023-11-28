<script setup lang="ts">
import { usePrimeVue } from "primevue/config";
import { ref } from "vue";
import { themes, type Theme } from "~/constants/themes";

const { setTheme, getCurrentTheme } = useTheme();

const PrimeVue = usePrimeVue();
const setPrimeTheme = (theme: Theme) => {
  setTheme(theme, PrimeVue);
};

const selectedItem = ref<Theme>(getCurrentTheme().theme);

const overlayRef = ref();
const show = (event: any) => {
  overlayRef.value.show(event);
};

defineExpose({ show });
</script>
<template>
  <OverlayPanel
    ref="overlayRef"
    :pt="{ root: { class: 'before:hidden after:hidden' } }"
  >
    <div class="w-60">
      <h1>Theme Selector</h1>
      <p class="text-xs mb-2">Color mode: {{ $colorMode.value }}</p>
      <Dropdown
        v-model="selectedItem"
        :options="themes"
        optionLabel="name"
        placeholder="Select Theme"
        :maxSelectedLabels="3"
        class="w-full md:w-20rem"
        @change="setPrimeTheme($event.value)"
      />
    </div>
  </OverlayPanel>
</template>
