<template>
    <main class="container mx-auto px-8 pt-20 pb-20 text-lg font-[600] text-slate-700 leading-relaxed">
        <h2 class="text-[30px] pb-4 font-bold" >{{ $t("sub_pages.our_departments.it_networking") }}</h2>
        <p class="pb-4" v-for="(paragraph ,index) in $tm('page.our_departments.it_networking.paragraphs')" :key="index"> {{ $rt(paragraph) }} </p>
        <h4 class="text-[24px] pb-4 pt-4 font-bold">{{ $t("page.our_departments.it_networking.sections.services.title") }} </h4>
        <span>{{ $t("page.our_departments.it_networking.sections.services.subTitle") }} </span>
        <ul class="py-4  ltr:pl-3 rtl:pr-3">
            <li v-for="solution in $tm('page.our_departments.it_networking.sections.services.services')" > <Icon name="dashicons:minus" class="text-blue-950" /> {{ $rt(solution) }} </li>
        </ul>
        <h4 class="text-[24px] py-4 text-slate-800 font-bold">{{ $t("page.our_departments.it_networking.sections.partner_ships.title") }}</h4>
        <p class="pb-4"> {{ $t("page.our_departments.it_networking.sections.partner_ships.paragraph") }}</p>
        <img class="mx-auto my-4" src="/images/it_partners.png" alt="">
        <h4 class="text-[24px] pb-4 pt-4 font-bold">{{ $t("global.customer", 0) }}</h4>
        <ul class="pb-4 ltr:pl-3 rtl:pr-3">
            <li v-for="( customer, index ) of customers" :key="index"> <Icon name="dashicons:minus" class="text-blue-950" /> {{ customer }} </li>
        </ul>
    </main>
</template>
<script setup>
    const { t } = useI18n(); 
    definePageMeta({title:  'sub_pages.our_departments.it_networking'})
    const customers = ref([
    "المحفظة الاستثمارية",
    "KSB",
    "الشركة العامة لانشاء المراكز الادارية",
    "ACESCO Bichtel company",
    "وزارة الصناعة",
    "Spanish Embassy",
    "DHL",
    "Reuters",
    "الاخوة للدعاية والاعلان",
    "شركة المبروك للعمليات النفطية",
    "J&P",
    "فندق البستان",
    "شركة سيمات للدعاية والاعلان",
    "مركز طرابلس الطبي",
    "شركة نسمة لاستيراد منظومات تكييف الهواء"
]);
</script>