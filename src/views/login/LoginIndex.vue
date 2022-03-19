<template>
  <h1>login</h1>
  <h2>{{ $store.state.count }}</h2>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api'
import type { ILoginInfo } from '@/api/types'
import { useStore } from '@/store'
import { ref } from '@vue/runtime-core'
const store = useStore()

const list = ref<ILoginInfo['slide']>([])
console.log('🚀 ~ file: LoginIndex.vue ~ line 14 ~ list', list)
console.log(store.state.testkey)
getLoginInfo().then(res => {
  console.log('🚀 ~ file: LoginIndex.vue ~ line 13 ~ getLoginInfo ~ res', res.login_logo)
})

</script>
