<template>

    <div class="container">
        <h1>Phronesis project #18 - Add digital wallets to deposit flow</h1>
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
                        Idea: we are missing "Select all" option in multiselect
                        <br />
                        <img src="/project18/1.png">
                    </li>
                    <li class="list-group-item">
                        We found <a href="https://www.rebilly.com/docs/settings/add-paypal-account">Manage payment gateways -> Add PayPal account</a>
                        but there is no setup instruction for Google Pay/Apple Pay
                    </li>
                    <li class="list-group-item">
                        We were trying to add new TestProcessor gateway account with Google Pay/Apple Pay payment method,
                        but we were unable to configure it in way that these payment methods will appear in Deposit Form.
                        We found later "Digital Wallets" in payment-card Gateway Account which was successful to show in Deposit Form.
                    </li>
                    <li class="list-group-item">
                        We were trying to make Gateway account with Google Pay payment method available in
                        other places (like payout form) but we were not successful, and it seems like an easy thing
                    </li>
                    <li class="list-group-item">
                        It would be nice to have Gateway account name, not only Gateway account id
                        (which is not editable and may be not too descriptive, while having multiple)
                    </li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Deposit' }" class="btn btn-primary text-center m-4">Deposit</router-link>
    </div>

</template>
<script setup lang="ts">
</script>