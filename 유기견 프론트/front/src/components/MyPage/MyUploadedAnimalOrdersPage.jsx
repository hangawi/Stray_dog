import React, { useEffect, useState } from "react";
import getMyAnimalOrders from "../../api/getMyAnimalOrdersAPI";
import { useNavigate } from "react-router-dom";
import MyDetail from "../../api/MyAPi";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const MyUploadedAnimalOrdersPage = () => {
  const [animals, setAnimals] = useState([]);
  const [userId, setUserId] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    userDetail();
  }, [])

  useEffect(() => {
    loadOrders(userId, page);
  }, [userId, page]);

  const userDetail = async () => {
    try {
      const result = await MyDetail();
      setUserId(result.userId); 
    } catch (error) {
      console.error("유저 정보 불러오기 실패:", error);
    }
  };
  const loadOrders = async (animalId, page) => {
    try {
      const data = await getMyAnimalOrders(animalId, page);
      setAnimals(data.content);
    } catch (error) {
      console.error("주문 불러오기 실패", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
  <Header />
  <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">내가 올린 동물의 주문 목록</h2>

      {animals.length > 0 ? (
        <ul className="space-y-4">
          {animals.map((animal) => (
            <li
              key={animal.animalId}
              onClick={() => navigate(`/myanimalorder/${animal.animalId}`)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  동물 ID: {animal.animalId}
                </p>
                <p className="text-sm text-gray-500">작성자: {animal.userName}</p>
              </div>
              <span className="text-blue-500 font-medium">상세 보기 →</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center mt-10">등록한 동물 정보가 없습니다.</p>
      )}

      <div className="flex justify-center mt-10 space-x-4">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className={`py-2 px-4 rounded-lg font-semibold shadow ${
            page === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } transition`}
        >
          이전
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          다음
        </button>
      </div>
    </div>
  </main>
  <Footer />
</div>

  );
};

export default MyUploadedAnimalOrdersPage;