<script setup>
</script>

<template>
    <div class="container px-5 py-3">
        <div class="container text-center">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">
                    <div class="card mx-auto h-100" style="width: 18rem;">
                        <img src="../../../../public/project9/kluska_course.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">"Start your villa rental business"</h5>
                            <p>online course</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">price: $1,299</li>
                        </ul>
                        <div class="card-body">
                            <router-link :to="{ name: 'Course' }" class="btn btn-primary">learn more</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto h-100" style="width: 18rem;">
                        <img src="../../../../public/project9/kluska_ebook.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">"Why should you invest in real estate"</h5>
                            <p>ebook</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">price: $9.99</li>
                        </ul>
                        <div class="card-body">
                            <router-link :to="{ name: 'Ebook' }" class="btn btn-primary">learn more</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto h-100" style="width: 18rem;">
                        <img src="../../../../public/project9/kluska_hat.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Villa Venture Short Beanie</h5>
                            <p>merchandise</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">price: $29.99</li>
                        </ul>
                        <div class="card-body">
                            <router-link :to="{ name: 'Hat' }" class="btn btn-primary">learn more</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto h-100" style="width: 18rem;">
                        <img src="../../../../public/project9/kluska_tees.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">T-shirt</h5>
                            <p>merchandise</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">price: $19.99</li>
                        </ul>
                        <div class="card-body">
                            <router-link :to="{ name: 'T-shirt' }" class="btn btn-primary">learn more</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-end">
            <router-link :to="{ name: 'Debrief9' }" class="btn btn-primary text-center m-4 mx-auto">Go to project #9 debrief</router-link>
        </div>
    </div>
</template>