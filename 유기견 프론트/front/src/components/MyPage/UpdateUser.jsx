import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import updateUser from "../../api/UpdateUserAPI";
import MyDetail from "../../api/MyAPi";
import deleteUser from "../../api/DeleteUserAPI";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const UpdateUserForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pw: "",
    name: "",
    pn: "",
    age: "",
    addr: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await MyDetail();
        setForm({
          pw: "",
          name: user.name,
          pn: user.pn,
          age: user.age,
          addr: user.addr
        })
      } catch (err) {
        console.error(err)
      }
    }
    fetchUser();
  }, []);


  const handleDelete = async () => {
    const confirmDelete = window.confirm("정말 탈퇴하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await deleteUser();
      alert("회원 탈퇴 완료");
      navigate("/goodbye"); 
    } catch (err) {
      alert("회원 탈퇴 실패");
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(form.pw, form.name, form.pn, Number(form.age), form.addr);
      alert("회원정보 수정 완료");
      navigate("/mypage"); 
    } catch (err) {
      alert("회원정보 수정 실패");
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">회원 정보 수정</h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">이름</label>
            <input
              name="name"
              placeholder="이름"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">비밀번호</label>
            <input
              name="pw"
              type="password"
              placeholder="비밀번호"
              value={form.pw}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">전화번호</label>
            <input
              name="pn"
              placeholder="전화번호"
              value={form.pn}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">나이</label>
            <input
              name="age"
              type="number"
              placeholder="나이"
              value={form.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">주소</label>
            <input
              name="addr"
              placeholder="주소"
              value={form.addr}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              수정하기
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              탈퇴하기
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default UpdateUserForm;