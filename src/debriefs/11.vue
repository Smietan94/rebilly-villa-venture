<template>

    <div class="container">
        <h1>Phronesis project #11</h1>
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
                    <li>No problems encountered</li>
                </ul>
            </div>
            <br />
            <div>
                What did you find confusing? Did you encounter any issues?
                <ul>
                    <li>Passing css into rebillyInstruments mount as one of configuration arguments is little confusing</li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Project11' }" class="btn btn-primary text-center m-4">Go to project #11</router-link>
    </div>

</template>
<script setup lang="ts">
</script>