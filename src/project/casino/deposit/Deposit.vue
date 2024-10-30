<script setup>
    import { onMounted, ref, computed } from 'vue';
    import RebillyInstruments from '@rebilly/instruments';
    import RebillyApi from 'rebilly-js-sdk';
    import '../../../assets/bootstrap-variables-p11.scss';

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

    const rebilly = RebillyApi({
        sandbox: true,
        apiKey: REBILLY_API_KEY,
        organizationId: ORGANIZATION_ID,
    });

    const currency = ref("USD");
    const depositRequestBody = ref({
        websiteId: "example.com",
        customerId: CUSTOMER_ID,
        currency: currency.value,
        redirectUrl: "https://example.com",
    });

    const requestDepositId = async () => {
        const depositResponse = await fetch(`${API_URL}/deposit-requests`, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(depositRequestBody.value),
        });

        return (await depositResponse.json()).id;
    }

    const handleCurrencyChange = async () => {
        depositRequestBody.value.currency = currency.value;

        if (currency.value === "CAD") {
            let cadBadge = document.getElementById('cad-badge');
            cadBadge.innerHTML = `<h1 class="badge text-bg-secondary">CAD</h1>`;

            let usdBadge = document.getElementById('usd-badge');
            usdBadge.innerHTML = '';
        } else {
            let usdBadge = document.getElementById('usd-badge');
            usdBadge.innerHTML = `<h1 class="badge text-bg-secondary">USD</h1>`;

            let cadBadge = document.getElementById('cad-badge');
            cadBadge.innerHTML = '';
        }

        const depositRequestId = await requestDepositId();

        RebillyInstruments.update({
            deposit: {
                depositRequestId,
            },
        });
    }

    onMounted(() => {
        (async () => {
            const { fields: login } = await rebilly.customerAuthentication.login({
                data: {
                    customerId: CUSTOMER_ID,
                    mode: 'passwordless',
                },
            });

            const { fields: exchangeToken } =
                await rebilly.customerAuthentication.exchangeToken({
                    token: login.token,
                    data: {
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
                    },
                });
            const { token } = exchangeToken;

            const depositRequestId = await requestDepositId();

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
    <div class="container text-light text-center mx-auto mb-5 text-uppercase">
        <label class="form-check-label" for="flexSwitchCheckDefault">Select deposit currency:</label>
    </div>
    <div class="container">
        <div class="row text-light">
            <div id="usd-badge" class="col col-xl-5 text-end"><h1 class="badge text-bg-secondary">USD</h1></div>
            <div class="mx-auto text-end text-light col col-xl-2">
                <div class="form-check form-switch mx-auto">
                    <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            v-model="currency"
                            :true-value="'CAD'"
                            :false-value="'USD'"
                            @change="handleCurrencyChange"
                    >
                </div>
            </div>
            <div id="cad-badge" class="col col-xl-5 text-start"></div>
        </div>
    </div>
    <div class="mx-auto">
        <div class="rebilly-instruments-summary mx-auto"></div>
        <div class="rebilly-instruments mx-auto"></div>
    </div>
</template>

<style>
    .form-check {
        display: flex;
        justify-content: center; /* Centers the switch horizontally */
        align-items: center; /* Centers the switch vertically if needed */
    }
</style>