<template>
  <h1 class="h1-test">
    home
    <div class="h1-test-div">
      divdidklsadfj;lasedfjkal;sdj
    </div>
  </h1>
  <HelloWorldVue />
</template>

<script setup lang="ts">
import HelloWorldVue from '@/components/HelloWorld.vue'

</script>

<style lang="scss" scoped>
.h1-test{
  color:red;
  &-div{
    color: yellow;
  }
}

</style>
