<template>
  <page class="home-page">
    <zui-header>
      <logo type="xiaoyanyun" href="/"></logo>
        <h4 class="zui-logo-text">
         |&nbsp;&nbsp;智能社区、三网融合
         <br/>|&nbsp;&nbsp;万物智慧互联提供商
        </h4>
         <div class="zui-rightcol" @click="openMenu" style="color: #0b8ba5;">◄目录►</div>
         <drop-list :config="configData" ref="droplist"></drop-list>
         <zui-button @click="onButtonClick('link')">联系我们</zui-button>
         <zui-button @click="onButtonClick('case')">典型案例</zui-button>
         <zui-button @click="onButtonClick('plan')">解决方案</zui-button>
         <zui-button @click="onButtonClick('service')">产品服务</zui-button>
         <zui-button @click="onButtonClick('home')">首页</zui-button>
    </zui-header>
    <div class="banner vivify fadeIn">
      <h1 class="vivify popIn">
        <span class="br">智慧社区，</span>三网融合、物联网、云计算、传感网
      </h1>
      <h3 class="vivify popIn">文化为引领，物业为基础，服务为核心</h3>
    </div>
    <div class="nav clear">
      <a class="zhichou vivify popIn">
        <div class="watermark blue">平台</div>
        <logo type="zhongtai"></logo>
        <logo class="mobile" type="mzhichou"></logo>
        <h3>解决企业技术难题</h3>
        <h4>不用自建研发队伍>></h4>
      </a>
      <a class="hr vivify popIn delay-200">
        <div class="watermark green">节约</div>
        <logo type="hr"></logo>
        <logo class="mobile" type="mhr"></logo>
        <h3>节约控制开发成本</h3>
        <h4>灵活·专业·快速·低价>></h4>
      </a>
      <a class="plus vivify popIn delay-400">
        <div class="watermark blue">保障</div>
        <logo type="plus"></logo>
        <logo class="mobile" type="mplus"></logo>
        <h3>保障平台无间断运营</h3>
        <h4>后顾无忧·迅速迭代版本更新>></h4>
      </a>
    </div>
   <!-- <a class="join-zhichou" href="http://wx.zhichou.com/#/me/resume">
      我是牛人，入驻智筹 >>
    </a> -->
    <div class="service">
      <h1>
        专业互联网研发集成平台<br/>
        承担你的研发任务
      </h1>
      <h3>
        自带技术平台，马上开工，迅速上线！
      </h3>
      <h4>
        APP开发（android、ios) | 微信开发 | 网站开发 | H5开发<br/>
        我们就是你的开发团队
      </h4>
    </div>
    <div class="features">
      <ul>
        <li>
          <img :src="feature1"/>
          <h4>产品咨询</h4>
          <p>凭借多年互联网行业经验，为您提供商业模式咨询、产品策划服务。</p>
        </li>
        <li>
          <img :src="feature2"/>
          <h4>产品设计</h4>
          <p>交互设计，以用户体验出发，打造优质的视觉和操作体验。</p>
        </li>
        <li>
          <img :src="feature3"/>
          <h4>产品开发</h4>
          <p>专业的研发团队，模块化、系统化开发便于后续维护升级</p>
        </li>
        <li>
          <img :src="feature4"/>
          <h4>产品运维</h4>
          <p>为您提供服务器运维、产品升级支持、技术培训等售后运维工作。</p>
        </li>
     </ul>
    </div>
    <!-- <div class="customer-case-logo">
       <img :src="companyLogo"/>
       <img class="mobile" :src="mcompanyLogo"/>
     </div> -->
     <div class="apply-hr">
       <h2>
         选择智慧互联，选择优质服务
       </h2>
       <h4>
         行业解决方案咨询和实施，提供多业务领域的信息化平台咨询、建设及运营托管服务
       </h4>
     </div>
    <zui-footer/>
  </page>
</template>
<script>
  import './less/home-page.less'
  import Logo from '../components/Logo'
  import Page from '../components/Page'
  import ZuiHeader from '../components/Header'
  import ZuiFooter from '../components/Footer'
  import ZuiButton from '../components/Button'
  import feature1 from '../assets/img/feature1.png'
  import feature2 from '../assets/img/feature2.png'
  import feature3 from '../assets/img/feature3.png'
  import feature4 from '../assets/img/feature4.png'
  import Util from '../Util'
  import DropList from 'vue-droplist'
  export default{
    components: {Page, Logo, ZuiHeader, ZuiFooter,ZuiButton,DropList},
    data () {
      return {
        feature1: feature1,
        feature2: feature2,
        feature3: feature3,
        feature4: feature4,
        carouselPerPage: (Util.os.android || Util.os.iPhone) ? 1 : 2,
        configData : {
            position: {  // 设置显示位置，position
              top: '60px',
              right: '15px',
              bottom: '',
              left: ''
            },
            width: '40%', // 设置宽度
            list: [ // 设置下拉列表数据和对应的点击事件
              {text: '首页', action: this.gohome},
              {text: '产品服务', action: this.goservice},
              {text: '解决方案', action: this.goplan},
              {text: '典型案例', action: this.gocase},
              {text: '联系我们', action: this.golink}
            ]
        }
      }
    },
   methods: {
      onButtonClick: function (e) {
        if(e=="home"){
            this.$router.push({path:'/'})
        }else if(e=="service"){
            this.$router.push({path:'/service'})
        }else if(e=="plan"){
            this.$router.push({path:'/plan'})
        }else if(e=="case"){
            this.$router.push({path:'/case'})
        }else if(e=="link"){
            this.$router.push({path:'/link'})
        }else{
            this.$router.push({path:'/'})
        }
      },
      openMenu: function () {
       this.$refs.droplist.show()
      },
      gohome: function () {
       this.$router.push({path:'/'})
      },
      goservice: function () {
       this.$router.push({path:'/service'})
      },
      goplan: function () {
       this.$router.push({path:'/plan'})
      },
      gocase: function () {
       this.$router.push({path:'/case'})
      },
      golink: function () {
       this.$router.push({path:'/link'})
      },
    }

  }
</script>
