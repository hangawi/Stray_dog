import React, { useEffect, useState } from "react";
import getMyOrders from "../../api/AnimalOrderMyAPI"
import deletAnimalOrder from "../../api/AnimalOrderDeleteAPI"
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        loadOrders(page);
    }, [page])

    const loadOrders = async (page) => {
        try {
            const data = await getMyOrders(page);
            setOrders(data.content);
        } catch (err) {
            console.error(err);
        }
    }

    const handleDelete = async (orderId) => {
        try {
            await deletAnimalOrder(orderId);
            alert("주문 삭제완료")
            loadOrders(page);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
  <Header />
  <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">내 주문 목록</h2>
      {orders.length > 0 ? (
        <ul className="space-y-6">
          {orders.map((order) => (
            <li
              key={order.orderId}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                {order.animal.imageBase64s &&
                  order.animal.imageBase64s.length > 0 && (
                    <div className="flex space-x-2">
                      {order.animal.imageBase64s.map((base64, idx) => (
                        <img
                          key={idx}
                          src={`data:image/jpeg;base64,${base64}`}
                          alt={`${order.animal.name} image ${idx}`}
                          className="w-24 h-24 object-cover rounded-lg border"
                        />
                      ))}
                    </div>
                  )}
                <div>
                  <p className="text-lg font-semibold text-gray-700">
                    동물 이름: {order.animal.name}
                  </p>
                  <p className="text-sm text-gray-500">주문 ID: {order.orderId}</p>
                </div>
              </div>
              <div className="flex space-x-2 justify-end">
                <button
                  onClick={() => handleDelete(order.orderId)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 mt-10">주문 내역이 없습니다.</p>
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


    )
}
export default MyOrdersPage;