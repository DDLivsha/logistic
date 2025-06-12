'use client'
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//====================== SLIDER ======================
const clientsData = [
   {
      name: 'John Smith',
      position: 'FOX Hub CEO',
      image: '/images/clients/review-photo.jpg',
      content: [
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
         'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      ]
   },
   {
      name: 'John Smith',
      position: 'FOX Hub CEO',
      image: '/images/clients/review-photo.jpg',
      content: [
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
         'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      ]
   },
]

export default function Home() {

   //====================== SERVICE DATA ======================
   const [services, setServices] = useState([
      {
         title: "Ground Shipping",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
         link: "#"
      },
      {
         title: "Railway Shipping",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam fokijas;fksjad f;asdj f;sadjf;kals df;asd jfadsj fasld;kjf as;dlkf jasdl;kjf asldk;",
         link: "#"
      },
      {
         title: "Water Shipping",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
         link: "#"
      },
      {
         title: "Air Shipping",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
         link: "#"
      },
   ])

   //====================== TEAM DATA ======================
   const [team, setTeam] = useState([
      {
         name: "John Smith",
         position: "Logistic manager - 8 years experience",
         image: "images/team/John-1.jpg",
         email: 'john@centerlogistic.com',
         phone: '+987412512543'
      },
      {
         name: "Daniel Kore",
         position: "Software engineer",
         image: "images/team/Daniel.jpg",
         email: 'john@centerlogistic.com',
         phone: '+987412512543'
      },
      {
         name: "Anna Smith",
         position: "Logistic manager - 8 years experience",
         image: "images/team/Anna.jpg",
         email: 'john@centerlogistic.com',
         phone: '+987412512543'
      },

   ])


   return (
      <>
         <Header />
         <main className="main">
            <Intro />

            <section
               className="main__service service"
               id="service"
            >
               <div className="container">
                  <div className="service__inner">
                     {services.map((item, key) => (
                        <div key={key} className="service__content-block" data-aos="flip-down" data-aos-delay="50">
                           <h3 className="service__title">{item.title}</h3>
                           <p className="service__text">{item.text}</p>
                           <div className="service__link-wrapper w-[100px]">
                              <a href={item.link} className="service__link">Learn more</a>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
            <section
               className="main__clients clients"
               id="clients"
            >
               <div className="container">
                  <h2 className="clients__title title" data-aos="fade-down"><span>Our</span> Clients</h2>
                  <div className="clients__inner">
                     <ul className="clients__logos-list">
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="50">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/atica.svg" alt="logo" className="clients__img" />
                           </a>
                        </li>
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="50">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/hex-lab-1.svg  " alt="logo" className="clients__img" />
                           </a>
                        </li>
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="50">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/amara.svg" alt="logo" className="clients__img" />
                           </a>
                        </li>
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="200">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/muzica-2.svg" alt="logo" className="clients__img" />
                           </a>
                        </li>
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="200">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/solaytic.svg" alt="logo" className="clients__img" />
                           </a>
                        </li>
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="200">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/hexa.svg" alt="logo" className="clients__img" />
                           </a>
                        </li>
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="300">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/utosia-2.svg" alt="logo" className="clients__img" />
                           </a>
                        </li>
                        <li className="clients__list-item" data-aos="flip-down" data-aos-delay="300">
                           <a href="#" target="_blank" className="clients__list-link">
                              <img src="images/logos/fox-hub.svg" alt="logo" className="clients__img" />
                           </a>
                        </li>
                     </ul>

                     <div className="clients__slider">
                        <Swiper
                           modules={[Navigation, Pagination, Autoplay]}
                           // navigation
                           pagination={{ clickable: true }}
                           autoplay={{ delay: 5000 }}
                           loop
                           spaceBetween={50}
                           slidesPerView={1}

                        >
                           {clientsData.map((client, index) => (
                              <SwiperSlide key={index}>
                                 <div className="clients__slide">
                                    <div className="clients__slide-header">
                                       <div className="clients__img-box">
                                          <img
                                             src={client.image}
                                             alt={client.name}
                                             className="clients__header-img"
                                          />
                                       </div>
                                       <div className="clients__title-wrapper">
                                          <h4 className="clients__header-title">{client.name}</h4>
                                          <h6 className="clients__header-subtitle">{client.position}</h6>
                                       </div>
                                    </div>
                                    <div className="slider__content">
                                       {client.content.map((text, i) => (
                                          <p key={i} className="slider__content-text">
                                             {text}
                                          </p>
                                       ))}
                                    </div>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>

                  </div>
                  <div className="clients__bottom" data-aos="fade-up">
                     <a href="#" target="_blank" className="clients__button button" data-modal="#BecomeCLientModal">Become a
                        client</a>
                     <p className="clients__love">we love our clients</p>
                  </div>
               </div>
            </section>

            <section className="main__benefits benefits" id="benefits" data-scrollspy="#benefits">
               <div className="container">
                  <div className="benefits__inner">
                     <div className="benefits__content">
                        <ul className="benefits__list">
                           <li className="benefits__list-item" data-aos="flip-down" data-aos-delay="50">
                              <h4 className="benefits__list-title">Safety</h4>
                              <p className="benefits__list-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                 nonumy eirmod tempor </p>
                           </li>
                           <li className="benefits__list-item" data-aos="flip-down" data-aos-delay="100">
                              <h4 className="benefits__list-title">High quality drivers</h4>
                              <p className="benefits__list-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                 nonumy eirmod tempor </p>
                           </li>
                           <li className="benefits__list-item" data-aos="flip-down" data-aos-delay="150">
                              <h4 className="benefits__list-title">Guarantee & Support 24/7</h4>
                              <p className="benefits__list-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                 nonumy eirmod tempor </p>
                           </li>
                           <li className="benefits__list-item" data-aos="flip-down">
                              <h4 className="benefits__list-title">Personal manager</h4>
                              <p className="benefits__list-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                 nonumy eirmod tempor </p>
                           </li>
                        </ul>
                     </div>
                     <div className="benefits__img-box" data-aos="fade-left" data-aos-delay="200">
                        <img src="images/way-truck.jpg" alt="truck" className="benefits__img" />
                     </div>
                  </div>
               </div>
            </section>

            <section className="main__team team" id="team" data-scrollspy="#team">
               <div className="container">
                  <h2 className="team__title title" data-aos="fade-down"><span>Our</span> Team</h2>
                  <div className="team__inner">
                     <ul className="team__content-list">
                        {team.map((item, key) => (
                           <li key={key} className="team__content-item">
                              <div className="team__img-box">
                                 <img src={item.image} alt="John" className="team__img" />
                              </div>
                              <h4 className="team__item-title">{item.name}</h4>
                              <p className="team__item-subtitle">{item.position}</p>
                              <div className="team__mail">
                                 <img src="images/icons/mail-black.svg" alt="mail" className="team__mail-img" />
                                 <a href="mailto:john@centerlogistic.com" className="team__mail-link">{item.email}</a>
                              </div>
                              <div className="team__phone">
                                 <img src="images/icons/phone-black.svg" alt="phone" className="team__phone-img" />
                                 <a href="tel:987412512543" className="team__phone-link">{item.phone}</a>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </section>

            <section className="main__mission mission">
               <div className="container">
                  <div className="mission__content-wrapper">
                     <h2 className="mission__title">Our mission</h2>
                     <div className="mission__inner" data-aos="fade-up">
                        <h3 className="mission__inner-title">To provide our customer qualified services according the
                           international</h3>
                        <p className="mission__inner-subtitle">Book your Cargo now & Your job just got a lot easier</p>
                        <div className="mission__lines">
                           <div className="mission__blue-line" data-aos="fade-left" data-aos-delay="200"></div>
                           <div className="mission__orange-line" data-aos="fade-right" data-aos-delay="200"></div>
                        </div>
                     </div>
                  </div>
                  <div className="mission__button-wrapper">
                     <a href="#" target="_blank" className="mission__button button" data-modal="#BecomeCLientModal"
                        data-aos="fade-up">Become a client</a>
                  </div>
               </div>
            </section>

            <section className="main__news news" id="news" data-scrollspy="#news">
               <div className="container">
                  <h2 className="clients__title title" data-aos="fade-down"><span>Interesting</span> to read</h2>
                  <ul className="news__list">
                     <li className="news__list-item" data-aos="flip-down">
                        <article className="news__list-article">
                           <a className="news__item-link" href="#">
                              <h4 className="news__item-title">News title</h4>
                              <p className="news__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                 diam
                                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                 voluptua.
                                 At
                                 vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                 takimata sanctus est Lorem ipsum dolor sit amet.</p>
                              <time pubdate='true' dateTime="21-03-2019" className="news__item-time">21 March, 2019</time>
                           </a>
                        </article>
                     </li>
                     <li className="news__list-item" data-aos="flip-down">
                        <article className="news__list-article">
                           <a className="news__item-link" href="#">
                              <h4 className="news__item-title">News title</h4>
                              <p className="news__item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                 diam
                                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                 voluptua.
                                 At
                                 vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                 takimata sanctus est Lorem ipsum dolor sit amet.</p>
                              <time pubdate='true' dateTime="21-03-2019" className="news__item-time">21 March, 2019</time>
                           </a>
                        </article>
                     </li>
                  </ul>
                  <a href="news.html" className="news__button button" data-aos="fade-up">Visit blog</a>
               </div>
            </section>

         </main>

         <footer className="footer">
            <div className="footer__content">
               <a href="index.html" className="footer__logo">
                  <img src="images/logo-black.svg" alt="CenterLogistic" className="footer__logo-img" />
               </a>
               <h6 className="footer__info">New York, Street, ZIP code</h6>
               <h6 className="footer__info">Call Us: <a href="tel:9948373123" className="footer__info-link">+9948373123</a> or E-mail:
                  <a href="mailto:hello@centerlogistic.com" className="footer__info-link">hello@centerlogistic.com</a>
               </h6>
               <nav className="footer__nav">
                  <a href="#" className="footer__nav-item">Terms & Contidions</a>
                  <a href="privacy.html" className="footer__nav-item">Privacy Policy</a>
                  <a href="news.html" className="footer__nav-item">Our blog</a>
               </nav>
            </div>
         </footer>
      </>
   );
}
