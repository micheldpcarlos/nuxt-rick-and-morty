<script setup lang="ts">
import type { PageState } from "primevue/paginator";
import { useToast } from "primevue/usetoast";
import type { Character } from "~/types";

const { characters, currentInfo, getCharacters, currentPage, loadingData } =
  useCharacters();
getCharacters();

const getNewPage = (event: PageState) => {
  currentPage.value = event.page + 1;
  getCharacters();
};

const toast = useToast();
const showCharacter = (character: Character) => {
  const message = `${character.species}`;

  toast.add({
    severity: "info",
    summary: `${character.id} - ${character.name}`,
    detail: message,
    life: 3000,
  });
};
</script>

<template>
  <div class="p-4 flex-1">
    <div class="flex flex-col lg:flex-row justify-between">
      <h1 class="text-3xl font-bold text-center m-2">
        Rick and Morty Characters
      </h1>
      <Paginator
        :rows="20"
        :totalRecords="currentInfo?.count"
        @page="getNewPage"
      ></Paginator>
    </div>
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4 mt-10"
    >
      <template v-if="!loadingData">
        <CharacterCard
          v-for="character in characters"
          :character="character"
          :key="character.id"
          @click="showCharacter(character)"
        />
      </template>
      <template v-else>
        <CharacterCardPlaceholder v-for="n in 20" :key="n" />
      </template>
    </div>
  </div>
</template>
