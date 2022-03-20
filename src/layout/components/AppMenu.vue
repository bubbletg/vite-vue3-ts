<template>
  <el-row class="tac">
    <el-col>
      <h3
        class="mb-2"
        v-show="!isCollapse"
        @click="isCollapse=true"
      >
        TodoList 后台管理
      </h3>
      <h3
        class="mb-2"
        v-show="isCollapse"
        @click="isCollapse=false"
      >
        展开
      </h3>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2f4058"
        text-color="#fff"
        router
        :collapse="isCollapse"
      >
        <template
          v-for="item in menus"
          :key="item.path"
        >
          <el-sub-menu
            :index="item.path"
            v-if="item.children"
          >
            <template
              #title
            >
              <el-icon>
                <Icon
                  class="i"
                  :icon="item.meta?.icon"
                />
              </el-icon>

              <span>{{ item.meta?.title }}</span>
            </template>

            <el-menu-item
              :index="citem.path"
              v-for="citem in item.children"
              :key="citem.path"
              :title="citem.meta?.title"
            >
              {{ citem.meta?.title }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item
            :index="item.path"
            v-if="!item.children"
          >
            <el-icon>
              <Icon
                class="i"
                :icon="item.meta?.icon"
              />
            </el-icon>
            <span>{{ item.meta?.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-core'
import { routes } from '@/router'
// 拿到菜单栏列表
const menus = routes.filter(item => item.path === '/')[0].children
// 展开或者隐藏菜单栏
const isCollapse = ref(false)

</script>
<style lang="scss" scoped>
.tac{
  color:#fff;
  height: 100%;
  background-color: #2f4058;
  .mb-2{
    text-align: center;
    height: 60px;
    line-height: 60px;
    margin: 0 10px;
  }
}
.el-menu {
  border-color: #2f4058;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
