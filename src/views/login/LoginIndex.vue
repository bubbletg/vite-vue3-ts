<template>
  <h1>login</h1>
  <h2>{{ $store.state.count }}</h2>
</template>

<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
console.log(store.state.testkey)

</script>
