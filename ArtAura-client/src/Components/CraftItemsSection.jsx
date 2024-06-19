import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import CraftItemCard from './CraftItemCard';

const CraftItemsSection = () => {
    const items = useLoaderData();
    console.log(items)

    return (
        <div className='md:my-20 my-10'>
            <h1 className='text-center md:text-5xl  font-sedan font-extrabold ' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Artisanal Treasures:{' '}
                <span style={{ color: '#e65b56', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Explore Our Crafted Collection', 'Discover Our Artisanal Trove', ' Delve into Our Handcrafted Gems', 'Navigate Our Craftsmanship Showcase!']}
                        loop={20}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 container mx-auto p-3'>
                {
                    items?.map(item => <CraftItemCard key={item._id} item = {item}></CraftItemCard>)
                }
            </div>
        </div>
    );
};


export default CraftItemsSection;