import React from "react"
import Link from "next/link"
import { useRouter } from "next/router";

export const Footer = ({ }) => {
  const router = useRouter();

  return (
      <nav className="footer">
        <div className="info">
          <ul>
            <li>
              <p>
                Made in React in October 2023<br/>
                Updated October 13th, 2023
              </p>
            </li>
          </ul>
        </div>

        <div className="links">
          <ul>
            <li>
              <p>Email: lwalkerchung [at] gmail [dot] com</p>
            </li>
            <li>
              <p> Pronouns: he/they </p>
            </li>
          </ul>
        </div>

      </nav>
  )
}
