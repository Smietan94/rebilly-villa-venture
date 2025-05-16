<template>
    <main class="container mx-auto py-8 pb-10">
        <h1 class="mb-5">Project 38: PayPal</h1>
        <h5 class="mb-1 mb-4">Who did it?</h5>
        <div class="flex gap-8 pb-5">
            <div class="border py-3 px-4 rounded-md bg-slate-100 col-span-3 flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                Igor Yasko
            </div>
            <div class="border py-3 px-4 rounded-md bg-slate-100 col-span-3 flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                Kris Smietana
            </div>
        </div>


        <h5 class="mb-1 mb-4">What made you smile?</h5>
        <div class="pb-5">
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    Teamwork
                </div>
            </div>
        </div>


        <h5 class="mb-1 mb-4">What did you find confusing? Did you encounter any issues?</h5>
        <div class="relative pb-5">
            <badge type="confusion">
                confusion
            </badge>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    The documentation should mention that credentials for the sandbox account must be obtained from
                    <a href="https://developer.paypal.com/dashboard/accounts">Sandbox test accounts</a>.
                    We were unable to complete the task using the credentials for the developer account.
                    <img src="/project38/1.png" class="w-50">
                </div>
            </div>
        </div>


        <div class="relative pb-5">
            <badge type="issue">
                issue
            </badge>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    After each transaction, PayPal payment instrument is duplicating.
                    <img src="/project38/2.png" class="w-50">
                </div>
            </div>
        </div>

        <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">
            Back to debriefs
        </router-link>
    </main>
</template>

<style scoped>
    @reference "tailwindcss";

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    feedback {
        @apply relative;
        @apply border py-4 px-3 rounded-md bg-slate-50 border-slate-300;
    }

    badge {
        @apply inline-block min-w-[90px] text-center;
        @apply absolute -top-4 left-5 text-white text-xs px-2 py-1 rounded-md capitalize;

        &[type=confusion] {
            @apply bg-red-500;
        }

        &[type=idea] {
            @apply bg-yellow-700;
        }

        &[type=ui] {
            @apply bg-red-500;
        }

        &[type=issue] {
            @apply bg-black;
        }
    }
</style>
<script setup lang="ts">
</script>