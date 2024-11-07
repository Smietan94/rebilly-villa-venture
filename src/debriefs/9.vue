<template>

    <div class="container">
        <h1>Phronesis project #9 - Online store</h1>
        <div>
            <br />
            <div>
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Teammates:</li>
                <li class="list-group-item">Alexander Kochetov</li>
                <li class="list-group-item">Kris Smietana</li>
            </ul>
            </div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">What made you smile?</li>
                    <li class="list-group-item">Teamwork, Mostly everything was clear</li>
                </ul>
            </div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">What did you find confusing? Did you encounter any issues?</li>
                    <li class="list-group-item">Conditions for shipping rates are quite confusing, some description would be helpful. When adding addon offer, shipping rate turns to 0 from 4.99</li>
                </ul>
            </div>
        </div>
        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
        <router-link :to="{ name: 'Project9' }" class="btn btn-primary text-center m-4">Go to project #9</router-link>
    </div>
</template>
<script setup lang="ts">
</script>