<script></script>
<!-- Fair warning! this file is a god forsaken mess and I still need to work on the logos and the formatting of each of them -->
<template>
  <div className="bg-[#560d00]">
    <h1 className="text-center text-white font-mono">My Toolbox</h1>
    <div className="grid grid-cols-4 grid-flow-row gap-3 text-white">
        <!-- Need to find a way to consistently scale the SVGs rather than set them as backgrounds to the elements within the grid.-->
      <div className="object-contain bg-[url('../src/assets/VueLogo.svg')] h-16 w-16"> </div>
      <div className="object-contain bg-[url('../src/assets/ViteLogo.svg')]"> </div>
      <div className="object-contain bg-[url('../src/assets/TailwindLogo.svg')]"> </div>
      <div className="object-contain bg-[url('../src/assets/GithubLogo.svg')]"> </div>
      <div className="object-contain bg-[url('../src/assets/VSCode.svg')]"> </div>
      <div className="object-contain bg-[url('../src/assets/GitLogo.svg')]"> </div>
      <div className="object-contain bg-[url('../src/assets/Firebase.svg')]"> </div>
      <div className="object-contain bg-[url('../src/assets/Javascript.svg')]"> </div>
    </div>
  </div>
</template>
