import React from 'react'
import nikita from '../img/nikita.jpg'
import cristian from '../img/Group 12 (3).png'
import cruz from '../img/Group 12.png'
import drake from '../img/Group 12 (1).png'
import griffin from '../img/Group 12 (2).png'
import aden from '../img/Group 11.png'
import plus from '../img/plus.svg'
import grop1 from '../img/grop1.svg'
import grop3 from '../img/grop3.svg'
import grop6 from '../img/grop6.svg'
import grop8 from '../img/grop8.svg'
import grop9 from '../img/grop9.svg'
import bitmap1 from '../img/Bitmap (1).png'
import bitmap2 from '../img/Bitmap (2).png'
import bitmap3 from '../img/Bitmap (3).png'
import bitmap4 from '../img/Bitmap (4).png'
import bitmap5 from '../img/Bitmap (5).png'

const About = () => {
    const list = [
        {
           id: 1,
           rasmlar:nikita ,
           rasm: plus,
           title: 'Nikita Marks',
           title1: 'Founder & CEO'
          
        },
        {
           id: 2,
           rasmlar:cristian ,
           rasm: plus,
          
        },
        {
           id: 3,
           rasmlar:cruz ,
           rasm: plus,
         
          
        },
        {
           id: 4,
           rasmlar:drake ,
           rasm: plus,
           
        },
        {
           id: 5,
           rasmlar:griffin ,
           rasm: plus,
        },
        {
           id: 6,
           rasmlar:aden,
           rasm: plus,
        },
      ]
  return (
    <>  
    <section className="bg-[#014E56] relative">
        <img className="absolute bottom-0 right-0" src={grop3} alt="rasm"/>
        <div className="w-full max-w-[437px] lg:max-w-base mx-auto px-5 pt-14 lg:pt-16 pb-28 lg:pb-32 lg:flex items-start lg:justify-between">
            <h1 className="w-full max-w-[350px] me-[30px] text-center md:text-left bg-[#014E56] text-[64px] font-bold leading-[100px] mb-6 lg:mb-0">
                About
            </h1>
            <div>
                <hr className="hidden lg:inline-block w-[50px] h-1 bg-f67e7e mb-10 border-none"/>
                <p className="w-full max-w-[730px] text-lg font-semibold leading-7">
                    We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
                </p>
            </div>
        </div>
    </section>

     <section className="bg-[#004047] relative">
        <img className="absolute left-0 top-0" src={grop9} alt="rasm"/>
        <img className="absolute right-0 bottom-0" src={grop6} alt="rasm"/>

        <div className="w-full max-w-base mx-auto px-5 sm:pb-32">
            <h2 className="sm:pt-[100px] md:pt-[154px] text-center text-[32px] lg:text-5xl font-bold leading-8 lg:leading-[48px] mb-[50px]">Meet the directors</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-[76px] gap-3 lg:gap-x-[30px]">

            {list.map((item) =>{
                            return(
                                <li className="bg-[#012F34] text-center relative">
                                <img className="rounded-full mx-auto mt-8 mb-5" src={item.rasmlar} alt="nikita"/>
                                <div>
                                    <h3 className="text-[#79C8C7] text-lg leading-7 font-bold"> {item.title}</h3>
                                    <p className="text-[15px] font-medium leading-6 italic mb-12">{item.title1}</p>
                                </div>
                                <button className="mx-auto absolute -bottom-7 left-0 right-0 z-10">
                                    <img className="mx-auto" src={item.rasm} alt="plus"/>
                                </button>
            
                            </li>
                            
                            );
                        })}

            </ul>
        </div>
    </section>

    <section className="py-[140px] bg-[#012F34] relative">
        <img className="absolute left-0 top-0" src={grop1} alt="rasm"/>
        <div className="w-full max-w-base mx-auto px-5">
            <h2 className=" text-[32px] lg:text-5xl leading-8 lg:leading-[48px] font-bold text-center mb-[70px]">Some of our clients</h2>
            <ul className="flex justify-between items-center">
                <li>
                    <img src={bitmap1} alt="rasm"/>
                </li>
                <li>
                    <img src={bitmap2} alt="rasm"/>
                </li>
                <li>
                    <img src={bitmap3} alt="rasm"/>
                </li>
                <li>
                    <img src={bitmap4} alt="rasm"/>
                </li>
                <li>
                    <img src={bitmap5} alt="rasm"/>
                </li>
            </ul>
        </div>
    </section>

     <section className="bg-f67e7e relative">
        <div className="w-full lg:max-w-[917px] sm:max-w-[573px] mx-auto py-[76px] px-5 flex justify-between items-center">
            <h2 className="text-[#012F34] font-bold sm:text-[32px] sm:leading-8 lg:text-5xl lg:leading-[48px]">Ready to get started?</h2>
            <div>
                <a className="hidden py-2 px-8 rounded-[24px] border-2 border-[#012F34] text-[#012F34] text-lg font-semibold leading-7 sm:inline-block" href="contact-us.html">contact us</a>
                <button className="sm:hidden">
                    <img src="./src/img/menu.svg" alt="Hamburger menu"/>
                </button>
            </div>
        </div>
        <img className="absolute -bottom-0.5 left-0" src={grop8} alt="grop"/>
    </section>
      
    </>
  )
}

export default About
