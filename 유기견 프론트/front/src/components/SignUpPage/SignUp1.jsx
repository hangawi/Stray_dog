import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";


const SignUp1 = () => {
  const [terms, setTerms] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/text/a.txt")
      .then((res) => res.text())
      .then((text) => setTerms(text));

    fetch("/text/b.txt")
      .then((res) => res.text())
      .then((text) => setPrivacy(text));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreeTerms && agreePrivacy) {
      navigate("/signup2"); 
    }
  };

  return (
    <div><Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
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
                <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">1</span>
                <span className="hidden sm:block"> 약관 동의 </span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"> 2 </span>
                <span className="hidden sm:block"> 개인정보 입력 </span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"> 3 </span>
                <span className="hidden sm:block"> 회원가입 완료 </span>
              </li>
            </ol>
          </div>
        </div>
        <fieldset
          className="fieldset"
          style={{
            width: "100%",
            border: "1px solid #aaa",
            borderRadius: "6px",
            padding: "15px",
          }}
        >
          <legend className="fieldset-legend" style={{ fontSize: "20px", fontWeight: "600" }}>
            회원가입 약관
          </legend>
          <textarea
            className="textarea w-150 h-100"
            value={terms}
            readOnly
            style={{
              width: "100%",
              height: "180px",
              resize: "none",
              fontSize: "16px",
              lineHeight: "1.5",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
            }}
          />
          <label
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              style={{ marginRight: "10px", width: "20px", height: "20px" }}
            />
            동의하십니까?
          </label>
        </fieldset>

        <fieldset
          className="fieldset"
          style={{
            width: "100%",
            border: "1px solid #aaa",
            borderRadius: "6px",
            padding: "15px",
          }}
        >
          <legend className="fieldset-legend" style={{ fontSize: "20px", fontWeight: "600" }}>
            개인정보 취급 방침
          </legend>
          <textarea
            className="textarea w-150 h-100"
            value={privacy}
            readOnly
            style={{
              width: "100%",
              height: "180px",
              resize: "none",
              fontSize: "16px",
              lineHeight: "1.5",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
            }}
          />
          <label
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={agreePrivacy}
              onChange={() => setAgreePrivacy(!agreePrivacy)}
              style={{ marginRight: "10px", width: "20px", height: "20px" }}
            />
            동의하십니까?
          </label>
        </fieldset>

        <button
          type="submit"
          disabled={!(agreeTerms && agreePrivacy)}
          onClick={handleSubmit} 
          style={{
            padding: "14px 40px",
            fontSize: "18px",
            fontWeight: "700",
            color: "#fff",
            backgroundColor: agreeTerms && agreePrivacy ? "#007BFF" : "#999",
            border: "2px solid",
            borderColor: agreeTerms && agreePrivacy ? "#0056b3" : "#777",
            borderRadius: "8px",
            cursor: agreeTerms && agreePrivacy ? "pointer" : "not-allowed",
            transition: "background-color 0.3s, border-color 0.3s",
          }}
        >
          회원가입
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp1;
