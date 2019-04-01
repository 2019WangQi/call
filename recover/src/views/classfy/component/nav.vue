<template>
  	<div class="nav">
  		<p @click="handleActive(1)" :class="activeIndex==1?'active':''">手机</p>
  		<p @click="handleActive(2)" :class="activeIndex==2?'active':''">全新机</p>
  		<p @click="handleActive(3)" :class="activeIndex==3?'active':''">3G手机</p>
  		<p @click="handleActive(4)" :class="activeIndex==4?'active':''">尾货</p>
  		<p @click="handleActive(5)" :class="activeIndex==5?'active':''">统货</p>
  		<p @click="handleActive(6)" :class="activeIndex==6?'active':''">平板电脑</p>
  		<p @click="handleActive(7)" :class="activeIndex==7?'active':''">笔记本</p>
  		<p @click="handleActive(8)" :class="activeIndex==8?'active':''">平板电脑</p>
  		<div class="white"></div>
  	</div>
</template>

<script>


export default {
  name: 'home',
  components: {
	
  },
  data(){
	return {
		activeIndex:1
	}
  },
  methods:{
  	handleActive(index){
  		this.activeIndex = index;
  		this.$emit("handleTog",index)
  		//console.log(index)
  	}
  }
}
</script>
<style scoped="scoped" lang="scss">
	.nav{
		height: 0.4rem;
		width: 100%;
		border-bottom: 1px solid #e6e6e6;
		display: flex;
		flex-wrap: nowrap;
		overflow: auto;
		padding-left: 0.19rem;
		position: fixed;
		top: 0.5rem;
		left: 0;
	}
	.nav>p{
		font-size: 14px;
		margin-right: 0.15rem;
		flex-shrink:0 ;
		height: 0.38rem;
		line-height: 0.38rem;
		
	}
	.nav>.white{
		width: 14px;
		height: 0.4rem;
		background: white;
		position: fixed;
		right: 0;
		top: 0.5rem;
	}
	.active{
	 	border-bottom: 3px solid #02ad63;
		color: #02ad63;
		font-weight: 900;
	}
</style>
