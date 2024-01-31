import { menuData } from '@/mock/menuData'
import React from 'react'
import Menu_group from './Menu_group'

export default function Menu_sect() {
    return (
        <div className='flex flex-col w-full md:flex-row md:justify-around'>
            <Menu_group title="Shop" listData={menuData.shop} />
            <Menu_group title="Support" listData={menuData.support} />
            <Menu_group title="Company" listData={menuData.company} />
        </div>
    )
}
