<template>
    <div class="bg-[url('/images/digital_circle_bg.png')] lg:p-[30px] p-4">
        <section class="container bg-white lg:px-10 py-5 pb-5 mx-auto w-full justify-items-center lg:grid-flow-row-dense grid-cols-0 grid:gap-2 lg:grid-cols-12 lg:grid-rows-10 ">
            <!-- <img src="/images/pattren.png" class="absolute h-18 w-18 right-[420px]" alt=""> -->
            <div class="lg:row-span-2 lg:col-span-3">
                <h2 class="text-blue-900 text-[40px] font-bold text-center md:text-start">
                    {{ $t('home.testimonial.title') }}
                </h2>
                <span class="block text-center md:text-start text-2xl font-semibold text-blue-900">{{ $t('home.testimonial.sub_title') }}</span>
            </div>
                <!-- <DynamicTestimonialCard class="hidden lg:flex lg:col-start-2 lg:row-start-5" data-aos="fade-up" data-aos-delay="400"></DynamicTestimonialCard>
                <DynamicTestimonialCard class="hidden lg:flex  lg:col-start-5 lg:row-start-4" data-aos="fade-up" data-aos-delay="500"></DynamicTestimonialCard>
                <DynamicTestimonialCard class="hidden lg:flex  lg:col-start-8 lg:row-start-0" data-aos="fade-up" data-aos-delay="400"></DynamicTestimonialCard>
                <DynamicTestimonialCard class="hidden lg:flex  lg:col-start-8 lg:row-start-6" data-aos="fade-up" data-aos-delay="700"></DynamicTestimonialCard>
                <DynamicTestimonialCard class="hidden lg:flex  lg:col-start-11 lg:row-start-3" data-aos="fade-up" data-aos-delay="500"></DynamicTestimonialCard> -->
    
            <Swiper class="lg:hidden my-10" dir="ltr" :modules="[SwiperAutoplay, SwiperPagination]" :pagination="{clickable: true}" :slides-per-view="testimonialCardNumber"
                :autoplay="{ delay: 3000,disableOnInteraction: true }" :speed="500" data-aos="fade-up" data-aos-delay="400">
                <SwiperSlide><DynamicTestimonialCard class="mx-auto"></DynamicTestimonialCard></SwiperSlide>
                <SwiperSlide><DynamicTestimonialCard class="mx-auto" ></DynamicTestimonialCard></SwiperSlide>
                <SwiperSlide><DynamicTestimonialCard class="mx-auto" ></DynamicTestimonialCard></SwiperSlide>
                <SwiperSlide><DynamicTestimonialCard class="mx-auto" ></DynamicTestimonialCard></SwiperSlide>
            </Swiper>
        </section>
    </div>
</template>
<style lang="scss">
    .swiper-slide{
        @apply p-4;
    }
    .swiper{
        overflow-y: revert;
    }
    .swiper-pagination{
        transform: translateY(40px);

        .swiper-pagination-bullet{
            @apply w-[32px] h-1 rounded-[10px] bg-blue-900
        }
    }
</style>
<script setup>
import { useWindowUtli } from '~/composables/useWindowUtli';
const { windowWidth } = useWindowUtli();

const testimonialCardNumber = ref(2);

watch(windowWidth, (newValue) => {
    testimonialCardNumber.value = newValue >= 1024 ? 2 : 1;
})
</script>
