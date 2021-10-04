<template>
    <div>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
                title: 'Welcome to Your Vue.js App'
            }
        }
    }

</script>

<style lang="scss">

    div {
        h2{
            color: red
        }
    }

</style>
