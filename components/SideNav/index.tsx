import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdOutlineDashboardCustomize, MdLogout, MdOutlineFeedback } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri'
import { GiCrownedSkull } from 'react-icons/gi'
import { AiTwotoneGold } from 'react-icons/ai'
import Logo from "@/assets/logo-tp.png"
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"


const SideNav = ({ }) => {
    const pathname = usePathname();
    // console.log({pathname})

  return (
    <div className='hidden sm:flex flex-col justify-between grad-to-bottom text-white h-screen min-w-[240px] w-60 pb-4 overflow-hidden'>
        <div>
            <div className='w-full flex flex-col items-center text-center gap-5 py-8 border-b border-white/10'>
                <Link href={"/"}>
                    <Image src={Logo} className='w-12 h-12 md:h-12 bg-white' alt='' />
                </Link>
                <div className="flex items-center text-xs gap-2">
                    {/* <span className='w-6 h-6 bg-white/30' /> */}
                    <div className="flex flex-col">
                        <span className='font-bold text-sm'>Administrator</span>
                        <span className='text-white/80 text-[10px] font-bold'>admin@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 pt-4 text-white/70'>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${(pathname === '/admin') && 'text-white'}`} href="/admin">
                    {/* <span className='w-4 h-4 bg-white flex justify-center items-center rounded border'>
                        <MdTrendingUp color='#000000' size={"0.6rem"} />
                    </span>  */}
                    <MdOutlineDashboardCustomize size={"1.3rem"} />
                    Dashboard
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname.includes("winners") && 'text-white'}`} href={"/admin/winners"}>
                    <GiCrownedSkull size={"1.3rem"} />
                    Winners
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname.includes("advisory") && 'text-white'}`} href={"/admin/advisory"}>
                    <RiTeamLine size={"1.3rem"} />
                    Advsiory Board
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname.includes("ambassadors") && 'text-white'}`} href={"/admin/ambassadors"}>
                    <AiTwotoneGold size={"1.3rem"} />
                    Ambassadors
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname.includes("cms") && 'text-white'}`} href={"/admin/cms"}>
                    <AiTwotoneGold size={"1.3rem"} />
                    CMS
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname.includes("feedbacks") && 'text-white'}`} href={"/admin/feedbacks"}>
                    <MdOutlineFeedback size={"1.3rem"} />
                    Feedbacks
                </Link>
                {/* <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 text-white`} href={"/users/"}>
                    <RiTeamLine size={"1.3rem"} />
                    Settings
                </Link> */}
            </div>
        </div>
        <div onClick={() => signOut()} className={`py-2.5 pl-6 text-sm flex items-center gap-2 cursor-pointer`}>
            <MdLogout size={"1.3rem"} />
            Logout
        </div>
    </div>
  )
}

export default SideNav