<script setup lang="ts">
import IconRickSanchez from "~/assets/rick-sanchez.svg";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
]);
</script>

<template>
  <div class="bg-white dark:bg-slate-800 h-screen">
    <Menubar :model="items">
      <template #start>
        <div class="relative ml-2 mr-4">
          <IconRickSanchez filled class="text-4xl relative z-10" />
          <div
            class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-[var(--primary-color)] rounded-full blur-lg"
          />
        </div>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down text-primary',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <InputText
            placeholder="Search"
            type="text"
            class="w-8rem sm:w-auto"
          />
          <Avatar
            image="https://picsum.photos/200"
            class="ml-2 mr-2"
            size="large"
            shape="circle"
          />
        </div>
      </template>
    </Menubar>
    <slot />
  </div>
</template>
