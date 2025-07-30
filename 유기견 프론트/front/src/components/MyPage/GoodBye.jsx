import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import RainAnimation from "react-rain-animation";
import "react-rain-animation/lib/style.css";

const Goodbye = () => {
    const location = useLocation();
    const name = location.state?.name || "고객";

    return (
        <div>
            <div style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "30px",
                minHeight: "100vh"
            }}>
                <div style={{
                    width: "500px",
                    padding: "30px",
                    border: "2px solid #333",
                    borderRadius: "10px",
                    backgroundColor: "#ffffffcc",
                    backdropFilter: "blur(4px)"
                }}>
                    <h1 className="text-2xl font-bold mt-6 text-center">탈퇴 완료!</h1>
                    <h2 className="text-lg text-center mt-2">{name}님, 그동안 함께해주셔서 감사합니다</h2>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                        <Link
                            to="/"
                            className="px-6 py-3 w-48 text-center bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 shadow-sm"
                        >
                            🏠 홈으로
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goodbye;
