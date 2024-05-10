import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface ChatTextProps {
  children: React.ReactNode
  role: string
}

const ChatMessage: React.FC<ChatTextProps> = ({ children, role }) => {
  return (
    <div
      className={clsx('py-6 px-7 flex items-center gap-5 text-sm', {
        'bg-darkMessage text-white': role === 'user',
        'bg-lightMessage': role === 'assistant',
      })}
    >
      <Image
        width={40}
        height={40}
        src={role === 'user' ? '/Avatar.webp' : '/bot.png'}
        alt='avatar'
        className='rounded-full'
      />
      <p>{children}</p>
    </div>
  )
}

export default ChatMessage
