  <script setup>
    import { ref } from 'vue';
    
    const count = ref(0);
    
    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => count.value = 0;
  </script>

<template>
  <h1>Contador: {{ count }}</h1>
  <div style="text-align: center; padding: 20px; display: flex; justify-content: center; gap: 1rem;">
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="reset">Resetear</button>
  </div>
</template>

