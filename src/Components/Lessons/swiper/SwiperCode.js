const SwiperCode =
    `
fistly install this module
npm i swiper

    import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const pictures = [
    {
        id: Math.random(),
        src:"https://static.vecteezy.com/system/resources/thumbnails/049/855/207/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
    },
    {
        id: Math.random(),
        src:"https://static.vecteezy.com/system/resources/thumbnails/049/546/528/small/vibrant-tropical-leaf-backgrounds-high-resolution-images-for-stunning-visuals-free-photo.jpg"
    },
    {
        id: Math.random(),
        src:"https://static.vecteezy.com/system/resources/thumbnails/049/855/471/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg"
    },
    {
        id: Math.random(),
        src:"https://static.vecteezy.com/system/resources/thumbnails/049/546/772/small/stunning-high-resolution-nature-and-landscape-backgrounds-breathtaking-scenery-in-hd-free-photo.jpg"
    },
]
const Slider = () => {
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'blue',
                    '--swiper-pagination-color': 'blue',
                }}
                zoom={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    pictures.map(el => {
                        return (
                            <SwiperSlide
                                key={el.id}
                            >
                               <div
                                   className="w-full h-full flex justify-center items-center">
                                   <img src={el.src} alt="some photos" className="w-full h-full object-cover"/>
                               </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default Slider;
    `
export default SwiperCode;