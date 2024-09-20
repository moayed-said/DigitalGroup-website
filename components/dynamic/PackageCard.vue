<template>
    <section class="relative border-0 rounded-t-xl bg-[#1e3a8a] shadow-lg w-[300px] transform hover:shadow-2xl transition-shadow duration-200">
        <div class="bg-white text-[#1e3a8a] py-4 text-center border-0 rounded-t-xl outline outline-1 outline-blue-950">
            <span class=" block text-center text-md">{{ $t(packageDetails.name) }}</span>
            <span class="text-4xl">{{ $t(packageDetails.price) }}</span>
        </div>
        <div class="text-center py-10 text-white">
            <ul>
                <li class="py-2 px-4" v-for=" (detail, index) in $tm(packageDetails.details) " :key="index">
                    {{ $rt(detail) }}
                </li>
            </ul>
        </div>
        <div class="absolute bottom-0 origin-[50% 50%] left-1/2 translate-x-[-50%] translate-y-[40%]">
            <a :href="packageDetails.orderLink" target="_blank" rel="noopener noreferrer" class="bg-white text-blue-950 py-1 px-4 outline outline-1 outline-blue-950">{{ $t('global.order_link') }}</a>
        </div>
    </section>
</template>
<script setup>
    const props = defineProps({
        packageDetails: Object
    })
</script>