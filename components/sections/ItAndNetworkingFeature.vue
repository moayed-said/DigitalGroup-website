<template>
    <DynamicFeatureBlue :feature-data="itAndNetworking"></DynamicFeatureBlue>
</template>
<script setup>
    const { t } = useI18n(); 
    const itAndNetworking = ref({
        imagePath:'/images/image3.jpg',
        header: t('sub_pages.our_departments.it_networking'),
        paragraph: t('page.our_departments.it_networking.paragraphs[0]'),
        link:'/our-departments/it-networking'
    })
</script>