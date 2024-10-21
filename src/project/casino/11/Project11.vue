<script setup>
    import { onMounted } from 'vue';
    import RebillyInstruments from '@rebilly/instruments';

    const CUSTOMER_ID = "cus_01JAFK7P8GZ3CPTND0NFRC9N8D";
    const REBILLY_API_KEY = "sk_sandbox_zEGZaD9gCtUZQHuSJPPcxruavuWcGC-8-qvGObd";
    const ORGANIZATION_ID = "phronesis---gamble-grove";
    const WEBSITE_ID = "example.com";
    const API_URL = `https://api-sandbox.rebilly.com/organizations/${ORGANIZATION_ID}`;
    const HEADERS = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "REB-APIKEY": REBILLY_API_KEY,
    };

    onMounted(() => {
        const loginRequestBody = {
            mode: "passwordless",
            customerId: CUSTOMER_ID
        };

        const exchangeTokenRequestBody= {
            acl: [
                {
                    scope: {
                        organizationId: [ORGANIZATION_ID],
                    },
                    permissions: [
                        "PostToken",
                        "PostDigitalWalletValidation",
                        "StorefrontGetAccount",
                        "StorefrontPatchAccount",
                        "StorefrontPostPayment",
                        "StorefrontGetTransactionCollection",
                        "StorefrontGetTransaction",
                        "StorefrontGetPaymentInstrumentCollection",
                        "StorefrontPostPaymentInstrument",
                        "StorefrontGetPaymentInstrument",
                        "StorefrontPatchPaymentInstrument",
                        "StorefrontPostPaymentInstrumentDeactivation",
                        "StorefrontGetWebsite",
                        "StorefrontGetInvoiceCollection",
                        "StorefrontGetInvoice",
                        "StorefrontGetProductCollection",
                        "StorefrontGetProduct",
                        "StorefrontPostReadyToPay",
                        "StorefrontGetPaymentInstrumentSetup",
                        "StorefrontPostPaymentInstrumentSetup",
                        "StorefrontGetDepositRequest",
                        "StorefrontGetDepositStrategy",
                        "StorefrontPostDeposit",
                    ],
                },
            ],
            customClaims: {
                websiteId: WEBSITE_ID,
            },
        };

        const depositRequestBody = {
            websiteId: "example.com",
            customerId: CUSTOMER_ID,
            currency: "USD",
            redirectUrl: "https://example.com",
            amounts: [10, 20, 30, 40],
            customAmount: {
                minimum: 10,
                maximum: 5000,
                multipleOf: 1
            },
        };

        (async () => {
            const loginResponse = await fetch(`${API_URL}/authentication-tokens`, {
                method: "POST",
                headers: HEADERS,
                body: JSON.stringify(loginRequestBody),
            });
            const loginToken = (await loginResponse.json()).token;
            const exchangeTokenResponse = await fetch(`${API_URL}/authentication-tokens/${loginToken}/exchange`, {
                method: "POST",
                headers: HEADERS,
                body: JSON.stringify(exchangeTokenRequestBody),
            });
            const depositResponse = await fetch(`${API_URL}/deposit-requests`, {
                method: "POST",
                headers: HEADERS,
                body: JSON.stringify(depositRequestBody),
            });
            const depositRequestId = (await depositResponse.json()).id;
            const token = (await exchangeTokenResponse.json()).token;

            // Mount Rebilly Instruments
            RebillyInstruments.mount({
                apiMode: "sandbox",
                theme: {
                    colorPrimary: '#f8c471', // Brand color
                    colorText: '#ffffff',
                    colorDanger: '#cd5c5c',
                    colorBackground: '#212529', // Website background color
                    buttonColorText: '#212529',
                    fontFamily: 'Roboto, monospace' // Website font family
                },
                css: `
                    .rebilly-instruments-form-field-label {
                        font-family: 'Roboto', sans-serif;
                        color: #ffffff;
                    }
                `,
                deposit: {
                    depositRequestId,
                },
                jwt: token,
            });
            // Optional
            RebillyInstruments.on("instrument-ready", (instrument) => {
                console.info("instrument-ready", instrument);
            });
            RebillyInstruments.on("purchase-completed", (purchase) => {
                console.info("purchase-completed", purchase);
            });
        })();
    });
</script>

<template>
    <div class="rebilly-instruments-summary"></div>
    <div class="rebilly-instruments mx-auto"></div>
</template>