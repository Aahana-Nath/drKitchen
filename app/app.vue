<template>
  <div>
    <!-- Google Tag Manager (noscript) - must be first element inside body -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NNKF7ZP2"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DrKitchen",
        url: "https://www.drkitchen.com",
        logo: "https://www.drkitchen.com/favicon.ico",
        description: "Premium Indian Spices",
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/"
        ]
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.drkitchen.com",
        name: "DrKitchen",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.drkitchen.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})
</script>
