import React, { useEffect, useRef, useState } from 'react';
import newAnimal from '../../api/NewAnimal';
import personalities from '../../api/Personalities';
import { useNavigate } from 'react-router-dom';

const AnimalRegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    age: '',
    kg: '',
    size: '중형',
    type: '개',
    description: '',
    personalityNames: [],
    imageBlobs: [],
    imageFiles: [],
  });

  const [personalityList, setPersonalityList] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    personalities()
      .then(setPersonalityList)
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);

    const base64Images = await Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    );

    setForm((prev) => ({
      ...prev,
      imageBlobs: base64Images,
      imageFiles: files,
    }));
  };

  const handlePersonalityToggle = (name) => {
    setForm((prev) => {
      const update = prev.personalityNames.includes(name)
        ? prev.personalityNames.filter((n) => n !== name)
        : [...prev.personalityNames, name];
      return { ...prev, personalityNames: update };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newAnimal(form);
      alert('등록 성공');
      if (form.type === '개') {
        navigate('/dog');  
      } else if (form.type === '고양이') {
        navigate('/cat');  
      } else {
        navigate('/Animals'); 
      }

    } catch (err) {
      console.error(err);
      alert('등록 실패');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">동물 등록</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">이름</label>
          <input
            name="name"
            value={form.name}
            placeholder="이름"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">나이</label>
            <input
              name="age"
              value={form.age}
              placeholder="나이"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">몸무게 (kg)</label>
            <input
              name="kg"
              value={form.kg}
              placeholder="몸무게"
              type="number"
              step="0.1"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">크기</label>
            <select
              name="size"
              value={form.size}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="소형">소형</option>
              <option value="중형">중형</option>
              <option value="대형">대형</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">종류</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="개">개</option>
              <option value="고양이">고양이</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">설명</label>
          <textarea
            name="description"
            value={form.description}
            placeholder="설명"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 h-24"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">성격 선택</label>
          <div className="flex flex-wrap gap-3">
            {personalityList.map((name) => (
              <label key={name} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  value={name}
                  checked={form.personalityNames.includes(name)}
                  onChange={() => handlePersonalityToggle(name)}
                />
                <span>{name}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">이미지 업로드</label>
          <button
            type="button"
            onClick={triggerFileInput}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded px-4 py-6 text-gray-700 bg-gray-50 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5A2.25 2.25 0 006.75 19.5h7.5A2.25 2.25 0 0016.5 17.25v-7.5A2.25 2.25 0 0014.25 7.5h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75A2.25 2.25 0 0121 15v7.5a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 019 22.5v-.75"
              />
            </svg>
            <span className="font-medium">파일 선택</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div className="mt-2 text-sm text-gray-700">
            {form.imageFiles.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {form.imageFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">선택된 파일이 없습니다</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition"
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AnimalRegisterForm;
