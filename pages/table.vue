<script setup lang="ts">
import { ref } from "vue";

// Explicitly import to use inside cellRenderer
import AgGridAvatar from "~/components/AgGrid/Avatar.vue";

import { AgGridVue } from "ag-grid-vue3";
import type { Character } from "~/types";

const stringComparator = (valueA: string, valueB: string) => {
  if (valueA == valueB) return 0;
  return valueA > valueB ? 1 : -1;
};

const dateComparator = (valueA: string, valueB: string) => {
  return new Date(valueA).getTime() - new Date(valueB).getTime();
};

const dateFormatter = (date: any) => {
  return new Date(date.value).toLocaleString();
};

const defaultColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  headerClass: "text-[var(--primary-color)]",
};

const columnDefs = [
  {
    headerName: "",
    field: "image",
    cellRenderer: AgGridAvatar,
    cellRendererParams: {
      color: "guinnessBlack",
    },
    width: 70,
    sortable: false,
    filter: false,
    resizable: false,
    suppressSizeToFit: true,
  },
  { field: "name", comparator: stringComparator },
  { field: "species", comparator: stringComparator },
  { field: "status", comparator: stringComparator },
  { field: "type", comparator: stringComparator },
  { field: "gender", comparator: stringComparator },
  {
    field: "created",
    comparator: dateComparator,
    valueFormatter: dateFormatter,
  },
];

// null is needed here to show "Loading" in the table
const rowData = ref<Character[] | null>(null);

// fetch JSON
const onGridReady = async (event: any) => {
  const data = await $fetch("/data/characters.json");

  if (data) {
    rowData.value = data as Character[];
  }

  event.api.sizeColumnsToFit();
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
      @grid-ready="onGridReady"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :rowDragEntireRow="true"
    ></ag-grid-vue>
  </div>
</template>

<style lang="scss">
// custom agTable variables
.ag-theme-alpine {
  --ag-alpine-active-color: var(--primary-color);
  --ag-row-hover-color: color-mix(
    in srgb,
    var(--primary-color) 15%,
    transparent
  );
  --ag-background-color: var(--surface-a);
  --ag-odd-row-background-color: var(--surface-b);
  --ag-data-color: var(--text-color);
  --ag-header-foreground-color: var(--primary-color);
  --ag-header-background-color: var(--surface-ground);
  --surface-border: var(--surface-border);
}
</style>
