'use client'

import { useState } from "react"
import Link from "next/link"

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>("")

  return (
    <div>
        <span className="font-bold text-gray-200">{activeItem}</span>
        <div>
            {
                activeItem !== 'About' && 
                (
                    <Link href="/">
                    <span>About</span>
            </Link>
                )
            }

            {
                activeItem !== 'Projects' && 
                (
                    <Link href="/projects">
                    <span>Projects</span>
            </Link>
                )
            }

            {
                activeItem !== 'Resume' && 
                (
                    <Link href="/resume">
                    <span>Resume</span>
            </Link>
                )
            }
        </div>
    </div>
  )
}

export default Navbar