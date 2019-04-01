<template>
  <div class="classfy">
   		<Top/>
   		<Nav @handleTog="handleToggle"/>
   		<List @handleBorderr="handleBorderr"/>
   		<ListItem1 v-show="showBorder==1"/>
   		<ListItem2 v-show="showBorder==2"/>
  </div>
</template>

<script>
import Top from './component/top.vue'
import Nav from './component/nav.vue'
import List from './component/list.vue'
import ListItem1 from './component/listitem1.vue'
import ListItem2 from './component/listitem2.vue'


export default {
  name: 'classfy',
  components: {
  	Top,
   	Nav,
   	List,
   	ListItem1,	
   	ListItem2
  },
  data(){
  	return {
  		show:1,
  		showBorder:1
  	}
  },
  methods:{
  	handleToggle(val){
  		this.show = val;
  		//console.log(val)
  	},
  	handleBorderr(val){
  		this.showBorder = val;
  		//console.log(val)
  	}
  }
}
</script>

<style scoped>
.classfy{
		display: flex;
		flex-direction: column;			
		height: 100%;
}

</style>