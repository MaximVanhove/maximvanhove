<template>
    <section class="landing">
        <img src="@/assets/logo.svg" alt="logo" class="logo" />
    </section>
</template>

<script>
export default {
    name: 'landing',
}
</script>

<style lang="scss">
    @import '../scss/abstracts/variables';

    section.landing {
        background: $primary;
        min-height: 100vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            width: 400px;
            max-width: 90%;
        }
    }
</style>
