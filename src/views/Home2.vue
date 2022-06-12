<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 :ellipsis="false"
                 @select="handleSelect">
          <el-menu-item index="0">
            <img alt="logo" style="width: 50% ; height: 50%" src="@/assets/img/logo.png"/>
          </el-menu-item>
          <div class="flex-grow"/>
          <el-menu-item index="1">首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>关于烽博</template>
            <el-menu-item index="2-1">烽博介绍</el-menu-item>
            <el-menu-item index="2-2">组织机构</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>最新动态</template>
            <el-menu-item index="3-1">最新动态</el-menu-item>
            <el-menu-item index="3-2">公示公告</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>馆藏文物</template>
            <el-menu-item index="4-1">文物鉴赏</el-menu-item>
            <el-menu-item index="4-2">文物征集</el-menu-item>
            <el-menu-item index="4-3">展览陈列</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>服务</template>
            <el-menu-item index="5-1">参观指南</el-menu-item>
            <el-menu-item index="5-2">失物招领</el-menu-item>
            <el-menu-item index="5-2">网游留言</el-menu-item>
            <el-menu-item index="5-3">教育活动</el-menu-item>
            <el-menu-item index="5-3">志愿者之家</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>参与互动</template>
            <el-menu-item index="6-1">参观指南</el-menu-item>
            <el-menu-item index="6-2">失物招领</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="4">研究创新</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import "@/assets/styles/header.scss"
import {ref} from 'vue'

const activeName = ref('first')


const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClick = (tab, event) => {
  console.log(tab, event)
}

</script>

<script>

</script>
