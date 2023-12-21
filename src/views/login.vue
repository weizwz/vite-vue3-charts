<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@store/user'
import { loginApi } from '@/api/login'

defineOptions({
  name: 'V-login'
})

const userStore = useUserStore()
const { userInfo, token } = storeToRefs(userStore)
let userName = ref(userInfo.value.name)
let userToken = ref(token)

const updateUserName = () => {
  userStore.setUserInfo({
    name: userName.value
  })
}
const updateUserToken = () => {
  userStore.setToken(userToken.value)
}

const login = () => {
  loginApi({
    name: userName.value
  })
    .then((res) => {
      userName.value = res.name
      userToken.value = res.token
      updateUserToken()
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <div>login page</div>
  name:
  <input type="text" v-model="userName" @input="updateUserName" />
  <br />
  token:
  <input type="text" v-model="userToken" />
  <hr />
  <button @click="login">login</button>
</template>

<style scoped></style>
