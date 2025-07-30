import React, { useState } from "react";

const questions = [
  {
    question: "평소 고양이와 함께 보내는 시간이 얼마나 되시나요?",
    options: ["자주 함께 있고 싶어요", "혼자 있는 시간도 괜찮아요"],
  },
  {
    question: "어떤 성격의 고양이가 더 마음에 드시나요?",
    options: ["다정하고 애교 많은 고양이", "조용하고 독립적인 고양이"],
  },
  {
    question: "털 빠짐에 대해 얼마나 민감하신가요?",
    options: ["털이 적게 빠지는 아이가 좋아요", "털 빠짐은 크게 신경 안 써요"],
  },
  {
    question: "고양이를 키워보신 경험이 있으신가요?",
    options: ["아니요, 처음이에요", "네, 키워본 적 있어요"],
  },
  {
    question: "고양이와 얼마나 자주 교감하길 원하시나요?",
    options: ["매일 시간을 내어 놀아주고 싶어요", "가끔씩 교감해도 괜찮아요"],
  },
  {
    question: "고양이가 생활하게 될 공간은 어떤가요?",
    options: ["완전한 실내 환경이에요", "베란다나 마당이 있어요"],
  },
  {
    question: "같이 사는 가족 중에 아이나 노인이 있으신가요?",
    options: ["네, 함께 살고 있어요", "아니요, 없습니다"],
  },
  {
    question: "고양이의 외모에서 어떤 스타일이 더 끌리시나요?",
    options: ["작고 귀여운 외모", "우아하고 날렵한 외모"],
  },
  {
    question: "하루 중 집을 비우는 시간은 어느 정도인가요?",
    options: ["대부분 집에 있어요", "외출 시간이 많은 편이에요"],
  },
  {
    question: "고양이 알러지에 대해 걱정이 있으신가요?",
    options: ["네, 알러지가 있어요", "아니요, 괜찮아요"],
  },
];


const results = [
  {
    title: "초보자에게 적합한 고양이",
    breeds: ["브리티시 쇼트헤어", "러시안 블루"],
    desc: "성격이 온순하고 털이 적게 빠지는 고양이입니다.",
  },
  {
    title: "활발하고 애교 많은 고양이",
    breeds: ["먼치킨", "아비시니안"],
    desc: "활동적이고 사람과의 상호작용을 좋아하는 고양이입니다.",
  },
  {
    title: "독립적인 고양이",
    breeds: ["스핑크스", "샴"],
    desc: "혼자 있는 걸 잘 견디며 독립적인 성향을 가진 고양이입니다.",
  },
  {
    title: "가족 친화적인 고양이",
    breeds: ["노르웨이 숲", "메인쿤"],
    desc: "아이들과 잘 어울리고, 크지만 순한 성격을 가진 고양이입니다.",
  },
];

const breedImages = {
  "브리티시 쇼트헤어": "/cat/브리티시 쇼트헤어.jpg",
  "러시안 블루": "/cat/러시안 블루.jpg",
  먼치킨: "/cat/먼치킨.jpg",
  아비시니안: "/cat/아비시니안.jpg",
  스핑크스: "/cat/스핑크스.jpg",
  샴: "/cat/샴.jpg",
  "노르웨이 숲": "/cat/노르웨이 숲.jpg",
  메인쿤: "/cat/메인쿤.jpg",
};

function CatQuiz() {
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
    if (B >= 7) return results[2];
    return results[3];
  };

  if (done) {
  const result = getResult();

  return (
    <>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-6">
        <h2 className="text-xl font-bold text-center">당신에게 어울리는 고양이 유형은?</h2>
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
              src={breedImages[breed]}
              className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
              <h4 className="mt-0.5 text-lg text-gray-900 dark:text-white">{breed}</h4>
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

export default CatQuiz;
