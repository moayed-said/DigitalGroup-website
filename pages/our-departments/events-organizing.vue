<template>
    <main class="container mx-auto px-8 pt-20 pb-20 text-lg font-[600] text-slate-700 leading-relaxed">
        <h2 class="text-[32px] pb-8 font-bold" >{{ $t("sub_pages.our_departments.events_organizing") }}</h2>
        <p class="pb-4" v-for="(paragraph ,index) in $tm('page.our_departments.events_organizing.paragraphs')" :key="index"> {{ $rt(paragraph) }} </p>
        <h4 class="pt-6 font-bold text-xl">{{ $t("page.our_departments.events_organizing.events_managements.title") }} </h4>
        <ul class="py-4  ltr:pl-3 rtl:pr-3">
            <li v-for="solution in $tm('page.our_departments.events_organizing.events_managements.points')" > <Icon name="dashicons:minus" class="text-blue-950" /> {{ $rt(solution) }} </li>
        </ul>
        <h4 class="text-[24px] pb-4 pt-6 font-bold">{{ $t("page.our_departments.events_organizing.services.title") }} </h4>
        <div class="flex flex-wrap">
            <HeadlessDisclosure v-slot="{ open }" v-for="( service, index ) of $tm('page.our_departments.events_organizing.services.services')" :key="index">
                <div class=" w-full md:w-1/2 lg:w-1/3 px-4 my-2">                  
                    <HeadlessDisclosureButton class="py-2 px-2 bg-slate-200 w-full rounded-md ">
                        <span class="float-start">{{ $rt(service.title) }}</span>
                        <Icon v-if="service?.services" :name="'ic:baseline-keyboard-arrow-' + (open ? 'up' : 'down')"
                        class="float-end inline-block mt-1" />
                    </HeadlessDisclosureButton>
                    <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-out"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                    >
                        <HeadlessDisclosurePanel v-if="service?.services" class="block text-gray-500 px-2 pt-3">
                            <ul>
                                <li v-for="(nestedServices, index) of service.services" :key="index"> {{ $rt(nestedServices) }}</li>
                            </ul>
                        </HeadlessDisclosurePanel>
                    </transition>
                </div>
            </HeadlessDisclosure>
        </div>
        <h4 class="text-[24px] pb-4 pt-8 font-bold">{{ $t("page.our_departments.events_organizing.events_implemented.title") }} </h4>
        <div class="flex flex-wrap">
            <HeadlessDisclosure v-slot="{ open }" v-for="( event, index ) of $tm('page.our_departments.events_organizing.events_implemented.events')" :key="index">
                <div class=" w-full md:w-1/2 lg:w-1/2 px-2 my-2">                  
                    <HeadlessDisclosureButton class="py-2 px-2 bg-slate-200 w-full rounded-md ">
                        <span class="float-start text-[15px]">{{ $rt(event)}}</span>
                        <Icon :name="'ic:baseline-keyboard-arrow-' + (open ? 'up' : 'down')"
                        class="float-end inline-block mt-1" />
                    </HeadlessDisclosureButton>
                    <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-out"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                    >
                        <HeadlessDisclosurePanel class="block text-gray-500 px-2 pt-3">
                            <div class="flex flex-col items-center text-center">      
                                <img :src="`/images/events/event${ index + 1 }.png`" alt="" class="w-2/5 h-[200px] object-contain">
                                <span class="py-2">{{ $t('global.customer',0) +": "+ eventsCustomers[index] }}</span>
                            </div>
                        </HeadlessDisclosurePanel>
                    </transition>
                </div>
            </HeadlessDisclosure>
        </div>
    </main>
</template>
<script setup>
    definePageMeta({title: 'sub_pages.our_departments.events_organizing'})
    const eventsCustomers = ref([]);
    eventsCustomers.value  = [
        "The National Transitional Council, NTC",
        "The National Program of the SMES",
        "Montgomery Libya Ltd. + Dar Alarab",
        "The National Transitional Council, NTC",
        "IFES + The High National Election Committee HNCE",
        "The British Council and The High Education Ministry",
        "The General National Council, GNC",
        "The Foreign Affairs Ministry",
        "The Libyan Paralympic Committee",
        "Qatar Embassy"
    ]
    
</script>