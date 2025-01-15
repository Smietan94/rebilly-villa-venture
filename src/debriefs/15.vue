<template>

    <div class="container">
        <h1>Phronesis project #15 - 3DS secure</h1>
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
                        It was confusing whether 3DS should be applied to cards issued by a Canadian bank or only if
                        the payment currency is CAD.
                    </li>
                    <li class="list-group-item">
                        The 3DS Merchant name/ID/BIN fields are poorly designed. VISA fields should be grouped together
                        (e.g., in one row), and the same for Mastercard, etc.
                    </li>
                    <li class="list-group-item">
                        URL validation errors are not clear. There should be a description indicating that the URL
                        should contain <code>https://</code>.
                    </li>
                    <li class="list-group-item">
                        When using conditions in a dropdown, you can add any incorrect value by hitting enter.
                        The dropdown should probably allow selecting only existing options.
                    </li>
                    <li class="list-group-item">
                        Generally, in forms in the Recomm app, there is a lot of unused space that could be utilized
                        to provide a better UI/UX, such as with better field layout or additional explanations or hints.
                    </li>
                    <li class="list-group-item">
                        There is no way to change the gateway account ID, which seems to be okay.
                        However, we wanted to change the name, and there is only an ID. So, if a user makes a mistake
                        and wants to fix a typo, they have to delete the gateway account and create a new one.
                    </li>
                    <li class="list-group-item">
                        We were only able to test a frictionless declined Canadian bank card, as we didn't find an
                        authenticated Canadian bank-issued one.
                    </li>
                    <li class="list-group-item">
                        When using Canadian currency, there is a "CA$ 50" label on the page for selecting the deposit
                        value, and on the next page, the total label is formatted differently: "CAD $50".
                        This inconsistency should be addressed.
                    </li>
                    <li class="list-group-item">
                        It would be nice to have a Canadian 3DS card with a manual challenge.
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