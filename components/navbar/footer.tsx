export default function Footer() {
  return (
    <div className="mt-10">
      <div className=" w-full h-[0.2px] bg-slate-200 mb-7"></div>
      <div className=" px-5">
        <span className="text-xs font-semibold">썸타임즈</span>
        <div className=" flex flex-col justify-center items-start text-xs font-light mt-2 space-y-1">
          <span>상호명: P.D&P </span>
          <span>대표자 : 표수민 </span>
          <span>소재지 : 부산 금정구 금사로 130, 201호</span>
          <span>사업자등록번호 : 583-40-01311</span>
          <span>고객지원 : 마이페이지 &gt; 1:1문의</span>
          <span>010-4796-4850 / ssomtimes22@gmail.com</span>
        </div>
        <div className=" text-xs font-light mt-5 mb-10 space-x-3">
          <span>이용약관</span>
          <span>개인정보처리방침</span>
        </div>
      </div>
    </div>
  );
}
