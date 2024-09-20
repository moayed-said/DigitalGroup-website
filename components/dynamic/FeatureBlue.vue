<template>
    <section class="flex flex-wrap lg:h-screen min-h-[600px] pt-20 mt-20">
        <div class="relative lg:w-1/3 h-[400px] lg:h-auto w-full">
            <img src="/images/white-wave.svg" class="absolute h-[300px] lg:h-[200px] w-[320px] lg:top-0 -top-[100px] ltr:left-[150px] rtl:right-[150px] ltr:lg:right-[100px] rtl:lg:left-[100px]">
            <div class="absolute z-10 w-[400px] h-[380px] top-1/2 ltr:lg:left-0 rtl:lg:right-0 lg:transform origin-[50% 50%] -translate-y-[50%] lg:translate-x-0">
                <NuxtImg width="400px" height="380px" class="w-full h-full object-cover" :src="featureData.imagePath || '/images/default-image.jpg'" alt="image" data-aos="fade-down"
                    data-aos-duration="500"/>
            </div>
        </div>
        <div class="relative w-full lg:w-2/3 flex flex-col gap-4 justify-center before:content-[''] before:absolute ltr:before:right-0 rtl:before:left-0 before:bg-blue-900 before:w-[140%] before:lg:h-5/6 before:min-h-[450px] before:h-[140%] before:bottom-0 before:lg:bottom-auto  before:z-0">
            <div class="z-10 px-5 pt-4">
                <h1 class="text-[40px] md:text-[50px] font-semibold text-slate-100 pb-5">{{ featureData.header }} </h1>
                <p class="text-xl md:text-2xl text-slate-200 pb-10 leading-relaxed" :class="{'pb-10' : !isSecondParagarphExists }"> {{ featureData.paragraph }} </p>
                <p class="text-xl md:text-2xl text-slate-200 leading-relaxed pb-10" v-if="isSecondParagarphExists"> {{ featureData.secondParagraph }} </p>
                <div class="mb-6" v-if="featureData.link">
                    <a :to="localePath(featureData.link)" class="inline-block grow-0 p-1 px-6 ring-2 text-blue-900 ring-blue-900 cursor-pointer font-semibold bg-slate-100 hover:bg-blue-900  hover:text-slate-100 hover:ring-2 hover:ring-slate-100 transition">{{$t(featureData.NavButtonName ?? 'global.learn_more')}}</a>
                </div>
                <div class="mb-6" v-if="featureData.outerLink">
                    <a :href="featureData.outerLink" target="_blank" rel="noopener noreferrer" class="inline-block grow-0 p-1 px-6 ring-2 text-blue-900 ring-blue-900 cursor-pointer font-semibold bg-slate-100 hover:bg-blue-900  hover:text-slate-100 hover:ring-2 hover:ring-slate-100 transition">{{$t(featureData.LinkButtonName ?? 'global.learn_more')}}</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const localePath = useLocalePath()
const props = defineProps({
    featureData: Object
})

var isSecondParagarphExists = computed(()=> {
    return props.featureData.secondParagraph? true : false
})
</script>