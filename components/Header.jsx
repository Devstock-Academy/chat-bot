import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full px-6 pt-12 pb-5 relative'>
      <Image
        src='/devstock-logo.png'
        alt='devstock-logo'
        width={160}
        height={40}
      />
      <span className='font-semibold mx-auto'>New chat</span>
    </div>
  )
}

export default Header
