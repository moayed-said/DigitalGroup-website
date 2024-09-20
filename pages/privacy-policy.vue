<template>
     <main class="container mx-auto px-8 pt-20 pb-20 text-lg font-[600] text-slate-700 leading-relaxed">
        <h2 class="text-[38px] pb-4 font-bold" >{{ $t('pages.privacy_policy') }}</h2>
        <p class="pb-4"> {{ $t("page.privacy_policy.first_paragraph") }} </p>

        <!-- Information Collection and Usage section -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.information_usage.title") }} </h4>
        <p v-for="paragraph in $tm('page.privacy_policy.information_usage.paragraphs')" class="pb-4"> 
            {{ $rt(paragraph) }} 
        </p>
        <!-- choice/Opt-out section -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.choice.title") }} </h4>
        <p v-for="paragraph in $tm('page.privacy_policy.choice.paragraphs')" class="pb-4"> 
            {{ $rt(paragraph) }} 
        </p>

        <!-- Information Sharing sections  -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.information_sharing.title") }} </h4>
        <p v-for="paragraph in $tm('page.privacy_policy.information_sharing.paragraphs')" class="pb-4"> 
            {{ $rt(paragraph) }} 
        </p>

        <!-- Correcting and Updating Personal Information sections  -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.personal_information.title") }} </h4>
        <p  class="pb-4"> 
            {{ $t('page.privacy_policy.personal_information.paragraph') }} 
        </p>

        <!-- Links to External Sites section -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.external_links.title") }} </h4>
        <p class="pb-4"> 
            {{ $t('page.privacy_policy.external_links.paragraph') }} 
        </p>
        
        <!-- Information Security section -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.information_security.title") }} </h4>
        <p class="pb-4"> 
            {{ $t('page.privacy_policy.information_security.paragraph') }} 
        </p>

        <!-- contact_us section -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.contact_us.title") }} </h4>
        <p v-for="paragraph in $tm('page.privacy_policy.contact_us.paragraphs')"  class="pb-4"> 
            {{ $rt(paragraph) }} 
        </p>

        <!-- policy_changes section -->
        <h4 class="text-[24px] pb-4 font-bold">{{ $t("page.privacy_policy.policy_changes.title") }} </h4>
        <p class="pb-4"> 
            {{ $t('page.privacy_policy.policy_changes.paragraph') }} 
        </p>

     </main>
</template>
<script setup>
      definePageMeta({ title: 'pages.privacy_policy'})
</script>

