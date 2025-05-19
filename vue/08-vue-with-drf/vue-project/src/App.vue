<template>
  <header>
    <nav>
    <RouterLink uterLink :to="{name:'ArticleView'}">Articles</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView,RouterLink } from 'vue-router'

</script>

<style scoped>
</style>
