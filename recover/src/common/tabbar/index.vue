<template>
	<div id="footer">
		
		<router-link to="/homepage" tag="li" >	
			<i class="iconfont">&#xe502;</i>
			<span>首页</span>
				
		</router-link>
		<router-link to="/classfy" tag="li" >
		
			<i class="iconfont">&#xe51c;</i>
			<span>分类</span>
				
		</router-link>
		<router-link to="/callback" tag="li" >
		
			<i class="iconfont">&#xe506;</i>
			<span>回收车</span>
		
		</router-link>
		<router-link to="/mine" tag="li">
				
			<i class="iconfont">&#xe61e;</i>
			<span>我的</span>
		
		</router-link>
		
	</div>
	<!--<div id="footer">
	    <ul>
	      <router-link tag="li" v-for="(item,index) in tabbar" :to="item.path">
	        <i class="iconfont" v-html="item.icon"></i>
	        <span>{{item.title}}</span>
	      </router-link>
	    </ul>
  	</div>-->
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          path: "/homepage",
          icon: "&#xe502;"
        },
        {
          title: "分类",
          path: "/classfy",
          icon: "&#xe51c;"
        },
        {
          title: "回收车",
          path: "/callback",
          icon: "&#xe506;"
        },
        {
          title: "我的",
          path: "/mine",
          icon: "&#xe61e;"
        }
      ]
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
#footer{
	width: 100%;
	height: 0.5rem;
	position: fixed;
	left: 0;
	bottom: 0;
	background: #E6E6E6;
	display: flex;
	justify-content: space-around;
	z-index: 100;
}

#footer>li{
	height: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
#footer>li>i{
	font-size: 20px;
}
#footer>li>span{
	font-size: 14px;
}
#footer>.router-link-active{
	color: red;
}

</style>