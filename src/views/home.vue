<script lang="ts" setup>
import '@/assets/styles/home.scss'

import port from '@/assets/img/port.png'
import port_6670684 from '@/assets/img/port-6670684.jpg'
import rice from '@/assets/img/rice-1549130.jpg'
import eshop from '@/assets/img/pexels-fauxels-3184464.jpg'
</script>


<template>
  <el-image :src="port" lazy/>
  <div class="text" style="top: 15%;  right: 3%;">
    <h2>Port services</h2>
    <h3>
      Port service market refers to the market for trading port services. It has obvious regional characteristics. If there is only one available port in a given area, then the port market in that area is a complete seller's monopoly market. In most cases, there are several ports at the same time to provide homogeneous services for the import and export of goods in the hinterland.
    </h3>
  </div>
  <el-image :src="port_6670684" lazy/>
  <div class="text" style="top: 150%; left: 3%;">
    <h2>Maritime transport</h2>
    <h3>
      Our shipping FCL service covers the world's main routes, we provide ordinary containers, freezers, special containers and other transportation modes, in the premise of providing you with reliable shipping space, so that you have more choices. Our professional team will suggest a reasonable transportation route according to your needs.
    </h3>
  </div>

  <el-image :src="rice" lazy/>
  <div class="text" style="top: 300%; right:3%;">
    <h2>Trade in bulk goods</h2>
    <h3>
      Bulk grain import and export, covering barley, wheat, corn, sugar soybeans, fertilizer and other metals and raw materials import and export. Recycled copper, lithium phosphate, oil and natural gas. Consumer electronics.
    </h3>
  </div>

  <el-image :src="eshop" lazy/>
  <div class="text" style="top: 430%; left: 40%;">
    <h2>Trade in bulk goods</h2>
    <h3>
      Bulk grain import and export, covering barley, wheat, corn, sugar soybeans, fertilizer and other metals and raw materials import and export. Recycled copper, lithium phosphate, oil and natural gas. Consumer electronics.
    </h3>
  </div>

  <div class="connect">
    <div class="left">
      <div style="display: inline">
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
            <el-col :span="6"><span class="span">contacts: </span></el-col>
            <el-col :span="12" :offset="4"><span class="span">Ridge</span></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>


</template>

<style lang="scss" scoped>
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
