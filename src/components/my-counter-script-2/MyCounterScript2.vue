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

<script lang="ts" src="./MyCounterScript2.ts"></script>
