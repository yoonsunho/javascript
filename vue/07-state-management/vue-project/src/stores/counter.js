import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //얘는 return ㄴㄴ
  let id = 0
  // 사용자가 값을 cud할 때 반응할 수 있도록 반응형으로 작성
  const todos = ref([[
    //  todo 객체들을 만든다
    // input:checkbox에 쓰일 id도 필요하고,v-for로 순회할 떄 쓸 key도 필요
    
    {id : id++, text:'vue공부',isDone:false},
    {id : id++, text:'js공부',isDone:false},
    {id : id++, text:'django공부',isDone:true},

  ]])

  return { 
    //값 선언 했으면  바로바로 까먹지않도록 return 하기
    todos
   }
})
