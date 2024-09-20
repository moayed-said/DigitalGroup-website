<template>
 <DynamicFeatureWhite :feature-data="telecom"></DynamicFeatureWhite>
</template>
<script setup>
    const { t } = useI18n(); 
    const telecom = ref({
        imagePath:'/images/antenna.jpg',
        header: t('sub_pages.our_departments.telecom'),
        paragraph: t('page.our_departments.telecom.first_paragraph'),
        link:'/our-departments/telecom'
    })
</script>