import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {EventItem} from "@/lib/constants";

const Eventcard = ({id,title,image,slug,location,date,time}:EventItem) => {
    return (
        <Link href={`/events/${slug}`} id={"event-card"}>
            <Image  src={image} alt={`${title} image`} width={410} height={300} className={"poster"}  />

            <div className={"flex flex-row gap-2"}>
                <Image src={"/icons/pin.svg"} alt={"location"} width={12} height={12}  />
                <p>{location}</p>
            </div>
            <p className={"title"}>{title}</p>

            <div className={"datetime"}>
               <div>
                   <Image src={"/icons/calendar.svg"} alt={"date"} width={12} height={12}  />
                   <p>{date}</p>
               </div>
                <div>
                    <Image src={"/icons/clock.svg"} alt={"time"} width={12} height={12}  />
                    <p>{time}</p>
                </div>
            </div>

        </Link>
    )
}
export default Eventcard
