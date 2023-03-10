import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <section className="overflow-hidden">
            <div className="flex items-center justify-between px-8 py-5 bg-white">
                <div className="w-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-auto mr-14">
                    <a href="#">
                        <img className="" src="/appicon.svg" alt=""/>
                    </a>
                    </div>
                </div>
                </div>
                <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-10">
                    <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a className="truncate" href="#download">Télécharger</a></li>
                    <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a className="truncate" href="#howitworks">Comment ça marche?</a></li>
                    <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a className="truncate" href="#faqs">FAQs</a></li>
                    <li className="font-heading text-gray-900 hover:text-gray-700 text-lg"><a className="truncate" href="#team">Développeurs</a></li>
                </ul>
                </div>
                <div className="w-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden lg:block">
                    {/* <button className="group relative p-0.5 font-heading block w-full md:w-auto text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                        <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                        <div className="py-2 px-5 bg-white rounded-lg">
                        <p className="relative z-10">Start Free Trial</p>
                        </div>
                    </button> */}
                    <button className="py-3 truncate px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Obtenir l&apos;Application</button>
                    </div>
                    <div className="w-auto lg:hidden">
                    <span onClick={()=>setOpen(true)}>
                        <svg className="navbar-burger text-gray-800" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                        <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    </div>
                </div>
                </div>
            </div>
            <div style={{display: open ? "block" : "none"}} className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                <nav className="relative z-10 px-9 py-8 bg-white h-full">
                <div className="flex flex-wrap justify-between h-full">
                    <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                        <div className="w-auto p-2">
                        <span className="inline-block">
                            <img className="" src="/appicon.svg" alt=""/>
                        </span>
                        </div>
                        <div className="w-auto p-2">
                        <span className="navbar-burger" onClick={()=>setOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center py-8 w-full">
                    <ul>
                        <li className="mb-8"><a className="truncate font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#download">Télécharger</a></li>
                        <li className="mb-8"><a className="truncate font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#howitworks">Comment ça marche?</a></li>
                        <li className="mb-8"><a className="truncate font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#faqs">FAQs</a></li>
                        <li><a className="truncate font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#team">Développeurs</a></li>
                    </ul>
                    </div>
                    <div className="flex flex-col justify-end w-full">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                       {/* <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                            <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                            <div className="py-2 px-5 bg-white rounded-lg">
                            <p className="relative z-10">Start Free Trial</p>
                            </div>
                        </button> */}
                        <button className="truncate py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Obtenir l&apos;Application</button>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
        </section>
    )
}