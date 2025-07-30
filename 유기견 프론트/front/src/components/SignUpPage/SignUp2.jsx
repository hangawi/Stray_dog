import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";
import axios from "axios";

const SignUp2 = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    name: "",
    phone: "",
    age: "",
    address: "",
  });

  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) return;
    try {
      const response = await axios.post("api/auth/register", {
        email: formData.email,
        pw: formData.password,
        name: formData.name,
        pn: formData.phone,
        age: formData.age,
        addr: formData.address,
      });

      alert("회원가입 성공!");
      navigate("/signup3", { state: { name: formData.name } });
    } catch (error) {
      if (error.response?.status === 409) {
        alert("이미 존재하는 이메일입니다.");
      } else {
        console.error(error);
        alert("회원가입 중 오류가 발생했습니다.");
      }
    }
  };

  const validators = {
    password: (val) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(val),
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    name: (val) => /^[가-힣a-zA-Z\s]+$/.test(val),
    phone: (val) => /^\d{2,3}-\d{3,4}-\d{4}$/.test(val),
    age: (val) => {
      const num = Number(val);
      return !isNaN(num) && num >= 0 && num <= 120 && val.trim() !== "";
    },
    address: (val) => val.trim().length > 0 && val.length <= 100,
  };

  const errorMessages = {
    password: "8자 이상이며 숫자, 소문자, 대문자를 모두 포함해야 합니다.",
    email: "유효한 이메일 주소를 입력하세요.",
    name: "한글 또는 영문만 입력 가능합니다.",
    phone: "전화번호 형식은 010-1234-5678 이어야 합니다.",
    age: "0부터 120 사이의 숫자를 입력해주세요.",
    address: "주소를 입력해주세요 (최대 100자).",
  };

  const [touched, setTouched] = useState({
    password: false,
    email: false,
    name: false,
    phone: false,
    age: false,
    address: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const allValid = Object.entries(formData).every(
      ([key, val]) => validators[key](val)
    );
    setFormValid(allValid);
  }, [formData]);

  const inputStyle = {
    width: "100%",
    padding: "10px 0",
    fontSize: "16px",
    border: "none",
    borderBottom: "2px solid #ccc",
    borderRadius: 0,
    outline: "none",
  };

  const errorStyle = {
    color: "red",
    fontSize: "13px",
    marginTop: "4px",
    alignSelf: "flex-start",
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "30px",
          width: "500px",
          border: "2px solid #333",
          borderRadius: "10px",
          margin: "50px auto",
          backgroundColor: "#fafafa",
        }}
      >
        <div>
          <h2 className="sr-only">Steps</h2>
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">1</span>
                <span className="hidden sm:block"> 약관 동의 </span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">2</span>
                <span className="hidden sm:block"> 개인정보 입력 </span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">3</span>
                <span className="hidden sm:block"> 회원가입 완료 </span>
              </li>
            </ol>
          </div>
        </div>

        {["name", "age", "email", "password", "phone", "address"].map((field) => (
          <div key={field} style={{ width: "100%" }}>
            <label
              htmlFor={field}
              style={{ fontWeight: "600", fontSize: "18px", width: "100%" }}
            >
              {field === "password"
                ? "비밀번호"
                : field === "email"
                  ? "이메일"
                  : field === "name"
                    ? "이름"
                    : field === "phone"
                      ? "전화번호"
                      : field === "age"
                        ? "나이"
                        : "주소"}
            </label>
            <input
              id={field}
              type={
                field === "password"
                  ? "password"
                  : field === "email"
                    ? "email"
                    : field === "phone"
                      ? "tel"
                      : field === "age"
                        ? "number"
                        : "text"
              }
              className="input validator"
              required
              placeholder={`${field} 입력`}
              value={formData[field]}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={field === "address" ? 100 : undefined}
              pattern={
                field === "password"
                  ? "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  : field === "name"
                    ? "^[가-힣a-zA-Z\\s]+$"
                    : field === "phone"
                      ? "^\\d{10,11}$"
                      : undefined
              }
              title={errorMessages[field]}
              min={field === "age" ? 0 : undefined}
              max={field === "age" ? 120 : undefined}
              style={inputStyle}
            />
            {!validators[field](formData[field]) && touched[field] && (
              <div style={errorStyle}>{errorMessages[field]}</div>
            )}
          </div>
        ))}


        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            disabled={!formValid}
            style={{
              marginTop: "20px",
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "700",
              color: formValid ? "#fff" : "#aaa",
              backgroundColor: formValid ? "#007BFF" : "#ddd",
              border: formValid ? "2px solid #0056b3" : "2px solid #ccc",
              borderRadius: "8px",
              cursor: formValid ? "pointer" : "not-allowed",
              transition: "background-color 0.3s, border-color 0.3s",
              width: "100%",
            }}
          >
            회원가입
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp2;
