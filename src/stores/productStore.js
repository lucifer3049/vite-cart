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
            // const url = `https://simplejsoncms.com/api/dd3jn7r0jte`
            const url = '/api';
            try {
                const response = await axios.get(url);
                this.products = response.data;
                console.log(this.products);
            } catch (error) {
                console.log(error);
                alert('無課程資訊');
            }
        }
    }
})