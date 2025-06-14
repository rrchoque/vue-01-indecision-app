<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox @send-message="onNewMessage($event)" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola, ¿cómo estás?',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Bien, ¿y tú?',
    itsMine: false,
  },
  {
    id: new Date().getTime() + 2,
    message: '¿Qué planes tienes para hoy?',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 3,
    message: 'Nada especial, solo descansar.',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif',
  },
])

const onNewMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    message: text,
    itsMine: true,
  })
}
</script>
