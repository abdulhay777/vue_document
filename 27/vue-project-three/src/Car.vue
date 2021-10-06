<template>
    <div>
        <slot name="title"></slot>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    div {
        border: 1px solid #000;
        padding: 10px;
    }
</style>