<template>
    <div>
        <h2 v-font v-colored:color="'green'" v-if="is">{{msg}}</h2>
        <h2 v-colored:color="'red'" v-if="is">{{msg}}</h2>
        <h2 v-colored:color.font="'red'" v-if="is">{{msg}}</h2>

        <button @click="is = !is">unbind</button>
        <button @click="msg = 'hello'">update componentUpdated</button>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            is: true,
            msg: 'Welcome to Your Vue.js App'
        }
    },
    directives: {
        font: {
            bind: function (el, bindings, vnode) {

                el.style.fontSize = '20px'

                console.log('bind')
            }
        }
    }
}
</script>

<style lang="scss">

</style>
