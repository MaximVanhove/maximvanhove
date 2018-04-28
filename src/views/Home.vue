<template>
    <div class="view view-home">
        <landing />
        <about />
    </div>
</template>

<script>
import Landing from '@/components/Landing.vue'
import About from '@/components/About.vue'

export default {
    name: 'home',

    components: {
        Landing,
        About,
    },
}
</script>
