export default {
    bind: function (el, bindings, vnode) {

        // v-colored
        // el.style.color = 'red'

        // v-colored="'red'"
        // el.style.color = bindings.value
        
        // v-colored.color="'red'"
        el.style[bindings.arg] = bindings.value

        // v-colored.color.font="'red'"
        if(bindings.modifiers['font']){
            el.style.fontSize = '30px'
        }

        console.log('bind')
    },

    inserted: function (el, bindings, vnode) {
        console.log('in')
    },

    update: function (el, bindings, vnode, oldVnode) {
        console.log('up')
    },

    componentUpdated: function (el, bindings, vnode, oldVnode) {
        console.log('com-up')
    },

    unbind: function (el, bindings, vnode) {
        console.log('unbind')
    }
}