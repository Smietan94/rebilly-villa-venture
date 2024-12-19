<template>

    <div class="container">
        <h1>Phronesis project #20 - Casino deposit improvements</h1>
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
                    <li class="list-group-item">Code walk examples in Rebilly documentation sometimes is annoying when we want to have wider overview on the code. It would be very helpful to have ability to enable/disable code walk through</li>
                    <li class="list-group-item">
                        We haven't found an update deposit method, and running renderDeposit again (for example while changing currency once form is mounted) causes UX malfunctions and form errors (like: <kbd>Cannot assign to read only property 'minimum' of object '#&#60;Object&#62;'</kbd>)
                        <br />
                        <img src="/project20/8.png">
                    </li>
                    <li class="list-group-item">We were not able to find any docs related to RebillyCashier</li>
                    <li class="list-group-item">
                        By default arrow on the right side of the payment method is not middle aligned
                        <br />
                        <img src="/project20/1.png">
                    </li>
                    <li class="list-group-item">
                        On <a href="https://rebilly-website--cashier-docs.preview.redocly.app/docs/dev-docs/integrate-a-deposit-form#set-up-a-deposit-form">cashier-docs-preview</a> there is old deposit form in the preview, which seems to be invalid
                        <br />
                        <img src="/project20/2.png">
                    </li>
                    <li class="list-group-item">
                        Dropdown arrow is rendered in wrong place (under select instead of right site of it) and we were not able to style deposit amount dropdown
                        <br />
                        <img src="/project20/3.png">
                    </li>
                    <li class="list-group-item">
                        New payment card form styling is broken (renders default font) on the other hand, when we tried to check it on smartphone, at the beginning label renders with custom font but it change after a second
                        <br />
                        <img src="/project20/4.png">
                        <br />
                        <img src="/project20/5.png" width="500">
                        <img src="/project20/6.png" width="500">
                    </li>
                    <li class="list-group-item">
                        <kbd>--r-result-title-color</kbd> is not changing color of the title as <a href="https://rebilly-website--cashier-docs.preview.redocly.app/docs/dev-docs/customize-rebilly-cashier#result">docs</a> says
                        <br />
                        <img src="/project20/7.png">
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