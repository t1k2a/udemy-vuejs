<template>
    <p v-border:solid.shadow="{width: '6px', color: 'brown'}">Home</p>
</template>

<script>
export default {
    directives : {
        border(el, binding) {
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            el.style.borderStyle = binding.arg;
            if (binding.modifiers.shadow) {
                el.style.boxShadow = "0 2px 5px"
            }
        }
    }
}
</script>