<template>

    <div class="container">
        <h1>Phronesis project #14 - Casino deposit currency</h1>
        <div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Teammates:</li>
                    <li class="list-group-item">Ikram Patah</li>
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
                    <li class="list-group-item">Basis points are confusing we could use percent (or give choice between them)</li>
                    <li class="list-group-item">
                        <img src="/project14/3.png">
                        <br />
                        It could be pointed more explicitly in docs that the DCC is only for
                        payment card (e.g. orange box like on the screenshot)
                    </li>
                    <li class="list-group-item">
                        DCC is only available for payment card, and we can still activate it even if we sat up
                        payment gateway for another payment method
                    </li>
                    <li class="list-group-item">
                        <img src="/project14/1.png">
                        <br />
                        Force conversion is confusing and not documented, also dropdown cannot be unselected
                    </li>
                    <li class="list-group-item">
                        It would be great if customer have possibility to select currency before confirmation
                    </li>
                    <li class="list-group-item">
                        <img src="/project14/2.png">
                        <br />
                        DCC should allow to use all currencies by default otherwise conversion choice modal doesnt show,
                        we had to add JPY to accepted currencies
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