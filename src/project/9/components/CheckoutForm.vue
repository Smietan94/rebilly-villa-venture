<script setup>
    import { onMounted } from 'vue';
    import RebillyInstruments from '@rebilly/instruments';
    import { useCheckoutStore} from '@/project/9/stores/CheckoutStore.js';

    const checkoutStore = useCheckoutStore();

    onMounted(() => {
        const agreeToTOS = 'I agree to the [terms of service](https://www.example.com/tos) and the [privacy policy](https://www.example.com/privacy)'

        const x = [];
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
                agreeToTOS,
            },
            },
            },
            items: [
            {
                planId: checkoutStore.product,
                quantity: checkoutStore.amount
            },
            ],
            addons: [
            {
                planId: checkoutStore.bumpOffer,
                quantity: 1
            }
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
</template>