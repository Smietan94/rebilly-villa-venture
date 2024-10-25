<template>

    <div class="container">
        <h1>Phronesis project #12 - deposit</h1>
        <div>
            <br />
            <div>
                Teammates:
                <ul>
                    <li>Alexander Kochetov</li>
                    <li>Kris Smietana</li>
                </ul>
            </div>
            <br />
            <div>
                What made you smile?
                <ul>
                    <li>Filters are really helpful in setting up deposit form</li>
                </ul>
            </div>
            <br />
            <div>
                What did you find confusing? Did you encounter any issues?
                <ul>
                    <li class="mb-4">lack of information that the currency should be set up in the gateway account, before creating the deposit strategy, it leads to this error.
                        <img src="../../public/project12/1.png">
                    </li>
                    <li>after checking "Adjust base amount to last deposited amount", the base deposit amount is displayed as NaN.
                        <img src="../../public/project12/2.png">
                        <img src="../../public/project12/3.png">
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