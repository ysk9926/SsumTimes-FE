export default function Fotter() {
  return (
    <div className=" bg-white flex flex-col justify-center items-center space-y-5 pt-20 pb-5 text-tiny">
      <span>썸타임즈</span>
      <div className=" flex flex-col justify-center items-start w-[800px] ">
        <span>상호명: 멀랑 | 대표자: 표수민</span>
        <span>소재자: 부산</span>
        <span>사업자 등록번호: 133535</span>
        <span>개인정보책임자: 표수민</span>
        <span>고객지원: 1:1문의</span>
      </div>
      <div>
        <span>이용약관</span>
        <span className=" font-bold ml-4">개인정보처리방침</span>
      </div>
    </div>
  );
}
