<template>
    <main class="mx-auto pt-10 text-lg font-[600] text-slate-700 leading-relaxed">
        <div class="flex flex-col justify-end py-24 h-[400px] lg:w-full bg-[url('/images/web-services-2.jpg')] bg-opacity-30 min-h-[600px] bg-center bg-fit lg:bg-contain bg-no-repeat">
            <div class="text-white text-xl md:text-[40px] md:w-2/3 mx-4 leading-relaxed">
                <span class="text-[52px] block my-6 font-bold">{{ $t("sub_pages.our_departments.web_services") }}</span>
                {{ $t('page.our_departments.web_services.first_paragraph') }}
            </div>
        </div>
        <DynamicFeatureBlue :feature-data="domains"></DynamicFeatureBlue>

        <div class="pt-20 pb-20">
            <h2 class="text-blue-900 font-bold text-[50px] text-center py-5">{{$t('page.our_departments.web_services.packages.header')}}</h2>
            <span class="block text-center text-2xl font-semibold text-blue-900 pb-16">{{ $t('page.our_departments.web_services.packages.paragraph') }}</span>
            <div class="flex flex-col items-center md:justify-center gap-8 md:flex-row">
                <div v-for="(packageDetails, index) in packages " :key="index" data-aos="fade-up" :data-aos-delay="(index * 50) + 300">
                    <PackageCard :packageDetails="packageDetails" ></PackageCard>
                </div>
            </div>
        </div>

        <DynamicFeatureWhite class="mb-10" :feature-data="payments"></DynamicFeatureWhite>
    </main>
</template>
<script setup>
//@ts-nocheck
    import PackageCard from '~/components/dynamic/PackageCard.vue';

    const { t } = useI18n(); 
    definePageMeta({title: 'sub_pages.our_departments.web_services'})
    const domains = ref({
        imagePath:'/images/domain-image.png',
        header: t('page.our_departments.web_services.domains.header'),
        paragraph: t('page.our_departments.web_services.domains.paragraph'),
        secondParagraph: t('page.our_departments.web_services.domains.second_paragraph'),
        outerLink: 'https://digitalcloud.ly/cart.php?a=add&domain=register',
        LinkButtonName: 'global.register_now'
    
    })
    const payments = ref({
        imagePath:'/images/payments-image.png',
        header: t('page.our_departments.web_services.payments.header'),
        paragraph: t('page.our_departments.web_services.payments.paragraph'),
    })

    const packages = ref([
        {
            name: 'page.our_departments.web_services.packages.basic.name',
            price: 'page.our_departments.web_services.packages.basic.price',
            details: 'page.our_departments.web_services.packages.basic.details',
            orderLink: "https://digitalcloud.ly/index.php?rp=/store/shared-hosting-plans/basic-package"
        },
        {
            name: 'page.our_departments.web_services.packages.standard.name',
            price: 'page.our_departments.web_services.packages.standard.price',
            details: 'page.our_departments.web_services.packages.standard.details',
            orderLink: "https://digitalcloud.ly/index.php?rp=/store/shared-hosting-plans/standard-package"
        },
        {
            name: 'page.our_departments.web_services.packages.premium.name',
            price: 'page.our_departments.web_services.packages.premium.price',
            details: 'page.our_departments.web_services.packages.premium.details',
            orderLink: "https://digitalcloud.ly/index.php?rp=/store/shared-hosting-plans/premium-package"
        }
    ])
</script>