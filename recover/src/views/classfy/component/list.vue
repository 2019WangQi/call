<template>
  	<div class="list">
  		<ul>
  			<li @click="handleBorder(1)" :class="activeIndex == 1 ? 'active' : ''">三星</li>
  			<li @click="handleBorder(2)" :class="activeIndex == 2 ? 'active' : ''">小米</li>
  			<li @click="handleBorder(3)" :class="activeIndex == 3 ? 'active' : ''">华为</li>
  			<li @click="handleBorder(4)" :class="activeIndex == 4 ? 'active' : ''">荣耀</li>
  			<li @click="handleBorder(5)" :class="activeIndex == 5 ? 'active' : ''">魅族</li>
  			<li @click="handleBorder(6)" :class="activeIndex == 6 ? 'active' : ''">opop</li>
  			<li @click="handleBorder(7)" :class="activeIndex == 7 ? 'active' : ''">vivo</li>
  			<li @click="handleBorder(8)" :class="activeIndex == 8 ? 'active' : ''">乐视</li>
  			<li @click="handleBorder(9)" :class="activeIndex == 9 ? 'active' : ''">苹果</li>
  			<li @click="handleBorder(10)" :class="activeIndex == 10 ? 'active' : ''">锤子</li>
  			<li @click="handleBorder(11)" :class="activeIndex == 11 ? 'active' : ''">金立</li>
  			<li @click="handleBorder(12)" :class="activeIndex == 12 ? 'active' : ''">联想</li>
  			<li @click="handleBorder(13)" :class="activeIndex == 13 ? 'active' : ''">中兴</li>
  			<li @click="handleBorder(14)" :class="activeIndex == 14 ? 'active' : ''">酷派</li>
  		</ul>
  	</div>
</template>

<script>


export default {
  name: 'home',
  components: {
	
  },
  methods:{
  	handleBorder(index){
  		this.activeIndex = index;
  		this.$emit("handleBorderr",index)
  		console.log(this.activeIndex)
  	}
  },
  data(){
  	return {
  		activeIndex:1
  	}
  }
  
}
</script>
<style scoped="scoped" lang="scss">
	::-webkit-scrollbar{
		display: none;
	}
	.list{
		width: 0.9rem;
		border-right: 1px solid #e6e6e6;
		overflow: auto;
		height: 100%;
		margin-top: 0.9rem;
		height: 100%;
	}
	.list>ul{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.list>ul>li{
		font-size: 16px;
		width: 0.9rem;
		height: 0.5rem;
		text-align: center;
		line-height: 0.5rem;
		/*border-bottom: 1px solid #e6e6e6;*/
	}
	.active{
		background-color: #04a761;
		color: white;
		font-weight: 900;
	}

</style>
