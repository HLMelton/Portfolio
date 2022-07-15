<script setup>

import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import SecTransition from '/src/assets/SecTransition.vue'
import Contact from './components/Contact.vue'


</script>

<template>

    <Home />
    <SecTransition name='Upper' />
    <Skills />
    <SecTransition name='Lower' />
    <SecTransition name='UpperII' />
    <SecTransition name="LowerII" />
    <Contact />

</template>