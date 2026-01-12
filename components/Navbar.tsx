import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
      <header>
          <nav className={ "w-full h-20 border-b border-[#151024] backdrop-blur-lg justify-between items-center " }>
              <div className={"flex justify-between items-center px-4 gap-3"}>
                  <Image src={"/icons/logo.png"} alt={"Logo"} width={24} height={24}  />
                  <p className={ " w-23 h-6 font-bold italic text-[20px] font-schibsted-grotesk   " }>DevNet</p>
              </div>
           <ul className={ "list-none w-59.25 h-6  gap-y-6  " }>
               <Link href={"#home"}>
                   <li className={ " text-lg  cursor-pointer font-schibsted-grotesk leading-6 " } >Home</li>
               </Link>
               <Link href={"#events"} >
                   <li className={" text-lg  cursor-pointer font-schibsted-grotesk leading-6"}>Events</li>
               </Link>
              <Link href={"#create-event"}>
                  <li className={" text-lg text-nowrap cursor-pointer font-schibsted-grotesk leading-6 "}>Create Event</li>
              </Link>


           </ul>
          </nav>
      </header>
    )
}
export default Navbar
