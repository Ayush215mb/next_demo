import ExploreBtn from "@/components/ExploreBtn";
import Eventcard from "@/components/Eventcard";
import {events} from "@/lib/constants"
const Page = () => {
    return (
        <section>
            <h1 className={"text-center"}>The hub for every Dev <br/> Event you can&apos;t miss</h1>
            <p className={ "text-center mt-5 " }>Hackathons,Meetups and Conferences</p>
            <ExploreBtn/>
            <div className={"mt-20 space-y-7 "} >
                <h3>Featured </h3>

                <ul className={"events"}>
                    {events.map((event)=>(
                        <li key={event.id} className={"list-none"} >
                            <Eventcard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page
