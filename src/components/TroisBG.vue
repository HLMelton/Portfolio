<script>
import { defineComponent, ref, onMounted } from 'vue';
import { MeshStandardMaterial, SphereGeometry, Mesh, MathUtils } from 'three';
import * as THREE from 'three';

export default defineComponent({
    name: 'TroisBG',
    components: { MeshStandardMaterial, SphereGeometry, Mesh, MathUtils, * },
    data() {
      return {

        renderer: null,
        scene: null,
        camera: null,
      }
    },
    methods: {
      init: function() {
        this.scene = new.THREE.Scene()
        this.camera = new.THREE.PerspectiveCamera(
          75,
          window.innerWidth/ window.innerHeight,
          0.1,
          1000
        )

        this.renderer = new.THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        const geometry = new.THREE.BoxGeometry(1,1,1)




      },
      animate: function() {

      }
    },
    onMounted(){
      this.init()
      this.animate()
    }




    // setup() {

    //   // Array(200).fill().forEach(addStar);

    //   //--Torus Knot Geometry Render--
    //   // const renderer= ref(null)
    //   // const torusknot =ref(null)
      
    //   // onMounted(() => {
    //   //     renderer?.value?.onBeforeRender(() => {
    //   //         torusknot.value.mesh.rotation.x += 0.01;
    //   //     })
    //   // })
      
    //   // return { renderer, torusknot }

    // }
    
});





</script>

Man fuck this, I'm making an API that does this for me or something


<template>
  <div className="w-full"> </div>
</template>