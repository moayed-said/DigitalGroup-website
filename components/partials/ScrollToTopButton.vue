<template>
    <Transition name="fade">
        <a v-if="showingButton" class="block bg-blue-900 text-slate-200 fixed bottom-5 right-5 z-[500] shadow-xl transition ease-in-out duration-700" @click="scrollToTop">
            <Icon name="solar:alt-arrow-up-outline" class="h-12 w-12 mb-[3px]" />
        </a>
    </Transition>
</template>
<script setup>
    import { useWindowUtli } from '~/composables/useWindowUtli';
    const { scrollTop } = useWindowUtli();

    const showingButton = computed(() => {
        return scrollTop.value > 1000 ? true: false
    }) 

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }</style>