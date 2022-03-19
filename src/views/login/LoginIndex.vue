<template>
  <h1>login</h1>
  <h2>{{ $store.state.count }}</h2>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api'
import { useStore } from '@/store'

const store = useStore()
console.log(store.state.testkey)
getLoginInfo().then(res => {
  console.log('🚀 ~ file: LoginIndex.vue ~ line 13 ~ getLoginInfo ~ res', res)
})

</script>
