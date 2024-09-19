export default function NotificationText() {
  return (
    <div className=" border border-gray-200 p-2 flex flex-col h-[200px] overflow-auto text-xs">
      {/* title */}
      <span className="font-extrabold mb-2">
        1. 개인정보 수집목적 및 이용목적
      </span>
      <div className="flex flex-col space-y-2">
        {/* 1-1번 */}
        <div className="flex flex-col space-y-1">
          <span>(1) 홈페이지 회원 가입 및 관리</span>
          <span>
            회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증,
            회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스
            부정 이용 방지, 만 14세 미만 아동의 개인정보 처리시 법정대리인의
            동의 여부 확인, 각종 고지․통지, 고충 처리 등의 목적
          </span>
        </div>
        {/* 1-2번 */}
        <div className="flex flex-col space-y-1">
          <span>(2) 재화 또는 서비스 제공</span>
          <span>
            물품 배송, 서비스 제공, 서비스 이용 안내, 계약서․청구서 발송, 콘텐츠
            제공, 맞춤 서비스 제공, 여행 및 모임 개최정보 안내, 여정 및 모임
            진행정보 안내, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등의
            목적
          </span>
        </div>
        {/* 1-3번 */}
        <div className="flex flex-col space-y-1">
          <span>(3) 고충 처리</span>
          <span>
            민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리
            결과 통보 등
          </span>
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        {/* title */}
        <span className="font-extrabold pb-2">2. 수집하는 개인정보 항목</span>
        {/* content */}
        <span>
          ID, 성명, 비밀번호, 주소, 휴대폰 번호, 이메일, 14세 미만 가입자의 경우
          법정대리인 정보
        </span>
      </div>
      <div className="mt-2 flex flex-col">
        {/* title */}
        <span className="font-extrabold pb-2">
          3. 개인정보 보유 및 이용기간
        </span>
        {/* content */}
        <div>
          <span className="font-extrabold">회원탈퇴 시까지 </span>
          <span>
            (단, 관계 법령에 보존 근거가 있는 경우 해당 기간 시까지 보유,
            개인정보처리방침에서 확인 가능)
          </span>
        </div>
      </div>
    </div>
  );
}
