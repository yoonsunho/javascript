<template>
  <h1>App.vue</h1>
  <!-- userName 변수애 든 값을 Parent 컴포넌트에게 prop -->
   <!-- prop 받을 데이터가 담길 변수명은 HTML의 속성 형태로 작성한다. -->
  <!-- HTML 의 기본 컨밴션은 kebob-case  -->
   <!-- Html 의 속성에는 문자열만 담 을 수 있다. -->
    <!-- 내 상태를 HTML 속성에 묶는다v-bind -->
  <Parent
    :user-name="userName"
    @change-user-name="onChangeUserName"
  />
</template>

<script setup>
    import Parent from './components/Parent.vue'
    //ref
    import {ref} from 'vue'
    const userName = ref('Alice')
    const onChangeUserName = function(){
      userName.value = 'Charlie'
    }
</script>

<style scoped>

</style>