import React from "react";
import { Link } from "react-router-dom";

const Mainbanner2 = () => {
  return (
    <section className="bg-white h-[640px] lg:grid lg:place-content-center">
      <div
        className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
      >
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            저는 집을 찾아요,
            <strong className="text-indigo-600"> 따뜻한 손길을 기다리고 있어요</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            저는 조용하고 사랑이 필요한 작은 유기묘예요. 새로운 가족과 행복한 시간을 꿈꾸고 있습니다.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link
              to="/cat"
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              고양이 보러가기
            </Link>

            <Link
              to="/login"
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              로그인
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80"
            alt="귀여운 고양이"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Mainbanner2;
