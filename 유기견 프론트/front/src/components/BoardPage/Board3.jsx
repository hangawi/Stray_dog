import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import boardDetailAPI from "../../api/BoardDetailAPI";
import loginCheck from "../../api/LoginCheck";
import deleteBoard from "../../api/BoardDeleteAPI";
import MyDetail from "../../api/MyAPi";

import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const Board3 = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [board, setBoard] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myDetail, setMyDetail] = useState(null);

    useEffect(() => {
        const checkLogin = async () => {
            const resultLogin = await loginCheck();
            setIsLoggedIn(resultLogin);
        };

        const userDetail = async () => {
            const result = await MyDetail();
            setMyDetail(result);
        };

        const fetchBoard = async () => {
            try {
                const data = await boardDetailAPI(id);
                setBoard(data);
            } catch (error) {
                console.error("게시글 불러오기 실패", error);
                navigate("/board");
            }
        };

        checkLogin();
        userDetail();
        fetchBoard();

    }, [id, navigate]);

    const handleDelete = async () => {
        try {
            await deleteBoard(board?.boardId);
            alert("게시글이 삭제되었습니다.");
            navigate("/board");
        } catch (error) {
            alert("삭제 중 오류가 발생했습니다.");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-8">
                    {board ? (
                        <>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl font-bold text-gray-900">{board.title}</h2>
                                {((myDetail?.email === board?.writerEmail) || (myDetail?.role === "ROLE_ADMIN")) && (
                                    <button
                                        onClick={handleDelete}
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                                    >
                                        게시글 삭제
                                    </button>
                                )}
                            </div>
                            <p className="mb-1"><strong>작성자:</strong> {board.writer}</p>
                            <p className="mb-4 text-gray-600"><strong>작성일:</strong> {formatDate(board.create_time)}</p>
                            <hr className="mb-6" />
                            <p className="whitespace-pre-wrap">{board.content}</p>
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </main>
            <div className="max-w-4xl mx-auto flex justify-end space-x-4 mt-4 mb-8 px-6">
                <button
                    onClick={() => navigate("/board")}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"> 
                    ← 목록으로 돌아가기
                </button>
            </div>
            <Footer />
        </div>


    );
};

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

export default Board3;
