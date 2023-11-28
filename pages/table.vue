<script setup lang="ts">
import { usePrimeVue } from "primevue/config";
import { ref } from "vue";

import { AgGridVue } from "ag-grid-vue3";

const columnDefs = [
  { field: "athlete" },
  { field: "sport" },
  { field: "age" },
  { field: "year" },
  { field: "date" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
  { field: "total" },
];

let gridApi = ref(null);
let times = 1;

let rowData: any = ref(null);

const onGridReady = (params: any) => {
  fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    .then((resp) => resp.json())
    .then((data) => (rowData.value = data));
};
</script>

<template>
  <div class="p-4 flex-1 flex flex-col">
    <div class="flex flex-col lg:flex-row justify-between">
      <h1 class="text-3xl font-bold text-center m-2">Rick and Morty Table</h1>
    </div>
    <ag-grid-vue
      style="width: 100%; height: 100%"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      @grid-ready="onGridReady"
      :rowData="rowData"
    ></ag-grid-vue>
  </div>
</template>

<style scoped></style>
