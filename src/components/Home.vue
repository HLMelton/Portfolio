<script>

import Keystone from "/src/assets/Keystone.vue"

export default {
  name:"Home",
  components: { Keystone }, 
}

</script>

<template>
    <div className="flex flex-row w-full absolute z-64 p-16">
        <div className="flex flex-col">
            <h1 className=" text-white font-mono text-xl"> Hunter L Melton </h1>
        <p className="text-white">I'm an Independent Developer </p>
        </div>
        <!-- Time for ThreeJS integration -->
        <Keystone />
    </div>
</template>


