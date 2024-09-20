<template>
    <section class="w-screen p-4 lg:h-[300px] bg-[url(/images/facts-bg.png)] bg-no-repeat bg-cover bg-blue-900 bg-blend-multiply">
        <ul class="container mx-auto h-full flex flex-col lg:flex-row gap-8 justify-around items-center text-white text-[45px] font-bold">
            <li v-for="(fact , index) in facts" :key="index" class="text-center">
                <span ref="factsRef" :data-val="fact.number" class=" relative before:absolute before:-left-6 before:top-2 ltr:before:content-['+'] rtl:after:content-['+']">0</span>
                <span class="block text-[35px] font-semibold">{{ fact.name }}</span>   
            </li>
        </ul>
    </section>
</template>
<script setup>
    const { t } = useI18n(); 
    import { useWindowUtli } from '~/composables/useWindowUtli';
    const { scrollTop } = useWindowUtli();

    var animationTriggered = false;
    const factsRef = ref([]);
    const facts = ref([
        { 
            number: 100,
            name: t("home.facts.customers")
        },
        {
            number: 400,
            name: t("home.facts.events")
        },
        {
            number: 607,
            name: t("home.facts.partnerships")
        },
    ]) 

    watch(scrollTop, (newValue) => {
        if(factsRef.value[0].offsetTop - 300 < newValue && !animationTriggered){
            handleFactsAnimtions(4);
            animationTriggered = true;
        }
    })

    function handleFactsAnimtions(seconds){
        factsRef.value.forEach((element) => {
            let startValue = 0;
            let endValue = parseInt(element.getAttribute("data-val"));
            let counter = setInterval(function () {
            let step = parseInt( endValue / 100)
            element.textContent = startValue;
            startValue += step;
            if ((startValue + step ) >= endValue ) {
                element.textContent = endValue
                clearInterval(counter);
            }
            }, seconds || 4);
        });
    }
</script>