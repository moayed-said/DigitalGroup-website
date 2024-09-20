<template>
    <div>
      <PartialsHeader />
        <Transition name="page">
          <slot />
        </Transition>
      <PartialsScrollToTopButton></PartialsScrollToTopButton>
      <PartialsFooter />
    </div>
</template>
<script setup>
</script>
<style>
html[dir="rtl"] title{
  direction: rtl; 
  unicode-bidi: bidi-override;
}
</style>
