import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            products: [],
        }
    },
    actions: {
        async getProduct() {
            const url = `https://run.mocky.io/v3/dbe24bc0-41fa-4d1d-86e5-81b1b375c779`
            try {
                const response = await axios.get(url);
                this.products = response.data;
                console.log(this.products);
            } catch (error) {
                alert('無課程資訊');
            }
        }
    }
})