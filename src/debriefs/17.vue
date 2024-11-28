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
                        Gateway account additional filters conditions are missing "equals" option
                        <br />
                        <img src="/project17/2.png">
                    </li>
                    <li class="list-group-item">gateway accounts list could have status toggle to easily enable and disable gateways without opening them</li>
                    <li class="list-group-item">
                        when user have more than 3 payment methods available then the dropdown appears which ux is very poor
                        <br />
                        <img src="/project17/1.png">
                    </li>
                    <li class="list-group-item">it looks like eCheck payment method is not working (we have changed specific gateway account payment method from eCheck to another one and it appeared instantly, so the other configuration is correct)</li>
                    <li class="list-group-item">we were not able to complete payout with ACH, because we were occurring "paymentInstrumentId is missing" error, described in <router-link :to="{ name: 'Debrief16' }">Project 16 debrief</router-link></li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Payout' }" class="btn btn-primary text-center m-4">Payout</router-link>
    </div>

</template>
<script setup lang="ts">
</script>