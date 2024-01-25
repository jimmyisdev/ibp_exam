import Image from 'next/image';
import { pcDataType } from '@/type/pcData'
import List from '../List/List';

function Card({ data }: { data: pcDataType }) {
    const { type = "", name = "", info = [], imgURL = '', discountInfo } = data;
    const { originalPrice = "", discountPrice = "", monthlyPrice = "", deliveryDate = "" } = discountInfo
    const deductedVal = Number(originalPrice) - Number(discountPrice);
    return (
        <div className='h-card w-card-mobile md:w-card shadow flex flex-col justify-between  mx-2'>
            <div className='p-4 '>
                <span className='text-customized-gray-2 border border-customized-gray-2 rounded-xl w-20 text-sm font-bold p-2'>{type}</span>
                <div className='mb-4'>
                    <div className='flex flex-col justify-center  items-center'>
                        <Image src={`/pc_img/${imgURL}.png.webp`} height={200} width={200} alt={name} />
                    </div>
                    <h1 className='font-bold text-xl'>{name}</h1>
                </div>
                {info.length && <List listData={info} />}
            </div>
            <div className='bg-customized-blue-2 relative p-2 md:p-8 '>
                <span className='bg-customized-red rounded-2xl p-2 text-white'>SAVE ${deductedVal}</span>
                <div className='mt-2'>
                    <span className='text-3xl font-bold mr-4'>${discountPrice}</span>
                    <span className='text-base line-through text-customized-gray-2'>${originalPrice}</span>
                </div>
                <div className='flex flex-row items-center'>
                    <p className='text-sm'>
                        Starting at
                        <span className='text-customized-blue-1'> ${monthlyPrice}/mo </span>
                        with
                    </p>
                    <Image src={`/icon-affirm.svg`} alt='Affirm' width={50} height={50} priority={false} />
                </div>
                <div className='flex flex-col mt-4'>
                    <span className='font-bold text-sm'>Free Shipping</span>
                    <span className='text-sm'>{type === "Prebuilt PC" ? "Delivery By " : "Estimate Ship By "}{deliveryDate}</span>
                </div>
                <button className='absolute right-2 bottom-6 px-1 py-1 text-base md:right-4 text-customized-red md:px-2 md:py-2 border-2 border-customized-red rounded-2xl hover:text-white hover:bg-customized-red'>{type === "Prebuilt PC" ? "Buy Now" : "Customize"}</button>
            </div>
        </div>
    )
}
export default Card