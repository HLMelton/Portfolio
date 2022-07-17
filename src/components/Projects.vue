<script>

import ProjectCard from "/src/assets/ProjectCard.vue"
import NaviButton from "/src/assets/NaviButton.vue"

export default {
  name:"Project",
  components: { ProjectCard, NaviButton }, 
}

</script>

<!-- Project Showcase utilizing child component ProjectCard to allow for expandability & design flow -->

<template>

<div className="w-full bg-grey-600">
  <!-- Div below is used for navigation interactability. -->
  <div className="flex flex-row">
    <ProjectCard refId="MonkeSend" status="ip" />
  </div>

</div>


</template>