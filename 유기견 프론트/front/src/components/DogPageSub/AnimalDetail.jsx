import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import animalDetail from "../../api/AnimalDetailAPI";
import loginCheck from "../../api/LoginCheck";
import animalDelete from "../../api/AnimalDeleteAPI";
import MyDetail from "../../api/MyAPi";
import requestAdoption from "../../api/NewAnimalOrderAPI";
import getMyOrders from "../../api/AnimalOrderMyAPI";

const AnimalDetailForm = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [myDetail, setMyDetail] = useState(null);
  const [orderCompleted, setOrderCompleted] = useState(false); 
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await animalDelete(animal.animalId);
      alert("게시글이 삭제되었습니다.");
      navigate("/dog");
    } catch (err) {
      console.error(err);
      alert("삭제중 오류 발생");
    }
  };

  const handleOrder = async () => {
    if (!window.confirm("주문하시겠습니까?")) return;
    try {
      await requestAdoption(animal.animalId);
      alert("주문완료");
      navigate("/myorders");
    } catch (err) {
      console.error(err);
    }
  };
  const checkOrderCompleted = async () => {
    try {
      const ordersData = await getMyOrders(0);
      const ordersList = ordersData.content || [];
      const ordered = ordersList.some(
        (order) => order.animal?.animalId === Number(id)
      );
      setOrderCompleted(ordered);
    } catch (err) {
      console.error("주문 여부 확인 실패", err);
    }
  };

  useEffect(() => {
    const userDetail = async () => {
      const result = await MyDetail();
      setMyDetail(result);
    };
    const checkLogin = async () => {
      const resultLogin = await loginCheck();
      setIsLoggedIn(resultLogin);
    };
    const loadAnimal = async () => {
      try {
        const data = await animalDetail(id);
        setAnimal(data);
      } catch (err) {
        console.error("동물조회 실패" + err);
      } finally {
        setLoading(false);
      }
    };

    userDetail();
    checkLogin();
    loadAnimal();
    checkOrderCompleted(); 
  }, [id]);

  if (loading) return <div>로딩 중...</div>;
  if (!animal) return <div>동물 정보를 찾을 수 없습니다.</div>;

  return (
    <div className="w-full bg-white text-black font-sans">
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={
              animal.imageBase64s?.[0]
                ? `data:image/jpeg;base64,${animal.imageBase64s[0]}`
                : "/book.png"
            }
            alt={animal.name}
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col h-full justify-between">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold leading-tight">동물 상세 정보</h1>
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                {[{ label: "이름", value: `${animal.name}` },
                { label: "나이", value: `${animal.age}세` },
                { label: "몸무게", value: `${animal.kg}kg` },
                { label: "크기", value: animal.size },
                { label: "종류", value: animal.type },
                {
                  label: "성격",
                  value: animal.personalities?.join(", ") || "정보 없음",
                },
                ].map(({ label, value }, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4"
                  >
                    <dt className="font-medium text-gray-900">{label}</dt>
                    <dd className="text-gray-700 sm:col-span-2">{value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">설명</dt>
                  <dd className="text-gray-700 sm:col-span-2 whitespace-pre-wrap">
                    {animal.description}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">보호자 정보</h2>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>보호자 이름 : {animal.userName}</li>
                <li>보호자 이메일 : {animal.userEmail}</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between space-x-4 mt-6">
            <button
              className={`w-1/1 py-3 rounded-lg font-semibold ${!isLoggedIn || animal.userEmail === myDetail?.email || orderCompleted
                  ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                  : "bg-purple-600 text-white"
                }`}
              onClick={() => {
                console.log("클릭됨", { isLoggedIn, userEmail: myDetail?.email, animalUserEmail: animal.userEmail, orderCompleted });
                if (!isLoggedIn) {
                  alert("로그인 후 이용 가능합니다.");
                  return;
                }
                if (animal.userEmail === myDetail?.email) {
                  alert("본인이 등록한 동물은 입양할 수 없습니다.");
                  return;
                }
                if (orderCompleted) {
                  alert("이미 주문하셨습니다.");
                  return;
                }
                handleOrder();
              }}
            >
              입양하기
            </button>
          </div>

          {(animal?.userEmail === myDetail?.email ||
            myDetail?.role === "ROLE_ADMIN") && (
              <button
                onClick={handleDelete}
                className="mt-4 bg-red-500 text-white py-2 rounded font-semibold"
              >
                게시글 삭제
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailForm;
