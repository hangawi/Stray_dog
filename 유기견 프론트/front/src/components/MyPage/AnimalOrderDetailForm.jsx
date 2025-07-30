import React, { useEffect, useState } from "react";
import AnimalOrderDetails from "../../api/AnimalOrderDetailAPI";
import { useNavigate, useParams } from "react-router-dom";
import acceptOrder from "../../api/AcceptOrderAPI";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const AnimalOrderDetailForm = () => {
    const [orders, setOrders] = useState([]);
    const [loadingOrderId, setLoadingOrderId] = useState(null)
    const { animalId } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (animalId) {
            loadOrders(animalId);
        }
    }, [animalId]);

    const loadOrders = async (animalId) => {
        try {
            const data = await AnimalOrderDetails(animalId);
            setOrders(data); 
            console.log("신청 정보", data);
        } catch (error) {
            console.error("입양 신청 정보 불러오기 실패:", error);
        }
    };
    const handleAccept = async (orderId) => {
        setLoadingOrderId(orderId);
        try {
            acceptOrder(orderId);
            console.log(orderId)
            alert("수락함");
            await loadOrders(animalId);
        } catch (err) {
            console.error(err)
            alert("수락 실패")
        } finally {
            setLoadingOrderId(null)
        }
    }
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
  <Header />
  <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">입양 신청 상세</h2>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.orderId}
              className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  신청자: <span className="text-blue-600">{order.user.name}</span>
                </p>
                <p className="text-sm text-gray-500">
                  이메일: {order.user.email}
                </p>
                <p className="text-sm text-gray-500">
                  신청일: {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleAccept(order.orderId)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200"
              >
                선택
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center mt-10">신청 내역이 없습니다.</p>
      )}
    </div>
  </main>
  <Footer />
</div>


    );
};

export default AnimalOrderDetailForm;