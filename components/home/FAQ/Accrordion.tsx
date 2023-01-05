
// props

import { useState } from "react";

interface AccordionProps {
    title: string;
    content: string;
}

export default function Accordion({title, content}:AccordionProps){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-full p-1" onClick={()=>setIsOpen(!isOpen)}>
            <div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-200 rounded-2xl shadow-10xl">
                <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                        <h3 className="text-lg font-semibold leading-normal">{title}</h3>
                        {isOpen &&<p className="mt-4 text-gray-600 font-medium">{content}</p>}
                    </div>
                    <div className="w-auto p-2">
                        <svg className="relative top-1" style={{rotate: isOpen? '0deg' : '180deg'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}