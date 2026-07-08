// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true,
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxtjs/robots"],

  site: {
    url: "https://www.drkitchen.com",
  },

  robots: {
    sitemap: "https://www.drkitchen.com/sitemap.xml",
  },

  sitemap: {
    autoLastmod: true,
  },

  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },

  css: ["~/assets/css/global.css"],

  app: {
    head: {
      title: "DrKitchen | Premium Indian Spices",

      htmlAttrs: {
        lang: "en",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Premium Indian spices crafted with science, tradition and authentic flavour. Explore turmeric, garam masala, red chilli, coriander and authentic Indian spice blends from DrKitchen.",
        },
        {
          name: "keywords",
          content:
            "Indian spices, turmeric powder, garam masala, red chilli powder, coriander powder, cumin, kitchen king masala, premium spices, DrKitchen",
        },
        { name: "author", content: "DrKitchen" },
        { name: "robots", content: "index, follow" },
        {
          name: "google-site-verification",
          content: "ImSTkNRwArZHeM-RW1ybjeyEOTyfpNK6J3G3c6-uXdQ",
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "DrKitchen | Premium Indian Spices" },
        {
          property: "og:description",
          content: "Premium Indian spices preserving purity, flavour and aroma.",
        },
        { property: "og:url", content: "https://www.drkitchen.com" },
        { property: "og:image", content: "https://www.drkitchen.com/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "DrKitchen | Premium Indian Spices" },
        {
          name: "twitter:description",
          content: "Premium Indian spices preserving purity, flavour and aroma.",
        },
        { name: "twitter:image", content: "https://www.drkitchen.com/og-image.jpg" },
      ],

      link: [
        { rel: "canonical", href: "https://www.drkitchen.com" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap",
        },

        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
      ],
    },
  },
});