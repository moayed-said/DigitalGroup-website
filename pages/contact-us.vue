<template>
    <main class="container mx-auto px-4 lg:px-8 pt-20 pb-20 text-lg font-[600] text-slate-700">
        <h2 class="text-[42px] pb-5 font-semibold">{{ $t("pages.contact_us") }}</h2>
        <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 p-1 lg:p-4">
                <h4 class="text-[24px] pb-4 pt-6 font-semibold">{{ $t("page.contact_us.contact") }} </h4>
                <ul class="text-xl">
                    <li class="p-2 h-[60px] ">
                        <span class="contact-links__icon"><Icon name="solar:letter-bold"/></span>
                        <a href="#" class="align-top leading-[50px] inline-block px-2 text-slate-800 opacity-65">info@digitalgroup.ly</a>
                    </li>
                    <li class="p-2 h-[60px]">
                        <span class="contact-links__icon"><Icon name="solar:phone-bold"/></span>
                        <a href="tel:#" class="align-top leading-[50px] inline-block px-2 text-slate-800 opacity-65">Tel: +218 21 360 6994</a>
                    </li>
                    <li class="p-2 h-[60px]">  
                        <span class="contact-links__icon"><Icon name="solar:printer-minimalistic-bold"/></span>
                        <a href="fax:#" class="align-top leading-[50px] inline-block px-2 text-slate-800 opacity-65">Fax: +218 21 360 2101</a>
                    </li>
                </ul>
                <h4 class="text-[24px] pb-4 pt-6 font-semibold">{{ $t("page.contact_us.address") }}</h4>
                <div class="h-[300px] mt-4 ring-2 ring-slate-200 shadow-md">
                    <LMap ref="map" :zoom="zoom" :center="[32.871816671944664, 13.205946446342887]">
                        <LTileLayer url="https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                            layer-type="base" name="Open Street Maps" />
                        <LMarker :lat-lng="[32.871816671944664, 13.205946446342887]" >
                            <LIcon iconUrl="/images/map-marker.png" :iconSize="[30, 40]" ></LIcon> 
                        </LMarker>
                    </LMap>
                </div>
            </div>
            <div class="w-full lg:w-1/2 p-1 lg:p-4">
                <form action="post" class="flex flex-col justify-between h-full" href="#">
                    <span class=" bg-red-500/10 border-1 border border-dashed border-red-500 p-4 transition-all duration-800 ease-in-out" v-if="v$.$errors.length">{{ v$.$errors[0].$message }}</span>
                    <span class=" bg-green-500/10 border border-dotted border-green-500 border-1 p-4 transition-all duration-400 ease-in-out"  v-if="showSendState.show"
                        :class="{'bg-red-500/10 border-red-500': showSendState.state == 1 }"
                        > {{ showSendState.message }} </span>
                    <span class=" border border-dotted bg-red-500/10 border-red-500' border-1 p-4 transition-all duration-400 ease-in-out"  v-if="requestError"
                    > {{ $t('message_state.error_with_no_response') }} </span>

                    <h4 class="text-[24px] pb-4 pt-6 font-semibold">{{ $t("page.contact_us.send_message") }} </h4>
                    <div> 
                            <input class="contact-form__input w-[45%] rtl:ml-[5%] ltr:mr-[5%] h-14"  name="firstName" id="firstName" v-model="contactForm.firstName" :placeholder="$t('page.contact_us.first_name')" autocomplete="on" type="text" @change="v$.firstName.$touch"
                                :class="{
                                        'border-red-500 focus:border-red-500': v$.firstName.$error,
                                    }">
                                    
                        <input class="contact-form__input w-[45%] rtl:mr-[5%] ltr:ml-[5%] h-14" name="lastName"  id="lastName"  v-model="contactForm.lastName" :placeholder="$t('page.contact_us.last_name')"autocomplete="on" type="text" @change="v$.lastName.$touch"
                            :class="{
                                    'border-red-500 focus:border-red-500': v$.lastName.$error,
                                }">
                                
                    </div>
                    <input class="contact-form__input w-full h-14" name="email"  id="email" v-model="contactForm.email" :placeholder="$t('page.contact_us.email')" autocomplete="on" type="email" @change="v$.email.$touch"
                        :class="{
                                    'border-red-500 focus:border-red-500': v$.email.$error,
                                }">
                    <input class="contact-form__input w-full h-14" name="phone"  id="phone" v-model="contactForm.phone" :placeholder="$t('page.contact_us.phone_number')" autocomplete="on" type="phone" @change="v$.phone.$touch"
                        :class="{
                                    'border-red-500 focus:border-red-500': v$.phone.$error,
                                }">
                    <input class="contact-form__input w-full h-14"  name="subject"  id="subject" v-model="contactForm.subject" :placeholder="$t('page.contact_us.subject')" autocomplete="on" type="text" @change="v$.subject.$touch"
                    :class="{
                                'border-red-500 focus:border-red-500': v$.subject.$error,
                            }">
                    <textarea class="contact-form__input w-full h-24 p-2" name="message" id="message" v-model="contactForm.message" :placeholder="$t('page.contact_us.message')" autocomplete="on" type="text" @change="v$.message.$touch"
                        :class="{'border-red-500 focus:border-red-500 ': v$.message.$error}"></textarea>
                    <button type="submit" @click="sendMessage"  class="p-2 ring-blue-900 bg-slate-200 hover:bg-blue-900 text-blue-900 hover:text-slate-200 transition duration-200 ring-2 cursor-pointer text-xl" :value="$t('global.send')"> {{ status != 'pending' ? $t('global.send') : '&nbsp;' }} <Icon v-if="status == 'pending'" name="svg-spinners:bars-fade"/> </button>
                </form>
            </div>
        </div>
    </main>
</template>
<script setup>
    import { useI18nValidators } from '~/composables/useI18nValidation'; 
    import { useVuelidate } from '@vuelidate/core';
    const { t } = useI18n(); 
    
    const { required, email, minLength, maxLength, integer, string } =  useI18nValidators();


    definePageMeta({title: 'pages.contact_us'})

    const zoom = ref(16);
    const showSendState = ref({
        message: '',
        state: '',
        show: false
    })
    
    const contactForm = reactive(
        {
            firstName:'',
            lastName:'',
            email:'',
            subject:'',
            phone:'',
            message:'',
        }
    );
    function hiddenSendMessage(duration = 3000){
        setTimeout(()=> {
            showSendState.value = {
                message: '',
                state: '',
                show: false
            }
        }, duration)
    }

    const rules = computed(() => {
        return {
            firstName:{ required, minLength: minLength(3), maxLength: maxLength(12) },
            lastName:{ required, minLength: minLength(3), maxLength: maxLength(12) },
            email: { required, email },
            phone: { required, integer,  maxLength: maxLength(11)},
            subject:{required, string, maxLength: maxLength(255)},
            message:{required, string, minLength: minLength(15)},
        };
    });

    const v$ = useVuelidate(rules, contactForm);

    async function sendMessage(event){
        event.preventDefault()
        const isFormCorrect = await v$.value.$validate()
        if (!isFormCorrect) return
        send()
     
    }
    const { refresh: send, status,  error: requestError  } = useFetchBase("/api/email", {
        method: "POST",
        body: contactForm,
        immediate: false,
        watch: false,
        async onResponse({ response }) {
            if (response?.status === 422) {
                showSendState.value = { message: t('message_state.response_with_error', response._data), state: 1, show: true }
                hiddenSendMessage(10000)
            } else if (response.ok) {
                showSendState.value = { message: t('message_state.success'), state: 0, show: true }
                hiddenSendMessage(10000)
            }
        }
    });
    
    
</script>
<style>
    .leaflet-control-attribution{
        height: 0;
        width: 0;
    } 
    .contact-links__icon{
    @apply relative inline-block rounded-full w-12 h-12 p-[6px] bg-slate-200 text-blue-900 transition-colors ;

        svg{
            @apply absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] w-6 h-6;
        }
    }
    .contact-form__input{
       @apply bg-slate-200 rounded-lg px-2 placeholder:text-blue-900/50 my-2 border-2 focus-visible:!outline-blue-900
    }
</style>