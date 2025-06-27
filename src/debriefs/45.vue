<script setup lang="ts">
    import { onMounted } from 'vue';
    import { ref } from 'vue';

    onMounted(() => {
        document.title = 'Project 45';
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
        <h1 class="mb-5">Project 45: Extending resources</h1>
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
                <badge type="issue">
                    issue
                </badge>
            </badges>
            <div class="grid grid-cols-1 gap-4">
                <div class="border py-3 px-4 rounded-md bg-slate-100 text-xl">
                    <div class="py-3">
                        When trying to set or update conditions for
                        <kbd>Subscription → Customer → Custom Fields → Favorite-games</kbd>,
                        an error <kbd>Unable to find the information that was requested</kbd> appeared on the first attempt.
                        No details were shown in the console. After reloading the page, it worked correctly.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                            <iframe src="https://www.loom.com/embed/2d635b85810640ffb32f8e27092ed802?sid=389c5157-f239-4967-a83a-592486dace04" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                        </div>
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
            <div class="grid grid-cols-1 gap-4 text-xl">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        Custom fields validation does not work, even if the field is set as required.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project45/image%20(31).png" @click="openFullscreen($event.target)">
                        <img src="/project45/image%20(28).png" @click="openFullscreen($event.target)">
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
            <div class="grid grid-cols-1 gap-4 text-xl">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        Even if default value is set as <kbd>True(checked)</kbd>, <kbd>Send-marketing-emails</kbd>
                        is not checked on order creation form.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project45/image%20(30).png" @click="openFullscreen($event.target)">
                        <img src="/project45/image%20(29).png" @click="openFullscreen($event.target)">
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
            <div class="grid grid-cols-1 gap-4 text-xl">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        Spaces in custom field label, are replaced with dashes.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project45/image%20(32).png" @click="openFullscreen($event.target)">
                        <img src="/project45/image%20(33).png" @click="openFullscreen($event.target)">
                        <img src="/project45/image%20(34).png" @click="openFullscreen($event.target)">
                        <img src="/project45/image%20(35).png" @click="openFullscreen($event.target)">
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
                <div class="border py-3 px-4 rounded-md bg-slate-100 text-xl">
                    <div class="py-3">
                        Removing custom fields is not possible
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
            <div class="grid grid-cols-1 gap-4 text-xl">
                <div class="border py-3 px-4 rounded-md bg-slate-100">
                    <div class="py-3">
                        We could give customers possibility to filter active subscriptions, or render them in desc order.
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 text-center">
                        <img src="/project45/image%20(36).png" @click="openFullscreen($event.target)">
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