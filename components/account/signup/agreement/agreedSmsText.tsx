export default function AgreedSmsText() {
  return (
    <div>
      <div className="text-xs my-4">
        새로운 모임 개최 안내 및 모임 추천 동의
      </div>
      <div className=" border border-gray-200 p-2 flex flex-col h-[100px] overflow-auto text-xs">
        <div className="space-y-2">
          <div>새로운 썸타임즈 모임과 여행 개최 소식을 알려 드립니다.</div>
          <div>
            (동의하지 않아도 회원 가입은 가능하지만, 개최 알림을 받을 수
            없습니다.)
          </div>
          <div>그 외 이벤트, 고객 혜택 등 다양한 정보를 알려 드립니다.</div>
        </div>
      </div>
    </div>
  );
}
