<template>
  <h1 class="h1-test">
    home
    <div class="h1-test-div">
      divdidklsadfj;lasedfjkal;sdj
    </div>
  </h1>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
    <el-button>中文</el-button>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.h1-test{
  color:red;
  &-div{
    color: yellow;
  }
}

</style>
