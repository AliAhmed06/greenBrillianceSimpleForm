import React from 'react'

const Header = () => {
  return (
    <div className='bg-white flex flex-col md:flex-row items-center justify-between py-5 px-5 lg:px-20'>
        <a href="/"><img src="/images/logo.png" alt="" className='w-[250px]  object-contain' /></a>
        <img src="/images/trusted-form.png" alt="" className='w-[250px] object-contain' />
    </div>
  )
}

export default Header