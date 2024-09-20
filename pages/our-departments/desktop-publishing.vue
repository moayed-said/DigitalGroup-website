<template>
    <main class="container mx-auto px-8 pt-20 pb-20 text-lg font-[600] text-slate-700">
        <h2 class="text-[32px] pb-4 font-semibold" >{{ $t("sub_pages.our_departments.desktop_publishing") }}</h2>
        <h4 class="text-[24px] pb-4 pt-4 font-semibold">{{ $t("page.our_departments.desktop_publishing.first_question[0]") }} </h4>
        <p class="pb-4"> {{ $t("page.our_departments.desktop_publishing.first_question[1]") }}</p>
        <h4 class="text-[24px] pb-4 pt-4 font-semibold">{{ $t("page.our_departments.desktop_publishing.second_question[0]") }} </h4>
        <p class="pb-4"> {{ $t("page.our_departments.desktop_publishing.second_question[1]") }}</p>
        <h4 class="text-[24px] pb-4 pt-4 font-semibold">{{ $t("page.our_departments.desktop_publishing.services.title") }} </h4>
        <div class="flex flex-wrap">
            <HeadlessDisclosure v-slot="{ open }" v-for="( service, index ) of $tm('page.our_departments.desktop_publishing.services.services')" :key="index">
                <div class=" w-full md:w-1/2 lg:w-1/4 px-4 my-2">                  
                    <HeadlessDisclosureButton class="py-2 px-2 bg-slate-200 w-full rounded-md ">
                        <span class="float-start">{{ $rt(service.title) }}</span>
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
                            <ul>
                                <li v-for="(nestedServices, index) of service.services" :key="index"> {{ $rt(nestedServices) }}</li>
                            </ul>
                        </HeadlessDisclosurePanel>
                    </transition>
                </div>
            </HeadlessDisclosure>
        </div>
        <h4 class="text-[24px] pb-4 pt-8 font-semibold">{{ $t("page.our_departments.desktop_publishing.dtp_clients.title") }} </h4>
        <div class="flex flex-wrap gap-y-2 justify-center">
            <div v-for="(client, index) in clientsImgsPath" class="content-center w-1/3 md:w-1/4 lg:w-1/6">
                <img :src="client" class="mx-auto" alt="">
            </div>
        </div>

    </main>
</template>
<script setup>
    definePageMeta({title: ''})

    const clientsImgsPath = ref();
    const clientsImgs = import.meta.glob('/public/images/clients/*.png', { eager: true });

    clientsImgsPath.value = Array.from(Object.values(clientsImgs).map((c) => c.default))
</script>