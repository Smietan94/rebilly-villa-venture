<script setup>
    import {ref, computed, watch} from 'vue';
    import {
        createToken,
        RebillyForm,
        RebillyCardCvv,
        RebillyCardExpiration,
        RebillyCardNumber,
        RebillyToken,
    } from '@rebilly/framepay-vue';
    import {RButtonGroup, RGrid, RGridCell, RInput, RSelect} from "@rebilly/revel";

    const selectedPartnerOption = ref(1);
    const partnerAmount = ref(0);
    const funnelHackingReplay = ref(0);

    const calculatePartners = (selectedPartnerOption) => {
        return Number(selectedPartnerOption) * 697;
    };

    const calculateSummary = computed(() => {
        return 997 + Number(funnelHackingReplay.value) + Number(partnerAmount.value);
    });

    watch(selectedPartnerOption, (newVal) => {
        if (partnerAmount.value !== 0) {
            partnerAmount.value = calculatePartners(newVal);
        }
    });

    const submitHandler = (token, form) => {
        console.log(JSON.stringify(token, null, 2));
                // form.submit();
            createToken(form)
            .then((token) => {
                    // the token is already added to the form via RebillyToken
                    form.submit();
                })
            .catch((error) => {
                // see error.code and error.message
                console.log(error);
            });
    };

    const errorLog = (error) => {
        console.error(error);
    };

    const configuration = ref({
        publishableKey: 'pk_sandbox_RsMEoPhRvOXyQRy2e0mCHLm-nfNMND2aW5aW1-n',
        injectStyle: true,
        transactionData: {
            currency: 'USD',
            amount: calculateSummary.value,
        }
    });

    watch(calculateSummary, (newVal) => {
        configuration.value.transactionData.amount = newVal;
    });

</script>

<template>
    <div class="container-fluid bg-black">
        <div class="container text-center p-5">
            <img src="../../../public/project10/FHlogo.jpg" class="img-fluid mb-3" width="300" alt="...">
        </div>

        <div class="container text-center mb-4">
            <p class="text-light fs-4 fw-lighter mb-0">THE 10TH (AND FINAL) FHL... GOING OUT WITH A BANG!</p>
            <p class="text-light fs-2 fw-bold mb-0">“Save Your Seat For THE LAST DANCE Of</p>
            <p class="text-primary fs-1 r-fw-extra-bold mb-0">FUNNEL HACKING LIVE X</p>
            <p class="text-light fs-2 fw-bold mt-0">In Las Vegas, Nevada!”</p>
            <p class="text-light fs-5 fw-bold mb-0">The Last (And Greatest) Marketing Event In The History of</p>
            <p class="text-light fs-5 fw-bold mt-0">Marketing Events Is Happening On <span class="text-primary">February 12th - 15th, 2025</span></p>
        </div>

        <div class="mb-5">
            <div class="container ratio ratio-16x9 w-50 mb-5 ">
                <iframe src="https://www.youtube.com/embed/U2Fjfqm-7g8" title="YouTube video"></iframe>
            </div>
        </div>

        <div class="container bg-secondary-subtle rounded border border-2 border-primary mn-4 my-5 w-50">
            <div class="row">
                <div class="col-3">
                    <img src="../../../public/project10/FHVegas.avif" class="img-fluid" width="250">
                </div>
                <div class="col-9 text-center">
                    <div class="r-fw-extra-bold fs-1">Secure Your Ticket For Only $997!</div>
                </div>
            </div>
        </div>

        <div class="container text-center text-primary">
            <p class="text-light fs-3 r-fw-extra-bold mb-0">Fill Out Your Details Below And Secure</p>
            <p class="text-light fs-3 r-fw-extra-bold">Your Ticket To <span class="text-primary">Funnel Hacking LIVE 10</span></p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </p>
        </div>

        <div class="row">
            <div class="container bg-white border border-3 border-primary col-md-6 offset-md-3 p-5 mb-5 rounded rounded-3">
                <rebilly-form
                        :configuration="configuration"
                        @submit="submitHandler"
                        @error="errorLog"
                        v-model="calculateSummary"
                >

                    <div class="w-100 title-div mb-2">
                        <div class="text-title fs-6 fw-light">CONTACT INFORMATION</div>
                        <div class="ms-3 divider"></div>
                    </div>
                    <div class="input-group-sm mb-4">
                        <div class="input-group input-group-sm">
                            <input data-rebilly="firstName" placeholder="First Name" class="form-control rounded-bottom-0" required>
                            <input data-rebilly="lastName" placeholder="Last Name" class="form-control rounded-bottom-0" required>
                        </div>
                        <input data-rebilly="email" placeholder="Email" class="form-control rounded-0" required>
                        <input data-rebilly="phoneNumber" placeholder="Phone Number" class="form-control rounded-0 rounded-bottom" required>
                    </div>

                    <div class="w-100 title-div mb-2">
                        <div class="text-title fs-6 fw-light">SELECT PRODUCT</div>
                        <div class="ms-3 divider"></div>
                    </div>
                    <div class="mb-4 p-1 w-100 border rounded">
                        <div class="row">
                            <div class="col-9">
                                <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="997" checked>
                                <label class="form-check-label ms-2" for="flexRadioDefault1">
                                    Funnel Hacking LIVE (FHL10)
                                </label>
                            </div>
                            <div class="col-3 text-end fw-lighter fs-6">
                                $997.00
                            </div>
                        </div>
                    </div>

                    <div class="w-100 title-div mb-2">
                        <div class="text-title fs-6 fw-light">BILLING INFORMATION</div>
                        <div class="ms-3 divider"></div>
                    </div>
                    <div class="input-group-sm mb-4">
                        <input data-rebilly="address" placeholder="Address" class="form-control rounded-bottom-0" required>
                        <input data-rebilly="address2" placeholder="Apartment, building, floor (optional)" class="form-control rounded-0">
                        <input data-rebilly="country" placeholder="Country" class="form-control rounded-0" required>
                        <input data-rebilly="state" placeholder="State" class="form-control rounded-0" required>
                        <div class="input-group input-group-sm">
                            <input data-rebilly="city" placeholder="City" class="form-control rounded-top-0" required>
                            <input data-rebilly="Postal Code" placeholder="Postal Code" class="form-control rounded-top-0" required>
                        </div>
                    </div>

                    <div class="w-100 title-div mb-2">
                        <div class="text-title fs-6 fw-light">PAYMENT INFORMATION</div>
                        <div class="ms-3 divider"></div>
                    </div>

                    <div class="mb-4">
                        <rebilly-card-number></rebilly-card-number>
                        <r-grid gap="0">
                            <r-grid-cell span="6">
                                <rebilly-card-expiration></rebilly-card-expiration>
                            </r-grid-cell>
                            <r-grid-cell span="6">
                                <rebilly-card-cvv></rebilly-card-cvv>
                            </r-grid-cell>
                        </r-grid>
                    </div>

                    <div class="mb-3 p-1 w-100 border border-2 border-warning bg-warning-subtle rounded">
                        <div class="row">
                            <div class="col-9">
                                <input class="form-check-input ms-2" type="checkbox" name="" id="replay" v-model="funnelHackingReplay" :true-value="97" :false-value="0">
                                <label class="form-check-label ms-2 fw-bold" for="replay">
                                    Funnel Hacking LIVE Replays
                                </label>
                            </div>
                            <div class="col-3 text-end fw-lighter fs-6">
                                $97.00
                            </div>
                        </div>
                        <div class="ms-2 fw-lighter">Get the replays for FHL10 and we'll include the replays from FHL 9.5 FREE!</div>
                    </div>

                    <div class="mb-4 p-1 w-100 border border-2 border-warning bg-warning-subtle rounded">
                        <div class="row">
                            <div class="col-9">
                                <input id="partner-check" class="form-check-input ms-2" type="checkbox" name="partner-check" :true-value="calculatePartners(selectedPartnerOption)" :false-value="0" v-model.number="partnerAmount">
                                <label class="form-check-label ms-2 fw-bold" for="partner-check">
                                    YES! Add a Partner Ticket To My Order
                                </label>
                            </div>
                            <div class="col-3 text-end fw-lighter fs-6">
                                ${{ calculatePartners(selectedPartnerOption) }}.00
                            </div>
                        </div>
                        <div class="ms-2 fw-lighter">Choose the number of partners you'd like to bring below and be sure to fill out the name and email for each partner you will be bringing.</div>
                        <select class="form-select form-select-sm form-select-partner ms-2 mb-2" aria-label="Default select example" v-model="selectedPartnerOption">
                            <option value="1" selected>Number of Partners: 1</option>
                            <option value="2">Number of Partners: 2</option>
                            <option value="3">Number of Partners: 3</option>
                        </select>
                    </div>

                    <div class="border border-2 rounded mb-4 bg-body-tertiary" v-if="partnerAmount !== 0">
                        <div class="text-center p-3">
                            Please enter the <strong>name</strong> and <strong>email</strong> of each partner. We use this information to assign a ticket to that person. Partner tickets will <u><strong>not</strong></u> be assigned without this information!
                        </div>

                        <div v-for="(n, index) in Number(selectedPartnerOption)" :key="n" class="mb-3 px-3">
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" :placeholder="'Partner #' + n + ' Full Name'" required>
                            </div>
                            <div class="input-group">
                                <input type="email" class="form-control" :placeholder="'Partner #' + n + ' Email'" required>
                            </div>
                            <div v-if="index < Number(selectedPartnerOption) - 1">
                                <hr>
                            </div>
                        </div>
                    </div>

                    <div class="accordion mb-4" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="btn btn-lg w-100 collapsed rounded rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div class="row text-start">
                                        <div class="col-9">
                                            Summary
                                        </div>
                                        <div class="col-3 text-end fw-lighter fs-6">
                                            ${{ calculateSummary }}.00
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item border border-0">
                                            <div class="row text-start">
                                                <div class="col-9">
                                                    Funnel Hacking LIVE (FHL10)
                                                </div>
                                                <div class="col-3 text-end fw-lighter fs-6">
                                                    $997.00
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item border border-0" v-if="funnelHackingReplay !== 0">
                                            <div class="row text-start">
                                                <div class="col-9">
                                                    Funnel Hacking LIVE Replays
                                                </div>
                                                <div class="col-3 text-end fw-lighter fs-6">
                                                    $97.00
                                                </div>
                                            </div></li>
                                        <li class="list-group-item border border-0" v-if="partnerAmount !== 0">
                                            <div class="row text-start">
                                                <div class="col-9">
                                                    Funnel Hacking LIVE Partner ({{ selectedPartnerOption }})
                                                </div>
                                                <div class="col-3 text-end fw-lighter fs-6">
                                                    ${{ calculatePartners(selectedPartnerOption) }}.00
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item border border-0 border-top">
                                            <div class="row text-start">
                                                <div class="col-9">
                                                    Total
                                                </div>
                                                <div class="col-3 text-end fw-lighter fs-6">
                                                    ${{ calculateSummary }}.00
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-lg btn-primary w-100 fw-bold fs-1">
                        Secure My Ticket!
                    </button>

                    <rebilly-token></rebilly-token>
                </rebilly-form>
            </div>
        </div>

        <footer class="footer py-3 my-4 text-light text-center bg-black">
            <img src="../../../public/project10/FHlogo.jpg" class="img-fluid mb-3" width="300" alt="...">
            <div>Etison LLC - ©2024 All Rights Reserved - 3443 W Bavaria St Eagle, ID 83616</div>
            <ul class="nav justify-content-center pb-3">
                <li class="nav-item"><a href="https://www.clickfunnels.com/terms" class="nav-link px-2 text-light">Terms</a></li>
                <li class="nav-item nav-link px-0 text-light">-</li>
                <li class="nav-item"><a href="https://support.clickfunnels.com/support/home" class="nav-link px-2 text-light">Support</a></li>
                <li class="nav-item nav-link px-0 text-light">-</li>
                <li class="nav-item"><a href="https://www.clickfunnels.com/privacy-policy" class="nav-link px-2 text-light">Privacy</a></li>
                <li class="nav-item nav-link px-0 text-light">-</li>
                <li class="nav-item"><a href="https://www.clickfunnels.com/contacts/sign_in" class="nav-link px-2 text-light">Login</a></li>
            </ul>
        </footer>
    </div>
</template>

<style>
    .title-div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .text-title {
        flex-grow: 0;
    }
    .divider {
        flex-grow: 1;
        height: 1px;
        background-color: #9f9f9f;
    }

    .form-select-partner {
        width: 12rem
    }
</style>
