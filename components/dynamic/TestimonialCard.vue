<template>
    <div class="w-[290px] md:w-[350px] xl:w-[520px] h-[320px] flex flex-col justify-evenly py-2 px-4 bg-slate-200/60 relative">
        <NuxtImg class=" absolute -top-[25px] left-[30px]" height="60" width="60" src="/images/quote-icon.png" alt="double quotes" />
         <p class=" text-lg font-bold text-blue-950">
            Qui et aute fugiat nostrud enim nostrud laborum qui tempor.
            Qui et aute fugiat nostrud enim nostrud laborum qui tempor.
            Qui et aute fugiat nostrud enim nostrud laborum qui tempor.
         </p>
         <div class="flex">
            <img class="h-16 w-16" src="/images/avatar.png" alt="">
            <div class="py-2 px-4">
                <h4 class="text-2xl font-bold text-blue-950">asdfasdasdasd</h4>
                <span class="text-lg text-gray-500/75">SDasdasdasdasd</span>
            </div>
         </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        testimonialData: Object
    })
</script>
