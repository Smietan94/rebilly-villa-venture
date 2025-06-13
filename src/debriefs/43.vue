<script setup lang="ts">
    import { onMounted } from 'vue';
    import { ref } from 'vue';

    onMounted(() => {
        document.title = 'Project 43';
    });

    function openFullscreen(img: any) {
        if (img) {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.webkitRequestFullscreen) {
                img.webkitRequestFullscreen();
            } else if (img.msRequestFullscreen) {
                img.msRequestFullscreen();
            }
        }
    }
</script>

<template>
    <main class="container mx-auto py-8 pb-10">
        <h1 class="mb-5">Project 43: Cancellations</h1>
        <h2 class="mb-1 mb-4">Who did it?</h2>
        <div class="flex gap-8 pb-5 text-xl">
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

        <h2 class="mb-1 mb-4">What made you smile?</h2>
        <div class="pb-5 mb-5">
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100 text-xl">
                    Teamwork
                </div>
            </div>
        </div>

        <h2 class="mb-1 mb-4">What did you find confusing? Did you encounter any issues?</h2>
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
                <div class="border py-3 px-4 rounded-md bg-slate-100 text-xl">
                    <div class="py-3">
                        Looks like <kbd>Add pro rata credit</kbd> is related to <kbd>Specific time</kbd> even if
                        <kbd>Now</kbd> is selected. <kbd>Add pro rata credit</kbd> checkbox should be moved below
                        selected option.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project43/image%20(23).png" @click="openFullscreen($event.target)">
                    </div>
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
            <div class="grid grid-cols-1 gap-4 text-xl">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        After subscription cancellation, invoice shows negative subtotal,
                        but <kbd>Total</kbd> and <kbd>Amount due</kbd> are equal to zero.
                        However, invoice details sent in email message are different:
                        <kbd>Subtotal</kbd> and <kbd>Total</kbd> are negative while only
                        <kbd>Amount due</kbd> is zero.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project43/image%20(26).png" @click="openFullscreen($event.target)">
                        <img src="/project43/image%20(27).png" @click="openFullscreen($event.target)">
                    </div>
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="note">
                    note
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100 text-xl">
                    <div class="py-3">
                        We had to manually create a credit memo to complete this training.
                        After enabling the <kbd>create-credit-memo-on-invoice-negative-amount</kbd>
                        feature flag, credit memos were created automatically.
                    </div>
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="confusion">
                    Not training related
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4 text-xl">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        During this training came out that we should remove email notification binds from rules engine frontend.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project43/image%20(28).png" @click="openFullscreen($event.target)">
                    </div>
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

    kbd {
        @apply rounded-md bg-gray-700 border border-solid;
        @apply px-1 py-0.5 text-xs text-orange-400;
    }

    img {
        @apply w-xs mb-3 cursor-pointer;
        @apply hover:opacity-80 transition-opacity duration-200;
    }

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

        &[type=note] {
            @apply bg-blue-500;
        }
    }
</style>