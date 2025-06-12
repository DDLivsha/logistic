import { useState, useEffect, useRef } from 'react'

export default function Header() {

   const [navigation, setNavigation] = useState([
      {
         name: "Services",
         link: "#service",
      },
      {
         name: "Clients",
         link: "#clients",
      },
      {
         name: "Benefits",
         link: "#benefits",
      },
      {
         name: "Team",
         link: "#team",
      },
      {
         name: "News",
         link: "#news",
      },
   ])

   return (
      <header className="header" id="header">
         <div className="overlay" />
         <div className="container">
            <div className="header__inner">
               <a href="/" className="header__logo">
                  <img src="images/logo.svg" alt="CenterLogistic" className="header__logo-img" />
               </a>
               <nav className="header__nav" id="header__nav">
                  <ul className="header__nav-list">
                     {navigation.map((item, index) => (
                        <li className="header__nav-item" key={index}>
                           <a href={item.link} className="header__nav-link">{item.name}</a>
                        </li>)
                     )}

                     <li className="header__nav-item">
                        <a href="#" className="header__nav-link" data-modal="#BecomeCLientModal">Contact Us</a>
                     </li>
                  </ul>

               </nav>

               <button className="burger" id="navToggle">
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
               </button>

            </div>
         </div>
      </header>
   )
}
