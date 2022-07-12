<script>

export default {
  name:"Skills",
  components: { SkillIcon }
}

import SkillIcon from "/src/assets/SkillIcon.vue"


</script>
<template>
  <div className="bg-[#560d00]">
<<<<<<< HEAD
    <h1 className="text-center text-white font-mono">My Toolbox</h1>
    <div className="grid grid-cols-4 grid-flow-row gap-6 text-white">

<!-- I did it, I fucking did it. Now to handle the scaline issue  -->
=======
    <p className="text-center text-white font-mono p-10 text-xl">My Toolbox</p>
    <div className="grid grid-cols-4 grid-flow-row gap-3 text-white">
>>>>>>> c76efe15fc9aa4598515e5ad541095f4c79b13e6
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
