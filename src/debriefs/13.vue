<template>

    <div class="container">
        <h1>Phronesis project #13 - deposit</h1>
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
                    <li class="list-group-item">It was hard to find an example of how to configure instruments to set up, for example, PayPal or ACH - there is only an example, not instructions on how to achieve a visible result.</li>
                    <li class="list-group-item">It looks like the Gateway account Payment Method ACH option should be uppercase instead of "ach" and it could have a better label like "ACH / Bank Transfer".</li>
                    <li class="list-group-item">We were unable to test payment with Interac/Skrill because of a framepay error about failing to execute 'postMessage' on 'Window'. I think that TestProcessor should allow us to test Interac/Skrill payment E2E. <mark>EDIT: it started to work on the next day (unable to recreate the error)</mark></li>
                    <li class="list-group-item">While adding a new gateway account and selecting the "Skrill" gateway, there is a default Payment method: payment-card selected instead of Skrill. It is also confusing that we are able to select any Payment method while there is a "Skrill" gateway selected.</li>
                    <li class="list-group-item">In the gateway account edit "Payment method" dropdown options have poor labels like: payment-card instead of Payment Card or online-bank-transfer instead of Online Bank Transfer.</li>
                    <li class="list-group-item"><img src="/project13/1.png"><br /> Skrill gateway has a "Skrill settings" section which has "Merchant fields" input which is not too clear (but maybe it is specific for this operator). Also, the "Use spx" checkbox is not too descriptive about its role.</li>
                    <li class="list-group-item">Gateway account "Advanced configuration" section has an Acquirer select which is default set to "Other". Probably it could be set default to, for example, "Skrill". Also, there is no way to clear the selected value - the user has to search for the "Other" option which is not that clear ("Other" option could be first in the dropdown or there should be an X icon which would select it).</li>
                    <li class="list-group-item"><s>We wanted to test Skrill sandbox and we were unable to find any credentials or register as a merchant. It would be helpful to have access to their sandbox to test the whole flow.</s></li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Deposit' }" class="btn btn-primary text-center m-4">Deposit</router-link>
    </div>

</template>
<script setup lang="ts">
</script>