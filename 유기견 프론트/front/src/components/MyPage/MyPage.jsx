import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import MyDetail from "../../api/MyAPi";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const MyPage = () => {
    const [form, setForm] = useState({
        email: "",
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
                    email: user.email,
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
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <form
                    className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-5"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-800">{form.name}님의 회원 정보</h2>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">이메일</label>
                        <input
                            name="email"
                            placeholder="이메일"
                            value={form.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">이름</label>
                        <input
                            name="name"
                            placeholder="이름"
                            value={form.name}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">전화번호</label>
                        <input
                            name="pn"
                            placeholder="전화번호"
                            value={form.pn}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">나이</label>
                        <input
                            name="age"
                            placeholder="나이"
                            value={form.age}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">주소</label>
                        <input
                            name="addr"
                            placeholder="주소"
                            value={form.addr}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <Link
                            to="/userupdate"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center">
                            정보 수정하기
                        </Link>
                    </div>
                </form>
            </main>
            <Footer />
        </div>


    );
};

export default MyPage;