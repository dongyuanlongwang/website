<template>
  <el-container>
    <el-main>
      <router-view/>
    </el-main>

  </el-container>
</template>

<script setup>

import {ref} from "vue";
import {useRoute, useRouter} from 'vue-router'

import logo from '@/assets/svg/logo.svg'


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
