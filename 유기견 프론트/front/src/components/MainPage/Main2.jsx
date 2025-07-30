import React from 'react';
import { Search } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Main2 = () => {
    return (
        <div className="flex flex-col min-h-[50px]">
            <Header />
        </div>
    );
};
const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 py-4 px-6">
            <div className="py-4 px-6">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    <div className="bg-yellow-900 text-white rounded-lg min-w-80 flex-1 p-8 relative overflow-hidden">
                        <Link to="/dogquizpage" className="block relative z-10 cursor-pointer">
                            <div className="relative z-20"> 
                                <h3 className="text-2xl font-bold mb-2">지금 클릭! 나만의 강아지를 만나봐요</h3>
                                <p className="text-purple-100">데려가시개가 손님의 취향을 파악합니다💜</p>
                            </div>
                            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 opacity-80">
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-16 rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src="https://placedog.net/200/200"
                                            alt="개"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-16 h-16 rounded-lg shadow-lg rotate-12 overflow-hidden">
                                        <img
                                            src="https://placedog.net/201/201"
                                            alt="개"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-purple-500 text-white rounded-lg min-w-80 flex-1 p-8 relative overflow-hidden">
                        <Link to="/catquizpage" className="block relative z-10 cursor-pointer">
                            <div className="relative z-20"> 
                                <h3 className="text-2xl font-bold mb-2">지금 클릭! 나만의 고양이를 만나봐요</h3>
                                <p className="text-purple-100">데려가시개가 손님의 취향을 파악합니다💜</p>
                            </div>
                            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 opacity-80">
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-16 rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={`https://cataas.com/cat?${Math.random()}`}
                                            alt="고양이"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-16 h-16 rounded-lg shadow-lg rotate-12 overflow-hidden">
                                        <img
                                            src={`https://cataas.com/cat?${Math.random()}`}
                                            alt="고양이"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-indigo-900 text-white rounded-lg min-w-80 flex-1 p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">반려동물 체험단 사칭 주의!</h3>
                            <p className="text-indigo-200">공식 계정 여부 꼭 확인하고 안전하게 참여하세요.</p>
                        </div>
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                            <div className="w-24 h-24 relative">
                            </div>
                        </div>
                    </div>
                    <div className="bg-yellow-300 text-gray-900 rounded-lg min-w-80 flex-1 p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">댕댕이 입맛 저격 간식 특가!</h3>
                            <p className="text-yellow-800">베스트 간식 브랜드 최대 30% 할인 중 🦴</p>
                        </div>
                        <div className="absolute right-8 bottom-0">
                            <div className="w-24 h-24 relative">
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </header>
    );
};

export default Main2;