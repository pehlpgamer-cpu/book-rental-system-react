import React from 'react'
import { Link } from '@inertiajs/react';


interface sideNavBarBtnProps{
    btnName: string;
    link: string;
    isVisible: boolean;
    highlighted: boolean;
    isCollapsed: boolean;
    icon: any;
}

export default function sideNavBarButton({btnName, link, highlighted, isVisible, isCollapsed, icon} : sideNavBarBtnProps) {
  
  if (!isVisible) return null;

  if (highlighted) return (
    <Link href={link} className='hover:border-black hover:scale-105 text-white bg-black border flex items-center p-2 rounded-md gap-1 hover:rounded-2xl duration-100 ease-in-out'>
        {icon}
        {isCollapsed ? null : <label>{btnName}</label>}
    </Link>
  )

  return (
    <Link href={link} className='hover:border-black hover:bg-black hover:text-white hover:scale-105 flex items-center border p-2 rounded-md gap-1 hover:rounded-2xl duration-100 ease-in-out'>
        {icon}
        {isCollapsed ? null : <label>{btnName}</label>}
    </Link>
  )
}
