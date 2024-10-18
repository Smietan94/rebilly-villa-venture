<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <h2>Projects debriefs:</h2>
            <li class="list-group-item"><router-link :to="{ name: 'Debrief8' }" class="btn btn-primary">Project 8</router-link></li>
            <li class="list-group-item"><router-link :to="{ name: 'Debrief9' }" class="btn btn-primary">Project 9</router-link></li>
            <li class="list-group-item"><router-link :to="{ name: 'Debrief10' }" class="btn btn-primary">Project 10</router-link></li>
            <li class="list-group-item"><router-link :to="{ name: 'Debrief11' }" class="btn btn-primary">Project 11</router-link></li>
        </ul>
    </div>
</template>
<script setup lang="ts">
</script>