<script setup>
    import { onMounted, ref, computed, watch } from 'vue';
    import RebillyInstruments from '@rebilly/instruments';
    import RebillySDK from 'rebilly-js-sdk';

    const REBILLY_API_KEY = "sk_sandbox_zEGZaD9gCtUZQHuSJPPcxruavuWcGC-8-qvGObd";
    const ORGANIZATION_ID = "phronesis---gamble-grove";
    const WEBSITE_ID = "example.com";
    const API_URL = `https://api-sandbox.rebilly.com/organizations/${ORGANIZATION_ID}`;
    const HEADERS = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "REB-APIKEY": REBILLY_API_KEY,
    };

    const rebilly = RebillySDK({
        sandbox: true,
        apiKey: REBILLY_API_KEY,
        organizationId: ORGANIZATION_ID,
    });

    const currency = ref("USD");
    const depositRequestBody = ref({
        websiteId: "example.com",
        customerId: null,
        currency: currency.value,
        redirectUrl: "https://bucolic-naiad-649181.netlify.app/#/project/casino/",
    });
    const customers = ref([]);
    const selectedCustomer = ref(null);

    async function mountInstruments () {
        const { fields: login } = await rebilly.customerAuthentication.login({
            data: {
                customerId: selectedCustomer.value,
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
        const mountElement = document.querySelector('#deposit');

        if (window.RebillyCashier) {
            RebillyCashier.renderDeposit({
                mountElement,
                token: depositRequestId,
            });
        } else {
            console.error('RebillyCashier library not loaded');
        }
    }

    watch(selectedCustomer, async (newCustomerId) => {
        depositRequestBody.value.customerId = newCustomerId;
        await mountInstruments();
    })

    const requestDepositId = async () => {
        const depositResponse = await rebilly.depositRequests.create({data: depositRequestBody.value});

        return depositResponse.fields.cashierToken;
    }

    onMounted(() => {
        (async () => {
            const { items } = await rebilly.customers.getAll();
            customers.value = items;
            selectedCustomer.value = items[0].fields.id;
        })();
    });
</script>

<template>
<!--    <div v-if="!selectedCustomer" class="default-bootstrap container w-50">-->
<!--        <h4 class="text-white-50">Select which customer you are:</h4>-->
<!--        <select class="form-select form-select-sm" aria-label="customer select" v-model="selectedCustomer">-->
<!--            <option v-for="customer in customers" :value="customer.fields.id">-->
<!--                {{ `${ customer.fields.firstName } ${ customer.fields.lastName }` }}:-->
<!--                <span class="fw-bold" v-for="tag in customer.fields.tags">-->
<!--                    {{ ` ${tag.name}` }}-->
<!--                </span>-->
<!--            </option>-->
<!--        </select>-->
<!--    </div>-->
    <div class="mx-auto">
        <div id="deposit"></div>
    </div>
</template>

<style>
    :root {
        --r-background: #212529;
        --r-button-background: #212529;
        --r-button-border-color: #AFE1AF;
        --r-button-border-style: solid;
        --r-button-primary-background: #f8c471;
        --r-button-secondary-background: #212529;
        --r-button-secondary-text-color-hover: #f8c471;
        --r-button-secondary-border: #f8c471;
        --r-button-primary-text-color: #212529;
        --r-select-background: #212529;
        --r-select-border-radius: 0;
        --r-select-text-color: #fff;
        --r-select-label-color: #be00ff;
        --r-select-background-focus: #212529;
        --r-button-text-color: #fff;
        --r-input-label-color: #fff;
        --r-title-header-color: #fff;
        --r-font-family: "Inter", serif;
        --r-payment-method-item-border-color: #AFE1AF;
        --r-payment-method-item-border-width: 2px;
        --r-payment-method-item-background: #212529;
        --r-payment-method-item-label-color: #fff;
        --r-payment-method-item-border-radius: 0;
        --r-payment-method-logo-border-radius: 0;
        --r-button-border-radius: 0;
        --r-input-border-radius: 0;
        --r-alert-border-radius: 0;
        --r-border-radius: 0;
        --r-border-radius-s: 0;
        --r-result-title-color: #AFE1AF;
        --r-result-color: #AFE1AF;
    }

    .r-select {
        border-radius: 0 !important;

        .r-select-field-wrapper {
            border-radius: 0 !important;

            option {
                border: 0 !important;
                border-radius: 0 !important;
            }

            .r-select-field {
                background: #212529 !important;
                border-radius: 0 !important;
            }
        }
    }

    .r-button {
        border-color: var(--r-primary);
    }

    .r-button-default {
        &:hover {
            color: #f8c471;
            background: #212529;
        }
    }

    .r-button-group {
        .r-button {
            &:first-child {
                border-radius: 0;
            }
            &:last-child {
                border-radius: 0;
            }
        }
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: #fff;
        background-color: #212529;
    }

    .form-check {
        display: flex;
        justify-content: center; /* Centers the switch horizontally */
        align-items: center; /* Centers the switch vertically if needed */
    }
</style>