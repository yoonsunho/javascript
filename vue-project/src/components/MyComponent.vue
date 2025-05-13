<!-- MyComponent.vue 이름은 OascalCase로 작성 -->
 <template>
    <h2>MyComponent</h2>
    <p>{{ message }}</p>
 </template>
 
 <script setup>
    import {ref}  from 'vue'
    const message = ref('값')
 </script>
 
 <style scoped>
    h2{
        color: red;
    }
 </style>