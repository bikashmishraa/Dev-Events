import Link from "next/link"
import Image from "next/image";

interface props{
 title:string;
 image:string;
 slug:string;
 location?:string;
 Date:string;
 Time:string;
}

const EventCard = ({title,image,slug,location,Date,Time}:props) => {
  return (
     <Link href={'/Events'} className="">
        <Image src={image} alt={title} width={400} height={400} className="posters"/>
        <div className="flex flex-col gap-3">

         <div className="top flex gap-2">
          <h2>{title}</h2>   
          <h2>{slug}</h2>   
         </div>

         <div className="bottom flex gap-5">
          <h2>📌{location}</h2>   
          <h2>📅{Date}</h2>
          <h2>🕛{Time}</h2>
         </div>

        </div>

     </Link>
   )
}
export default EventCard