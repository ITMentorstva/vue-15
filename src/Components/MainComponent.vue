
<template>
  <h1>Hello {{ name }}</h1>
  <p data-testid="totalCount">Total: {{ count }}</p>
  <button data-testid="incrementCounter" @click="increment">Clicked</button>
  <button data-testid="decrementCounter" @click="decrement">Decrement</button>
</template>


<script setup lang="ts">

  import { defineProps, ref } from 'vue'

  defineProps<{name: string}>()

  const count = ref(0);

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

</script>