import Image from 'next/image'
import SNS_sect from './SNS_sect/SNS_sect';
import Menu_sect from './Menu_sect/Menu_sect';
import About_sect from './About.sect/About_sect';

export default function Footer() {
    return (
        <div className='bg-customized-blue-2 p-8 '>
            <About_sect />
            <div className=' flex items-center md:items-start flex-col md:flex-row md:flex-wrap'>
                <Menu_sect />
                <div className='flex flex-col m-4 items-center'>
                    <SNS_sect />
                    <span className='text-center text-base mt-4'>Contact Us: 888-000-0000</span>
                    <span className='text-center  text-base  mt-4'>Get gaming news and IBP promotions and offers!</span>
                </div>
            </div>
        </div>

    )
}
