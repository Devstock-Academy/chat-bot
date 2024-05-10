'use client'

import { useChat } from 'ai/react'

import Header from '@/components/Header'
import ChatMessage from '@/components/ChatMessage'
import Input from '@/components/Input'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <main>
      <Header />
      <div className='h-chat overflow-auto'>
        {messages.map(({ role, content }) => (
          <ChatMessage role={role}>{content}</ChatMessage>
        ))}
      </div>
      <Input
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}
