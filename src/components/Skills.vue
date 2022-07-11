<script>

export default {
  components: Icon
}

import Icon from "/src/assets/Icon.vue"


</script>
<!-- Fair warning! this file is a god forsaken mess and I still need to work on the logos and the formatting of each of them -->
<template>
  <div className="bg-[#560d00]">
    <h1 className="text-center text-white font-mono">My Toolbox</h1>
    <div className="grid grid-cols-4 grid-flow-row gap-3 text-white">
        <!-- Need to find a way to consistently scale the SVGs rather than set them as backgrounds to the elements within the grid.-->
      <Icon name='Vue' />



    </div>
  </div>
</template>
