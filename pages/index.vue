<script setup lang="ts">
import type { PageState } from "primevue/paginator";

const { characters, currentInfo, getCharacters, currentPage, loadingData } =
  useCharacters();
getCharacters();

const getNewPage = (event: PageState) => {
  currentPage.value = event.page + 1;
  getCharacters();
};

const showCharacter = (id: any) => {
  console.log(id);
};
</script>

<template>
  <div class="p-4">
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
          @click="showCharacter(character.id)"
        />
      </template>
      <template v-else>
        <CharacterCardPlaceholder v-for="n in 20" :key="n" />
      </template>
    </div>
  </div>
</template>
