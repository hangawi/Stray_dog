import React, { useEffect, useState } from "react";
import getBoardList from "../../api/boardAPI";
import { useNavigate } from "react-router-dom";
import loginCheck from "../../api/LoginCheck";
import logout from "../../api/logoutAPI";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";



const Board1 = () => {
    const [boardList, setBoardList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = async () => {
            const result = await loginCheck();
            setIsLoggedIn(result);
        }
        checkLogin();
        const fetchData = async () => {
            try {
                const data = await getBoardList(page, size);
                setBoardList(data);
                setTotalPages(data.totalPages);
                console.log("게시글 목록", data);

            } catch (error) {
                console.error("게시글 불러오기 실패", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, [page, size]);

    const handlePageChange = (newPage) => {
        // 유효한 페이지 범위인 경우에만 페이지 변경
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <div>
                    <div className="flex justify-center px-4">
                        <div className="w-full max-w-6xl overflow-x-auto mt-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    자유 게시판
                                </h2>
                                {isLoggedIn && (
                                    <button
                                        onClick={() => navigate('/newboard')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">
                                        새 글 쓰기
                                    </button>
                                )}
                            </div>
                            <table className="min-w-full divide-y-2 divide-gray-200">
                                <thead className="ltr:text-left rtl:text-right">
                                    <tr className="*:font-medium *:text-gray-900 *:first:sticky *:first:left-0 *:first:bg-white">
                                        <th className="px-3 py-2 whitespace-nowrap">ID</th>
                                        <th className="px-3 py-2 whitespace-nowrap">제목</th>
                                        <th className="px-3 py-2 whitespace-nowrap">작성자</th>
                                        <th className="px-3 py-2 whitespace-nowrap">작성일</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {boardList?.content?.map((item) => (
                                        <tr
                                            key={item.boardId}
                                            onClick={() => navigate(`/board/${item.boardId}`)}
                                            style={{ cursor: "pointer" }}
                                            className="*:text-gray-900 *:first:sticky *:first:left-0 *:first:bg-white *:first:font-medium"
                                        >
                                            <td className="px-3 py-2 whitespace-nowrap">{item.boardId}</td>
                                            <td className="px-3 py-2 whitespace-nowrap">{item.title}</td>
                                            <td className="px-3 py-2 whitespace-nowrap">{item.writer}</td>
                                            <td className="px-3 py-2 whitespace-nowrap">{formatDate(item.create_time)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="flex justify-center mt-10 space-x-2 items-center">
                        {page > 0 && (
                            <button
                                className="btn btn-outline"
                                onClick={() => handlePageChange(page - 1)}>
                                이전
                            </button>
                        )}

                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handlePageChange(idx)}
                                className={`btn btn-square ${idx === page ? 'btn-active btn-primary' : 'btn-outline'}`}>
                                {idx + 1}
                            </button>
                        ))}

                        {page < totalPages - 1 && (
                            <button
                                className="btn btn-outline"
                                onClick={() => handlePageChange(page + 1)}>
                                다음
                            </button>
                        )}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}

function formatDate(dateString) {
    if (!dateString || isNaN(new Date(dateString))) {
        return '-';
    }

    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    const hour = `${date.getHours()}`.padStart(2, '0');
    const minute = `${date.getMinutes()}`.padStart(2, '0');
    const second = `${date.getSeconds()}`.padStart(2, '0');

    return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}

export default Board1;