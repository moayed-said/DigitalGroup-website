<template>
    <main class="container mx-auto px-8 pt-20 pb-20 text-lg font-[600] text-slate-700 leading-relaxed">
       <h2 class="text-[38px] pb-4 font-bold" >{{ $t('pages.terms_of_use') }}</h2>
       <template v-for="term in $tm('page.terms_of_use')" >
           <h4 class="text-[24px] pb-4 font-bold">{{ $rt(term.title) }} </h4>
           <p class="pb-4"> 
               {{ $rt(term.paragraph) }} 
           </p>
       </template>
    </main>
</template>
<script setup>
     definePageMeta({ title: 'pages.terms_of_use'})
</script>
