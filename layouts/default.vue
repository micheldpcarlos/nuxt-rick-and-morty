<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";
import IconRickSanchez from "~/assets/rick-sanchez.svg";

const items = ref<MenuItem[]>([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Table",
    icon: "pi pi-table",
    route: "/table",
  },
]);

const themeSelectorRef = ref();

const showThemeSelector = (event: any) => {
  themeSelectorRef.value.show(event);
};
</script>

<template>
  <div class="bg-[var(--surface-a)] h-screen overflow-auto">
    <Menubar :model="items" class="rounded-none sticky top-0 z-10">
      <template #start>
        <div class="relative ml-2 mr-4">
          <IconRickSanchez filled class="text-4xl relative z-10" />
          <div
            class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-[var(--primary-color)] rounded-full blur-lg"
          />
        </div>
      </template>
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate, isActive }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            :class="{ 'font-bold': isActive }"
            :href="href"
            v-bind="props.action"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <Button
            icon="pi pi-palette"
            severity="primary"
            text
            rounded
            aria-label="Themes"
            @click="showThemeSelector"
          />
          <Avatar
            image="https://picsum.photos/200"
            class="mr-2"
            size="normal"
            shape="circle"
          />
          <ClientOnly>
            <ThemeSelector ref="themeSelectorRef" />
          </ClientOnly>
        </div>
      </template>
    </Menubar>
    <slot />
  </div>
</template>
