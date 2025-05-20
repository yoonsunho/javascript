<template>
    <div>
<!-- 나중엔 for문으로 반복
 우선 화면 구성을 위해 3개를 직접 보여주기 -->
    <TodoListItem/>
    <TodoListItem/>
    <TodoListItem/>
</div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()
</script>

<style scoped>

</style>