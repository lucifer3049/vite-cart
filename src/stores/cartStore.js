import { defineStore } from 'pinia';
import { useProductStore } from './productStore';


export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: [],
            allSelected: false, //checkbox的狀態
        }
    },
    actions: {
        addToCart(productId, qty = 1) {
            const product = useProductStore().products.find(product => product.id === productId);
            if (product && product.status === true) { //如果是true就可以加入購物車
                this.cart.push({
                    id: new Date().getTime(),
                    product,
                    price: product.minPrice,
                    qty,
                    selected: false //初始化selected屬性

                });

            } else {
                alert('該課程未開課，無法加入購物車');
            }
        },
        // 單筆資料刪除
        removeCartItem(id) {
            const index = this.cart.findIndex((item) => item.id === id);
            this.cart.splice(index, 1);
        },
        // 多筆資料刪除
        deleteAllCarts() {
            if (this.isAllSelected) {
                this.cart = [];
            } else {
                this.cart = this.cart.filter(item => !item.selected);
            }

            this.allSelected = false;
            this.totalItems = 0;
        },
        addNewOrder() {
            alert('訂單已成立');
        },

        // checkbox的全選按鈕
        toggleAllItems() {
            // 判斷購物車中是否所有項目都被選中
            const isAllSelected = this.cart.every(item => item.selected);
            // 更新所有項目的選中狀態
            this.cart.forEach(item => {
                item.selected = !isAllSelected; // 這裡應該是反轉選中狀態，而不是直接賦值
            });
            // 更新全選狀態
            this.allSelected = !isAllSelected;
            // 計算總項目數量
            this.totalItems = this.cart.reduce((a, b) => a + b.qty, 0);
        },
        // checkbox單選
        toggleItemSelection(cartItem) {
            // 找到購物車項目在購物車陣列中的索引
            const index = this.cart.findIndex(item => item.id === cartItem.id);
            // 如果找到該項目索引不為-1
            if (index !== -1) {
                // 切換該項目的狀態
                this.cart[index].selected = !this.cart[index].selected;
            }
        },
    },
    getters: {
        isAllSelected: (state) => state.cart.every(item => item.selected),
        totalAmount() {
            // return this.cart.reduce((total, item) => total + item.price * item.qty, 0);
            return this.cart.reduce((total, item) => total + (item.selected ? item.price * item.qty : 0), 0);
        }
    }
})