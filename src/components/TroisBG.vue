<script>
import { defineComponent, ref, onMounted } from 'vue';
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';



export default defineComponent({
    name: 'TroisBG',
    components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
    setup() {
        const renderer= ref(null)
        const torusknot =ref(null)
        
        onMounted(() => {
            renderer?.value?.onBeforeRender(() => {
                torusknot.value.mesh.rotation.x += 0.01;
            })
        })
        
        return { renderer, torusknot }
    }
});

// Boy im really feeling the limitations of this library, right from the get-go

</script>



<template>

  <Renderer resize="window" ref='renderer'>
    <Camera :position="{ z: 10 }" />
    <Scene background="#5d5d5d" >
      <PointLight color="#ffffff" :intensity="0.75" :position="{ y: 50, z: 50 }" />
      <TorusKnot ref="torusknot">
        <ToonMaterial color="#0017ff" />
      </TorusKnot>
    </Scene>
  </Renderer>

</template>