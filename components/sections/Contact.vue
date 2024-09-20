<template>
    <section class="w-screen">
        <div class="flex flex-col lg:flex-row my-24">
            <div class="w-full lg:w-1/2 px-10">
                <h2 class="text-blue-900 font-bold text-[42px] pb-5">{{ $t("page.contact_us.contact") }} </h2>
                <span class="block text-xl text-blue-900 pb-10">{{ $t("home.contact.sub_title") }}</span>
                <form action="post" class="flex flex-col gap-4 justify-between" href="#">
                    <span class=" bg-red-500/10 border-1 border border-dashed border-red-500 p-4 transition-all duration-800 ease-in-out" v-if="v$.$errors.length">{{ v$.$errors[0].$message }}</span>
                    <span class=" bg-green-500/10 border border-dotted border-green-500 border-1 p-4 transition-all duration-400 ease-in-out"  v-if="showSendState.show"
                        :class="{'bg-red-500/10 border-red-500': showSendState.state == 1 }"
                        > {{ showSendState.message }} </span>
                    <span class=" border border-dotted bg-red-500/10 border-red-500' border-1 p-4 transition-all duration-400 ease-in-out"  v-if="requestError"
                    > {{  $t('message_state.error_with_no_response') }} </span>
                    <div> 
                        <input class="contact-form__input w-[45%] rtl:ml-[5%] ltr:mr-[5%] h-14" name="firstName" id="firstName" :placeholder="$t('page.contact_us.first_name')" v-model="contactForm.firstName" autocomplete="on" type="text" @change="v$.firstName.$touch"
                            :class="{
                                        'border-red-500 focus:border-red-500': v$.firstName.$error,
                                    }">
                        <input class="contact-form__input w-[45%] rtl:mr-[5%] ltr:ml-[5%] h-14" name="lastName"  id="lastName" :placeholder="$t('page.contact_us.last_name')" v-model="contactForm.lastName" autocomplete="on" type="text" @change="v$.lastName.$touch"
                            :class="{
                                        'border-red-500 focus:border-red-500': v$.lastName.$error,
                                    }">
                    </div>
                    <input class="contact-form__input w-full h-14" name="email"  id="email"  :placeholder="$t('page.contact_us.email')" autocomplete="on" type="email" v-model="contactForm.email"  @change="v$.email.$touch"
                        :class="{
                                    'border-red-500 focus:border-red-500': v$.email.$error,
                                }">
                    <input class="contact-form__input w-full h-14" name="phone"  id="phone" :placeholder="$t('page.contact_us.phone_number')" autocomplete="on" type="phone" v-model="contactForm.phone"  @change="v$.phone.$touch"
                        :class="{
                                    'border-red-500 focus:border-red-500': v$.phone.$error,
                                }">
                    <input class="contact-form__input w-full h-14"  name="subject"  id="subject" :placeholder="$t('page.contact_us.subject')" autocomplete="on" type="text" v-model="contactForm.subject"  @change="v$.subject.$touch"
                        :class="{
                                    'border-red-500 focus:border-red-500': v$.subject.$error,
                                }">
                    <textarea class="contact-form__input w-full h-24 p-2"  name="message" id="message" :placeholder="$t('page.contact_us.message')" autocomplete="on" type="text" v-model="contactForm.message"  @change="v$.message.$touch" :class="{'border-red-500 focus:border-red-500': v$.message.$error}"></textarea>

                    <button type="submit" @click="sendMessage"  class="p-2 ring-blue-900 bg-slate-200 hover:bg-blue-900 hover:text-slate-200 transition text-blue-900 duration-200 ring-2 cursor-pointer text-xl" :value="$t('global.send')"> {{ status != 'pending' ? $t('global.send') : '&nbsp;' }} <Icon v-if="status == 'pending'" name="svg-spinners:bars-fade"/> </button>
                </form>
            </div>
            <div class="w-full h-[300px] lg:h-auto mt-10 lg:mt-0 lg:w-1/2 ltr:lg:mr-10 rtl:lg:ml-10 ring-2 ring-slate-200 shadow-md">
                <LMap zoom="16" :center="[32.871816671944664, 13.205946446342887]">
                    <LTileLayer url="https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                        layer-type="base" name="Open Street Maps" />
                    <LMarker :lat-lng="[32.871816671944664, 13.205946446342887]" >
                        <LIcon iconUrl="/images/map-marker.png" :iconSize="[30, 40]" :iconAnchor="[18, 25]"></LIcon> 
                    </LMarker>
                </LMap>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { useI18nValidators } from '~/composables/useI18nValidation'; 
    import { useVuelidate } from '@vuelidate/core';
    const { t } = useI18n(); 

    const { required, email, minLength, maxLength, integer, string } =  useI18nValidators();
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
                showSendState.value = { message: t('message_state.response_with_error', response?._data), state: 1, show: true }
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
    .contact-form__input{
       @apply bg-slate-200 rounded-lg px-2 placeholder:text-blue-900/50 my-2 border-2
    }
</style>