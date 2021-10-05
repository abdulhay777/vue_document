<template>
    <div>
        <h2>Counter {{ counter }}</h2>
    </div>
</template>

<script>

    import {eventEmitter} from './main'

    export default {
        data: () => ({
            counter: 0
        }),
        created() {
            eventEmitter.$on('updateCounter', () => {
                this.counter += 1
            })
        },
    }
</script>