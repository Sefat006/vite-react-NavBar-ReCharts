import { list } from "postcss";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const NavBar = () => {
    
    const [open, setOpen]= useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
      
    return (
        <nav className="p-4">
            <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <IoMdClose className="text-white" /> : <IoIosMenu className="text-white" />
                }
                
            </div>
            <ul className={`md:flex absolute md:static duration-1000
            ${open ? 'top-12' : '-top-60'} sm:bg-blue-200 text-black font-semibold md:bg-none rounded-md px-3 md:p-4`}>
                {
                    routes.map( route => <Link  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;