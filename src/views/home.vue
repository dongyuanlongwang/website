<script lang="ts" setup>
import '@/assets/styles/home.scss'

import port from '@/assets/img/port.png'
import port_6670684 from '@/assets/img/port-6670684.jpg'
import rice from '@/assets/img/rice-1549130.jpg'
import eshop from '@/assets/img/pexels-fauxels-3184464.jpg'
</script>


<template>
  <div class="img">
    <el-image class="img" :src="port" lazy>
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
    </el-image>
    <div  class="text" style="top: -70vh;  left: 77vw;">
      <h2>Port services</h2>
      <h3>
        Port service market refers to the market for trading port services. It has obvious regional characteristics. If
        there is only one available port in a given area, then the port market in that area is a complete seller's
        monopoly market. In most cases, there are several ports at the same time to provide homogeneous services for the
        import and export of goods in the hinterland.
      </h3>
    </div>
  </div>
  <div class="img">
    <el-image class="img" :src="port_6670684" lazy>
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
    </el-image>
    <div class="text" style="top: -80vh; left: 3vw;">
      <h2>Maritime transport</h2>
      <h3>
        Our shipping FCL service covers the world's main routes, we provide ordinary containers, freezers, special
        containers and other transportation modes, in the premise of providing you with reliable shipping space, so that
        you have more choices. Our professional team will suggest a reasonable transportation route according to your
        needs.
      </h3>
    </div>
  </div>
  <div class="img">
    <el-image class="img" :src="rice" lazy>
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
    </el-image>
    <div class="text" style="top: -80vh; left:77vw;">
      <h2>Trade in bulk goods</h2>
      <h3>
        Bulk grain import and export, covering barley, wheat, corn, sugar soybeans, fertilizer and other metals and raw
        materials import and export. Recycled copper, lithium phosphate, oil and natural gas. Consumer electronics.
      </h3>
    </div>
  </div>
  <div class="img">
      <el-image class="img" :src="eshop" lazy>
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
      <div class="text" style="top: -60vh; left: 40vw;">
        <h2>Cross-boundary Electronic Accounts</h2>
        <h3>
          Its products include consumer electronics and home furnishings, which reach the global market through platforms
          such as Amazon.
        </h3>
      </div>
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
  position: relative;
  width: 20vw;
  color: #f2f3f5;
}

.connect {
  height: 50vh;
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

.img {
  height: 100vh;
  width: 100vw;
  z-index: -1;
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
