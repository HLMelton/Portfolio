<script>

export default {
  name:"Skills",
  components: { SkillIcon }
}

import SkillIcon from "/src/assets/SkillIcon.vue"


</script>
<template>
  <div className="bg-[#560d00]">
    <p className="text-center text-white font-mono p-10 text-xl">My Toolbox</p>
    <div className="grid grid-cols-4 grid-flow-row gap-3 text-white">
      <SkillIcon name='Vue' />
      <SkillIcon name='Vite' />
      <SkillIcon name='Git' />
      <SkillIcon name='Github' />
      <SkillIcon name='VSCode' />
      <SkillIcon name='Tailwind' />
      <SkillIcon name='Javascript' />
      <SkillIcon name='Firebase' />
    </div>
  </div>
</template>
