/** @type {import('tailwindcss').Config} */
import { resolve } from 'path';
const srcDir = resolve(__dirname, '/');

// Had to add default configs from @nuxtjs/tailwindcss module and
// add the configs to be aware of PrimeVue, otherwise the classes utilized in the theme will be removed as well.
export default {
  darkMode: 'class',
  plugins: [],
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
    // "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ]
}

