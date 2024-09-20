<template>
    <div> 
      <SectionsHero></SectionsHero>
      <SectionsFacts></SectionsFacts>
      <SectionsWhatAreWeFeature></SectionsWhatAreWeFeature>
      <SectionsTelecomFeature></SectionsTelecomFeature>
      <SectionsItAndNetworkingFeature></SectionsItAndNetworkingFeature>
      <SectionsWebServicesFeature></SectionsWebServicesFeature>
      <SectionsPartnerships></SectionsPartnerships>
      <SectionsTestimonials></SectionsTestimonials>
      <SectionsContact></SectionsContact>
    </div>
  </template>
<script setup>
  definePageMeta({title: 'pages.home'})
  const servicesIcons = [
  'material-symbols-light:calendar-month',
  'material-symbols-light:planner-banner-ad-pt-outline',
  'material-symbols-light:settings-input-antenna-rounded',
  'material-symbols-light:laptop-chromebook-outline',
  'material-symbols-light:file-copy-sharp',
  'material-symbols-light:web'

  ]
</script>
