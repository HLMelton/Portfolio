<script>

import ProjectCard from "/src/assets/ProjectCard.vue"
import NaviButton from "/src/assets/NaviButton.vue"

export default {
  name:"Project",
  components: { ProjectCard, NaviButton }, 
}

//
// Side scrolling GSAP usage
//
// gsap.registerPlugin(ScrollTrigger);
//
// let sections = gsap.utils.toArray(".panel");
//
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// })
//


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