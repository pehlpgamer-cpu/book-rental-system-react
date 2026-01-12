import {useRef, useState} from 'react'
import '../../css/sideNavBar.css'
import { Link, router } from '@inertiajs/react';

// ICONS
import { 
    PanelLeftClose,
    PanelLeftOpen,
    LayoutDashboard, 
    Library,
    CircleUserRound,
    LogOut
} from 'lucide-react';







// COMPONENTS
import SideNavBarButton from './sideNavBarButton';


interface SideNavBarProps {
    highlightBtn: string;
}

export default function SideNavBar({ highlightBtn }: SideNavBarProps) {

    const [sideBarCollapsed, setSideBarCollapsed] = useState<boolean>(false);

    const dashboard_isHighlighted = useRef<boolean>(false);
    const manageLibrary_isHighlighted = useRef<boolean>(false);
    const account_isHighlighted = useRef<boolean>(false);
    
    function collapseSideBar()
    {
        if (sideBarCollapsed) setSideBarCollapsed(false);
        else setSideBarCollapsed(true);
    }
    
    if (highlightBtn == 'dashboard') dashboard_isHighlighted.current = true;
    else if (highlightBtn == 'manageLibrary') manageLibrary_isHighlighted.current = true;
    else if (highlightBtn == 'account') account_isHighlighted.current = true;
    else alert('invalid nav button highlight');


    return (
    <div className='flex flex-col gap-1'>
        <button onClick={collapseSideBar} className='flex items-center border-b p-2 hover:bg-black hover:text-white cursor-pointer'>
            {sideBarCollapsed ? <PanelLeftOpen className='justify-self-center text-2xl cursor-pointer' /> : <PanelLeftClose className='text-2xl cursor-pointer'/>}
            {sideBarCollapsed ? null : <label className='ml-1 cursor-pointer'>collapse</label>}
        </button>

        <section className='flex flex-col gap-1.5 p-2'>
            <SideNavBarButton btnName='Dashboard'
            icon={<LayoutDashboard className='text-2xl'/>}
            isVisible={true}
            highlighted={dashboard_isHighlighted.current}
            isCollapsed={sideBarCollapsed}
            link='/dashboard'
            />

            <SideNavBarButton btnName='Library'
            icon={<Library className='text-2xl'/>}
            isVisible={true}
            highlighted={manageLibrary_isHighlighted.current}
            isCollapsed={sideBarCollapsed}
            link='/manageLibrary'
            />

            <SideNavBarButton btnName='Account'
            icon={<CircleUserRound className='text-2xl'/>}
            isVisible={true}
            highlighted={account_isHighlighted.current}
            isCollapsed={sideBarCollapsed}
            link='/accountSettings'
            />

            <div className='grow'/>
            
            <Link className='flex gap-1 border p-1.5 rounded-md 
            hover:rounded-2xl hover:border-black hover:bg-black hover:text-white hover:scale-105  duration-200 ease-in-out' 
            href="/logout" method="post" as="button">
                <LogOut className='text-2xl'/>
                <label hidden={sideBarCollapsed}>Logout</label>
            </Link>
        </section>
    </div>
    )
}
