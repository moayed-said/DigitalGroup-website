<template>
 <div>
  <NuxtLoadingIndicator color="#1E3A8A" />
    <NuxtLayout>
      <!-- <Transition name="page"> -->
        <NuxtPage class=" overflow-hidden" />
      <!-- </Transition> -->
    </NuxtLayout>
  </div>
</template>
<script setup>
  import { useFetchBase } from './composables/useFetchBase';

  provideHeadlessUseId(() => useId())
  const route = useRoute()
  const { locale, t } = useI18n(); 
  const currentDirection = computed(() => {
    return locale.value === 'ar'? 'rtl': 'ltr';
  })
  useHead({
      title: ()=> t('seo.site_name') + " - " + t(route.meta.title),
      htmlAttrs: { 
        dir: currentDirection, 
        lang: locale.value 
      },
      link:[
        //favicons
        {rel:"icon", type:"image/x-icon", href:"/images/favicons/favicon.ico" },
        {rel:"icon", type:"image/png", href:"/images/favicons/favicon-32x32.png", sizes:"32x32" },
        {rel:"icon", type:"image/png", href:"/images/favicons/favicon-16x16.png", sizes:"16x16" },
        {rel:"apple-touch-icon", sizes:"180x180", href:"/images/favicons/apple-touch-icon.png"},
        {rel:"manifest", href:"/images/favicons/site.webmanifest" },

        //fonts
        {rel:"preconnect", href:"https://fonts.googleapis.com"},
        {rel:"preconnect", href:"https://fonts.gstatic.com"},
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap", media:"print",  onload:"this.onload=null;this.removeAttribute('media');", fetchpriority:"high"}
        
      
      ],
      meta:[
        { property:"og:title", content: ()=> t('seo.site_name') + " - " + t(route.meta.title) },
        { property: 'og:description', content: "مجموعة الرقميات شركة ليبية لتقنية المعلومات و الإتصالات مقرها الرئيسي بليبيا، تم تأسيس الشركة في عام 1999 من قبل إداريين و مهندسين ليبيين لتقديم حلول ذكية و متكاملة" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://domain1.com.ly' },
        { property: 'og:locale', content: 'ar_LY' },
        { property: 'og:image', content: '/images/card-link.jpg' },
      ]  
  })

  useFetchBase("sanctum/csrf-cookie")
  
</script>
<style>
  html[dir="rtl"] title{
  direction: rtl; 
  unicode-bidi: bidi-override;
  }
  :root{
    font-family: "Cairo", sans-serif;
  }
  .nuxt-loading-indicator{
    @apply !h-1
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.15s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }

</style>
