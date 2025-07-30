import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

const SignUp3 = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const location = useLocation();
  const name = location.state?.name || "고객님"; 

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "30px",
      width: "500px",
      border: "2px solid #333",
      borderRadius: "10px",
      margin: "50px auto",
      backgroundColor: "#fafafa",
    }}>
      <div>
        <h2 className="sr-only">Steps</h2>
        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li className="flex items-center gap-2 bg-white p-2">
              <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">1</span>
              <span className="hidden sm:block">약관 동의</span>
            </li>
            <li className="flex items-center gap-2 bg-white p-2">
              <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">2</span>
              <span className="hidden sm:block">개인정보 입력</span>
            </li>
            <li className="flex items-center gap-2 bg-white p-2">
              <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">3</span>
              <span className="hidden sm:block">회원가입 완료</span>
            </li>
          </ol>
        </div>
      </div>

      <Confetti width={windowSize.width} height={windowSize.height} />
      <h1>🎉 회원가입 완료! 🎉</h1>
      <h2>{name}님 회원 가입을 축하드립니다! 🎊</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <Link
          to="/"
          className="px-6 py-3 w-48 text-center bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 shadow-sm"
        >
          🏠홈으로 이동
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 w-48 text-center bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm"
        >
          🔐로그인하러 이동
        </Link>
      </div>

    </div>
  );
};

export default SignUp3;
