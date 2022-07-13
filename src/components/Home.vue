<script>

import Keystone from "/src/assets/Keystone.vue"

export default {
  name:"Home",
  components: { Keystone }, 
}

</script>

<!-- May need Router to traverse between pages rather than hosting 
everything as components on the main page. Not enough time in lunch 
to solve atm -->

<template>
    <div className="flex flex-row w-full absolute z-64 p-16">
        <div className="flex flex-col">
            <h1 className=" text-white font-FuturaM text-8xl"> Hunter </h1>
            <h1 className=" text-white font-FuturaM text-8xl"> Melton </h1>
            <p className="text-white text-3xl font-FuturaM"> Web Developer /</p>
            <p className="text-white text-3xl font-FuturaM"> Technology Consultant </p>
        </div>
        <Keystone />
        <!-- You should add a scroll indicator so users know to scroll down for information. -->
    </div>
</template>


