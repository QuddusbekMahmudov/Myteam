import React from 'react'
import feature from '../img/icon-feature-experience.svg'
import feature1 from '../img/iconka1.svg'
import feature2 from '../img/iconka2.svg'
import grop9 from '../img/grop9.svg'
import grop88 from '../img/grop88.svg'

const Contact = () => {
    const list = [
        {
           id: 1,
           rasmlar:feature ,
           title: 'Experienced Individuals',
          
        },
        {
           id: 2,
           rasmlar:feature1 ,
           title: 'Usage & implementation of our software',
          
        },
        {
           id: 3,
           rasmlar:feature2 ,
           title: 'How we help drive innovation',
          
        },

      ]
  return (
     
    <main className="relative">
    <img className="absolute left-0 top-0" src={grop9} alt="rasm"/>
    <img className="absolute right-0 bottom-0" src={grop88} alt="rasm"/>
  
     <div className="w-full max-w-base mx-auto grid grid-cols-2 items-center py-[124px] px-5 ">
    <div className='w-full'>
                <h1 className="text-[64px] font-bold leading-[100px] mb-4">Contact</h1>
                <h2 className="text-[32px] font-bold leading-[48px] text-f67e7e mb-8">Ask us about</h2>
                <ul className="w-full max-w-[540px] space-y-8 text-white">
                {list.map((item) =>{
                            return(
                                
                     <li className="flex flex-col items-center text-center sm:text-left sm:items-center sm:flex-row">
                        <img className="mb-4 sm:mr-6" src={item.rasmlar} alt="icon-feature-experience"/>
                        <div>
                            <h3 className="text-lg font-bold mb-4 leading-7">{item.title}</h3>
                        </div>
                    </li>
                        );
                        })}
                </ul>
        </div>
        <form class="w-full bg-transparent" action="#">
                <input class="w-full mb-6 pt-0 pr-20 pb-4 pl-[14px] bg-transparent border-b-2 border-solid border-white" name="ismi" type="text" placeholder="Name" required/>
                <div class="relative">
                    <input class="w-full mb-6 pt-0 pr-20 pb-4 pl-[14px] bg-transparent border-b-2 border-solid border-white" name="Email" type="email" placeholder="Email Addres" required/>
                    <span class="hidden absolute bottom-0 left-[14px] text-[#f67e7e] text-[10px] italic font-bold">This field is required</span>
                </div>
                <input class="w-full mb-6 pt-0 pr-20 pb-4 pl-[14px] bg-transparent border-b-2 border-solid border-white" name="Companiy" type="text" placeholder="Companiy name" required/>

                <input class="w-full mb-6 pt-0 pr-20 pb-4 pl-[14px] bg-transparent border-b-2 border-solid border-white" name="title" type="text" placeholder="Title" required/>

                <textarea class="w-full pt-0 pr-20 pb-4 pl-[14px] resize-none bg-transparent border-b-2 border-solid border-white " name="Message" placeholder="Message"></textarea>
                <button class="text-[#004047]  bg-white text-[18px] font-semibold leading-7 mt-6
                pt-2 pr-8 pb-3 pl-8  decoration-0 rounded-[24px] border-b-2 border-solid border-white">Submit</button>
            </form>
    </div>
    </main>
  )
}

export default Contact








 

