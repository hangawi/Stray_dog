import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginCheck from "../../api/LoginCheck";
import logout from "../../api/logoutAPI";

const Header = () => {
  const [loginTime, setLoginTime] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const result = await loginCheck();
      setIsLoggedIn(result);
    };
    checkLogin();
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
    navigate("/login");
  };

  if (isLoggedIn === null) return null;

  return (
    <header>
      <div className="bg-gray-100 w-full">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <a href="/" className="hover:text-black"></a>
              <a href="/" className="hover:text-black"></a>
            </div>
            <div className="flex items-center space-x-4">
              <ul className="flex space-x-4 text-sm">
                {!isLoggedIn ? (
                  <>
                    <li><Link to="/login" className="hover:text-black">로그인</Link></li>
                    <li><Link to="/signup" className="hover:text-black">회원가입</Link></li>
                  </>
                ) : (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="hover:text-black cursor-pointer bg-transparent border-none">
                      로그아웃
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow w-full">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-10">
              <Link to="/">
                <img src="/book.png" className="h-10 cursor-pointer" alt="logo" />
              </Link>
              <nav className="flex space-x-8 font-semibold text-sm">
                <ul className="flex space-x-4 text-sm">
                  <li><Link to="/about" className="hover:text-black">회사 소개</Link></li>
                  <li><Link to="/dog" className="hover:text-black">강아지</Link></li>
                  <li><Link to="/cat" className="hover:text-black">고양이</Link></li>
                  <li><Link to="/board" className="hover:text-black">커뮤니티</Link></li>
                  <li><Link to="/facility" className="hover:text-black">시설</Link></li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <ul className="flex items-center space-x-4">
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/mypage" className="hover:text-black">
                        회원정보
                      </Link>
                    </li>
                    <li>
                      <Link to="/myanimalorder" className="hover:text-black">
                        등록 내역
                      </Link>
                    </li>
                    <li>
                      <Link to="/myorders" className="hover:text-black">
                        입양 신청 내역
                      </Link>
                    </li>
                    <li>
                      <Link to="/userboards" className="hover:text-black">
                        게시물 등록 내역
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
