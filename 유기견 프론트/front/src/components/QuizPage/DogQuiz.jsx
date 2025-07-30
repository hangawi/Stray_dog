import React, { useState } from "react";

const questions = [
  {
    question: "여가 시간을 보낼 때 주로 어떤 장소를 선호하시나요?",
    options: ["집에서 조용히 쉬는 걸 좋아해요", "밖에서 활동하거나 여행을 자주 다녀요"],
  },
  {
    question: "당신의 성격을 한마디로 표현한다면 어떤 편인가요?",
    options: ["차분하고 조용한 스타일이에요", "활발하고 외향적인 성격이에요"],
  },
  {
    question: "반려견에게 가장 바라는 점은 무엇인가요?",
    options: ["조용히 곁에 있어주는 친구", "함께 뛰놀며 활동할 수 있는 친구"],
  },
  {
    question: "하루에 반려견과 산책할 수 있는 시간은 얼마나 되시나요?",
    options: ["30분 이내가 적당해요", "1시간 이상도 괜찮아요"],
  },
  {
    question: "강아지의 털 관리에 대한 선호는 어떤가요?",
    options: ["짧은 털이 더 편해요", "긴 털도 손질할 자신 있어요"],
  },
  {
    question: "현재 거주하고 있는 환경은 어떤가요?",
    options: ["아파트 등 실내 위주로 생활해요", "마당이 있어 야외 활동도 가능해요"],
  },
  {
    question: "다른 사람이나 강아지와의 교류는 어떤 편인가요?",
    options: ["처음엔 낯을 가리는 편이에요", "누구와도 잘 어울려요"],
  },
  {
    question: "가족 구성은 어떻게 되시나요?",
    options: ["1~2인 가구예요", "아이 또는 노인이 있는 다인 가구예요"],
  },
  {
    question: "강아지 훈련에 대해 어떻게 생각하시나요?",
    options: ["훈련이 쉬운 아이가 좋아요", "훈련하는 과정도 즐거워요"],
  },
  {
    question: "외출 시 반려견은 어떻게 하시고 싶나요?",
    options: ["혼자 집에 잘 있어줬으면 해요", "함께 외출하고 싶어요"],
  },
];


const results = [
  {
    title: "소형, 조용한 실내형",
    breeds: ["말티즈", "시츄"],
    desc: "집에서 조용히 지낼 수 있는 반려견을 원하시는 분께 추천합니다.",
  },
  {
    title: "소형, 활동적인 야외형",
    breeds: ["푸들", "잭 러셀 테리어"],
    desc: "작지만 활발한 성격의 강아지를 좋아하시는 분께 추천합니다.",
  },
  {
    title: "중형, 차분한 가족형",
    breeds: ["코커스파니엘", "골든리트리버"],
    desc: "가족과 조화를 이루며 지낼 수 있는 강아지를 원하신다면 이 유형입니다.",
  },
  {
    title: "중대형, 활동적인 보호형",
    breeds: ["진돗개", "보더콜리", "허스키"],
    desc: "에너지 넘치고 보호 본능이 강한 강아지를 찾는다면 적합합니다.",
  },
];

function DogQuiz() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0 });
  const [done, setDone] = useState(false);

  const handleAnswer = (choice) => {
    setScores((prev) => ({ ...prev, [choice]: prev[choice] + 1 }));
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const getResult = () => {
    const { A, B } = scores;
    if (A >= 7) return results[0];
    if (A >= 5) return results[1];
    if (B >= 7) return results[3];
    return results[2];
  };

  if (done) {
    const result = getResult();

    const breedImages = {
      말티즈: "/dog/말티즈.jpeg",
      시츄: "/dog/시츄.jpg",
      푸들: "/dog/푸들.jpg",
      "잭 러셀 테리어": "/dog/잭 러셀 테리어.jpg",
      코커스파니엘: "/dog/코커스파니엘.jpg",
      골든리트리버: "/dog/골든리트리버.jpg",
      진돗개: "/dog/진돗개.jpg",
      보더콜리: "/dog/보더콜리.jpg",
      허스키: "/dog/허스키.jpg",
    };

    return (
      <>
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-6">
          <h2 className="text-xl font-bold text-center">당신에게 어울리는 강아지 유형은?</h2>
          <h3 className="text-lg font-semibold text-center">{result.title}</h3>
          <p className="text-center">{result.desc}</p>
        </div>

        <p className="font-medium text-center mt-6">추천 품종</p>

        <div className="flex justify-center gap-6 flex-wrap mt-2">
          {result.breeds.map((breed) => (
            <article
              key={breed}
              className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25 w-80 bg-white"
            >
              <img
                alt={breed}
                src={breedImages[breed] || "/default.png"}
                className="h-56 w-full object-cover"
              />
              <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                <h4 className="mt-0.5 text-lg text-gray-900 dark:text-white text-center">{breed}</h4>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => {
              setCurrent(0);
              setScores({ A: 0, B: 0 });
              setDone(false);
            }}
          >
            다시하기
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2 text-center">
        질문 {current + 1} / {questions.length}
      </h2>
      <p className="text-xl font-bold mb-8 text-center">{questions[current].question}</p>

      <div className="flex gap-6 justify-between">
        <button
          onClick={() => handleAnswer("A")}
          className="flex-1 py-6 px-4 bg-blue-100 border border-blue-400 text-blue-800 rounded-lg shadow hover:bg-blue-200 text-center"
        >
          {questions[current].options[0]}
        </button>
        <button
          onClick={() => handleAnswer("B")}
          className="flex-1 py-6 px-4 bg-green-100 border border-green-400 text-green-800 rounded-lg shadow hover:bg-green-200 text-center"
        >
          {questions[current].options[1]}
        </button>
      </div>
    </div>
  );
}

export default DogQuiz;
