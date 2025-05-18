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
