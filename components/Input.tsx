import React, { ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import { ChatRequestOptions } from 'ai'

interface ChatTextProps {
  input: string
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void
}

const Input: React.FC<ChatTextProps> = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='px-7 py-6 flex gap-6 absolute w-full bottom-0'>
        <input
          placeholder='Ask me anything...'
          className='bg-input rounded-xl px-3 py-5 text-sm grow'
          onChange={handleInputChange}
          value={input}
        />
        <button type='submit'>
          <Image src='/send.svg' width={24} height={24} alt='send'></Image>
        </button>
      </div>
    </form>
  )
}

export default Input
