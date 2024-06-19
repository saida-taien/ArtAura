
const Gallery = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-5xl py-5 font-bold text-[#e65b56] font-sedan">ArtAura Discovery Expedition Tour</h1>
            <p className="text-lg text-center font-semibold">Step into a world of artisanal marvels with our curated gallery. <br /> Explore exquisite craftsmanship and unique creations that captivate the senses and inspire the soul.</p>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://i.ibb.co/d4sn2nB/molleni-ceramics-DUq-Sle-MZ1xs-unsplash.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/8zm5KnY/liz99-7-Eee-SN-e-Gs-I-unsplash.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/vBGr9q9/tom-crew-i-UFS1-GCp-Ebk-unsplash.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/7KwYRLx/shayne-inc-photography-i7a-q-UFADzg-unsplash.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/bW8r88p/sq-lim-z-TKs8sng-Op-Q-unsplash.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/2ZdCJcM/adam-bartoszewicz-gu-NDv-QOxb-Uw-unsplash.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/2nDPj0k/kasia-sikorska-71-Eo-X-X3-LNU-unsplash.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/M9by3pc/cristina-matos-albers-Oe-FCTlf-Tn-EU-unsplash.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/5489g9t/bc3f70b1-ff37-4ba8-b0d4-6ab0b09c492e.jpg" />
                    <img src="https://i.ibb.co/sbR4b7P/sidney-pearce-rco9-Z8ra-WFM-unsplash.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default Gallery;