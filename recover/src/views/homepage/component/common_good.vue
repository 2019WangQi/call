<template>
  	<div class="public_good">
  		<a href="">
  			<img src="images/4_03.jpg" alt="" />
  		</a>
  		<a href="">
  			<img src="images/4_05.jpg" alt="" />
  		</a>
  		<div class="bian1"></div>
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
.public_good{
	height: 2rem;
	width: 100%;
	display: flex;
	justify-content: space-around;
	position: relative;
	
}
.public_good>a{
	display: block;
	width: 1.69rem;
	margin-top: 8px;
}
.public_good>a>img{
	display: block;
	width: 100%;
}
.public_good>.bian1{
	width: 100%;
	height: 0.08rem;
	background-color: #E6E6E6;
	position: absolute;
	bottom: 64px;
}
</style>
