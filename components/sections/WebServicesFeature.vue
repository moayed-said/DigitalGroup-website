<template>
    <DynamicFeatureWhite :feature-data="webServices"></DynamicFeatureWhite>
</template>
<script setup>
    const { t } = useI18n(); 
    const webServices = ref({
        imagePath:"/images/image2.jpg",
        header: t("home.web_services.title"),
        paragraph: t("home.web_services.paragraph"),
        link:"/digital"
    })
</script>