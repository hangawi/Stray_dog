import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bg-base-200">
      <div
        className="relative bg-base-100 shadow-sm w-3/4 mx-auto p-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <button tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/dog">강아지</Link></li>
                <li><Link to="/cat">고양이</Link></li>
                <li><Link to="/facility">시설</Link></li>
                <li><Link to="/adopt">입양</Link></li>
                <li><Link to="/abandon">파양</Link></li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">개장수</Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl space-x-10">
              <li><Link to="/about">회사 소개</Link></li>
              <li><Link to="/dog">강아지</Link></li>
              <li><Link to="/cat">고양이</Link></li>
              <li><Link to="/board">커뮤니티</Link></li>
              <li><Link to="/facility">시설</Link></li>
            </ul>
          </div>

          <div className="navbar-end space-x-2">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <Link to="/login" className="text-sm">로그인</Link>
            <Link to="/signup" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">회원 가입</Link>
          </div>
        </div>
        {isHovering && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t p-6 z-50">
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-12 text-sm">
              <div>
                <h4 className="font-semibold mb-2">강아지</h4>
                <ul className="space-y-1">
                  <li><Link to="/dog/small" className="hover:underline">소형</Link></li>
                  <li><Link to="/dog/medium" className="hover:underline">중형</Link></li>
                  <li><Link to="/dog/large" className="hover:underline">대형</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">고양이</h4>
                <ul className="space-y-1">
                  <li><Link to="/cat/new" className="hover:underline">묘종 추가 예정</Link></li>
                  <li><Link to="/cat/russianblue" className="hover:underline">러시안 블루</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">커뮤니티</h4>
                <ul className="space-y-1">
                  <li><Link to="/community/notice" className="hover:underline">공지</Link></li>
                  <li><Link to="/community/free" className="hover:underline">자유게시판</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">시설</h4>
                <ul className="space-y-1">
                  <li><Link to="/facility/public" className="hover:underline">공공기관 정보</Link></li>
                  <li><Link to="/facility/shelters" className="hover:underline">보호소 정보</Link></li>
                  <li><Link to="/facility/etc" className="hover:underline">기타 시설</Link></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
