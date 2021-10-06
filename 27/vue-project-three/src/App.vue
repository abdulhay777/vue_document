<template>
    <div>
        <Car>
            <h2 slot="title">Car</h2>
            <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eum?</p>
        </Car>
        <Counter>
            <h2>Counter</h2>
        </Counter>
    </div>
</template>

<script>

import Car from './Car'
import Counter from './Counter'


export default {
    components: {
        Car,
        Counter
    }
}
</script>

<style lang="scss" scoped>
    h2 {
        font-size: 20px;
    }
</style>
