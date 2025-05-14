<template>
    <h1>ChildItem</h1>
    
    {{ item.id }}
    {{ item.name }}
    <!-- 버튼 클릭시, someEvent 발생!! -->
     <!-- <button @click="$emit('someEvent')">클릭</button> -->
     <button @click="buttonClick">클릭</button>
</template>

<script setup>
    const props = defineProps({
        item:Object
    })
    
    console.log(props)
    console.log(props.item)
    // 절대 , 하위 컴포넌트에서 prop받은 데이터를 변경하기 위해 준 기능은 아니다!
    // props.item.name = '파인애플'

    const emit = defineEmits(['someEvent'])
    const buttonClick = function(){
        //이곳에서 복잡한 로직을 실행할 수도 잇다
        emit('someEvent',props.item,'구아바')
    }
</script>

<style scoped>

</style>