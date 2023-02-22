<script lang="ts" setup>

</script>
<template>
  <el-container>
    <el-header>
<!--      <div class="logo">-->
<!--        <el-image :src="logo"></el-image>-->
<!--      </div>-->
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer class="footer">
      <span>Copyright © 2022 COMO All Rights Reserved.</span>
    </el-footer>
  </el-container>
</template>
<!--suppress CssUnusedSymbol -->
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
}

.el-main {
  padding: 0 !important;
  display: block;
  overflow: auto;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.logo{
  position: absolute;
  left: -5vmin;
  width: 20vmax;
  height: 20vmin;
}


.footer {
  position: absolute;
  bottom: 0;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

</style>
