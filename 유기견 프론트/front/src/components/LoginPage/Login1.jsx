import Login2 from "./Login2";
import Header from "../PublicPage/Header";
import React, { useState } from "react"; 
import login from "../../api/loginAPI"; 
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Footer from "../PublicPage/Footer";


const Login = ({onLoginSuccess}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    
    const handleLogin = async () => {
        try{
            const data =await login(email, pw);
            alert("로그인 성공");
            onLoginSuccess?.();
            navigate("/");
            console.log(data);
        }catch (e){
            alert("로그인 실패");
            console.log(e);
        }
    }
    return (
        <>
        <Header/>
        <div class="flex h-screen">
            <Login2/>
            <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div class="max-w-md w-full p-6">
                    <h1 class="text-3xl font-semibold mb-6 text-black text-center">로그인</h1>
                    <div class="space-y-4">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">이메일</label>
                            <input type="text"class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
                            <input type="password" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            placeholder="Password" value={pw} onChange={(e)=>setPw(e.target.value)}/>
                        </div>
                        <div>
                            <button class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                            onClick={handleLogin} >Sign Up</button>
                        </div>
                    </div>
                    <div class="mt-4 text-sm text-gray-600 text-center">
                        <p>계정을 가지지 않으셨나요? <Link to="/signup" className="text-black hover:underline">회원가입 하러가기</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Login;
