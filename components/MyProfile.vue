<template>
  <main class="flex bg-gray-200 h-screen p-5">
    <div class="profile m-auto p-6 rounded-lg shadow">profile {{ name }}</div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('supasai')
</script>

<style>
.profile {
  background-color: aliceblue;
}
</style>
