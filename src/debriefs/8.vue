<template>

    <div class="container">
        <h1>Phronesis project #8</h1>
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
                <li>Everything was convenient and clear</li>
            </ul>
        </div>
        <br />
        <div>
            What did you find confusing? Did you encounter any issues?
            <ul>
                <li>We did not encounter any issues</li>
            </ul>
        </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Project8' }" class="btn btn-primary text-center m-4">Go to project #8</router-link>
    </div>

</template>
<script setup lang="ts">
</script>