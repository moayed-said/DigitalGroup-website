<template>
    <section class="flex flex-wrap lg:min-h-[100vh] container px-4 mx-auto pt-10 pb-20 ">
        <div class="w-full lg:w-1/2 flex flex-col gap-4 mb-10 justify-center">
            <h2 class=" text-[50px] lg:text-[60px] font-bold text-blue-950 ">{{ $t('home.hero.title') }}</h2>
            <p class="text-xl text-gray-700 my-4">{{  $t('home.hero.subTitle') }}</p>
            <div>
                <NuxtLink class="grow-0 px-2 text-blue-900 cursor-pointer font-semibold bg-slate-100 hover:bg-blue-900 hover:text-white transition">{{ $t('global.more_info') }}</NuxtLink>
            </div>
        </div>
        <div class="relative w-full lg:w-1/2 min-h-[600px]">
            <NuxtImg width="400px" preload quality="30" src="/images/sphere.svg" class="absolute h-[300px] lg:h-[400px] w-[400px] -top-[60px] ltr:-right-[200px] rtl:-left-[200px] ltr:lg:-right-[100px] rtl:lg:-left-[100px]" />
            <NuxtImg width="400px" preload quality="30" src="/images/circleOfDots.svg" class="absolute h-[400px] w-[400px] -bottom-[50px] rtl:-right-[200px] ltr:-left-[200px] ltr:lg:left-[100px] rtl:lg:right-[100px]" />
            <div class="absolute w-[320px] lg:w-[400px] h-[420px] top-1/2 left-1/2 transform origin-[50% 50%] -translate-x-[50%] ltr:lg:-translate-x-[20%] rtl:lg:-translate-x-[80%] -translate-y-[50%] ">
                <NuxtImg width="400px" class="w-full h-full object-cover" src="/images/image1.jpg" alt="image" data-aos="fade-up" data-aos-delay="300"/>
            </div>
        </div>
    </section>
</template>
