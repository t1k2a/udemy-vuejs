<template>
    <div>
        <p v-border:solid.shadow="{width: '6px', color: 'brown'}">Home</p>
        <h2>{{ title | lowerCase | upperCase }}</h2>
        <h2>{{ subTitle | upperCase | lowerCase }}</h2>
        <p>{{ number }}</p>
        <button @click="number++">+1</button>
        <count-number></count-number>
    </div>
</template>

<script>
import CountNumber from './CountNumber.vue'
import { tokyoNumber } from '@/tokyoNumber';
export default {
    mixins: [tokyoNumber],
    data() {
        return {
            tmpData: "hello",
        };
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        }
    },
    directives : {
        border(el, binding) {
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            el.style.borderStyle = binding.arg;
            if (binding.modifiers.shadow) {
                el.style.boxShadow = "0 2px 5px"
            }
        }
    },
    components: {
        CountNumber
    }
}
</script>