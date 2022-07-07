<script>
// Eventually I want to make it such that this is able to take a prop input to point at 
// which SVG to access then assign the svg accordingly so I can reuse this or eliminate this. We'll get there
</script>

<template>
<!-- Boy did I learn how aspect ratio and SVG scaling works with this page.  -->
    <div className="w -full">
        <svg id="visual" 
            viewBox="0 0 960 340" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            version="1.1" >
            <rect
            x="0" 
            y="0" 
            width="960" 
            height="340" 
            fill="#090909"></rect>

        <!-- Let the Mountains begin! -->
        <path
            d="M0 213L137 224L274 245L411 241L549 218L686 198L823 219L960 239L960 341L823 341L686 341L549 341L411 341L274 341L137 341L0 341Z"
            fill="#f5730a"></path>
        <path
            d="M0 241L137 260L274 233L411 244L549 231L686 269L823 232L960 235L960 341L823 341L686 341L549 341L411 341L274 341L137 341L0 341Z"
            fill="#cd5610"></path>
        <path
            d="M0 247L137 261L274 283L411 260L549 282L686 250L823 284L960 281L960 341L823 341L686 341L549 341L411 341L274 341L137 341L0 341Z"
            fill="#a53b10"></path>
        <path
            d="M0 278L137 302L274 275L411 288L549 297L686 306L823 306L960 306L960 341L823 341L686 341L549 341L411 341L274 341L137 341L0 341Z"
            fill="#7d230c"></path>
        <path
            d="M0 318L137 314L274 309L411 318L549 306L686 302L823 318L960 305L960 341L823 341L686 341L549 341L411 341L274 341L137 341L0 341Z"
            fill="#560d00"></path></svg>
    </div>

</template>