import React from "react";
import { Link } from "react-router-dom";

const Mainbanner = () => {
    return (
        <section className="bg-white h-[640px] lg:grid lg:place-content-center">
            <div
                className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
            >
                <div className="max-w-prose text-left">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        새로운 가족을 기다리며
                        <strong className="text-indigo-600"> 사랑을 찾고 있어요</strong>
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        저는 따뜻한 손길과 평생 함께할 친구를 기다리고 있어요. 당신의 관심과 사랑이 큰 힘이 됩니다.
                    </p>
                    <p className="mt-4 text-base text-gray-600 sm:text-lg/relaxed italic">
                        우리 함께 행복한 새로운 시작을 만들어가요 🐾
                    </p>


                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <Link
                            to="/dog"
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                        >
                            강아지 보러가기
                        </Link>

                        <Link
                            to="/login"
                            className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                        >
                            로그인하기
                        </Link>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80"
                        alt="귀여운 강아지"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Mainbanner;
