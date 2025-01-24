<template>
    <div class="container">
        <h1>Project 23: Integrate Checkout.com gateway</h1>
        <div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Teammates:</li>
                    <li class="list-group-item">Kris Smietana</li>
                    <li class="list-group-item">Victor Goncearencu</li>
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
                        Lack of rebilly documentation for the Checkout.com gateway integration.
                    </li>
                    <li class="list-group-item">
                        It would be great to add switch to enable/disable gateway account from the gateways listing page.
                        <br />
                        <img src="/project23/1.png" class="w-100">
                    </li>
                    <li class="list-group-item">
                        Inputs for <kbd>Sub entity ID custom fields</kbd> and <kbd>Processing channel ID</kbd> should be
                        required, without them transactions are declined.
                        <br />
                        <img src="/project23/2.png" class="w-100">
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
