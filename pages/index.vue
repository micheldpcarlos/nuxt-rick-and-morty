<script setup lang="ts">
import { ref } from "vue";
import { usePrimeVue } from 'primevue/config';


const selectedCities = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const PrimeVue = usePrimeVue();
const toggleTheme = () => {
  PrimeVue.changeTheme('lara-light-indigo', 'lara-dark-indigo', 'theme-link', () => {});
}
</script>

<template>
  <div class="card flex justify-content-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="https://v1.tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <Button @click="toggleTheme"></Button>
        <MultiSelect
          v-model="selectedCities"
          :options="cities"
          optionLabel="name"
          placeholder="Select Cities"
          :maxSelectedLabels="3"
          class="w-full md:w-20rem"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
