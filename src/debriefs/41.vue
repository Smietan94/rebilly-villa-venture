<script setup lang="ts">
    import { onMounted } from 'vue';
    import { ref } from 'vue';

    onMounted(() => {
        document.title = 'Project 41';
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
        <h1 class="mb-5">Project 41: Taxes</h1>
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
                <badge type="confusion">
                    confusion
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        Editing the billing or delivery address on the invoice does not update the tax rate.                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project41/image%20(18).png" @click="openFullscreen($event.target)">
                    </div>
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
                        On hosted payment form, total amount is displayed incorrectly. However, the amount is displayed
                        correctly in details dropdown.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project41/image%20(19).png" @click="openFullscreen($event.target)">
                    </div>
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="idea">
                    idea
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        Updating address on hosted payment form is changing both billing and delivery address.
                        It would be better to give customer possibility to choose whether they want to update
                        billing or delivery address.
                    </div>
                </div>
            </div>
        </div>

        <div class="relative pb-5">
            <badges>
                <badge type="issue">
                    issue
                </badge>
                <badge type="confusion">
                    confusion
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        After successful payment with changed customer address, the address on upcoming invoice
                        is not updated. We could provide users with the option to save that address for upcoming invoices.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project41/image%20(20).png" @click="openFullscreen($event.target)">
                        <img src="/project41/image%20(21).png" @click="openFullscreen($event.target)">
                    </div>
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
                        Adding Tax ID number ends up with an error.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project41/image%20(22).png" @click="openFullscreen($event.target)">
                        <img src="/project41/image%20(23).png" @click="openFullscreen($event.target)">
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

    img {
        @apply w-xs mb-3 cursor-pointer;
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
    }
</style>