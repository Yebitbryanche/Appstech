import { Link } from 'react-router-dom';
import { IoIosCloudOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { FaTv } from "react-icons/fa";
import { FaCartShopping, FaMobileScreenButton } from 'react-icons/fa6';

interface CardProps{
    items:CardItems[];
    className?:string
}
interface CardItems{
    title:string;
    description:string;
    path:string
    icon:any
}

export const NavCardData = [
    {
        title:"cloud solution",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/cloud_solutions",
        icon:<IoIosCloudOutline />
    },
     {
        title:"Mobile Security",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/mobile_security",
        icon:<GoShieldCheck/>
    },
    {
        title:"Mobile solution",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/mobile_solution",
        icon:<FaMobileScreenButton />
    },
    {
        title:"Oracle E business suit",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/oracle_e_bsns",
        icon:<FaCartShopping />
    },
    {
        title:"Linux Virtualization",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/linux",
        icon:<FaTv/>
    }
]

function NavCard({items}:CardProps) {
  return (
    <div>
      {
        items.map((item) =>(
            <Link to={item.path}>
                <img src={item.icon} alt={item.title}/>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </Link>
        ))
      }
    </div>
  )
}

export default NavCard
