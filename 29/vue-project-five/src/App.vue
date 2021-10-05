<template>
    <div id="app">
        <h2>{{ msg }}</h2>
        <h2>{{ msg | lowercase }}</h2>
        <h2>{{ msg | uppercase }}</h2>

        <input type="text" v-model="searchName">

        <ul>
            <li v-for="(list, i) in filterList" :key="i">{{ list }}</li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            lists: ['Hello', 'Good'],
            searchName: ''
        }
    },
    computed: {
        filterList() {
            return this.lists.filter(list => {
                return list.toLowerCase().indexOf(this.searchName) !== -1
            })
        }
    },
    filters: {
        lowercase(value) {
            return value.toLowerCase()
        }
    }
}
</script>

<style lang="scss">

</style>