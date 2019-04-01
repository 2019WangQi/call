<template>
  <div class="homepage">
    <Top/>
		<Top_s/>
		<Top_b/>
		<Index_iphone/>
		<Public_good/>
		
  </div>
</template>

<script>
import Top from './component/top.vue'
import Top_s from './component/top_s.vue'
import Top_b from './component/top_b.vue'
import Index_iphone from './component/index_iphone.vue'
import Public_good from './component/common_good.vue'


export default {
  name: 'homepage',
  components: {
   		Top,
	    Top_s,
	    Top_b,
	    Index_iphone,
	    Public_good
  }
}
</script>
