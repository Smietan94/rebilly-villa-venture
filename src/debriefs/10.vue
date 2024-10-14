<template>

    <div class="container">
        <h1>Phronesis project #9</h1>
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
                    <li>Mostly everything was clear</li>
                </ul>
            </div>
            <br />
            <div>
                What did you find confusing? Did you encounter any issues?
                <ul>
                    <li>broken links to documentation <a href="https://www.npmjs.com/package/@rebilly/framepay-vue#initialization">npmjs</a></li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Project9' }" class="btn btn-primary text-center m-4">Go to project #9</router-link>
    </div>

</template>
<script setup lang="ts">
</script>