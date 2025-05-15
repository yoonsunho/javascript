import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import UserPosts from '@/components/UserPosts.vue'
import UserProfile from '@/components/UserProfile.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      //django에서는 <int:user_pk>/
      // 여기는 vue다. vue에서 변수랑 데이터랑 묶는 방법은?
      path: '/user/:id',
      // name: 'user',
      component:UserView,
      // 중첩된 라우팅 관리를 위해 children 배열 생성
      children:[
          {path: '',name: 'user',component: UserProfile},
          {path: 'profile', name:'user-profile',component:UserProfile},
          {path: 'posts', name:'user-post',component:UserPosts},
      ]
    },
    {
      path:'/login',
      name:'login',
      component: LoginView,
      beforeEnter:(to,from)=>{
        console.log(to,from)
        //이미 로그인되어 있는 상태면 원래 위치로 돌아가게 해버리기
        const isLogined = true
        if(isLogined){
          return {name:'home'}  //로그인 누르면 홈페이지로!
        }
      }
    }
  ],
})

// router.beforeEach((to,from)=>{
//   // 로그인 기능이 실제로 있지는 않으니, 일단 전부 false로 막아보자!
//   const isLogined = false

//   // 만약 어디론가 이동하려고 하는데 로그인 되어있지 않으면 ! => 로그인 페이지로
//   // ㄹ그인 페이지로 이동하거나 오거나 뭐 그런건 빼고..
//   if(!isLogined && to.name !== 'login'){
//     alert('로그인 하세요!')
//     return {name:'login'}//로그인 패이지로 redirect
//   }
//   // console.log(to,from)
//   // alert()
// })


export default router
