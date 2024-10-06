<script setup>
import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCheckoutStore } from '@/project/9/stores/CheckoutStore.js';

  const router = useRouter();
  const checkoutStore = useCheckoutStore();

  const amount = ref(1);

  checkoutStore.amount = amount;
  checkoutStore.product = 'ebook';
  checkoutStore.bumpOffer = 'villa-rental-course';
  const buy = () => {
    router.push({
      name: 'Checkout',
    });
  };
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../../../public/project9/ebook/kluska_ebook_carousel1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../../../public/project9/ebook/kluska_ebook_carousel2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../../../public/project9/ebook/kluska_ebook_carousel3.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../../../public/project9/ebook/kluska_ebook_carousel4.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">"Why should you invest in real estate"</h5>
          <p>ebook</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Discover the power of real estate investment with our insightful ebook. Learn why investing in property is a smart financial move and how it can secure your future. Plus, get exclusive access to our “Start Your Villa Rental Business” online course to turn your investment into a profitable venture!</li>
          <li class="list-group-item">price: $9.99</li>
        </ul>

        <div class="card-body">
          <div class="form-group row">
            <div class="col-sm-2">
              <label for="amount">amount:</label>
              <input v-model="amount" type="number" min="1" value="1" required class="form-control" id="amount">
            </div>
          </div>
          <button class="btn btn-primary mt-3" @click="buy">Buy now</button>
        </div>

      </div>
    </div>
  </div>

  <div class="container text-end">
    <router-link :to="{ name: 'Project9' }" class="btn btn-primary text-center m-4">Go back to store</router-link>
  </div>
</template>