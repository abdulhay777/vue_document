<template>
    <div>
        <h3>{{ carName }}</h3>
        <p>{{ carDesc }}</p>
        <span>{{ carYear }}</span>
        <button @click="change">Change name</button>
        <hr>
    </div>
</template>

<script>
    export default {
        // props: ['carName', 'carDesc'],
        props: {
            carName: {
                type: String,
                required: true
            },
            carDesc: String,
            carYear: {
                type: Number,
                default: 0
            }
        },
        methods: {
            change: function () {
                this.carName = 'Mazda'
                this.$emit('nameChange', this.carName)
            }
        },
    }
</script>

<style lang="scss">
    p{
        color: red;
    }
</style>