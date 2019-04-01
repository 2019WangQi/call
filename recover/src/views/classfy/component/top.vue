<template>
  	<div class="top">
  		<h2>
  			<a href="/" class="callIndex"><i class="iconfont">&#xe510;</i></a>
  			<a href="" class="sch">
  				<i class="iconfont">&#xe551;</i>
  				<span>请输入您想要的类型</span>
  			</a>
  		</h2>
  	</div>
</template>

<script>

/*import HelloWorld from '@/components/HelloWorld.vue'
*/
export default {
  name: 'home',
  components: {
  	
  }
}
</script>
<style scoped="scoped" lang="scss">
.top {
	  width: 100%;
	  height: 0.5rem;
	  background: #04a761;
	  padding-left: 0.2rem;
	  padding-right: 0.4rem;
	  position: fixed;
	  left: 0;
	  top: 0
}
.top>h2{
	 width: 100%;
	 height: 0.5rem;
	 display: flex;
	 justify-content: space-between;
	 display: flex;
	  align-items: center;
}
.top>h2>.callIndex>.iconfont{
	font-size: 24px;
	color: white;
	display: block;
	width: 0.4rem;
}
.top>h2>.sch{
	width: 2.95rem;
	height: 0.36rem;
	background-color: white;
	color: #999;
	border-radius: 4px;
	font-size: 13px;
	display: flex;
	align-items: center;
}
.top>h2>.sch>.iconfont{
	font-size: 20px;
	margin-left: 5px;
	margin-right: 6px;
}
</style>
