<template>
  <MainComponent name="Toma"></MainComponent>
  <LoginComponent></LoginComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainComponent from "@/Components/MainComponent.vue";
import LoginComponent from "@/Components/LoginComponent.vue";

export default defineComponent({
  name: 'App',
  components: {LoginComponent, MainComponent},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
