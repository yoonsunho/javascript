<template>
  <div>
    <p>State: {{ store.count }}</p>
    <p>getters: {{ store.doubleCount }}</p>
    <button @click="store.increment">Click</button>
    <hr>
    <Example/>
  </div>


</template>

<script setup>
  import Example from './components/Example.vue';
  import { useCounterStore } from '@/stores/counter';
  const store = useCounterStore()
  console.log(store.count)    //store.value.count x -> .value 생략
  
</script>

<style scoped>

</style>