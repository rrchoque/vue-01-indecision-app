import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'

export const useChat = () => {
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

  return {
    // Properties
    messages,
    // Methods
    onNewMessage,
  }
}
