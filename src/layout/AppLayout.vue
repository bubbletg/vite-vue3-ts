<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AppMenuVue />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import AppMenuVue from './components/AppMenu.vue'
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color:#b3c0d0 ;
}
.el-aside {
  background-color: #2f4058;
  width: auto;
}
.el-container{
  height: 100vh;
}
</style>
