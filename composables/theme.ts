import { defaultTheme, type Theme } from "~/constants/themes";
import { usePrimeVue } from "primevue/config";

export const useTheme = () => {
  const LOCAL_STORAGE_KEY = "nuxt-rick-and-morty-theme";

  const getCurrentTheme = (): { theme: Theme; isDefault: boolean } => {
    const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_KEY);

    return {
      theme: localStorageTheme ? JSON.parse(localStorageTheme) : defaultTheme,
      isDefault: !!localStorageTheme,
    };
  };

  const setInitialTheme = () => {
    const currentTheme = getCurrentTheme();
    useHead({
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: currentTheme.theme.path,
        },
      ],
    });

    if (currentTheme.isDefault) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultTheme));
    }
  };

  const setTheme = (theme: Theme, primeVueInstance: any) => {
    const currentTheme = getCurrentTheme();
    primeVueInstance.changeTheme(
      currentTheme.theme.id,
      theme.id,
      "theme-link",
      () => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme));
      }
    );
    const colorMode = useColorMode();
    colorMode.preference = theme.dark ? "dark" : "light";
  };

  return {
    setInitialTheme,
    setTheme,
    getCurrentTheme,
  };
};
