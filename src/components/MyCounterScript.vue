<template>
  <h2>{{ title }}</h2>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const counter = ref(props.value || 0)

    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }
    const squareCounter = computed(() => {
      return counter.value * counter.value
    })
    return {
      counter,
      increment,
      decrement,
      squareCounter,
    }
  },
})
</script>
