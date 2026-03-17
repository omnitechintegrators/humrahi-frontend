import React,{
useState,
useEffect,
useMemo
} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import { motion as Motion } from "framer-motion";

import {

Calendar,
Clock,
ArrowRight,
ChevronLeft,
ChevronRight,
X,
MapPin,
User

} from "lucide-react";

import { createPortal } from "react-dom";



/* ================= MAIN PAGE ================= */

const Events = () => {

const [eventsData,setEventsData] = useState([]);

const [page,setPage] = useState(1);

const [selectedEvent,setSelectedEvent] = useState(null);

const perPage = 4;



/* ================= FETCH ================= */

useEffect(()=>{

axios

.get("http://localhost:5000/api/events")

.then(res=>{

if(res.data.success)

setEventsData(res.data.events);

});

},[]);



/* ================= PAGINATION ================= */

const paginated = useMemo(()=>{

const start = (page-1)*perPage;

return eventsData.slice(start,start+perPage);

},[eventsData,page]);



const totalPages = Math.ceil(

eventsData.length/perPage

);



return(

<main className="bg-cream overflow-hidden">


<EventsHero/>


<section className="py-24">

<div className="max-w-7xl mx-auto px-6">


{/* NO EVENT */}


{eventsData.length===0 &&

<p className="text-center font-bold text-xl">

Currently no event available

</p>

}



<div className="grid md:grid-cols-2 gap-10">


{paginated.map((event,i)=>(

<EventCard

key={event._id}

data={event}

index={i}

open={()=>setSelectedEvent(event)}

/>

))}


</div>



<Pagination

page={page}

setPage={setPage}

totalPages={totalPages}

/>


</div>

</section>



{/* POPUP */}


{selectedEvent &&

<EventPopup

event={selectedEvent}

close={()=>setSelectedEvent(null)}

/>

}


</main>

);

};

export default Events;



/* ================= HERO ================= */

const EventsHero=()=>(

<section className="relative h-[55vh] flex items-center justify-center">

<img

src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"

className="absolute inset-0 w-full h-full object-cover"

/>

<div className="absolute inset-0 bg-red-950/50"/>

<Motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

className="relative text-white text-center"

>

<h1 className="text-6xl font-bold">

Our Event

</h1>

</Motion.div>

</section>

);



/* ================= EVENT CARD ================= */

const EventCard=({data,index,open})=>(

<Motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*0.1}}

className="bg-white rounded-3xl shadow-xl p-6 flex gap-6"

>

<div className="w-[160px] h-[160px] rounded-2xl overflow-hidden">

<img

src={`http://localhost:5000${data.image}`}

className="w-full h-full object-cover"

/>

</div>


<div className="flex-1 flex flex-col justify-between">


<div>

<h3 className="text-xl font-bold mb-3">

{data.title}

</h3>


<div className="flex gap-4 text-xs mb-4">

<span className="flex gap-1">

<Calendar size={14}/>

{data.date}

</span>


<span className="flex gap-1">

<Clock size={14}/>

{data.time}

</span>

</div>


<p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
{data.description}
</p>

</div>


<button

onClick={open}

className="font-bold text-primary flex gap-1 mt-3"

>

Event Details

<ArrowRight size={16}/>

</button>


</div>

</Motion.div>

);



/* ================= POPUP ================= */

const EventPopup=({event,close})=>

createPortal(

<div className="fixed inset-0 bg-black/70 z-[999999] flex justify-center items-center">


<div className="bg-white w-full h-full overflow-y-auto relative">


<button

onClick={close}

className="absolute right-6 top-6 bg-white p-2 rounded-full shadow"

>

<X size={28}/>

</button>



<img

src={`http://localhost:5000${event.image}`}

className="w-full h-[400px] object-cover"

/>



<div className="max-w-4xl mx-auto p-10 space-y-6">


<h2 className="text-4xl font-bold">

{event.title}

</h2>



<div className="grid md:grid-cols-2 gap-4">


<p className="flex gap-2">

<Calendar/>

{event.date}

</p>


<p className="flex gap-2">

<Clock/>

{event.time}

</p>


<p className="flex gap-2">

<MapPin/>

{event.locationName}

</p>


<p className="flex gap-2">

<User/>

{event.host}

</p>


</div>



<a

href={event.locationLink}

target="_blank"

className="text-blue-600 underline"

>

View Location Map

</a>



<div>

<h3 className="font-bold">

Volunteers:

</h3>

<p>

{event.volunteers}

</p>

</div>



<div>

<h3 className="font-bold">

Description:

</h3>

<p>

{event.description}

</p>

</div>



<div>

<h3 className="font-bold">

Aim:

</h3>

<p>

{event.aim}

</p>

</div>



{/* BUTTONS */}


<div className="flex gap-4 pt-6">


<Link

to="/donate"

className="bg-primary text-white px-6 py-3 rounded"

>

Become Donor

</Link>



<Link

to="/volunteer"

className="bg-black text-white px-6 py-3 rounded"

>

Become Volunteer

</Link>


</div>


</div>

</div>

</div>,

document.body

);



/* ================= PAGINATION ================= */

const Pagination=({

page,
setPage,
totalPages

})=>(

<div className="flex justify-center gap-3 mt-16">


<button

onClick={()=>setPage(page-1)}

disabled={page===1}

>

<ChevronLeft/>

</button>



{[...Array(totalPages)].map((_,i)=>(

<button

key={i}

onClick={()=>setPage(i+1)}

className={page===i+1?

"bg-primary text-white px-4 py-2 rounded"

:

"bg-white px-4 py-2 rounded"

}

>

{i+1}

</button>

))}



<button

onClick={()=>setPage(page+1)}

disabled={page===totalPages}

>

<ChevronRight/>

</button>


</div>

);