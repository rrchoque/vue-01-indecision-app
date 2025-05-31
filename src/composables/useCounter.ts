import { computed, ref } from 'vue'

//const counter = ref(10)

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue)

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
    squareCounter,
    increment,
    decrement,
  }
}
