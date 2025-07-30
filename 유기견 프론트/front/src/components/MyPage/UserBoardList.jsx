import React, { useEffect, useState } from "react";
import UserBoardListAPI from "../../api/UserBoardsAPI";
import { useNavigate } from "react-router-dom";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const UserBoardList = () => {
  const [boards, setBoards] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const fetchBoards = async (page) => {
    try {
      const data = await UserBoardListAPI(page);
      setBoards(data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("게시글 불러오기 실패", error);
    }
  };

  useEffect(() => {
    fetchBoards(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="flex justify-center px-4">
          <div className="w-full max-w-6xl overflow-x-auto mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">내가 쓴 게시글</h2>
            </div>

            <table className="min-w-full divide-y divide-gray-300 text-base">
              <thead className="bg-gray-100">
                <tr className="text-left text-gray-700 font-semibold text-lg">
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">제목</th>
                  <th className="px-6 py-4">작성자</th>
                  <th className="px-6 py-4">작성일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">
                {boards?.content?.map((item) => (
                  <tr
                    key={item.boardId}
                    onClick={() => navigate(`/board/${item.boardId}`)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4">{item.boardId}</td>
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">{item.writer}</td>
                    <td className="px-6 py-4">{formatDate(item.create_time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-10 space-x-3 items-center">
              {page > 0 && (
                <button
                  className="px-5 py-2 text-base bg-gray-200 hover:bg-gray-300 rounded-md"
                  onClick={() => handlePageChange(page - 1)}
                >
                  ◀ 이전
                </button>
              )}

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx)}
                  className={`px-4 py-2 text-base rounded-md ${
                    idx === page
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              {page < totalPages - 1 && (
                <button
                  className="px-5 py-2 text-base bg-gray-200 hover:bg-gray-300 rounded-md"
                  onClick={() => handlePageChange(page + 1)}
                >
                  다음 ▶
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

function formatDate(dateString) {
  if (!dateString || isNaN(new Date(dateString))) {
    return "-";
  }

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minute = `${date.getMinutes()}`.padStart(2, "0");

  return `${year}/${month}/${day} ${hour}:${minute}`;
}

export default UserBoardList;
