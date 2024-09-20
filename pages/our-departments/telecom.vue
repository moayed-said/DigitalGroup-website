<template>
    <main class="container mx-auto px-8 pt-20 pb-20 text-lg font-[600] text-slate-700 leading-relaxed">
        <h2 class="text-[32px] pb-4 font-bold" >{{ $t("sub_pages.our_departments.telecom") }}</h2>
        <p class="pb-4"> {{ $t("page.our_departments.telecom.first_paragraph") }} </p>
        <p class="pb-4"> {{ $t("page.our_departments.telecom.second_paragraph") }} </p>
        <span >{{ $t("page.our_departments.telecom.solutions.header") }} </span>
        <ul class="py-4 ltr:pl-3 rtl:pr-3">
            <li v-for="solution in $tm('page.our_departments.telecom.solutions.solutions')" > <Icon name="dashicons:minus" class="text-blue-950" /> {{ $rt(solution) }} </li>
        </ul>
        <h4 class="text-[24px] py-4 font-bold">{{ $t("page.our_departments.telecom.third_paragraph.header") }} </h4>
        <p>
            {{ $t("page.our_departments.telecom.third_paragraph.first_paragraph") }} 
        </p>
        <p class="pt-4">
            {{ $t("page.our_departments.telecom.third_paragraph.second_paragraph") }} 
        </p>
        <p class="pt-4">
            {{ $t("page.our_departments.telecom.third_paragraph.third_paragraph") }} 
        </p>
        <p class="pt-4">
            {{ $t("page.our_departments.telecom.third_paragraph.forth_paragraph") }} 
        </p>

    </main>
</template>
<script setup>
    definePageMeta({title: 'sub_pages.our_departments.telecom'})
</script>