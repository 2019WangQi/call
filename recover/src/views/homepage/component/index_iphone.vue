<template>
  	<div class="index_iphone">
  		<div class="index_con one">
  			<div class="con_list_one" v-for="item in con">
  				<!--<h1><img src="../../../../public/images/3_03.jpg"/></h1>
  				<span>手机回收</span>-->
  				<h1><img :src="item.src"/></h1>
  				<span>{{item.name}}</span>
  			</div>
  		</div>
  		<div class="index_con two">
  			<div class="con_list_one" v-for="item in con_b">
  			
  				<h1><img :src="item.src"/></h1>
  				<span>{{item.name}}</span>
  			</div>
  		</div>
  		<div class="bian">
  			
  		</div>
  	</div>
</template>

<script>

/*import HelloWorld from '@/components/HelloWorld.vue'
*/
export default {
  name: 'home',
  components: {
  	
  },
  data(){
  	return {
  		con:[
  			{
  				src:'images/3_03.jpg',
  				name:"手机回收"
  			},
  			{
  				src:'images/3_05.jpg',
  				name:"平板回收"
  			},
  			{
  				src:'images/3_07.jpg',
  				name:"电脑回收"
  			},
  			{
  				src:'images/3_09.jpg',
  				name:"全新机回收"
  			},
  			{
  				src:'images/3_11.jpg',
  				name:"数码回收"
  			},
  			
  		],
  		con_b:[
				{
					src:'images/3_18.jpg',
					name:"国产手机"
				},
				{
					src:'images/3_19.jpg',
					name:"苹果手机"
				},
				{
					src:'images/3_20.jpg',
					name:"统货回收"
				},
				{
					src:'images/3_21.jpg',
					name:"尾货回收"
				},
				{
					src:'images/3_22.jpg',
					name:"3G手机回收"
				},
  		]
  	}
  	
  }
}
</script>
<style lang="scss" scoped>
	.index_iphone{
		width: 100%;
		height: 2.3rem;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: flex-start;
	}
	.index_iphone>.index_con{
		width: 100%;
		background-color: white;
		display: flex;
		justify-content: space-around;
		
	}
	.index_iphone>.one{
		margin-top: 0.25rem;
	}
	.index_iphone>.two{
		margin-top: 0.19rem;
	}
	.index_iphone>.index_con>.con_list_one{
		height: 0.7rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 0.65rem;
	}
	.index_iphone>.index_con>.con_list_one>h1{
		width: 0.44rem;
	}
	.index_iphone>.index_con>.con_list_one>h1>img{
		width: 100%;
	}
	.index_iphone>.index_con>.con_list_one>span{
		font-size: 10px;
	}
	.index_iphone .bian{
		width: 100%;
		height: 0.08rem;
		background-color: #E6E6E6;
		position: absolute;
		bottom: 0;
	}
</style>
