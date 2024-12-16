import logo from "../assets/logo.webp"


function Navbar() {
  return (
    <div className="nav">

        <img className="h-14 rounded-3xl w-20 " src={logo} alt=""/>
        <h1 className="title">Travel <span className="text-orange-600">Buddy</span></h1>

      

    </div>
  )
}

export default Navbar