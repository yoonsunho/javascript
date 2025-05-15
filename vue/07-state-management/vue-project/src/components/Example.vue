<template>
    <div>
        <p>State: {{ store.count }}</p>
        <p>getters: {{ store.doubleCount }}</p>
        <button @click="store.increment">Click</button>
        <hr>

    </div>
</template>

<script setup>
   
    import { useCounterStore } from '@/stores/counter';
    const store = useCounterStore()
    console.log(store.count)    //store.value.count x -> .value 생략
</script>

<style scoped>

</style>