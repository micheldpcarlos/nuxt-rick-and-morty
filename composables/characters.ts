import { type Info, type Character } from "~/types";

export const useCharacters = () => {
  const characters = ref<Character[]>([]);
  const currentInfo = ref<Info>();
  const loadingData = ref(false);
  const currentPage = ref(1);

  const getCharacters = async () => {
    loadingData.value = true;
    const data = await $fetch<{ results: Character[]; info: Info }>(
      `https://rickandmortyapi.com/api/character?page=${currentPage.value}`
    ).catch(() => alert("error while getting data"));

    if (data) {
      characters.value = data.results;
      currentInfo.value = data.info;
    }

    loadingData.value = false;
  };

  return { characters, currentInfo, getCharacters, currentPage };
};
