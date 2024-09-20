<template>
    <label class="relative inline-block lg:hidden cursor-pointer rtl:pr-2 ltr:pl-2 py-6 z-[1100]" @click="openSideMenu">
        <input class="peer hidden" type="checkbox" v-model="mobileMenu" />
        <!-- <div
                class="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform">
            </div> -->
        <div class="pointer inline lg:hidden">
            <Icon name="solar:hamburger-menu-outline" class="h-6 w-6 mb-[3px]" />
        </div>
        <!-- <div class="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
            &nbsp;
        </div> -->
        <div
            data-closeButton="true"
            class="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-300 peer-checked:translate-x-0">
            <div class="float-right min-h-full w-[70%] bg-white rtl:pr-6 ltr:pl-6 pt-12 shadow-2xl" >
                <div class="pb-6">
                    <button >
                        <Icon name="solar:close-circle-linear" class="h-8 w-8" data-closeButton="true" />
                    </button>
                </div>
                <h2 class="text-2xl pb-4">{{ $t('global.menu') }}:</h2>
                <menu class="flex flex-col" >
                    <slot name="menus" ></slot>
                </menu>
            </div>
        </div>
    </label>
</template>
<script setup>
    const mobileMenu = ref(false)

    function openSideMenu(event){
        event.preventDefault()
        if(event.target.getAttribute('data-closeButton')){
            mobileMenu.value = false;
        }else{
            mobileMenu.value = true;
        }
    }
</script>