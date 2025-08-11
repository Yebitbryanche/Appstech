import { Link } from 'react-router-dom';
import { IoIosCloudOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { FaTv } from "react-icons/fa";
import { FaCartShopping, FaMobileScreenButton } from 'react-icons/fa6';
import { BsFillSuitcaseLgFill, BsPeopleFill } from "react-icons/bs";
import { TbLicense } from "react-icons/tb";
import { CgDatabase } from "react-icons/cg";
import { MdMiscellaneousServices } from "react-icons/md";
import type { ReactNode } from 'react';

interface CardProps{
    items:CardItems[];
    className?:string
}
interface CardItems{
    title:string;
    description:string;
    path:string
    icon:ReactNode
}

export const NavCardData = [
    {
        title:"Cloud solution",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/cloud_solutions",
        icon:<IoIosCloudOutline size={30} />
    },
     {
        title:"Mobile Security",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/mobile_security",
        icon:<GoShieldCheck size={30}/>
    },
    {
        title:"Mobile solution",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/mobile_solution",
        icon:<FaMobileScreenButton size={30}/>
    },
    {
        title:"Oracle E business suit",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/oracle_e_bsns",
        icon:<FaCartShopping size={30}/>
    },
    {
        title:"Linux Virtualization",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/linux",
        icon:<FaTv size={30}/>
    },
    {
        title:"Oracle Database",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/oracle_database",
        icon:<BsFillSuitcaseLgFill size={30} />
    }
]

export const expertiseCardData = [
    {
        title:"License Management",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/license_management",
        icon:<TbLicense size={30} />
    },
     {
        title:"Oracle Database Services",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/oracle_database_service",
        icon:<CgDatabase size={30}/>
    },
    {
        title:"Oracle E-business Suite services",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/oracle_e_business_suit",
        icon:<BsFillSuitcaseLgFill size={30} />
    },
    {
        title:"Managed services",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/managed_services",
        icon:<MdMiscellaneousServices size={30}/>
    },
    {
        title:"Approach",
        description:"AppsTech Labs is a solution center created to showcase",
        path:"/approach",
        icon:<BsPeopleFill size={30}/>
    }
]

function NavCard({items}:CardProps) {
  return (
    <div className='grid grid-cols-1 gap-5 px-3 mt-10 md:grid-cols-3 md:mt-5 md:gap-10 py-5 md:px-6 z-50'>
      {
        items.map((item) =>(
            <Link to={item.path} className='p-1 md:p-3 max-w-[370px] bg-white rounded-xl shadow-lg inset-shadow-xs flex items-center gap-x-4'>
                <div className='text-primary'>{item.icon}</div>
                <div>
                    <h3 className='font-medium text-lg md:text-xl md:font-medium'>{item.title}</h3>
                    <p className='text-accent'>{item.description}</p>
                </div>
            </Link>
        ))
      }
    </div>
  )
}

export default NavCard
