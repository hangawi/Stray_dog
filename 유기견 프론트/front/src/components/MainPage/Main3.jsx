import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import animals from '../../api/AnimalsAPI';

const Main3 = () => {
  const [recentAnimals, setRecentAnimals] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecentAnimals = async () => {
      try {
        const data = await animals(0); 
        if (data?.content) {
          const sorted = data.content
            .filter(a => a.type === '고양이' || a.type === '개') 
            .sort((a, b) => new Date(b.registeredAt) - new Date(a.registeredAt)); 
          setRecentAnimals(sorted.slice(0, 10)); 
        }
      } catch (error) {
        console.error('동물 데이터 로드 실패', error);
      }
    };

    fetchRecentAnimals();
  }, []);

  return (
    <div className="py-4 px-6 bg-white border-t border-b border-gray-200">
      <div className="py-6 px-6">
        <h2 className="text-xl font-bold mb-4">최근에 올라온 친구들</h2>

        <Swiper
          spaceBetween={16}
          slidesPerView={2.2}
          breakpoints={{
            640: { slidesPerView: 3.2 },
            768: { slidesPerView: 4.2 },
            1024: { slidesPerView: 5.2 },
            1280: { slidesPerView: 6 },
          }}
          autoplay={{
            delay: 1000, // 3초마다 자동 슬라이드
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        >
          {recentAnimals.map((animal) => (
            <SwiperSlide key={animal.animalId}>
              <div
                onClick={() => {
                   if (animal.type === "고양이") {
        navigate(`/cats/${animal.animalId}`);
      } else if (animal.type === "개") {
        navigate(`/dogs/${animal.animalId}`);
      }
                }}
                className="w-60 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={
                      animal.imageBase64s?.[0]
                        ? `data:image/jpeg;base64,${animal.imageBase64s[0]}`
                        : "/book.png"
                    }
                    alt={animal.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium mb-1 truncate">
                    이름 : {animal.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {animal.type} / {animal.age}세
                  </p>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Main3;
