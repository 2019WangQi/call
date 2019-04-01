<template>
  	<div class="top_b">
  		<div class="con">
  			<div class="con_t">
  				<h1><img src="../../../../public/images/1_03.jpg"/></h1>
  				<div class="cent">
  					<p class="p1">选择机型查看优惠</p>
  					<p class="p2">随机最高加价：<span>￥60</span></p>
  				</div>
  				<div class="rig">
  					<a href="">本机估价</a>
  				</div>
  			</div>
  			<div class="con_b">
  				<h1><img src="../../../../public/images/2_03.jpg"/></h1>
  			</div>
  		</div>
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
	.top_b{
		width: 100%;
		height: 0.93rem;
		/*background: red;*/
		position: absolute;
		top: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top_b>.con{
		width: 3.5rem;
		height: 100%;
		background-color: white;
		border-radius: 0.06rem;
		padding-top: 0.13rem;
	}
	.top_b>.con>.con_t{
		display: flex;
		justify-content: space-around;
		margin-bottom: 10px;
	}
	.top_b>.con>.con_t>h1>img{
		width: 0.31rem;
	}
	.top_b>.con>.con_t>.cent{
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width:1.7rem;
		
	}
	.top_b>.con>.con_t>.cent>p{
		line-height: 0.21rem;
		font-size: 14px;
		color: grey;
	}
	.top_b>.con>.con_t>.cent>.p2{
		color: black;
	}
	.top_b>.con>.con_t>.cent>.p2>span{
		color: red;
		font-size: 18px;
	}
	.top_b>.con>.con_t>.rig{
		width: 0.84rem;
		height: 0.25rem;
	}
	.top_b>.con>.con_t>.rig>a{
		display: block;
		width: 0.84rem;
		height: 0.25rem;
		background-color: #02ad63;
		font-size: 13px;
		color: white;
		text-align: center;
		line-height: 0.25rem;
		border-radius:3px ;
	}
	.top_b>.con>.con_b{
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
