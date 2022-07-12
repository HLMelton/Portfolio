<script setup>
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import SVGTrans from './components/SVGTrans.vue'
import SVGTransII from './components/SVGTransII.vue'
import Transition from '/src/assets/Transition.vue'

</script>

<template>
    <Home />
    <SVGTrans />
    <!-- Transition Component not working yet -->
    <Transition name='Upper' />
    <Skills />
    <SVGTransII />
</template>

<style>

</style>
