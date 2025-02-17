<template>
    <div class="container">
        <h1>Project 26: Google Sheets integration</h1>
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
                    <li class="list-group-item">The google sheets integration went without problems</li>
                </ul>
            </div>
            <br />
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">
                        What did you find confusing? Did you encounter any issues?
                    </li>
                    <li class="list-group-item">
                        First row could be automatically populated with column names, after saving the sheet.
                    </li>
                    <li class="list-group-item">
                        We could add possibility to auto-populate the sheet with past data.
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
