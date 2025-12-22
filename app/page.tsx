import EventCard from "@/components/EventCard"
import RegisterBtn from "../components/RegisterBtn"

const events = [
  {
    image : '/image1.jpg',
    title:"Event 1",
    slug:'event-1',
    location:'New York',
    Date:'2024-08-15',
    Time:'18:00'
  },
  {
    image : '/image2.jpg',
    title:"Event 2",
    slug:'event-2',
    location:'old York',
    Date:'2024-08-16',
    Time:'12:00'
  },
  {
    image : '/image3.jpg',
    title:"Event 2",
    slug:'event-2',
    location:'old York',
    Date:'2024-08-16',
    Time:'12:00'
  },
  {
    image : '/image4.jpg',
    title:"Event 2",
    slug:'event-2',
    location:'old York',
    Date:'2024-08-16',
    Time:'12:00'
  },
  {
    image : '/image4.jpg',
    title:"Event 2",
    slug:'event-2',
    location:'old York',
    Date:'2024-08-16',
    Time:'12:00'
  }
]

const page = () => {
  return (
    <section className="min-h-screen flex  gap-6 flex-col items-center mt-15 ">
      <h1 className="text-5xl text-center font-bold ">The Hub For Every Dev <br /> Event you can't miss</h1>
      <p className="text-sm">Hackathon, meetups and innovation; All at one place</p>
      <RegisterBtn />
      <div className="mt-10 gap-2 justify-center flex flex-col items-center">
        <h2 className="text-xl">Featured Events</h2>
        <ul className="events grid grid-cols-2 gap-8 ">
          {
            events.map((event)=>(
              <li key={event.title}>
                <EventCard {...event}/>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
    
  )
}
export default page