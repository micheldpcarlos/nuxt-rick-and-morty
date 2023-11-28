<script setup lang="ts">
import type { Character } from "~/types";

defineProps<{
  character: Character;
}>();
</script>

<template>
  <Card>
    <template #header>
      <img
        :alt="`${character.name} picture`"
        :src="character.image"
        class="w-full"
      />
    </template>
    <template #title> {{ character.name }} </template>
    <template #subtitle> {{ character.species }} </template>
    <template #content>
      <p class="m-0 text-xs">Origin: {{ character.origin.name }}</p>
      <p class="m-0 text-xs">Status: {{ character.status }}</p>
    </template>
  </Card>
</template>
