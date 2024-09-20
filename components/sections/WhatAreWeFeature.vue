<template>
    <DynamicFeatureBlue :feature-data="whatAreWe"></DynamicFeatureBlue>
</template>
<script setup>
    const { t } = useI18n(); 
    const whatAreWe = ref({
        imagePath:'',
        header: t("home.what_are_we.title"),
        paragraph: t("home.what_are_we.paragraph"),
        link:'/digital'
    })
</script>