<template>
  <el-container>
<!--    <el-header>-->
<!--      <el-menu :default-active="activeIndex"-->
<!--               class="el-menu-demo"-->
<!--               mode="horizontal"-->
<!--               :ellipsis="false"-->
<!--               @select="handleSelect">-->
<!--        <el-menu-item index="0">-->
<!--          <img alt="logo" style="width: 50% ; height: 50%" src="@/assets/img/logo.png"/>-->
<!--        </el-menu-item>-->
<!--        <div class="flex-grow"/>-->
<!--        <el-menu-item index="home">首页</el-menu-item>-->
<!--        <el-sub-menu index="about">-->
<!--          <template #title>关于烽博</template>-->
<!--          <el-menu-item index="about">烽博介绍</el-menu-item>-->
<!--          <el-menu-item index="org">组织机构</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--        <el-sub-menu index="3">-->
<!--          <template #title>最新动态</template>-->
<!--          <el-menu-item index="3-1">最新动态</el-menu-item>-->
<!--          <el-menu-item index="3-2">公示公告</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--        <el-sub-menu index="4">-->
<!--          <template #title>馆藏文物</template>-->
<!--          <el-menu-item index="4-1">文物鉴赏</el-menu-item>-->
<!--          <el-menu-item index="4-2">文物征集</el-menu-item>-->
<!--          <el-menu-item index="4-3">展览陈列</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--        <el-sub-menu index="5">-->
<!--          <template #title>服务</template>-->
<!--          <el-menu-item index="5-1">参观指南</el-menu-item>-->
<!--          <el-menu-item index="5-2">失物招领</el-menu-item>-->
<!--          <el-menu-item index="5-2">网游留言</el-menu-item>-->
<!--          <el-menu-item index="5-3">教育活动</el-menu-item>-->
<!--          <el-menu-item index="5-3">志愿者之家</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--        <el-sub-menu index="6">-->
<!--          <template #title>参与互动</template>-->
<!--          <el-menu-item index="6-1">参观指南</el-menu-item>-->
<!--          <el-menu-item index="6-2">失物招领</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--        <el-menu-item index="4">研究创新</el-menu-item>-->
<!--      </el-menu>-->
<!--    </el-header>-->
    <el-main>
      <router-view/>
    </el-main>
    <el-footer style="position: fixed; bottom: 50%">
      <h2 >联系邮箱  liuqi@luganghui.com</h2>
    </el-footer>
  </el-container>
</template>

<script setup>

import {ref} from "vue";
import {useRoute, useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();
const activeIndex = ref('home')


const {params, query} = route
let {path} = params
if (path === undefined) {
  path = activeIndex.value;
}
router.replace({path: '/' + path, query})


const handleSelect = (key, keyPath) => {
  let routePath = ""


  for (const keyElement of keyPath) {
    routePath = routePath + "/" + keyElement;
  }

  console.log(path)
  router.replace({path: routePath})
}

</script>
