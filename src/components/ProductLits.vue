<template>
    <!-- 產品列表 -->

    <div class="container mx-auto p-4">
        <ul class="flex flex-wrap gap-4">
            <li v-for="item in productStore.products" :key="item.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <a href="#">
                    <div class="relative h-64 hover:opacity-75 transition-all duration-300">
                        <img :src="item.imageUrl" :alt="item.name" class="absolute h-full w-full object-cover" />
                    </div>
                </a>
                <div class="py-2">
                    <a href="#">
                        <h3 class="font-semibold hover:underline text-sm mb-1">
                            {{ item.name }}
                        </h3>
                    </a>
                    <p class="text-sm mb-1 text-gray-600">
                        {{ item.displayCategory }}
                    </p>
                    <div>
                        <p v-if="item.status === true">開課中</p>
                        <p v-else>未開課</p>

                    </div>

                    <div class="flex gap-x-1 items-center text-[#003354]">
                        <p>NT$ {{ item.minPrice }}</p>
                        <p class="text-sm line-through text-gray-400">
                            NT$ {{ item.maxPrice }}
                        </p>
                    </div>
                </div>
                <!--  h-10 w-32  bg-sky-500 hover:bg-sky-700 -->
                <button type="button" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-sky-700"
                    @click="cartStore.addToCart(item.id, 1)"><span
                        class="inline-block align-middle text-gray-50">加入購物車</span></button>
            </li>

        </ul>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';



const productStore = useProductStore();
const cartStore = useCartStore();


onMounted(async () => {
    productStore.getProduct();
})

</script>