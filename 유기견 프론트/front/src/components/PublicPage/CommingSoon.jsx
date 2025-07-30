import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CommingSoon = () => {
    const location = useLocation();
    const name = location.state?.name || "고객";

    return (

        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
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
                            <h1 className="text-2xl font-bold mt-6 text-center">추후 업데이트 예정입니다</h1>
                            <h2 className="text-lg text-center mt-2">빠른 시일내에 출시 하겠습니다</h2>

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
            </main>
            <Footer />
        </div>

    );
};

export default CommingSoon;
