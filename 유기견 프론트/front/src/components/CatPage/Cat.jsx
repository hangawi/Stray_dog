import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import animals from "../../api/AnimalsAPI";
import loginCheck from "../../api/LoginCheck";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const Cat = () => {
    const [animalList, setAnimalList] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = async () => {
            const resultLogin = await loginCheck();
            setIsLoggedIn(resultLogin);
        };

        const load = async () => {
            const data = await animals(page);
            setAnimalList((data?.content || []).filter((a) => a.type === "고양이"));
            setTotalPages(data?.totalPages || 1);
        };

        checkLogin();
        load();
    }, [page]);

    return (
        <div className="w-full bg-white text-black font-sans">
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex gap-6 mt-6">
                            <div className="flex-[3]">
                                {isLoggedIn && (
                                    <div className="mb-4">
                                        <button
                                            onClick={() => navigate('/newcats')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                            유기묘 등록
                                        </button>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {animalList.map((a) => (
                                        <div
                                            key={a.animalId}
                                            onClick={() => navigate(`/cats/${a.animalId}`)}
                                            className="group block overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white cursor-pointer"
                                        >
                                            <div className="relative h-[250px] sm:h-[300px]">
                                                <img
                                                    src={
                                                        a.imageBase64s && a.imageBase64s.length > 0
                                                            ? `data:image/jpeg;base64,${a.imageBase64s[0]}`
                                                            : "/book2.jpg"
                                                    }
                                                    alt={a.name}
                                                    className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                                                />
                                            </div>
                                            <div className="relative bg-white pt-3 px-4 pb-4">
                                                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                                    이름 : {a.name}
                                                </h3>
                                                <div className="mt-1.5 flex items-center justify-between text-gray-900">
                                                    <p className="text-xs uppercase">나이: {a.age}세</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="join mt-10 flex justify-center">
                                    {[...Array(totalPages)].map((_, idx) => {
                                        return (
                                            <input
                                                key={idx}
                                                className="join-item btn btn-square"
                                                type="radio"
                                                name="pagination"
                                                aria-label={`${idx + 1}`}
                                                checked={page === idx}
                                                onChange={() => setPage(idx)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Cat;
