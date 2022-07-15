<script>

export default {
    props: ['ref'],
    name: 'NaviButton'
}

</script>

<template>

<!-- Jump Up Chevron Single -->
<svg 
    v-if="ref === 'top'"
    xmlns="http://www.w3.org/2000/svg" 
    class="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    stroke-width="2">
    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M5 15l7-7 7 7" 
    />
</svg>

<!-- Downward Chevron -->
<svg 
    v-if="ref === 'down'"
    xmlns="http://www.w3.org/2000/svg" 
    class="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    stroke-width="2">
    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7" 
    />
</svg>

<!-- Left Chevron -->
<svg 
    v-if="ref === 'left'"
    xmlns="http://www.w3.org/2000/svg" 
    class="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    stroke-width="2">
    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7" 
    />
</svg>

<!-- Right Chevron -->
<svg 
    v-if="ref === 'right'"
    xmlns="http://www.w3.org/2000/svg" 
    class="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    stroke-width="2">
    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M13 5l7 7-7 7M5 5l7 7-7 7" 
    />
</svg>



</template>