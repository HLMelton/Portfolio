<script>

// Issues: They'll have to load every component..... But havent figured out how to do it any other method yet other than island saturation but this isnt Deno
// FRR 


export default {
    name: "ProjectCard",
    props: ['refId', 'status'],
    data() {
        return {
            index : 0,
        }
    },
    computed: {
        visible() {
            return this.index === this.$parent.index
        },
        // yeah? sure? yes....
        dir() {
            console.log(this.$parent.paneDirection)
            return this.$parent.paneDirection
        }
    }
}

</script>



<template>
<!-- Remember to change Bg to d5d5d5 once construction is over -->
<div className="bg-[#d5d5d5]">

</div>
</template>