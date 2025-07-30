import React from 'react';
import { useNavigate } from 'react-router-dom';

const reviewData = [
  {
    title: "입맛 까다로운 댕댕이를 위한 맛있는 선택!",
    subtitle: "강아지 간식 캠페인",
    items: [
      { image: "book.png", badge: "마감 임박", title: "[멍스타그램] 소고기 져키", detail: "30g 3팩 체험" },
      { image: "book.png", badge: "마감 임박", title: "[멍쿠르트] 반려견 유산균 스낵", detail: "1개월 분량" },
      { image: "book.png", badge: "마감 임박", title: "[치킨포독] 닭가슴살 트릿", detail: "무염/무색소 간식 100g" },
    ],
  },
  {
    title: "건강한 피부와 윤기나는 털을 위해!",
    subtitle: "강아지 뷰티/목욕 캠페인",
    items: [
      { image: "book.png", badge: "마감 임박", title: "[버블펫] 저자극 애견샴푸", detail: "샴푸 250ml 1개" },
      { image: "book.png", badge: "마감 임박", title: "[도그스킨] 털복숭이 브러쉬", detail: "슬리커 브러쉬 1개" },
      { image: "book.png", badge: "3일 남음", title: "[스파독] 애견 전용 타월", detail: "흡수력 좋은 타월 2장" },
    ],
  },
  {
    title: "함께 찍는 일상이 콘텐츠!",
    subtitle: "강아지 클립/촬영 캠페인",
    items: [
      { image: "book.png", badge: "마감 임박", title: "[댕스타] 강아지 셀프촬영 스튜디오", detail: "1시간 촬영권" },
      { image: "book.png", badge: "마감 임박", title: "[마이펫뷰] 반려견 VLOG 체험단", detail: "1인 콘텐츠 제작 참여" },
      { image: "book.png", badge: "5일 남음", title: "[포토펫] 강아지 프로필 촬영", detail: "작가 촬영 + 편집본 제공" },
    ],
  },
  {
    title: "강아지를 위한 실속템 한가득!",
    subtitle: "강아지 생활 캠페인",
    items: [
      { image: "book.png", badge: "마감 임박", title: "[코코하우스] 강아지 방석 세트", detail: "사계절용 방석 1개" },
      { image: "book.png", badge: "4일 남음", title: "[헬로독] 산책 가방 키트", detail: "배변봉투+물통+파우치" },
      { image: "book.png", badge: "3일 남음", title: "[멍하우스] 실내 애견 하우스", detail: "접이식 하우스 1개" },
    ],
  },
];

const Main4 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/commingsoon");
  };

  return (
    <div className="w-full bg-white px-6 py-12">
      <div className="mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8 pl-2">업데이트 예정</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
          {reviewData.map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer"
              onClick={handleClick}
            >
              <h3 className="text-base font-semibold mb-1">{section.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{section.subtitle}</p>

              {section.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                      {item.badge}
                    </span>
                    <h4 className="text-sm font-medium mt-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main4;
