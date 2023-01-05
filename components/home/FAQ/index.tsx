import Accordion from "./Accrordion"

export default function FAQ(){
    return (
        <section className="relative pt-12 pb-16 bg-blueGray-50 overflow-hidden" id="faqs">
            <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="https://shuffle.dev/flaro-assets/images/faqs/gradient.svg" alt=""/>
            <div className="relative z-10 container px-4 mx-auto">
                <div className="md:max-w-4xl mx-auto">
                <p className="mb-7 text-sm text-orange-600 text-center font-semibold uppercase tracking-px">Avez-vous des question?</p>
                <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Questions fréquentes</h2>
                <div className="mb-11 flex flex-wrap -m-1">
                    <Accordion title="Comment payer pour ma commande ?" content="L&apos;application vous donne le choix entre un payment cash ou par les services locaux, Flooz, TMoney, Mobile Money."/>
                    <Accordion title="Est-il possible de modifier ou annuler ma commande une fois qu&apos;elle a été passée ?" content="Après avoir passé une commande, vous disposez d&apos;un lapse de temps où vous pouvez modifier ou annuler la commande. Ce lapse de temps correspond au temps de confirmation de la commande par le restaurant."/>
                    <Accordion title="Y a-t-il des frais supplémentaires pour utiliser l&apos;application ?" content="Non! L&apos;application est totalement gratuite et concentré sur l&apos;efficacité de commande."/>
                    <Accordion title="Est-il possible de récupérer ma commande au restaurant ou est-elle livrée à mon domicile ?" content="L&apos;application s&apos;utilise à l&apos;intérieur du restaurant donc vous pouvez récupérer la command en main propre. Mais pour la livraison à domicile, n&apos;est pas encore une option"/>
                </div>
                <p className="text-gray-600 text-center font-medium">
                    <span>Vous avez toujours des question?</span>
                    <a className="font-semibold text-orange-600 hover:text-orange-700" href="#contact"> Contactez-nous</a>
                </p>
                </div>
            </div>
        </section>
    )
}