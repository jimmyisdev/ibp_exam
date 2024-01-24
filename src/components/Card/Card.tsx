import Image from 'next/image';
import { pcDataType } from '@/type/pcData'
import List from '../List/List';

function Card({ data }: { data: pcDataType }) {
    const { type = "", name = "", info = [], imgURL = '', discountInfo } = data;
    const { originalPrice = "", discountPrice = "", monthlyPrice = "", deliveryDate = "" } = discountInfo
    const deductedVal = Number(originalPrice) - Number(discountPrice);
    return (
        <div className='h-card w-card shadow-md flex flex-col justify-between'>
            <div className='p-4 '>
                <span className='text-customized-gray-2 border border-customized-gray-2 rounded-xl w-20 text-sm font-bold p-2'>{type}</span>
                <div >
                    <div className='flex flex-col justify-center  items-center'>
                        <Image src={`/pc_img/${imgURL}.png.webp`} height={200} width={200} alt={name} />
                    </div>
                    <h1 className='font-bold text-3xl'>{name}</h1>
                </div>
                {info.length && <List listData={info} />}
            </div>
            <div className='bg-customized-blue-2 relative p-4 '>
                <span className='bg-customized-red rounded-2xl p-2 text-white'>SAVE ${deductedVal}</span>
                <div className='mt-2'>
                    <span className='text-headerSub font-bold mr-2 '>${discountPrice}</span>
                    <span className='text-customized-gray line-through'>${originalPrice}</span>
                </div>
                <div className='flex flex-row items-center'>
                    <p>
                        Starting at
                        <span className='text-customized-blue-1'> ${monthlyPrice}/mo </span>
                        with
                    </p>
                    <Image src={`/icon-affirm.svg`} alt='Affirm' width={50} height={50} priority={false} />
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold'>Free Shipping</span>
                    <span>{type === "Prebuilt PC" ? "Delivery By " : "Estimate Ship By "}{deliveryDate}</span>
                </div>
                <button className='absolute right-2 bottom-2 text-customized-red px-2 py-3 border-2 border-customized-red rounded-2xl hover:text-white hover:bg-customized-red'>{type === "Prebuilt PC" ? "Buy Now" : "Customize"}</button>
            </div>
        </div>
    )
}
export default Card