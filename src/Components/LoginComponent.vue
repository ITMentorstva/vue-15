<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name" placeholder="Enter your name" data-testid="name-input" />
    <input type="password" v-model="password" placeholder="Enter your password" data-testid="password-input" />
    <button type="submit" data-testid="submit-button">Login</button>
    <button v-if="submited" type="button" @click="resetForm" data-testid="reset-button">Reset</button>

    <p v-if="submited">Hello {{ name }}</p>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const name = ref('');
  const password = ref('');
  const submited = ref(false);

  function submitForm() {
    if(name.value.trim() && password.value.trim()) {
      submited.value = true
    }
  }

  function resetForm() {
    name.value = '';
    password.value = '';
    submited.value = false;
  }

</script>