import RedDot from "../util/redDot";

export default function Agreement() {
  return (
    <div className=" text-sm mb-3">
      <div className=" flex items-center mb-2">
        <span className="">개인정보 수집 및 이용 동의</span>
        <RedDot />
      </div>
      <div className=" border border-gray-200 p-2 flex flex-col h-[150px] overflow-auto">
        {/* header */}
        <span className=" mb-4">
          입력하신 개인정보는 하트트래블 참가자 선정, 선정 결과 안내 및 일정 안내 목적으로만 활용됩니다.
        </span>
        {/* body */}
        <div className=" flex flex-col space-y-1 mb-4">
          <span>- 수집 및 이용 주체 : 주식회사 케미컴퍼니</span>
          <span>- 수집 및 이용 목적 : 하트트래블 서비스 제공(참가자 선정, 선정 결과 안내, 일정 안내), 고객 관리</span>
          <span>
            - 수집 및 이용 항목 : 이름, 휴대전화번호, 성별, 거주지, 생년월일, 직업, 직장, 직무, 소득, 학력, 키, 체중,
            신청자 사진, 기타 신청서 내용(취미, 취향, 가치관, 가정환경, 이상형 등), 각 항목 증빙서류
          </span>
          <span>- 보유/이용 기간 : 개인정보 수집 및 이용 목적 달성 후 파기</span>
        </div>
        {/* footer */}
        <div className=" flex flex-col space-y-1">
          <span>귀하는 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다.</span>
          <span>그러나 동의를 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.</span>
        </div>
      </div>
    </div>
  );
}
