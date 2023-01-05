export default function FAQ(){
    return (
        <section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
            <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="https://shuffle.dev/flaro-assets/images/faqs/gradient.svg" alt=""/>
            <div className="relative z-10 container px-4 mx-auto">
                <div className="md:max-w-4xl mx-auto">
                <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">Avez-vous des question?</p>
                <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Questions fréquentes</h2>
                <div className="mb-11 flex flex-wrap -m-1">
                    <div className="w-full p-1">
                    <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-10xl">
                        <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                            <h3 className="text-lg font-semibold leading-normal">Comment payer pour ma commande ?</h3>
                            <p className="mt-4 text-gray-600 font-medium">L'application vous donne le choix entre un payment cash ou par les services locaux, Flooz, TMoney, Mobile Money.</p>
                            </div>
                            <div className="w-auto p-2">
                            <svg className="relative top-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="w-full p-1">
                    <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                        <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                            <h3 className="text-lg font-semibold leading-normal">Est-il possible de modifier ou annuler ma commande une fois qu'elle a été passée ?</h3>
                            <p className="mt-4 text-gray-600 font-medium">Après avoir passé une commande, vous disposez d'un lapse de temps où vous pouvez modifier ou annuler la commande. Ce lapse de temps correspond au temps de confirmation de la commande par le restaurant.</p>
                            </div>
                            <div className="w-auto p-2">
                            <svg className="relative top-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="w-full p-1">
                    <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                        <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                            <h3 className="text-lg font-semibold leading-normal">Y a-t-il des frais supplémentaires pour utiliser l'application ?</h3>
                            <p className="mt-4 text-gray-600 font-medium">Non! L'application est totalement gratuite et concentré sur l'efficacité de commande</p>
                            </div>
                            <div className="w-auto p-2">
                            <svg className="relative top-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="w-full p-1">
                    <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                        <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                            <h3 className="text-lg font-semibold leading-normal">Est-il possible de récupérer ma commande au restaurant ou est-elle livrée à mon domicile ?</h3>
                            <p className="mt-4 text-gray-600 font-medium">L'application s'utilise à l'intérieur du restaurant donc vous pouvez récupérer la command en main propre. Mais pour la livraison à domicile, n'est pas encore une option</p>
                            </div>
                            <div className="w-auto p-2">
                            <svg className="relative top-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <p className="text-gray-600 text-center font-medium">
                    <span>Vous avez toujours des question?</span>
                    <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="#contact"> Contactez-nous</a>
                </p>
                </div>
            </div>
        </section>
    )
}