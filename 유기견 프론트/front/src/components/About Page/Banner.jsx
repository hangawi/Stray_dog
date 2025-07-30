import React from "react";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const Banner = () => {
    return (
         <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
        <div className="md:col-span-3">
          <img
  src="/주인과개.jpg"
  className="rounded w-[2670px]"
  alt="강아지 이미지"
/>

        </div>
        <div className="md:col-span-1">
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              반려견과 새로운 <br/>시작을 함께하세요
            </h2>
            <p className="mt-4 text-gray-700">
              구조된 강아지들에게 따뜻한 보금자리를 찾아주는 일에 함께 참여해 주세요. 입양은 생명을 살리는 일이에요.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default Banner;