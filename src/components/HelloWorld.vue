<template>
  <h1>HelloWord</h1>
  <TSXTest />
  <Abc />
</template>

<script lang="tsx" setup>
import TSXTest from './TSXTest'
const Abc = <h2>abc</h2>
</script>
<style lang="scss" scoped>
h1{
  color:$red;
}
</style>
