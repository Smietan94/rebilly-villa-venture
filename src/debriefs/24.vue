<template>
    <div class="container">
        <h1>Project 24: Route 3DS with checkout.com on Rebilly</h1>
        <div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Teammates:</li>
                    <li class="list-group-item">Kris Smietana</li>
                    <li class="list-group-item">Simon Sorich</li>
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
                    <li class="list-group-item active" aria-current="true">
                        What did you find confusing? Did you encounter any issues?
                    </li>
                    <li class="list-group-item">
                        Perhaps we should link to a Luhn check tool in our 3DS
                        documentation or explain how to generate test card
                        numbers that pass the Luhn check. It took some time how
                        to figure out how to generate a test card number
                        suitable for 3DS cases.
                    </li>
                    <li class="list-group-item">
                        It might be good to indicate within our UI that
                        conditions for rules are always AND and not OR.
                    </li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0"
        >Back to debriefs</router-link
        >
    </div>
</template>
<script setup lang="ts">
</script>
