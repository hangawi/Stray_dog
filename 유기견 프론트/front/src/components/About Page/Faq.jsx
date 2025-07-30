import React from "react";

const Faq = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 rounded-lg shadow">
  <div className="flow-root">
    <div className="-my-4 flex flex-col divide-y divide-gray-300">

      {/* FAQ 항목 1 */}
      <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between gap-1.5 text-blue-900 cursor-pointer hover:text-blue-600">
          <h2 className="text-lg font-semibold">강아지를 입양하려면 어떤 절차가 필요한가요?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
          </svg>
        </summary>
        <p className="pt-4 text-gray-700">
          회원가입 후 입양 신청서를 작성하고, 전화 또는 방문 상담을 통해 보호소와 인터뷰를 진행합니다. 이후 적합성이 확인되면 입양이 가능합니다.
        </p>
      </details>

      {/* FAQ 항목 2 */}
      <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between gap-1.5 text-blue-900 cursor-pointer hover:text-blue-600">
          <h2 className="text-lg font-semibold">입양 후 필요한 준비물은 무엇인가요?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
          </svg>
        </summary>
        <p className="pt-4 text-gray-700">
          기본적으로 사료, 식기, 배변 패드, 하네스 및 리드줄, 장난감, 침대 등이 필요합니다. 의료비나 예방접종 일정도 미리 확인해 주세요.
        </p>
      </details>

      {/* FAQ 항목 3 */}
      <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between gap-1.5 text-blue-900 cursor-pointer hover:text-blue-600">
          <h2 className="text-lg font-semibold">입양 후에도 도움을 받을 수 있나요?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
          </svg>
        </summary>
        <p className="pt-4 text-gray-700">
          네, 입양 후 일정 기간 동안 적응을 위한 상담과 사후 관리 서비스를 제공합니다. 반려 생활에 어려움이 있다면 언제든지 연락 주세요.
        </p>
      </details>

      {/* 새 질문 1 */}
      <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between gap-1.5 text-blue-900 cursor-pointer hover:text-blue-600">
          <h2 className="text-lg font-semibold">강아지를 입양할 때 비용이 드나요?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
          </svg>
        </summary>
        <p className="pt-4 text-gray-700">
          대부분의 경우, 예방접종 및 중성화 수술 비용이 포함된 입양비가 발생할 수 있습니다. 보호소마다 다르니 사전에 확인해 주세요.
        </p>
      </details>

      {/* 새 질문 2 */}
      <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between gap-1.5 text-blue-900 cursor-pointer hover:text-blue-600">
          <h2 className="text-lg font-semibold">아이와 함께 살아도 입양이 가능한가요?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
          </svg>
        </summary>
        <p className="pt-4 text-gray-700">
          가능합니다. 다만, 강아지의 성격과 아이의 연령 등을 고려하여 보호소와 충분히 상담 후 입양을 진행하는 것이 좋습니다.
        </p>
      </details>

    </div>
  </div>
</section>

    );
};

export default Faq;