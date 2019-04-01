<template>
  <div id="app">
     <router-view></router-view>
   	 <TabBar v-if="this.$route.meta.flagShow"/>
  </div>
</template>
<script>
		import TabBar from "@/common/tabbar";
		export default {
		  name:"app",
		  components: {
		    TabBar
		  }
		}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
}

</style>
