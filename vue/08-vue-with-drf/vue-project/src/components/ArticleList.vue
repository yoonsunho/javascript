<template>
  <div>
    <h3>Article List</h3>
    <!-- 하위  컴포넌트에서 ㅔ이터 사용할 수 있도록 prop  -->
    <ArticleListItem v-for="article in store.articles" 
    :key="article.id"
    :article = "article"/>

  </div>
</template>

<script setup>
import ArticleListItem from '@/components/ArticleListItem.vue'
import { useArticleStore } from '@/stores/articles.js';
const store = useArticleStore()
</script>
