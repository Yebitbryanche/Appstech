import { Link } from "react-router-dom"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { images } from "../../Types/images";
import NavCard from "../../Components/navCard/NavCard";
import { NavCardData } from "../../Components/navCard/NavCard";


function NavLinks() {
  const [toggleChevron1, setToggleChevron1] = useState(true)
  const [toggleChevron, setToggleChevron] = useState(true)
  return (
    <>
      <div className="flex justify-between z-40">
        <div>
          <img src={images.logo} alt="Logo" />
        </div>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li onMouseDown={() => (setToggleChevron1(!toggleChevron1))}  className="flex items-center gap-x-2">{/* Logic to  toggle Chevron icon */}
              <p>Products</p>
            { toggleChevron1?<FaChevronDown/> :<FaChevronUp/>}
            {!toggleChevron1 && 
            <div className="absolute w-full top-0 left-0 bg-secondary">
              <NavCard items={NavCardData}/>
            </div>}
          </li>

          <li onMouseDown={() => (setToggleChevron(!toggleChevron))} className="flex items-center gap-x-2">
              <p>Expertise</p>
            { toggleChevron?<FaChevronDown/> :<FaChevronUp/>}
          </li>
        
          <li>
            <Link to="/internship">Internship</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavLinks
