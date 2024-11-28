<script setup>
    import { onMounted, ref } from 'vue';
    import RebillyInstruments from '@rebilly/instruments';
    import RebillyApi from 'rebilly-js-sdk';

    const REBILLY_API_KEY = "sk_sandbox_zEGZaD9gCtUZQHuSJPPcxruavuWcGC-8-qvGObd";
    const ORGANIZATION_ID = "phronesis---gamble-grove";
    const WEBSITE_ID = "example.com";

    const rebilly = RebillyApi({
        sandbox: true,
        apiKey: REBILLY_API_KEY,
        organizationId: ORGANIZATION_ID,
    });

    const selectedClient = ref(null);

    const loading = ref(false);

    const payoutRequestBody = ref({
        websiteId: "example.com",
        customerId: selectedClient.value,
        currency: "USD",
        amount: 50,
    });

    const instrumentsMounted = ref(false);

    async function makeDepositRequest() {
        console.log({ payoutRequestBody: payoutRequestBody.value})
        const {fields: payoutRequest} = await rebilly.payoutRequests.create({
            data: {
                ...payoutRequestBody.value,
                customerId: selectedClient.value,
            },
        })

        if (instrumentsMounted.value) {
            RebillyInstruments.update(
                {
                    payout: {
                        payoutRequestId: payoutRequest.id,
                    },
                }
            );
        } else {
            await mountInstruments(payoutRequest.id)
            instrumentsMounted.value = true;
        }
    }

    async function mountInstruments(payoutRequestId) {
        loading.value = true;
        const { fields: login } = await rebilly.customerAuthentication.login({
            data: {
                customerId: selectedClient.value,
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
                                "StorefrontGetPaymentInstrumentCollection",
                                "StorefrontPostPaymentInstrument",
                                "StorefrontGetPaymentInstrument",
                                "StorefrontPatchPaymentInstrument",
                                "StorefrontGetAccount",
                                "StorefrontGetWebsite",
                                "StorefrontPostReadyToPay",
                                "StorefrontGetPayoutRequestCollection",
                                "StorefrontGetPayoutRequest",
                                "StorefrontPatchPayoutRequest",
                                "StorefrontPostReadyToPayout",
                            ],
                        },
                    ],
                    customClaims: {
                        websiteId: WEBSITE_ID,
                    },
                },
            });
        const { token } = exchangeToken;

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
            jwt: token,
            payout: {
                payoutRequestId,
            }
        });
        // Optional
        RebillyInstruments.on("instrument-ready", (instrument) => {
            console.info("instrument-ready", instrument);
            loading.value = false
        });
        RebillyInstruments.on("purchase-completed", (purchase) => {
            console.info("purchase-completed", purchase);
        });
    }

</script>

<template>
    <div class="container position-relative">
        <div v-if="!instrumentsMounted" class="container text-light text-left mx-auto mb-5 text-uppercase">
            <label class="form-check-label" for="flexSwitchCheckDefault">Select customer:</label>
            <div>
                <input id="client-usa" type="radio" value="cus_01JDS16HHYW82RY5TMJJ2AYX96" v-model="selectedClient" class="r-mr-2" />
                <label for="client-usa">Adalbert Dryhole - USA</label>
            </div>
            <div>
                <input id="client-ca" type="radio" value="cus_01JDS193ECAVYNMXPERDEJTS0V" v-model="selectedClient" class="r-mr-2" />
                <label for="client-ca">Victoria Maple - CA</label>
            </div>
            <div>
                <input id="client-pl" type="radio" value="cus_01JC2Y9B06EV8D2J7V2D71RT3Q" v-model="selectedClient" class="r-mr-2" />
                <label for="client-pl">Adam Małysz - PL</label>
            </div>
        </div>
        <div v-if="selectedClient && !instrumentsMounted && !loading" class="container text-light text-center mx-auto mb-5 text-uppercase">
            <label class="form-check-label" for="flexSwitchCheckDefault">Select payout amount:</label>
        </div>
        <div v-if="loading && !instrumentsMounted" class="position-absolute w-100 h-100 d-flex justify-content-center align-content-center bg-white text-black" style="left: 0; top: 0;">
            <span>LOADING</span>
        </div>
    </div>
    <div v-if="selectedClient && !instrumentsMounted" class="container">
        <div class="row text-light justify-content-center">
            <div class="col col-xl-4">
                <div class="input-group mb-3">
                    <input
                            class="form-control bg-transparent text-light"
                            type="number"
                            id="flexSwitchCheckDefault"
                            v-model="payoutRequestBody.amount"
                    >
                    <button class="btn btn-primary" @click="makeDepositRequest" style="background-color: #f8c471; color: #212529;">Payout</button>
                </div>
            </div>
        </div>
    </div>
    <div class="mx-auto">
        <div class="rebilly-instruments-summary mx-auto"></div>
        <div class="rebilly-instruments mx-auto"></div>
    </div>
</template>

<style>
</style>