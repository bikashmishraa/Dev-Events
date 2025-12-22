import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="bg-gray-800/20 border-b-gray-800 py-6">
      
     <nav className='flex justify-between px-8 '>
       <Link href='/' className='logo flex gap-3'>
          <Image src='/globe.svg' alt="logo" width={20} height={20}/>
          <p>DevEvents</p>
       </Link>

       <ul className='flex gap-5'>
        <Link href="/">Home</Link>
        <Link href="/">Events</Link>
        <Link href="/ ">Create Events</Link>
       </ul>

       

     </nav>
    </header>
  )
}
export default Navbar