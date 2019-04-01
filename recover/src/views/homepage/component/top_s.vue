<template>
  	<div class="top_s">
  		<a href="" class="Input">
  			<i class="iconfont">&#xe620;</i>
  			<span>输入您想要售卖的类型机</span>
  		</a>
  		<a href="" class="erji">
  			<i class="iconfont">&#xe717;</i>
  		</a>
  		
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
<style lang="scss" scoped>
.top_s{
	width: 100%;
	height: 0.46rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	top: 0;
}
.top_s>.Input{
	height: 0.31rem;
	background: white;
	width: 3rem;
	border-radius:0.62rem ;
	display: flex;
	align-items: center;
	justify-content: center;
}
.top_s>.Input>.iconfont{
	font-size: 20px;
	color: darkgrey;
	
}
.top_s>.Input>span{
	font-size: 14px;
	color: darkgrey;
	margin-left: 10px;
}
.top_s>.erji{
	width: 0.28rem;
	height: 0.28rem;
	position: relative;
}
.top_s>.erji>.iconfont{
	font-size: 28px;
	color: white;
	font-weight: 900;
	position: absolute;
	left: 0;
}
</style>
