import { defineStore } from 'pinia';

export const useCheckoutStore = defineStore('CheckoutStore', {
    state: () => ({
        product: String,
        amount: Number,
        bumpOffer: String,
    }),
    getters: {},
    actions: {},
});
