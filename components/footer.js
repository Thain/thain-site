import React from "react"
import Link from "next/link"
import { useRouter } from "next/router";

export const Footer = ({ }) => {
  const router = useRouter();

  return (
      <nav className="footer">
        <div className="menu">
          <ul>
            <li>
               <a className="dorange">Navigation</a>
            </li>
            <li className={router.pathname.startsWith("/work") ? "menu-active" : ""}>
              <Link href={`/work`}>
                <a className="">Work</a>
              </Link>
            </li>
            <li className={router.pathname.startsWith("/services") ? "menu-active" : ""}>
              <Link href={`/services`}>
                <a className="">Services</a>
              </Link>
            </li>
            <li className={router.pathname.startsWith("/about") ? "menu-active" : ""}>
              <Link href={`/about`}>
                <a className="">About</a>
              </Link>
            </li>
            <li className={router.pathname.startsWith("/ideas") ? "menu-active" : ""}>
              <Link href={`/ideas`}>
                <a className="">Ideas</a>
              </Link>
            </li>
            <li className={router.pathname.startsWith("/contact") ? "menu-active" : ""}>
              <Link href={`/contact`}>
                <a className="">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="socials">
          <ul>
            <li>
               <a className="dorange">Social</a>
            </li>
            <li>
              <Link href={`https://www.instagram.com/mymediacreative/`}>
                <a className="">Instagram</a>
              </Link>
            </li>
            <li>
              <Link href={`https://www.linkedin.com/company/my-media-creative/mycompany/`}>
                <a className="">LinkedIn</a>
              </Link>
            </li>
            <li>
              <Link href={`https://www.youtube.com/channel/UCBtnLqiba6ACrA63AHFTMUw`}>
                <a className="">YouTube</a>
              </Link>
            </li>
            <li>
              <Link href={`https://www.facebook.com/mymediacreativegroup/`}>
                <a className="">Facebook</a>
              </Link>
            </li>
          </ul>
        </div>

      </nav>
  )
}
