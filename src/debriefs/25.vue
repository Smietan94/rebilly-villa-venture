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
                        We forgot to verify our sending email address prior to
                        testing the notifications. Perhaps a tooltip reminding
                        users about this would help reduce this confusion even
                        though it is mentioned in our docs.
                    </li>
                    <li class="list-group-item">
                        Dispute result codes are not mapping properly for
                        Checkout.com. Our dispute result code was not reflected
                        in the new dispute dispite receiving it correctly in the
                        IPN.
                    </li>
                    <li class="list-group-item">
                        We initially got confused when line breaks were not
                        reflected in the email and then found that we were using
                        HTML and needed to use break tags.
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
