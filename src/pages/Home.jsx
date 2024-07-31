import React from 'react'
import kady from '../img/kady.jpg'
import artur from '../img/arthur.jpg'
import aisha from '../img/aisha.jpg'
import feature from '../img/icon-feature-experience.svg'
import feature1 from '../img/iconka1.svg'
import feature2 from '../img/iconka2.svg'
import menu from '../img/menu.svg'
import zed from '../img/zed-index.svg'
import grop4 from '../img/grop4.svg'
import grop5 from '../img/grop5.svg'
import grop6 from '../img/grop6.svg'
import grop7 from '../img/grop7.svg'
import grop8 from '../img/grop8.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    const list = [
        {
           id: 1,
           rasmlar:feature ,
           title: 'Experienced Individuals',
           matn: 'Our network is made up of highly experiencedprofessionals who are passionate about what they do.',
          
        },

        {
            id: 1,
            rasmlar:feature2 ,
            title: 'Experienced Individuals',
            matn: 'Our network is made up of highly experiencedprofessionals who are passionate about what they do.',
           
         },

         {
            id: 1,
            rasmlar:feature1,
            title: 'Experienced Individuals',
            matn: 'Our network is made up of highly experiencedprofessionals who are passionate about what they do.',
           
         },
      
      ]
    const list1 = [
        {
           id: 1,
           rasm:kady ,
           zed:zed ,
           title: 'Kady Baker',
           title1: "Product Manager at Bookmark",
           matn: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
          
        },
        {
           id: 2,
           rasm:aisha ,
           zed:zed ,
           title: 'Aiysha Reese',
           title1: "Founder of Manage",
           matn: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
          
        },
        {
           id: 3,
           rasm:artur ,
           zed:zed ,
           title: 'Arthur Clarke',
           title1: "Co-founder of MyPhysio",
           matn: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
          
        },
      
      ]
    
    return (
        <>
            <div className="pt-10 sm:pt-16 lg:pt-[73px] pb-[233px] relative">
                <div
                    className="w-full max-w-base mx-auto px-5 flex justify-between items-start flex-col text-center lg:space-x-7 lg:text-left lg:flex-row">
                    <h1
                        className="w-full text-[40px] sm:text-6xl leading-none font-bold mb-6 lg:text-[80px] lg:mb-0 lg:max-w-[635px] xl:text-[100px]">
                        Find the <br /> best <span className="text-f67e7e">talent</span></h1>

                    <div className="w-full lg:max-w-[445px]">
                        <hr className="hidden w-12 h-1 bg-79c8c7 mb-20 lg:block" />
                        <p className="text-[15px] leading-7 lg:text-lg font-semibold">Finding the right people and building high
                            performing teams can be hard. Most companies aren’t tapping into the abundance of global talent.
                            We’re about to change that.</p>
                    </div>
                </div>
                <img className="absolute left-0 top-0 bottom-0 hidden lg:inline-block" src={grop7} alt="grop7" />
            </div>

            <section className="py-16 sm:py-[100px] lg:py-[140px] bg-012f34 relative">
                <div className="w-full max-w-base mx-auto px-5">
                    <hr className="w-[50px] h-1 bg-f67e7e mb-14 border-none" />
                    <div className="flex items-start justify-between flex-col md:flex-row">
                        <div className="w-full max-w-[445px]">
                            <h2 className="text-2xl leading-none font-bold sm:text-3xl mb-16 lg:mb-0 lg:text-5xl">Build & manage
                                distributed teams like no one else.</h2>
                        </div>

                        <ul className="w-full max-w-[540px] space-y-8">
                                   
                        {list.map((item) =>{
                            return(
                                
                                <li className="flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row">
                                <img className="mb-4 sm:mr-6" src={item.rasmlar}
                                    alt="icon-feature-experience" />
                                <div>
                                    <h3 className="text-f67e7e text-lg font-bold mb-4">{item.title}</h3>
                                    <p className="text-[15px] leading-6 font-semibold">{item.matn}</p>
                                </div>
                            </li>
                            
                            );
                        })}
                        </ul>
                    </div>
                </div>
                <img class="absolute right-0 lg:-bottom-0 top-0" src={grop5} alt="grop5" />
            </section>

            <section className="py-16 sm:py-[100px] lg:py-[140px] relative">
                <img className="absolute top-0 left-0" src={grop6} alt="grop6"/>

                <div className="w-full max-w-base mx-auto px-5">
                <h2 className="w-full sm:max-w-[573px] sm:text-center lg:max-w-[932px] mx-auto lg:text-5xl text-[32px] leading-8 text-center font-bold lg:leading-[48px] mb-14">
                    Delivering real results for top companies. Some of our <br/><span class="text-[#79C8C7]">success
                        stories</span>.
                </h2>
                <ul className="grid grid-cols-1 lg:grid-cols-3 lg:space-y-0 space-y-[84px]">
                                
                {list1.map((item) =>{
                            return(
                                <li className="text-center relative">
                                <img className="left-[45%] absolute -top-9 -z-10" src={item.zed}
                                    alt="/img/icon-quotes.svg"/>
                                    <p className="text-base font-semibold leading-6 sm:mb-4 lg:mb-6">
                                        {item.matn}
                                    </p>
                                    <div>
                                        <h3 className="text-[#79C8C7] font-bold leading-7 text-base mb-0.5">{item.title}</h3>
                                        <p className="text-[13px] leading-4 font-medium mb-8 italic">{item.title1}</p>
                                    </div>
                                <img className="mx-auto rounded-full" src={item.rasm} alt="/img/kady.jpg"/>
                                 </li>
                            
                            );
                        })}

                </ul>
             </div>
                <img className="absolute bottom-0 right-0" src={grop4} alt="grop4"/>
            </section>

            <section className="bg-f67e7e relative">

            <div className="w-full lg:max-w-[917px] sm:max-w-[573px] mx-auto py-[76px] px-5 flex justify-between items-center">
            <h2 className="text-[#012F34] font-bold sm:text-[32px] sm:leading-8 lg:text-5xl lg:leading-[48px]">Ready to get
                started?</h2>

            <div>
            <Link className="hidden py-2 px-8 rounded-[24px] border-2 border-[#012F34] text-[#012F34] text-lg font-semibold leading-7 sm:inline-block"
            to="/contact">contact us</Link>
            <button className="sm:hidden">
                <img src={menu} alt="Hamburger menu"/>
            </button>
            </div>
            </div>

            <img className="absolute -bottom-0.5 left-0" src={grop8} alt="grop"/>

            </section>
            
        </>
    )
}

export default Home
