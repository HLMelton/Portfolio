<script>

import ProjectCard from "/src/assets/ProjectCard.vue"


export default {
  name:"Project",
  components: { ProjectCard }, 
  data () {
    return {
      index : 0,
      panes: [],
      paneDirection: '', 
    }
  },
  computed: {
    paneLength() {
      return this.panes.length
      // Uh..... yeah come back to this you trogg monkey 
    }
  },
  mounted() {
// Come back here too......
  },
  methods: {
    next (){
      this.index++
      if(this.index >= this.paneLength) {
        this.index = 0
      }
    },
    prev (){
      this.index--
      if(this.index < 0) {
        this.index = this.paneLength - 1
      }
    },
  },
}

</script>

<!-- Project Showcase utilizing child component ProjectCard to allow for expandability & design flow -->

<template>

  <button className="p-5 left-0 inline-block absolute h-12 w-16 text-gray-200 cursor-pointer" @click="$emit('prev')">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button className=" p-5 right-0 inline-block absolute h-12 w-16 text-gray-200 cursor-pointer" @click="$emit('next')">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  
  </button>

</template>