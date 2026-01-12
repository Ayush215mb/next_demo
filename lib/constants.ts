export type EventItem={
    id:number
    title:string;
    image: string;
    slug:string;
    location:string;
    date:string;
    time:string;
};


export const events:EventItem[] = [
    {id:1, image: '/images/event1.png', title: 'Tech Summit 2026', slug: 'tech-summit-2026', location: 'New York', date: '2026-03-12', time: '10:00 AM' },
    {id:2, image: '/images/event2.png', title: 'AI Conference', slug: 'ai-conference', location: 'San Francisco', date: '2026-04-05', time: '09:30 AM' },
    { id:3,image: '/images/event3.png', title: 'Startup Meetup', slug: 'startup-meetup', location: 'Bangalore', date: '2026-02-20', time: '06:00 PM' },
    {id:4, image: '/images/event4.png', title: 'Product Launch', slug: 'product-launch', location: 'London', date: '2026-05-18', time: '11:00 AM' },
    {id:5, image: '/images/event5.png', title: 'Developer Workshop', slug: 'developer-workshop', location: 'Berlin', date: '2026-01-30', time: '02:00 PM' },
]