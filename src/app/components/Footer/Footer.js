import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 py-10 lg:px-28 lg:py-20 gap-10'>
        <div className='lg:col-span-2 lg:px-10'>
            <div className='text-4xl font-extrabold flex flex-col items-center w-fit gap-1 mb-5'>
                <h2 className='text-[#153456] font-Teko'>About Us</h2>
                <div className='bg-[#f8ba4d] h-[2px] w-[60px]'></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, itaque nisi dolor quae, accusamus rem corrupti tempora quis eveniet iusto pariatur et labore fugit consectetur, eum obcaecati minima? Officiis, illum?</p>
            <div className='flex gap-3 mt-5'>
                <Link href={"#"}><img src="/images/facebook.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
                <Link href={"#"}><img src="/images/twitter.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
                <Link href={"#"}><img src="/images/instagram.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
                <Link href={"#"}><img src="/images/youtube.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
            </div>
        </div>

        <div className=''>
            <div className='text-4xl font-extrabold flex flex-col items-center w-fit gap-1 mb-5'>
                <h2 className='text-[#153456] font-Teko'>Legal</h2>
                <div className='bg-[#f8ba4d] h-[2px] w-[60px]'></div>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
                <Link href={"#"} className='flex items-center justify-start gap-3'>                    
                    <img src="/images/footer-arrow.png" alt="" className='h-[20px]' />
                    <span className='font-bold text-lg'>Privacy Policy</span>
                </Link>
                <Link href={"#"} className='flex items-center justify-start gap-3'>                    
                    <img src="/images/footer-arrow.png" alt="" className='h-[20px]' />
                    <span className='font-bold text-lg'>Terms of Services</span>
                </Link>
                <Link href={"#"} className='flex items-center justify-start gap-3'>                    
                    <img src="/images/footer-arrow.png" alt="" className='h-[20px]' />
                    <span className='font-bold text-lg'>CCPA</span>
                </Link>                
            </div>
        </div>

        <div className=''>
            <div className='text-4xl font-extrabold flex flex-col items-center w-fit gap-1 mb-5'>
                <h2 className='text-[#153456] font-Teko'>Contact Us</h2>
                <div className='bg-[#f8ba4d] h-[2px] w-[60px]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <span>+92 300 0000000</span>
                <span>admin@company.com</span>
                <span>ABC Street London</span>
            </div>
        </div>
    </div>
  )
}

export default Footer