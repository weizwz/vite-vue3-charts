<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@store/user'

defineOptions({
  name: 'V-home'
})

const userStore = useUserStore()
// 获取state使用computed或者使用storeToRefs，直接使用不具备响应式（拿到的永远是初次的值）
const username = computed(() => userStore.userInfo.name)
// 获取getter使用storeToRefs，或者直接使用，在模板里 userStore.namePic
const { namePic, token } = storeToRefs(userStore)
</script>

<template>
  <div>Hello: {{ namePic }}, your name is {{ username }}, your token is {{ token }}</div>
</template>

<style scoped></style>
