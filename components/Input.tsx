import React from 'react'
import Image from 'next/image'

const Input = () => {
  return (
    <div className='px-7 py-6 flex gap-6 absolute w-full bottom-0'>
      <input
        placeholder='Ask me anything...'
        className='bg-input rounded-xl px-3 py-5 text-sm grow'
      />
      <button>
        <Image src='/send.svg' width={24} height={24} alt='send'></Image>
      </button>
    </div>
  )
}

export default Input
