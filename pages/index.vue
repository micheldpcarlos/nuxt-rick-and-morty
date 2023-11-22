<script setup lang="ts">
import { usePrimeVue } from "primevue/config";
import { ref } from "vue";
import { themes, type Theme } from "~/constants/themes";

const { setTheme, getCurrentTheme } = useTheme();

const PrimeVue = usePrimeVue();
const setPrimeTheme = (theme: Theme) => {
  setTheme(theme, PrimeVue);
};

const selectedItem = ref<Theme>();

onMounted(() => {
  selectedItem.value = getCurrentTheme().theme;
});
</script>

<template>
  <div>
    <Card class="w-1/3 m-4">
      <template #header>
        <img
          alt="user header"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
        />
      </template>
      <template #title> Advanced Card </template>
      <template #subtitle> Card subtitle </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <hr />
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <Dropdown
          v-model="selectedItem"
          :options="themes"
          optionLabel="name"
          placeholder="Select Theme"
          :maxSelectedLabels="3"
          class="w-full md:w-20rem"
          @change="setPrimeTheme($event.value)"
        />
      </template>
    </Card>
    <div class="m-4 flex gap-2">
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warning" severity="warning" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
    </div>
    <div class="m-4 flex gap-2">
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warning" severity="warning" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
    </div>
  </div>
</template>

<style scoped></style>
