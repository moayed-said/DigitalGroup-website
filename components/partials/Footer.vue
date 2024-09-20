
<template>
    <footer class="flex w-full px-4 justify-center">
      <div class="container grid grid-rows-5 grid-cols-12 border-t-2 gap-4">
        <div class="col-span-12 mx-4 lg:col-span-4 row-start-1 row-end-3 lg:row-end-5 pb-4 ">
            <img src="/images/digital_group_telecom_informatics_co_logo.jpg" alt="logo" class=" w-24 h-24 my-4">
            <span class=" text-slate-800 opacity-65">{{  $t('home.hero.subTitle') }}</span>
            <div>
                <ul class="flex gap-3 mt-6">
                    <li class="footer-links__icon"><a href="https://www.facebook.com/digitalgroup.ly"><Icon name="uil:facebook-f"/></a></li>
                    <li class="footer-links__icon"><a href="https://ly.linkedin.com/company/digital-group-telecom-informatics-co"><Icon name="uil:linkedin"/></a></li>
                    <!-- <li class="footer-links__icon"><Icon name=""/></li> -->
                </ul>
            </div>
        </div>

        <div class="col-span-6 lg:col-span-3 row-start-3 row-end-5  lg:row-start-2 lg:row-end-5 px-2 lg:px-4">
            <h4 class="text-blue-950 mb-2 font-semibold text-2xl">{{$t('footer.navigation')}}</h4>
            <ul class="text-slate-800 opacity-65">
                <li><NuxtLink to="/" class="footer-list__items">{{ $t('pages.home') }}</NuxtLink></li>
                <li><NuxtLink to="/" class="footer-list__items">{{ $t('pages.digital') }}</NuxtLink></li>
                <li><NuxtLink to="/" class="footer-list__items">{{ $t('pages.our_departments') }}</NuxtLink></li>
                <li><NuxtLink to="/" class="footer-list__items">{{ $t('pages.contact_us') }}</NuxtLink></li>
                <li><NuxtLink to="/" class="footer-list__items">{{ $t('pages.site_map') }}</NuxtLink></li>
            </ul>
        </div>

        <div class="col-span-6 lg:col-span-3 lg:row-start-2 lg:row-end-5 row-start-3 row-end-5 px-1 lg:px-4">
            <h4 class="text-blue-950 mb-2 font-semibold text-2xl">{{$t('footer.contact')}}</h4>
            <ul class="text-slate-800 opacity-65">
                <li> <a class="footer-list__items" href="mailto:info@digitalgroup.ly">info@digitalgroup.ly</a></li>
                <li> <a class="footer-list__items" href="tel:+218213606994">Tel: +218 21 360 6994</a></li>
                <li> <a class="footer-list__items" href="fax:+218 21 360 2101">Fax: +218 21 360 2101 </a></li>
                <li> <a class="footer-list__items" href="http://www.digitalgroup.ly">www.digitalgroup.ly</a></li>
            </ul>
        </div> 
        <div class="col-span-full row-start-5 row-end-5 border-t-2 mt-4 mb-6 px-4 flex gap-8 justify-between pt-2 text-sm lg:text-base font-[600] text-slate-700">
            <!-- <span>Copyright © 2024 <a href="#" class="text-blue-900">DigitalGroup</a> All Reight Reserved</span> -->
            <i18n-t tag="span" keypath="footer.copyright">
                <template #companyLink>
                    <a href="#" class="text-blue-900">DigitalGroup</a>
                </template>
            </i18n-t>
            <span><NuxtLink :to="localePath('terms-of-use')" class="hover:text-blue-900">{{ $t('pages.terms_of_use') }}</NuxtLink> / <NuxtLink :to="localePath('privacy-policy')" class="hover:text-blue-900">{{ $t('pages.privacy_policy') }}</NuxtLink></span>
        </div>
      </div>
    </footer>
</template>
<script>
</script>
<style lang="scss">
.footer-links__icon{
    @apply relative rounded-full w-10 h-10 bg-blue-900 text-white p-[6px] hover:bg-slate-200 hover:text-blue-900 transition-colors ;

    svg{
        @apply absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] w-6 h-6;
    }
}
.footer-list__items{
    @apply ltr:hover:pl-2  text-[12px] md:text-sm text-nowrap rtl:hover:pr-2 hover:text-blue-950 hover:underline transition-all;
}
</style>
<script setup>
    const localePath = useLocalePath()
</script>