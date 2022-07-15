<script>

export default {
  name:"Projects",
  components: { ProjectCard }, 
}

import ProjectCard from "/src/assets/ProjectCard.vue"

</script>

<!-- Project Showcase utilizing child component ProjectCard to allow for expandability & design flow -->

<template>

<div className="flex flex-row">
  <ProjectCard refId="MonkeSend" status="False" />


</div>


</template>