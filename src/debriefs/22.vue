<template>
    <div class="container">
        <h1>Project 22: Manage volume limits</h1>
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
                        Adding a name field to gateway accounts would allow customers to edit it. Currently, users
                        can only set the ID once. This feature would help merchants manage their accounts more
                        effectively instead of having to remove and set them up again.
                    </li>
                    <li class="list-group-item">
                        In the case of setting a daily processing limit for a currency other than USD,
                        customers can't set the limit in their target currency. We had to convert 10,000 CAD to USD.
                        Additional information (e.g. placed in a tooltip) would be helpful.
                        <br />
                        <img src="/project22/1.png" class="w-100">
                    </li>
                    <li class="list-group-item">
                        Placing the volume limit form on the gateway account details page isn't obvious.
                        Initially, we looked for this setting on the edit gateway account page.
                    </li>
                    <li class="list-group-item">
                        When adding another gateway account action in the rules engine,
                        we were able to add the action. However, after selecting the Routing algorithm and
                        Weight distribution, we encountered an error:
                        <kbd>Rules > 0 > Actions > 0 > Pick instruction > Weighted list: pickInstruction.weightedList must not be empty</kbd>.
                        <br />
                        <img src="/project22/2.png" class="w-100">
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
