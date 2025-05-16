<template>
    <main class="container mx-auto py-8 pb-10">
        <h1 class="mb-5">Project 39: Change orders</h1>
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
        <div class="pb-5 mb-5">
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    Teamwork
                </div>
            </div>
        </div>

        <h5 class="mb-1 mb-4">What did you find confusing? Did you encounter any issues?</h5>
        <div class="relative pb-5">
            <badges>
                <badge type="issue">
                    issue
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        Edit button should be more visible (or moved), it is hard to find it.
                    </div>
                    <img src="/project39/image%20(10).png" class="w-50">
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="issue">
                    issue
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        We did not toggle off autopay it happened after subscription was changed.
                    </div>
                    <img src="/project39/image%20(11).png" class="w-50">
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="confusion">
                    confusion
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        After activating autopay, risk metadata changes.
                    </div>
                    <img src="/project39/image%20(14).png" class="w-50">
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="issue">
                    issue
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        After closing closing order details modal without saving changes, checkbox is checked.
                    </div>
                    <video width="400" controls>
                        <source src="/project39/Screen%20Recording%202025-05-16%20at%2011.48.13.mov" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="confusion">
                    confusion
                </badge>
                <badge type="issue">
                    issue
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        Downgrading the subscription plan leads to a negative subtotal amount.
                        However, the quote shows it should be $10,
                        while the payment form displays a negative value again.
                    </div>
                    <img src="/project39/image%20(15).png" class="w-50 mb-3">
                    <img src="/project39/image%20(16).png" class="w-50 mb-3">
                    <img src="/project39/image%20(17).png" class="w-50">
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

    badges {
        @apply absolute -top-4 left-5;
    }

    badge {
        @apply inline-block min-w-[90px] text-center;
        @apply text-white text-xs px-2 py-1 rounded-md capitalize me-2;

        &[type=confusion] {
            @apply bg-red-500;
        }

        &[type=idea] {
            @apply bg-yellow-700;
        }

        &[type=ui] {
            @apply bg-red-100;
        }

        &[type=issue] {
            @apply bg-black;
        }
    }
</style>
<script setup lang="ts">
</script>