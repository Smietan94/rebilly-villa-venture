<script setup>
</script>

<template>
    <div id="app" class="app">
        <nav class="navbar bg-body-tertiary p-4">
        <div class="container">
            <button class="btn btn-primary text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Project list
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Projects List</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            <div class="offcanvas-body">
                <div>
                    <div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><router-link :to="{ name: 'Project8' }" class="btn btn-primary">Project 8</router-link></li>
                            <li class="list-group-item"><router-link :to="{ name: 'Project9' }" class="btn btn-primary">Project 9</router-link></li>
                            <li class="list-group-item"><router-link :to="{ name: 'Project10' }" class="btn btn-primary">Project 10</router-link></li>
                            <li class="list-group-item"><router-link :to="{ name: 'Casino' }" class="btn btn-primary">Casino</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer">
                <div class="container mb-5">
                        <div>
                            <router-link :to="{ name: 'Debriefs' }">Debriefs</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <router-view />

    </div>
</template>

<style scoped>
    .app {
        font-family: 'Roboto', monospace;
        font-style: normal;
        font-optical-sizing: auto;
    }
</style>