'use client'
import React from 'react'
import {useState} from 'react'

const content = ["Check out my new app", "Why dont you share and subscribe?", "How do you appease a mummy", "Send her flowers"]
const reply = ["The new model is the best for ui mapping and interpolation. Have yourself a cool spot in history with the latest running mac.",
               "I will choose to subscribe when and only when I see expertise and professionalism with your work ",
               "I'm surprised you could be so whimppery and scared about your mummy. Let me not say it again: get her some flowers! Haha!",
               "You said again for me. Yes, get her some flowers and make sure they are fresh lovely ones too lest she turns out very monstrous."
]

export default function Accordion() {
    const [selectedid, setSelectedId] = useState(0)

    const handletoggle = (id) => {
        selectedid===id? setSelectedId(null) : setSelectedId(id)
    }

  return (
    <div className='w-max flex flex-col pr-4'>
        {content.map((item, index)=>{
            return (
                <div className='border w-full overflow-hidden'>
                <button 
                    className={`${selectedid===index? 'active' : 'inactive'}  z-10 text-white border rounded p-4 w-full relative`}
                    key={index} 
                    onClick={()=>handletoggle(index)}> Comment-{index}
                </button>
                    <div  className={`${selectedid===index? 'open' : 'close'} absolute -z-6 left-0 bottom-0 bg-black text-white overflow-hidden border rounded flex flex-col gap-4 w-full`}>
                        <h1 className='py-4 pl-24 text-center w-full uppercase'>{item}</h1>
                        <small className='py-4 pl-48 pr-16 text-center w-full leading-[26px]'>{reply[index]}</small>
                    </div>
                </div>    
                
            )
        })}
    </div>
  )
}
