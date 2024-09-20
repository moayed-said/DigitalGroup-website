<template>
    <section class="w-screen h-[350px] bg-bottom mt-32 mb-32" data-aos="fade-up" data-aos-delay="300">
        <h2 class="text-blue-900 font-bold text-[50px] text-center py-5">{{$t('home.partnerships.title')}}</h2>
        <span class="block text-center text-2xl font-semibold text-blue-900 pb-16">{{ $t('home.partnerships.sub_title') }}</span>
        <Swiper dir="ltr" :modules="[SwiperAutoplay]" :slides-per-view="partnershipImagesNumber" :loop="true"
            :autoplay="{ delay: 0,disableOnInteraction: true }" :speed="6000">
            <SwiperSlide v-for="(partnership, index) in partnershipsImgsPath" :key="index">
                <img :src="partnership" class="mx-auto" alt="partnership companies logo" />
            </SwiperSlide>
        </Swiper>
    </section>
</template>
<script setup>
    import { useWindowUtli } from '~/composables/useWindowUtli';
    const { windowWidth } = useWindowUtli();

    const partnershipImagesNumber = ref(6);

    watch(windowWidth, (newValue) => {
        partnershipImagesNumber.value = newValue >= 800 ? 6 : 3;
    })

    const partnershipsImgsPath = ref();
    const partnershipsImgs = import.meta.glob('/public/images/partnerships/*.png', { eager: true });

    partnershipsImgsPath.value = Array.from(Object.values(partnershipsImgs).map((c) => c.default.replace('/_nuxt/public','')))
</script>
<style>
    .swiper-wrapper{
    transition-timing-function : linear;
    }
</style>
