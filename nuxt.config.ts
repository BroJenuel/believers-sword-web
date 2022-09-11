import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["nuxt-windicss", "@nuxtjs/supabase"],
    css: [
        "primevue/resources/themes/saga-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
        "~/assets/style/main.scss",
    ],
});
