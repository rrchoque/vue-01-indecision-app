<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :its-mine="true" message="Hola Mundo" />

      <ChatBubble
        :its-mine="false"
        message="Sunt ex minim amet dolor officia irure."
        image="https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue'
</script>
