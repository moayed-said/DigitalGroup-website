<template>
    <section class="flex flex-wrap lg:h-screen min-h-[600px] pt-20 mt-20">
        <div class="relative order-2 lg:order-1 w-full lg:w-2/3 flex flex-col gap-4 justify-center before:content-[''] before:absolute ltr:before:left-0 rtl:before:right-0 before:bg-slate-200 before:w-[140%] before:lg:h-5/6 before:min-h-[450px] before:h-[150%] before:bottom-0 before:lg:bottom-auto  before:z-0 ">
            <div class="z-10 px-4 ltr:lg:pl-28 rtl:lg:pr-28">
                <h1 class="text-[40px] md:text-[50px]  font-semibold text-blue-950 pb-5"> {{ featureData.header }} </h1>
                <p class="text-xl md:text-2xl text-blue-950 pb-10 leading-relaxed" :class="{'pb-10' : !isSecondParagarphExists }">{{  featureData.paragraph }} </p>
                <p class="text-xl md:text-2xl text-blue-950 leading-relaxed" v-if="isSecondParagarphExists"> {{ featureData.secondParagarphparagraph }} </p>
                <div class="mb-6" v-if="featureData.link">
                    <a class="inline-block grow-0 p-1 px-6 ring-2 text-slate-100 ring-blue-900 cursor-pointer font-semibold bg-blue-900 hover:bg-slate-100 hover:text-blue-900 hover:ring-2 hover:ring-blue-900 transition">{{$t('global.learn_more')}}</a>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/3 relative h-[400px] lg:h-auto order-1 lg:order-2">
            <img src="/images/white-wave.svg" class="absolute h-[300px] lg:h-[200px] w-[320px] lg:top-0 -top-[100px] ltr:right-[150px] rtl:left-[150px] ">
            <div class="absolute z-10 w-[400px] h-[380px] top-1/2 ltr:right-0 rtl:left-0 transform origin-[50% 0] -translate-y-[50%]">
                <NuxtImg  width="400px" height="380px" class="w-full h-full object-cover" :src="featureData.imagePath || '/images/default-image.jpg'" alt="image" data-aos="fade-down"
                    data-aos-duration="500"/>
            </div>
        </div>
    </section>
</template>
<script setup>
    const props = defineProps({
        featureData: Object
    })
    
    var isSecondParagarphExists = computed(()=> {
        return props.featureData.secondParagraph ? true : false
    })
</script>