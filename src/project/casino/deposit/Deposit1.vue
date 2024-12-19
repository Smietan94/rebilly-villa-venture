<script setup>
    import { onMounted, ref, computed, watch } from 'vue';
    import RebillyInstruments from '@rebilly/instruments';
    import RebillyApi from 'rebilly-js-sdk';
    import '../../../assets/bootstrap-variables-p11.scss';

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
        customerId: null,
        currency: currency.value,
        redirectUrl: "https://example.com",
    });
    const customers = ref([]);
    const selectedCustomer = ref(null);

    async function mountInstruments () {
        console.log({mountInstrumentsCustomerId: selectedCustomer.value});
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
    }

    watch(selectedCustomer, async (newCustomerId) => {
        depositRequestBody.value.customerId = newCustomerId;
        await mountInstruments();
    })

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
            const { items } = await rebilly.customers.getAll();
            customers.value = items;
        })();
    });
</script>

<template>
    <div v-if="selectedCustomer">
        <div class="container text-light text-center mx-auto mb-5 text-uppercase">
            <label class="form-check-label" for="flexSwitchCheckDefault">Select deposit currency:</label>
        </div>
        <div class="container currency-picker">
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
    </div>
    <div v-if="!selectedCustomer" class="default-bootstrap container w-50">
        <h4 class="text-white-50">Select which customer you are:</h4>
        <select class="form-select form-select-sm" aria-label="customer select" v-model="selectedCustomer">
            <option v-for="customer in customers" :value="customer.fields.id">
                {{ `${ customer.fields.firstName } ${ customer.fields.lastName }` }}:
                <span class="fw-bold" v-for="tag in customer.fields.tags">
                    {{ ` ${tag.name}` }}
                </span>
            </option>
        </select>
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