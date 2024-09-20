<template>
    <main class="container mx-auto px-8 pt-20 pb-20 text-lg font-[600] text-slate-700 leading-relaxed">
        <h2 class="text-[32px] text-slate-800 pb-4 font-bold" >{{ $t("pages.digital") }}</h2>
        <p class="pb-4"> {{ $t("page.digital.first_paragraph") }} </p>
        <span>{{ $t("page.digital.services.header") }} </span>
        <ul class="pb-4 ltr:pl-3 rtl:pr-3">
            <li v-for="service in $tm('page.digital.services.services')" > <Icon name="dashicons:minus" class="text-blue-950" /> {{ $rt(service) }} </li>
        </ul>
        <p class="pb-4"> 
            {{ $t("page.digital.second_paragraph") }} 
        </p>
        <p class="pb-4"> 
            {{ $t("page.digital.third_paragraph") }} 
        </p>
        <h4 class="text-[24px] pb-4 text-slate-800 font-bold pt-5">{{ $t("page.digital.forth_paragraph.header") }} </h4>
        <p>
            {{ $t("page.digital.forth_paragraph.first_paragraph") }} 
        </p>
        <p>
            {{ $t("page.digital.forth_paragraph.second_paragraph") }} 
        </p>
    </main>
</template>
<script setup>
    definePageMeta({ title: 'pages.digital'})
</script>