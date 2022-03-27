<template>
    <div class="main">
        <button @click="MyAnimation = 'slide'">Slide</button>
        <button @click="MyAnimation = 'fade'">Fade</button>
        <p>{{ MyAnimation }}</p>
        <br>
        <button @click="add">追加</button>
        <ul style="width: 200px; margin: auto;">
            <transition-group name="fade" tag="div">
                 <li 
                    style="cursor: pointer;" 
                    v-for="(number, index) in numbers" :key="number"
                    @click="remove(index)">
                    {{ number }}
                </li>
            </transition-group>
           
        </ul>
        <button @click="show = !show">切り替え</button>
        <br><br>
        <transition :css="false" @before-enter="before-enter" @enter="enter" @after-enter="afterEnter" @enter-canceled="enterCancelled"
                    @before-leave="before-leave" @leave="leave" @after-leave="afterLeave" @leave-canceled="leaveCancelled">
            <div class="circle" v-if="show"></div>
        </transition>
        <br>
        <button @click="MyComponent = 'ComponentA'">ComponentA</button>
        <button @click="MyComponent = 'ComponentB'">ComponentB</button>
        <transition name="fade" mode="out-in">
            <component :is="MyComponent"></component>
        </transition>
        <transition name="fade" mode="out-in">
            <p v-if="show" key="bye">さよなら</p>
            <p v-if="!show" key="hello">こんにちは</p>
        </transition>
        <transition enter-class="" enter-active-class="animate__animated animate__bounce" enter-to-class="" leave-class="" leave-active-class="animate__animated animate__shake" leave-to-class="" appear>
            <p v-if="show">hello</p>
        </transition>
        <transition :name="MyAnimation" appear>
            <p v-if="show">bye</p>
        </transition>
    </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
export default{
    components: {
        ComponentA,
        ComponentB,
    },
    data() {
        return {
            numbers: [0,1,2],
            nextNumber: 3,
            show: true,
            MyAnimation: 'slide',
            MyComponent: 'ComponentA'
        };
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.numbers.length)
        },
        add() {
            this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
            this.nextNumber += 1;
        },
        remove(index) {
            this.numbers.splice(index, 1);
        },
        beforeEnter(el) {
            el.style.transform = "scale(0)";
        },
        enter(el, done) {
            let scale = 0;
            const interval = setInterval(() => {
                el.style.transform = `scale(${scale})`;
                scale += 0.1;
                if (scale > 1) {
                    clearInterval(interval);
                    done();
                }
            }, 30);
        },
        leave(el, done) {
            let scale = 1;
            const interval = setInterval(() => {
                el.style.transform = `scale(${scale})`;
                scale -= 0.1;
                if (scale < 0) {
                    clearInterval(interval);
                    done();
                }
            }, 30);
        },
    }
}
</script>

<style scoped>
.circle {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 100px;
    background-color: deeppink;
}

.fade-move {
    transition: transform 1s;
}
@keyframes fadein {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.fade-enter {
    /* 現れるときの最初の状態 */
    opacity: 0;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
}

.slide-leave-to {
    animation: slide-in 0.5s;
    transition: opacity 0.5s;
}

.slide-leave-active {
    animation: slide-in 0.5s reverse;
    transition: opacity 1s;
}

.fade-enter-active {
    /* 現れるときのトランジションの状態 */
    transition: opacity .5s;
    transition: opacity 1s;
}
.fade-enter-to {
    /* 現れるときの最後の状態 */
    opacity: 1;
}
.fade-leave {
    /* 消えるときの最初の状態 */
    opacity: 1;
}
.fade-leave-active {
    /* 消えるときのトランジションの状態 */
    transition: opacity .5s;
    position: absolute;
    width: 200px;
}
.fade-leave-to {
    /* 消えるときの最後の状態 */
    opacity: 0;
}

.slide-enter{

}

.slide-enter-acrive{
    animation: slide-in 0.5s;
}


.slide-leave-active{
    animation: slide-in 0.5s reverse;
}


@keyframes slide-in {
    from {
        transform: translateX(100px);
    }

    to {
        transform: translateX(0);
    }
}



.main {
    width: 70%;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
}
</style>