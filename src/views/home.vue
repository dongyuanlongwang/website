<script lang="ts" setup>
import '@/assets/styles/home.scss'

import port from '@/assets/img/port.png'
import port_6670684 from '@/assets/img/port-6670684.jpg'
import rice from '@/assets/img/rice-1549130.jpg'
</script>


<template>
  <el-image :src="port" lazy/>
  <div class="text" style="top: 20%;  right: 0;">
    <h2>港口服务</h2>
    <h3>
      港口服务市场，是指港口服务的交易市场。具有明显的区域特征。如果在一定区域内只有一个可供使用的港口，那么这地区的港口市场就是一个完全的卖方垄断市场。在大多数情况下同时有几个港口可以为腹地内货物进出口提供同质服务。
    </h3>
  </div>
  <el-image :src="port_6670684" lazy/>
  <div class="text" style="top: 150%; left: 0;">
    <h2>海上运输</h2>
    <h3>
      我们的海运整柜服务覆盖世界主要航线，我们提供有普通集装箱、冷冻箱、特种箱等运输方式，在为您提供可靠的舱位前提下，让您拥有更多的选择。我们专业团队会根据您的需求为您建议合理的运输路线。
    </h3>
  </div>

  <el-image :src="rice" lazy/>
  <div class="text" style="top: 300%; right: 0;">
    <h2>粮食贸易</h2>
    <h3>
      粮食大宗进出口，苜蓿，大麦
    </h3>
  </div>

  <div class="connect">
    <div class="left">
      <div style="display: inline">
        <span style="font-size: 42px">联系我们</span>
        <br/>
        <span style="font-size: 42px">contact us</span>
      </div>
    </div>
    <div class="right">
      <el-row>
        <el-col>
          <el-row :gutter="24">
            <el-col :span="6"><span class="span">email: </span></el-col>
            <el-col :span="12" :offset="6"><a class="span" href="mailto:liu@comobiz.com">liu@comobiz.com</a></el-col>
          </el-row>
        </el-col>
        <el-col>
          <el-row :gutter="24">
            <el-col :span="6"><span class="span">联系人: </span></el-col>
            <el-col :span="12" :offset="4"><span class="span">刘奇</span></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("@/assets/img/backgroud.png");
  background-size: cover;
}


.text {
  position: inherit;
  width: 20%;
  color: #f2f3f5;
}

.connect {
  height: 50%;
  color: #000000;
  background-color: rgb(199, 78, 36);
}

.span {
  font-size: 25px;
  color: #000000;
}

.left {
  float: left;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.right {
  float: right;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
}

</style>
