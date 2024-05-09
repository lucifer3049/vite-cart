<script setup>

</script>

<template>
  <header>
    <ul class="flex border-b">
      <li class="mr-1">
        <RouterLink class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/">產品列表
        </RouterLink>
      </li>
      <li class="mr-1">
        <RouterLink class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/cart">
          購物車</RouterLink>
      </li>
    </ul>
    <nav>


    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
