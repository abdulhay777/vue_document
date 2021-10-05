<template>
    <div>
        <h3>{{ carName }}</h3>
        <p>{{ carDesc }}</p>
        <span>{{ carYear }}</span>
        <button @click="change">Change name</button>
        <button @click="counterAdd">Add</button>
        <hr>
    </div>
</template>

<script>

    import {eventEmitter} from './main'

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
        data: () => ({
            name: this.carName
        }),
        methods: {
            change: function () {
                this.name = 'Mazda'
                this.$emit('nameChange', this.name)
            },
            counterAdd: function () {
                eventEmitter.$emit('updateCounter')
            }
        },
    }
</script>

<style lang="scss">
    p{
        color: red;
    }
</style>