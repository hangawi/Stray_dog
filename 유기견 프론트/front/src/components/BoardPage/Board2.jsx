import React, { useEffect, useState } from 'react';
import createNewBoard from '../../api/NewBoard';
import { useNavigate } from 'react-router-dom';
import loginCheck from '../../api/LoginCheck';
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";

const Board2 = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [setIsLoggedIn] = useState(false);  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }
    createNewBoard(title, content)
      .then((response) => {
        console.log('게시글 생성 성공:', response);
        navigate('/board');
      })
      .catch((error) => {
        console.error('게시글 생성 실패:', error);
        alert('게시글 생성에 실패했습니다.');
      });
  };
  useEffect(() => {
    const checkLogin = async () => {
      const result = await loginCheck();
      setIsLoggedIn(result);
      if (!result) {
        alert('로그인 후 사용해주세요.');
        navigate('/login');
      }
    };
    checkLogin();
  })

  return (
    <div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-grow">
    <div className="max-w-3xl mx-auto mt-8 p-6 border border-gray-200 rounded-md shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">게시글 작성</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">제목:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">내용:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={10}
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  </main>
  <Footer />
</div>

  )
}
export default Board2;