import React from "react";
import ReactPlayer from 'react-player';
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Mainbanner from "./Mainbanner";
import Mainbanner2 from "./Mainbanner2";

const Main1 = () => {
    return (
        <>
            <div className="bg-base-200">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={2}
                    autoplay={{
                        delay: 100000, // 3초마다 자동 슬라이드
                        disableOnInteraction: false, 
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Scrollbar, Autoplay]}
                >
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                            <ReactPlayer
                                url="public\공익광고.mp4"  
                                height="640px"
                                width="50%"
                                controls
                                playing={true} 
                                loop={true} 
                                muted={true} 
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><Mainbanner/></SwiperSlide>
                    <SwiperSlide><Mainbanner2/></SwiperSlide>
                </Swiper>
            </div>

        </>
    );
};

export default Main1;
