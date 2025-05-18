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

<script setup lang="ts">
import { ref, computed } from 'vue'

// Forma 1
// const props = defineProps({
//   value: {
//     type: Number,
//     required: true,
//   },
// })

// Forma 2
//const props = defineProps<{ value: number }>()

interface Props {
  value?: number
  title?: string
}
const props = defineProps<Props>()

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
</script>

<style scoped>
@reference "@/styles.css";

h2 {
  @apply text-2xl font-bold text-gray-800 mb-4;
}
h3 {
  @apply text-xl font-semibold text-gray-700 mb-2;
}
section {
  @apply bg-white p-4 rounded shadow-md;
}
button {
  @apply text-white font-bold py-2 px-4 rounded;
}
</style>
