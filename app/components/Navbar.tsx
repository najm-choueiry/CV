'use client'
 
import Link from "next/link";
import { usePathname } from 'next/navigation'
 
const Navbar = () => {
    const pathname = usePathname().slice(1);
    return (
        <div>
            <span className="font-bold text-gray-500">{pathname}</span>
            <div className="font-lg flex space-x-3">
                <Link href="/" className={`${pathname === 'about' ? 'bg-gray-400 text-white' : 'bg-white text-place'}`}> 
                    About 
                </Link>
                <Link href="/projects" className={`${pathname === 'projects' ? 'bg-gray-400 text-white' : 'bg-white text-place'}`}>
                    Projects
                </Link>
                <Link href="/resume" className={`${pathname === 'resume' ? 'bg-gray-400 text-white' : 'bg-white text-place'}`}>
                    Resume
                </Link>
            </div>
        </div>
      );
    };
     
    export default Navbar;