<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      /> -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBubble from './ChatBubble.vue'
import { ref, watch } from 'vue'

interface Props {
  messages: ChatMessage[]
}

const props = defineProps<Props>()
//const { messages } = toRefs(props)

const chatRef = ref<HTMLDivElement | null>(null)

// watch(messages, () => {
//   console.log('Messages updated:')
//   if (chatRef.value) {
//     chatRef.value.scrollTop = chatRef.value.scrollHeight
//   }
// })

watch(
  () => {
    console.log('Getter ejecutado')
    return props.messages
  },
  () => {
    setTimeout(() => {
      chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
      })
    }, 100)
    console.log('Messages updated:', props.messages)
  },
)
</script>
