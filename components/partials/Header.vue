<template>
    <header class="">
        <div class="container mx-auto z-40 flex justify-center items-center bg-transparent">
            <div class="w-full flex items-center px-6 justify-between">
                <div class="max-w-full">
                    <a href="#" class="block">
                        <img src="/images/digital_group_telecom_informatics_co_logo.jpg" alt="logo"
                            class="w-[100px] h-auto" />
                    </a>
                </div>
                <div>
                    <nav class="text-lg font-[600] text-slate-700 hidden lg:block">
                        <ul class="flex flex-row gap-6">
                            <li v-for="( menu, index ) in menus" :key="index" >
                                <HeadlessMenu v-if="menu.subMenus?.length" ref="menu" v-slot="{ open }" as="div"
                                    class="relative inline-block z-20">
                                    <!-- @mouseover="onMouseOverSubMenu($event, open)"-->
                                    <HeadlessMenuButton
                                        class="inline pb-1"
                                        :class="{ 'border-b-2 border-blue-900 decoration-2 text-blue-900': ($route.path.includes('our-departments')) }">
                                        {{ menu.title }}
                                        <Icon :name="'ic:baseline-keyboard-arrow-' + (open ? 'up' : 'down')"
                                            :class="{ 'text-blue-900': ($route.path.includes('our-departments')) }" />
                                    </HeadlessMenuButton>
                                        <HeadlessMenuItems
                                            class="absolute w-52 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
                                            <HeadlessMenuItem v-for="(subMenu, subMenuIndex) in menu.subMenus" 
                                                v-slot="{ active}" :key="subMenuIndex">
                                                    <NuxtLink 
                                                        class="block p-4"
                                                        :class="{ '!bg-blue-900 !text-white': active, 'border-2 border-blue-900 bg-slate-200 text-blue-900': ($route.path == localePath(subMenu.path)) }"
                                                        :to="localePath(subMenu.path)"
                                                       
                                                      >
                                                        {{ subMenu.title }}
                                                    </NuxtLink>
                                            </HeadlessMenuItem>
                                        </HeadlessMenuItems>
                                </HeadlessMenu>
                                <NuxtLink v-else :to="localePath(menu.path) ?? localePath('/')"
                                    :class="{ 'border-b-2 border-blue-900 decoration-2 text-blue-900': ($route.path == localePath(menu.path)) }"
                                    :key="index">
                                    {{ menu.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="text-lg font-[600] text-slate-700">
                    <button v-if="locale == 'en'" @click="setLocale('ar')"><Icon name="solar:earth-line-duotone" color="black" class="mx-1 mb-1" />AR</button>
                    <button v-else @click="setLocale('en')"><Icon name="solar:earth-line-duotone" color="black" class="mx-1 mb-1" />EN</button>
                    <PartialsMobileSideMenu>
                        <template #menus>
                            <menu class="px-4 flex flex-col text-lg">
                                <li v-for="( menu, index ) in menus" class="py-1">
                                    <ul v-if="menu?.subMenus">
                                        <li @click="ourDepartmentSubMenuClicked($event)">
                                            {{ menu.title }}
                                        </li>
                                        <li v-for="( subMenu, index ) in menu.subMenus" 
                                            :class="{ 'hidden': !ourDepartmentSubMenuShowing }"
                                            class="ltr:pl-4 rtl:pr-4 before:content-['-'] before:px-1 py-1">
                                            <NuxtLink class="pt-2"
                                                :to="localePath(subMenu.path)"
                                                :class="{ 'underline decoration-2 text-blue-900': ($route.path == localePath(subMenu.path)) }"
                                                :key="index">
                                                {{ subMenu.title }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                    <NuxtLink v-else class="pt-2" :to="localePath(menu.path) ?? localePath('/')"
                                        :class="{ 'underline decoration-2 text-blue-900': ($route.path == localePath(menu.path)) }"
                                        :key="index">
                                        {{ menu.title }}
                                    </NuxtLink>
                                </li>
                            </menu>
                        </template>
                    </PartialsMobileSideMenu>
                    <!-- <button dir="ltr" class="hidden lg:inline-block p-1 px-4 mx-4 text-blue-900 cursor-pointer text-xl font-semibold bg-slate-100 hover:bg-blue-900 hover:text-white transition"> Digital Cloud <Icon name="solar:cloud-linear" class="mb-1 ml-1" /></button> -->
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
const { t, locale, setLocale } = useI18n();
const localePath = useLocalePath()
const ourDepartmentSubMenuShowing = ref(false)

function ourDepartmentSubMenuClicked() {
    ourDepartmentSubMenuShowing.value = !ourDepartmentSubMenuShowing.value;
}

const menus = computed(() => {
    return [
        {
            title: t("pages.home"),
            path: '/'
        },
        {
            title: t("pages.digital"),
            path: '/digital'
        },
        {
            title: t("pages.our_departments"),

            subMenus: [
                {
                    title: t("sub_pages.our_departments.telecom"),
                    path: '/our-departments/telecom'
                },
                {
                    title: t("sub_pages.our_departments.it_networking"),
                    path: '/our-departments/it-networking'
                },
                {
                    title: t("sub_pages.our_departments.web_services"),
                    path: '/our-departments/web-services'
                },
                // {
                //     title: t("sub_pages.our_departments.desktop_publishing"),
                //     path: '/our-departments/desktop-publishing'
                // },
                {
                    title: t("sub_pages.our_departments.events_organizing"),
                    path: '/our-departments/events-organizing'
                },
            ]
        },
        {
            title: t("pages.contact_us"),
            path: 'contact-us'
        },

    ]
})
</script>
<style></style>
