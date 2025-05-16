<template>
    <div class="container mx-auto p-5">
        <h2>Projects debriefs:</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-center">
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief39' }" class="new-debrief">Project 39</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief38' }" class="debrief-btn">Project 38</router-link>
            </div>
            <div class="col-start-1 col-end-4 debrief-tab"></div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief26' }" class="debrief-btn">Project 26</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief25' }" class="debrief-btn">Project 25</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief24' }" class="debrief-btn">Project 24</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief23' }" class="debrief-btn">Project 23</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief22' }" class="debrief-btn">Project 22</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief21' }" class="debrief-btn">Project 21</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief20' }" class="debrief-btn">Project 20</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief19' }" class="debrief-btn">Project 19</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief18' }" class="debrief-btn">Project 18</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief17' }" class="debrief-btn">Project 17</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief16' }" class="debrief-btn">Project 16</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief15' }" class="debrief-btn">Project 15</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief14' }" class="debrief-btn">Project 14</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief13' }" class="debrief-btn">Project 13</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief12' }" class="debrief-btn">Project 12</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief11' }" class="debrief-btn">Project 11</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief10' }" class="debrief-btn">Project 10</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief9' }" class="debrief-btn">Project 9</router-link>
            </div>
            <div class="debrief-tab">
                <router-link :to="{ name: 'Debrief8' }" class="debrief-btn">Project 8</router-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
    @reference "tailwindcss";

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .new-debrief {
        @apply text-black block max-w-sm p-6 bg-white border border-red-500 rounded-lg shadow-md shadow-red-500/50 hover:bg-gray-100 ;
        @apply no-underline;
    }

    .debrief-btn {
        @apply text-black block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ;
        @apply no-underline;
    }

    .debrief-tab {
        @apply p-6 place-content-center;
    }
</style>
