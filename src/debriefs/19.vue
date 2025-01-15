<template>

    <div class="container">
        <h1>Phronesis project #19 - VIP customers</h1>
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
                        In rules engine we can add a condition with customer tag and there are options:
                        <kbd class="text-warning">Tags > ID</kbd>,
                        <kbd class="text-warning">Tags > Name</kbd>,
                        <kbd class="text-warning">Tags > Type</kbd>.
                        When we were adding tag for a customer we were not able to select any other type than
                        <kbd class="text-warning">customer</kbd>, so maybe <kbd class="text-warning">Tags > Type</kbd>
                        is confusing. Furthermore in tag adding/editing there we have only ability to specify
                        <kbd class="text-warning">Name</kbd> and the <kbd class="text-warning">ID</kbd>
                        is not specified anywhere, so it in not consistent.
                    </li>
                    <li class="list-group-item">
                        In the <kbd class="text-warning">Rules engine > Gateway account requested</kbd> we've added
                        <kbd class="text-warning">Pick gateway account</kbd> action. As the requirement was to exclude
                        customers without VIP status from Skrill gateway account, we tried to enter
                        <kbd class="text-warning">-1</kbd> as the weight. We thought that this will make all other
                        available gateways available, and the Skrill will have 0% chance of being selected,
                        but we had to enter <kbd class="text-warning">1</kbd> to all gateway accounts except of Skrill.
                        Furthermore: input had red border which indicates error, but no error message was present.
                        Error message appears only after trying to save the rule.
                        <br />
                        <img src="/project19/1.png">
                        <img src="/project19/2.png">
                    </li>
                    <li class="list-group-item">
                        We were confused about pre-selected <kbd class="text-warning">Stop further processing</kbd>
                        checkbox. Should it be checked by default?
                    </li>
                    <li class="list-group-item">
                        We were missing multi-select in <kbd class="text-warning">rules engine -> ready to pay requested
                        -> Actions -> Adjust ready to pay</kbd>  "Add another payment method"
                    </li>
                    <li class="list-group-item">
                        <kbd class="text-warning">Gateway account requested</kbd> core event could be named
                        <kbd class="text-warning">Gateway account requested for the first time</kbd> or it's description
                        could have that information highlighted. We've choosed this event at the beginning to restrict
                        displayed gateway accounts as it's name seemed to us correct and gained our full attention.
                    </li>
                    <li class="list-group-item">
                        Automated tagging for <kbd class="text-warning">Invoice paid</kbd> event with rule set
                        <kbd class="text-warning">TransactionCustomerLifetime > revenueAmount > USDgreater or equal to > 10000</kbd>
                        is not adding a tag for <kbd class="text-warning">revenueAmount</kbd>
                        equal to 10000. We've made two transactions for $5k, and tag was not added.
                        Then we made another transaction for $50 and tag was added. On the other hand automated
                        tagging for <kbd class="text-warning">Customer updated</kbd>
                        event with the same rules added a tag for two $5k transactions.
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