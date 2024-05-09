<template>
    <!-- 購物車 -->
    <div
        class="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden auto-cols-max md:container md:mx-auto mt-10 ">
        <div class="grid grid-cols-2 gap-4 place-content-around h-20">
            <h1 class="text-lg text-sky-500">購物車</h1>
            <div class="flex justify-end">
                <button type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    @click="cartStore.deleteAllCarts">全部刪除</button>
            </div>
        </div>
        <table class="table-auto border-collapse w-full">
            <thead class="">
                <tr class="flex flex-row">
                    <th class="px-4 py-2"><input class="disabled:opacity-75" type="checkbox"
                            :checked="cartStore.isAllSelected" @change="cartStore.toggleAllItems"></th>
                    <th class="basis-1/3 px-4 py-2 ">課程名稱</th>
                    <th class="basis-1/3 px-4 py-2">課程圖片</th>
                    <th class="basis-1/3 px-4 py-2">價格</th>
                    <th class="basis-1/3 px-4 py-2">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartStore.cart" :key="item.id" class="flex flex-row ">
                    <td class="basis-1 border px-4 py-2">
                        <input class="disabled:opacity-75" type="checkbox" :checked="item.selected"
                            @change="cartStore.toggleItemSelection(item)">
                    </td>
                    <td class="basis-1/3 border px-4 py-2  truncate md:basis-1/3 ">
                        <h4 class="w-auto mx-auto align-middle text-wrap">{{ item.product.name }}</h4>
                    </td>
                    <td class="basis-1/3 border px-4 py-2 ">
                        <!-- h-32 w-32  -->
                        <img :src="item.product.imageUrl" alt="" class="mx-auto bg-auto bg-no-repeat bg-center ">
                    </td>
                    <td class="basis-1/3 border px-4 py-2 ">
                        <p class="">價格: NT$ {{ item.price }}</p>
                    </td>
                    <td class="basis-1/3 border px-4 py-2 md:basis-1/3 ">
                        <button type="button" class="mx-auto"
                            @click.prevent="cartStore.removeCartItem(item.id)"><span>X</span></button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="w-full max-w-96">
                    <td class="flex justify-end pr-3">總金額:{{ cartStore.totalAmount }}</td>
                </tr>
                <tr class="w-full max-w-96">
                    <td class="flex justify-end">
                        <button type="button"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            @click="cartStore.addNewOrder">確認</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

</script>