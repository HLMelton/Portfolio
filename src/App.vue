<script setup>

import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import SecTransition from '/src/assets/SecTransition.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'
import Navigation from './components/Navigation.vue'
// import TroisBG from './components/TroisBG.vue'


</script>

<template>
    <div className="bg-black">
        
        <Navigation />
        <Home />
        <SecTransition name='Upper' />
        <Skills />
        <SecTransition name='Lower' />
        <!-- Add a element that is contained between these two divs that give control to the BG-->
        <SecTransition name='UpperII' />
        <Projects />
        <SecTransition name="LowerII" />
        <Contact />
    </div>
</template>