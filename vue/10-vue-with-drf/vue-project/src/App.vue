<!-- App.vue -->

<template>
  <header>
    <nav>
      <RouterLink :to="{ name:'ArticleView' }">Articles</RouterLink> | 
      <RouterLink :to="{name:'SignUpView'}">SignUp</RouterLink> | 
      <RouterLink :to="{name:'LogInView'}">LogIn</RouterLink>
    </nav> 
  </header>
  <RouterView />
</template>

<script setup>
  import { RouterView, RouterLink } from 'vue-router'
import SignUpView from './views/SignUpView.vue';
import LogInView from './views/LogInView.vue';
</script>

<style scoped>
</style>
