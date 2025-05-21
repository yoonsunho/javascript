// store/accounts.js

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useAccountStore = defineStore('account', () => {
  const ACCOUNT_API_URL = 'http://127.0.0.1:8000/accounts'
  const token = ref('')
  const router = useRouter()
  const isLogin = computed(()=>{
    return token.value ? true : false
  })

  const signUp = function({username, age, password1,password2}){
  // const signUp = function(payload){
    // 이곳에서 POST axios 요청 할 것임
    // console.log(payload)
    axios({
      method:'POST',
      url: `${ACCOUNT_API_URL}/signup/`,
      data:{
        username, age, password1, password2,
        // ...payload
        // username: payload.username,
        // password1 : payload.password1,
        // password2 : payload.password2,

      }
    })
    .then(res =>{
      console.log('회원가입 성공!')
    })
    .catch(err => console.log(err))
  }

  const logIn = function({username,password}){
    axios ({
      method: 'POST',
      url: `${ACCOUNT_API_URL}/login/`,
      data:{
        username, password
      }
    })
    .then(res=>{
      // console.log(res)
      token.value = res.data.key
      router.push({name :'ArticleView'})
    })
    .catch(err => console.log(err))
  }

  return { 
    signUp, logIn,
    token, isLogin
  }
}, { persist: true })
