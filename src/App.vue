<template>
  <h1>Mi primera app</h1>
  <hr />
  <MyCounter :value="5" title="Mi contador" />
  <MyCounterScript :value="10" title="Mi contador" />
  <MyCounterScript2 :value="15" title="Mi contador" />
</template>

<script setup lang="ts">
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/my-counter-script-2/MyCounterScript2.vue'
</script>
