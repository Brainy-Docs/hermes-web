
export default function Download(){
    return (
        <section className="pt-20 pb-28 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <h2 className="text-5xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight md:max-w-lg mx-auto pb-4">Commandez vos plats en seulement 3 étapes</h2>
            </div>
            <div className="relative">
                <img className="w-full" src="/images/app-bg.png" alt=""/>
                <img className="absolute top-1/2 w-3/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-9 mx-auto hover:scale-105 transition ease-in-out duration-1000" src="/images/phone-menu.png" alt=""/>
            </div>
            <div className="container px-4 mt-4 mx-auto" id="download">
                <p className="mb-9 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">Notre application vous permet de commander depuis votre smartphone ou votre tablette et de le recevoir à votre table sans bouger le moindre petit doigt.</p>
                <div className="flex flex-wrap justify-center -m-2.5">
                <div className="w-auto p-2.5">
                    <a href="#">
                    <img src="/images/app-store.png" alt=""/>
                    </a>
                </div>
                <div className="w-auto p-2.5">
                    <a href="#">
                    <img src="/images/play-store.png" alt=""/>
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}