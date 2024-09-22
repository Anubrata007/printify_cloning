import React from 'react';
import Bank from '../assets/bank.svg';
import Rocket from '../assets/rocket.svg';
import mobile from '../assets/phone.svg';

const Card = () => {
    return (
        <div className='bg-gray-50'>
            <div className='container mx-auto py-14'>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8'>

                    <div className='bg-white shadow-lg hover:shadow-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-6'>
                        <img src={Bank} alt='Bank' className='w-20 h-20 rounded-full object-contain p-3 bg-slate-200' />
                        <p className='text-xl font-semibold'>Higher Profits</p>
                        <p className='text-sm text-black/80'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
                    </div>

                    <div className='bg-white shadow-md hover:shadow-lg px-5 py-10 text-center flex flex-col justify-center items-center gap-6'>
                        <img src={Rocket} alt='Scaling' className='w-20 h-20 rounded-full object-contain p-3 bg-slate-200' />
                        <p className='text-xl font-semibold'>Robust Scaling</p>
                        <p className='text-sm text-black/80'>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
                    </div>

                    <div className='bg-white shadow-md hover:shadow-lg px-5 py-10 text-center flex flex-col justify-center items-center gap-6'>
                        <img src={mobile} alt='mobile' className='w-20 h-20 rounded-full object-contain p-3 bg-slate-200' />
                        <p className='text-xl font-semibold'>Best Selection</p>
                        <p className='text-sm text-black/80'>With 900+ products and top quality brands, you can choose the best products for your business.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card