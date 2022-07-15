<script>

export default {
    props: ['name'],
    name: "SecTransition"
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

<svg 
    v-else-if="name === 'UpperII'"
    className="w-full relative"
    id="visual" 
    viewBox="0 0 960 320" 
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    version="1.1">
        <!-- <path d="M0 65L87 49L175 55L262 49L349 43L436 62L524 49L611 55L698 43L785 23L873 23L960 55L960 0L873 0L785 0L698 0L611 0L524 0L436 0L349 0L262 0L175 0L87 0L0 0Z" fill="#000000"></path> -->
        <path d="M0 103L87 68L175 81L262 75L349 97L436 84L524 87L611 110L698 68L785 71L873 65L960 91L960 53L873 21L785 21L698 41L611 53L524 47L436 60L349 41L262 47L175 53L87 47L0 63Z" fill="#1b1b1b"></path>
        <path d="M0 161L87 145L175 151L262 103L349 135L436 145L524 161L611 167L698 123L785 116L873 107L960 155L960 89L873 63L785 69L698 66L611 108L524 85L436 82L349 95L262 73L175 79L87 66L0 101Z" fill="#303030"></path>
        <path d="M0 235L87 199L175 257L262 219L349 238L436 254L524 222L611 263L698 238L785 238L873 257L960 244L960 153L873 105L785 114L698 121L611 165L524 159L436 143L349 133L262 101L175 149L87 143L0 159Z" fill="#464646"></path>
        <path d="M0 321L87 321L175 321L262 321L349 321L436 321L524 321L611 321L698 321L785 321L873 321L960 321L960 242L873 255L785 236L698 236L611 261L524 220L436 252L349 236L262 217L175 255L87 197L0 233Z" fill="#5d5d5d"></path>
</svg>

<svg 
    v-else-if="name === 'LowerII'"
    id="visual" 
    viewBox="0 0 960 320" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    version="1.1">
        <rect 
            x="0" 
            y="0" 
            width="960" 
            height="320" 
            fill="#000000">
        </rect>
        <path 
            d="M0 88L22.8 81.7C45.7 75.3 91.3 62.7 137 58.8C182.7 55 228.3 60 274 65.7C319.7 71.3 365.3 77.7 411.2 77.8C457 78 503 72 548.8 70.7C594.7 69.3 640.3 72.7 686 69.8C731.7 67 777.3 58 823 54C868.7 50 914.3 51 937.2 51.5L960 52L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z" 
            fill="#5d5d5d" 
            stroke-linecap="round" 
            stroke-linejoin="miter">
        </path>
</svg>

</template>