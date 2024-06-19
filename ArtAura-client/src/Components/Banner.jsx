
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className = "bg-transparent banner py-10" >

            <Swiper
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper"
            >

                
                <SwiperSlide>
                    <img src="https://i.ibb.co/HX6W8Lj/slide2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/F0fK6VX/b0133b85-e618-48a9-ad90-7bcb61746f8d.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/F5nwxzv/374ab27c-55c4-4319-8b78-c36e87c5f082.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/0DZ2p1G/8065a0d1-4e78-4238-bfd0-6306a69718e0.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/PMCRLZR/3d9236fa-ae04-49e1-8f75-b55d3994005a.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/wpH8NJn/f73e089c-f66a-443f-8a4a-75fab5878415.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/5489g9t/bc3f70b1-ff37-4ba8-b0d4-6ab0b09c492e.jpg" />
                </SwiperSlide>

                
            </Swiper>
            <div className='my-4'>
                    <h2 className='text-white md:text-3xl text-2xl font-semibold text-center'>Crafting Serenity, One Artful Piece at a Time <br /> Discover the Aura of Artistry with <br /> <span className='font-sedan text-[#f7d1cb] font-extrabold md:text-4xl'>ArtAura</span></h2>
                </div>
        </div>
    );
};

export default Banner;