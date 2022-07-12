<script>

export default {
    props: ['name'],
    name: 'Transition'
}

</script>

<template>

<svg 
    v-if="name === 'Upper'"
    className="w-full relative"
    id="visual" 
    viewBox="0 0 960 540" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    version="1.1">
    <rect 
        x="0" 
        y="0" 
        width="960" 
        height="540" 
        fill="#090909">
    </rect>
    <path 
        d="M0 336L137 358L274 395L411 398L549 385L686 323L823 374L960 338L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z" 
        fill="#f7ff00">
    </path>
    <path 
        d="M0 360L137 373L274 386L411 360L549 430L686 356L823 371L960 364L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z" 
        fill="#e6b800">
    </path>
    <path 
        d="M0 418L137 423L274 423L411 438L549 416L686 423L823 419L960 451L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z" 
        fill="#c17700">
    </path>
    <path 
        d="M0 488L137 470L274 463L411 487L549 472L686 481L823 483L960 449L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z" 
        fill="#8f3f09">
    </path>
    <path 
        d="M0 480L137 503L274 512L411 481L549 491L686 477L823 477L960 508L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z" 
        fill="#560d00">
    </path>
</svg>

<svg 
    v-else-if="name === 'Lower'"
    className="w-full relative"
    id="visual" 
    viewBox="0 0 960 320" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    version="1.1">
    <rect 
        x="0" 
        y="0" 
        width="960" 
        height="320" 
        fill="#090909">
    </rect>
    <path 
        d="M0 88L137 114L274 121L411 112L549 89L686 99L823 100L960 113L960 0L823 0L686 0L549 0L411 0L274 0L137 0L0 0Z" 
        fill="#0017ff">
    </path>
    <path 
        d="M0 92L137 106L274 106L411 84L549 69L686 63L823 65L960 91L960 0L823 0L686 0L549 0L411 0L274 0L137 0L0 0Z" 
        fill="#a70095">
    </path>
    <path 
        d="M0 63L137 48L274 52L411 74L549 60L686 46L823 81L960 77L960 0L823 0L686 0L549 0L411 0L274 0L137 0L0 0Z" 
        fill="#9d0050">
    </path>
    <path 
        d="M0 36L137 50L274 39L411 30L549 42L686 43L823 50L960 42L960 0L823 0L686 0L549 0L411 0L274 0L137 0L0 0Z" 
        fill="#7c0425">
    </path>
    <path 
        d="M0 38L137 27L274 34L411 17L549 39L686 24L823 33L960 15L960 0L823 0L686 0L549 0L411 0L274 0L137 0L0 0Z" 
        fill="#560d00">
    </path>
</svg>

</template>