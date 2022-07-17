<script>
// I honestly might ditch this approach in favor of a larger Bg that spans the whole page to create a parallax effect

import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';

export default {
  name: "Keystone",
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },

};


</script>



<template>

  <Renderer ref="renderer" resize="window">
    <Camera :position="{ z: 10 }" />
    <Scene background="#d5d5d5">
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>

</template>