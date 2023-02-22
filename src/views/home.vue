<script lang="ts" setup>
import '@/assets/styles/home.scss'

import port from '@/assets/img/port.jpg'
import port_6670684 from '@/assets/img/port-6670684.jpg'
import rice from '@/assets/img/rice-1549130.jpg'
import eshop from '@/assets/img/pexels-fauxels-3184464.jpg'
</script>


<template>
  <div class="panel">
    <el-image class="img" :src="port" lazy>
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
    </el-image>
    <div class="text port" id="">
      <h2>Port services</h2>
      <h3>&nbsp&nbsp&nbsp&nbsp
        Port service market refers to the market for trading port services. It has obvious regional characteristics. If
        there is only one available port in a given area, then the port market in that area is a complete seller's
        monopoly market. In most cases, there are several ports at the same time to provide homogeneous services for the
        import and export of goods in the hinterland.
      </h3>
    </div>
  </div>
  <div class="panel">
    <el-image class="img" :src="port_6670684" lazy>
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
    </el-image>
    <div class="text transport">
      <h2>Maritime transport</h2>
      <h3>&nbsp&nbsp&nbsp&nbsp
        Our shipping FCL service covers the world's main routes, we provide ordinary containers, freezers, special
        containers and other transportation modes, in the premise of providing you with reliable shipping space, so that
        you have more choices. Our professional team will suggest a reasonable transportation route according to your
        needs.
      </h3>
    </div>
  </div>
  <div class="panel">
    <el-image class="img" :src="rice" lazy>
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
    </el-image>
    <div class="text bulk">
      <h2>Trade in bulk goods</h2>
      <h3>&nbsp&nbsp&nbsp&nbsp
        Bulk grain import and export, covering barley, wheat, corn, sugar soybeans, fertilizer and other metals and raw
        materials import and export. Recycled copper, lithium phosphate, oil and natural gas. Consumer electronics.
      </h3>
    </div>
  </div>
  <div class="panel">
    <el-image class="img" :src="eshop" lazy>
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
    </el-image>
    <div class="text cross">
      <h2>Cross-boundary Electronic Accounts</h2>
      <h3>&nbsp&nbsp&nbsp&nbsp
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
            <el-col :span="6"><span class="span">contacts: </span></el-col>
            <el-col :span="12"><span class="span">GiGi</span></el-col>
          </el-row>
        </el-col>
        <el-col>
          <el-row :gutter="24">
            <el-col :span="6"><span class="span">email: </span></el-col>
            <el-col :span="12"><a class="span" href="mailto:gigili@hknahoo.com">gigili@hknahoo.com</a></el-col>
          </el-row>
        </el-col>

        <el-col>
          <el-row :gutter="24">
            <el-col :span="6"><span class="span">phone: </span></el-col>
            <el-col :span="12"><span class="span">+852 9658 9989</span></el-col>
          </el-row>
        </el-col>
        <el-divider/>
        <el-col>
          <el-row :gutter="24">
            <el-col :span="6"><span class="span">contacts: </span></el-col>
            <el-col :span="12" ><span class="span">Ridge</span></el-col>
          </el-row>
        </el-col>
        <el-col>
          <el-row :gutter="24">
            <el-col :span="6"><span class="span">email: </span></el-col>
            <el-col :span="12" ><a class="span" href="mailto:Ridge@hknahoo.com">Ridge@hknahoo.com</a></el-col>
          </el-row>
        </el-col>
      </el-row>

    </div>
  </div>


</template>

<style lang="scss" scoped>


/* 竖屏 */
@media screen and (orientation: portrait) and (max-width: 720px) {
  .img {
    width: 100vw;
    height: 61.8vw;
  }
  .text {
    color: rgb(199, 78, 36);
    background-color: #000000;
    width: 90vw;
    left: 5vw;
    h2{
      font-size: 4vmin;
    }
    h3{
      text-align: center;
      font-size: 3vmin;
    }
  }
  .connect{
    height: 20vmax;
    color: #000000;
    background-color: rgb(199, 78, 36);
  }
}

@media screen and (orientation: landscape) {
  .panel{
    height: 100vh;
    width: 100vw;
  }
  .img {
    height: 100vh;
    width: 100vw;
  }
  .text {
    position: relative;
    width: 30vw;
    color: #f2f3f5;
    h2{
      font-size: 4vmin;
    }
    h3{
      text-align: center;
      font-size: 2vmin;
    }
  }
  .port {
    top: -80vh;
    left: 67vw;
  }
  .transport {
    top: -80vh;
    left: 3vw;
  }
  .bulk {
    top: -80vh;
    left: 67vw;
  }
  .cross {
    top: -60vh;
    left: 40vw;
  }
  .connect {
    height: 50vh;
    color: #000000;
    background-color: rgb(199, 78, 36);
  }

  .span {
    font-size: 2vmin;
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
}

</style>
