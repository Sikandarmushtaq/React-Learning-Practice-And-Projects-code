import { Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 bg-cyan-900">
<h2 className="text-xl font-bold">Sheriyans</h2>
<div className="flex gap-8 ">
  <Link className="text-xl font-bold" to = "/">Home</Link>
  <Link className="text-xl font-bold" to = "/about">About</Link>
  <Link className="text-xl font-bold" to = "/contact">Contact</Link>
  
</div>



    </div>
  )
}

export default Navbar