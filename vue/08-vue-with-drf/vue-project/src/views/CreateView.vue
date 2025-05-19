<template>
  <div>
    <h1>CREATE PAGE</h1>
    <form @submit.prevent="createArticle">
      <!-- input테그와 textarea가 비엇을 때는 .. 좀 처리가 되도록 -->
      <label for="title">title: </label>
      <input type="text" id="title" v-model="title">
      <br>
      <label for="content">content: </label>
      <textarea id="content" v-model="content"></textarea>
      <br>
      <input type="submit" value="[CREATE]">
    </form>
  </div>
</template>

<script setup>

// 준비물
  // 1. AXIOS
  import axios from 'axios';
  // 2. 게시글 상세 조회 요청 경로: 출처가 이미 스토어에 이씅ㅁ
  import { useArticleStore } from '@/stores/articles.js';
  // 3. 응답 받은 게시글을 저장할 위치
  import {ref } from 'vue'
  //4. 게시글 생성 완료 후 router.path
  import { useRouter } from 'vue-router';

  const title =ref(null)
  const content = ref(null)
  const router = useRouter()

  const store = useArticleStore()
  const createArticle = function(){
    axios({
      method:'POST',
      url:`${store.API_URL}/api/v1/articles/`,
      data:{
        title:title.value,
        content : content.value
        
      }
    })
    .then(res=>{
      console.log(res)
      console.log(res.data)
      router.push({name:'DetailView', params:{id:res.data.id}})
    })
    .catch(err => console.log(err))
  }

</script>

<style>

</style>
