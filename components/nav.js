import React, { useState } from "react"
import content from '../frontaid.content.json';
import Link from "next/link"
import { Seo } from "./seo"
import { useRouter } from "next/router";

export const Nav = (props) => {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
    <nav className="topbar">
    <Seo seo={props.seo} />

          <h4 style={{color: "var(--green)", fontWeight: "bold"}}>{content.index.name}</h4>

          <nav>
            <ul>
            </ul>
          </nav>

        <div onClick={handleToggle} className="hamburger mobile">
          <svg height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="26" fill="#E26E4B"/>
            <path d="M16 18H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 26.0667H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 34.1333H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
        </div>

      </nav>

      <div id="nav-overlay" className={ !navbarOpen ? "nav-close" : "nav-open" }>
        <div onClick={handleToggle} className="hamburger-x">
          <svg height="100%" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.25 9.75L9.75 29.25" stroke="#E26E4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.75 9.75L29.25 29.25" stroke="#E26E4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="nav-overlay-menu">
          {/* nav menu goes here */}
        </div>
      </div>
    </>
  )
}
