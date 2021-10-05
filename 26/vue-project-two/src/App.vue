<template>
    <div id="app">
        <h1>First car: {{ lists[0].name }}</h1>
        <Counter></Counter>
        <Car v-for="(list, i) in lists" :key="i" :carName="list.name" :carDesc="list.desc" :carYear="list.year" @nameChange="list.name = $event"></Car>
    </div>
</template>

<script>

    import Car from './Car.vue'
    import Counter from './Counter.vue'

    export default {
        name: 'app',
        data: () => ({
            title: 'Car model',
            lists: [
                {name: 'Ford', desc: 'This is best car number 1', year: 2019},
                {name: 'BMW', desc: 'This is best car number 2', year: 2010},
                {name: '', desc: 'This is best car number 3'},
            ]
        }),
        components: {
            Car,
            Counter
        }
    }
</script>

<style lang="scss">

</style>
