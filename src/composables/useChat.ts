import { sleep } from '@/helpers/sleep'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no-response.interface'
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

  const getResponse = async () => {
    // llamar a api https://yesno.wtf/api
    try {
      const response = await fetch('https://yesno.wtf/api')
      const data = (await response.json()) as YesNoResponse
      return data
    } catch (error) {
      console.error('Error fetching response:', error)
      return 'No pude obtener una respuesta.'
    }
  }

  const onNewMessage = async (text: string) => {
    if (!text.trim()) return

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    })

    // Evaluar si termina en una pregunta
    const isQuestion = text.trim().endsWith('?')

    if (isQuestion) {
      await sleep(1.5) // Simular un retraso de 1.5 segundos
      const response = await getResponse()
      if (typeof response === 'string') {
        messages.value.push({
          id: new Date().getTime() + 1,
          message: response,
          itsMine: false,
        })
      } else {
        const { answer, image } = response
        messages.value.push({
          id: new Date().getTime() + 1,
          message: answer,
          itsMine: false,
          image: image || undefined, // Si no hay imagen, no incluirla
        })
      }
    } else {
      return // Si no es una pregunta, no hacer nada
    }
  }

  return {
    // Properties
    messages,
    // Methods
    onNewMessage,
  }
}
