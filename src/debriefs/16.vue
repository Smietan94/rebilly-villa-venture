<template>

    <div class="container">
        <h1>Phronesis project #16 - Casino payout form</h1>
        <div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Teammates:</li>
                    <li class="list-group-item">Dominik Szymoniak</li>
                    <li class="list-group-item">Kris Smietana</li>
                </ul>
            </div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">What made you smile?</li>
                    <li class="list-group-item">Teamwork</li>
                </ul>
            </div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">What did you find confusing? Did you encounter any issues?</li>
                    <li class="list-group-item">
                        <a href="https://www.rebilly.com/docs/dev-docs/integrate-a-payout-form">Integrate a payout form</a> code example window is very narrow and it is hard to use it. there is a lot of space which is taken by padding which could be use to provide better readability
                    </li>
                    <li class="list-group-item">
                        there is missing required organizationId parameter in examples with RebillyAPI usage:
                        <br>
                        <img src="/project16/1.png">
                    </li>
                    <li class="list-group-item"><a href="https://www.rebilly.com/docs/dev-docs/integrate-a-payout-form#payout-form-integration">payout-form-integration</a> I would add an extra link in orange warning box with anchor to <a href="https://www.rebilly.com/docs/settings/set-up-a-gateway">#11 point here</a>, as gateway account should be configured as ready to payout</li>
                    <li class="list-group-item">we were expecting that there will be something like "total customer deposit amount" on customer page</li>
                    <li class="list-group-item">
                        when we were trying to payout to bank account we were occuring an error <kbd>paymentInstrumentId must be provided, but does not exist</kbd> which is not too much descriptive (we selected existing bank account through rebilly instruments, so it should have <kbd>paymentInstrumentId</kbd> present). It was possible to perform this within Recomm app - we selected customer bank account and succesfully approved payout. We found that adding a new gateway account with payment method <kbd>bank-transfer</kbd> will allow user to complete bank transfer payout. Anyway it should not be possible to complete bank account payout through Recomm app without gateway ready to payout through <kbd>bank-transfer</kbd>.
                        <br>
                        <img src="/project16/2.png">
                    </li>
                    <li class="list-group-item">we are not sure if it is required to provide cards CVV to complete payout?</li>
                    <li class="list-group-item">without gateway ready to payout with <kbd>payment-card</kbd> we tried to payout to payment card - the result was that payout amount was automatically added to bank account, and this amount doubled was subtracted from "Total payout allocation remaining". The user was not notified about anything else than error that payout is not possible.</li>
                    <li class="list-group-item">for $50 payout request and without active skrill payout gateway we were able to allocate $10 payout to skrill</li>
                    <li class="list-group-item">with 5 payment instruments we made $10 allocation to each and saved, then we allocated $5 to first payment instrument and saved - extra $10 was allocated to 2, 3, 4 and 5 payment instrument*</li>
                    <li class="list-group-item">with 5 payment instruments application is making 5 requests to api to make a payout instead of one bulk request*</li>
                    <li class="list-group-item">
                        *-video showing the problem:
                        <br>
                        <iframe src="https://www.loom.com/embed/064e557983cb4a639f65b8eb8ffc0227" width="800" height="450"  allowfullscreen></iframe>
                    </li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Payout' }" class="btn btn-primary text-center m-4">Payout</router-link>
    </div>

</template>
<script setup lang="ts">
</script>