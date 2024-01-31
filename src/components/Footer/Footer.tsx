import Image from 'next/image'
import SNS_sect from './SNS_sect/SNS_sect';
import Menu_sect from './Menu_sect/Menu_sect';
import About_sect from './About.sect/About_sect';

export default function Footer() {
    return (
        <div className='bg-customized-blue-2 p-8 '>
            <About_sect />
            <div className=' flex items-start flex-col md:flex-row'>
                <Menu_sect />
                <div className='flex flex-col m-4'>
                    <SNS_sect />
                    <span className=' text-base mt-4'>Contact Us: 888-000-0000</span>
                    <span className=' text-base  mt-4'>Get gaming news and iBUYPOWER promotions and offers!</span>
                    <div className='flex flex-row  mt-4 items-center'>
                        <span className='font-bold text-base mr-2'>Family Brand</span>
                        <a href="https://hyte.com/">
                            <Image src={`/icon-hyte.svg`} alt='Hyte icon' width={50} height={50} priority={false} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
