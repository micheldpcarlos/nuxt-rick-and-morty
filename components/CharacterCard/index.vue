<script setup lang="ts">
import type { Character } from "~/types";
import { pt } from "./cardPassThrough";

defineProps<{
  character: Character;
}>();
</script>

<template>
  <Card :pt="pt" v-bind="$attrs">
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
