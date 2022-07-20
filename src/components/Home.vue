<script>

export default {
  name:"Home", 
}

</script>

<!-- May need Router to traverse between pages rather than hosting 
everything as components on the main page. Not enough time in lunch 
to solve atm -->

<template>
    <div className="flex flex-row w-full absolute z-64 p-16">
        <div className="flex flex-col text-white">
        <!-- Dont forget to change the text color to white when adding the 3D library -->

        <!-- Also find a way to change it such that the hero text scales with the size of the div -->
            <h1 className="font-FuturaM text-8xl"> Hunter </h1>
            <h1 className="font-FuturaM text-8xl"> Melton </h1>
            <p className="text-3xl font-FuturaM"> Web Developer /</p>
            <p className="text-3xl font-FuturaM"> Technology Consultant </p>
        </div>
        <!-- You should add a scroll indicator so users know to scroll down for information. -->
    </div>
</template>


