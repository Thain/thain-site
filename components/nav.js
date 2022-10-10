import React, { useState } from "react"
import Link from "next/link"
import { Seo } from "./seo"
import { useRouter } from "next/router";

export const Nav = (props) => {
  const router = useRouter();

  var menuColor; var logoColor;
  if(props.isBlack) { menuColor = "menu menu-black"; logoColor = "#000000" }
  else { menuColor = "menu menu-white"; logoColor = "#FFFFFF" }

  var homeClass = (props.active == "home") ? "menu-active" : "";
  var workClass = (props.active == "work") ? "menu-active" : "";
  var servClass = (props.active == "services") ? "menu-active" : "";
  var aboutClass = (props.active == "about") ? "menu-active" : "";
  var ideasClass = (props.active == "ideas") ? "menu-active" : "";
  var contactClass = (props.active == "contact") ? "menu-active" : "";

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
    <nav className="topbar">
    <Seo seo={props.seo} />


          <nav>
            <ul>
              <li><Link href="/"><a>{content.index.title}</a></Link></li>
              {content.pages.map(page =>
                  <li key={page.path}>
                    <Link href="[...slug]" as={page.path}><a>{page.name}</a></Link>
                  </li>,
              )}
            </ul>
          </nav>

       <div className={menuColor + " reg"}>
          <ul>
            <li className={workClass}>
              <Link href={`/work`}>
                <a className="">Work</a>
              </Link>
            </li>
            <li className={servClass}>
              <Link href={`/services`}>
                <a className="">Services</a>
              </Link>
            </li>
            <li className={aboutClass}>
              <Link href={`/about`}>
                <a className="">About</a>
              </Link>
            </li>
            <li className={contactClass}>
              <Link href={`/contact`}>
                <a className="">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleToggle} className="hamburger mobile">
          <svg height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="26" fill="#E26E4B"/>
            <path d="M16 18H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 26.0667H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 34.1333H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
        </div>

      </nav>

      <div id="nav-overlay" className={ navbarOpen ? "nav-open" : "nav-close" }>
        <div onClick={handleToggle} className="hamburger-x">
          <svg height="100%" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.25 9.75L9.75 29.25" stroke="#E26E4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.75 9.75L29.25 29.25" stroke="#E26E4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="nav-overlay-menu">
          <ul>
            <li className={homeClass}>
              <Link href={`/`}>
                <a className="">Home</a>
              </Link>
            </li>
            <li className={workClass}>
              <Link href={`/work`}>
                <a className="">Work</a>
              </Link>
            </li>
            <li className={servClass}>
              <Link href={`/services`}>
                <a className="">Services</a>
              </Link>
            </li>
            <li className={aboutClass}>
              <Link href={`/about`}>
                <a className="">About</a>
              </Link>
            </li>
            <li className={contactClass}>
              <Link href={`/contact`}>
                <a className="">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
