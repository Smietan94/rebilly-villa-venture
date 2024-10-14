<script setup>
    import { onMounted } from 'vue';
    import RebillyInstruments from '@rebilly/instruments';

    onMounted(() => {
        const consentToSubscription = 'I agree to subscribe. I acknowledge that I will be charged a recurring fee. I understand that I can cancel my subscription at any time before the next billing cycle to avoid future charges.'
        const agreeToTOS = 'I agree to the [terms of service](https://www.example.com/tos) and the [privacy policy](https://www.example.com/privacy)'

        RebillyInstruments.mount({
            organizationId: "phronesis---villaventure",
            publishableKey: "pk_sandbox_RsMEoPhRvOXyQRy2e0mCHLm-nfNMND2aW5aW1-n",
            websiteId: "example.com",
            apiMode: 'sandbox',
            features: {
                showConsentCheck: ['form'],
            },
            i18n: {
            en: {
                consentCheck: {
                    consentToSubscription,
                    agreeToTOS,
                },
            },
            },
            paymentInstruments: {
                address: {
                    show: ['email', 'phoneNumber', 'city', 'country'],
                    require: ['email', 'phoneNumber', 'address', 'city', 'country'],
            }
            },
            items: [
                {
                    planId: 'premium-membership',
                    quantity: 1
                },
            ]
        });
    });

    // Optional
    RebillyInstruments.on('instrument-ready', (instrument) => {
        console.info('instrument-ready', instrument);
    });
    RebillyInstruments.on('purchase-completed', (purchase) => {
        console.info('purchase-completed', purchase);
    });
</script>

<template>
    <div class="rebilly-instruments-summary mx-auto"></div>
    <div class="rebilly-instruments mx-auto"></div>
    <div class="container text-end">
        <router-link :to="{ name: 'Debrief8' }" class="btn btn-primary text-center m-4 mx-auto">Go to project #8 debrief</router-link>
    </div>
</template>