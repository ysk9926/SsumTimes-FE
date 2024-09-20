export default function Text1() {
  return (
    <div className="w-full flex flex-col items-center my-10">
      {/* text1 */}
      <div className="flex flex-col items-center space-y-1">
        <div>
          <span className="text-color_main">썸타임즈</span>
          <span>는</span>
        </div>
        <span>나의 반쪽을 찾기위한</span>
        <span>즐거운 추억여행입니다.</span>
      </div>
      {/* text2 */}
      <div className="flex flex-col items-center mt-5 bg-[#EFEFEF] w-[70%] py-5">
        <div>일만하느라 연애는 뒷전</div>
        <div>어디서? 어떻게?</div>
        <div>인연을 만나야할지</div>
        <div>모르겠다고요</div>
      </div>
      {/* text3 */}
      <div className="mt-5 space-y-1">
        <div>
          <span className="text-color_main">썸타임즈</span>
          <span>에서 특별한 인연과</span>
        </div>
        <div>재밌는 추억을 만들어 보세요.</div>
      </div>
    </div>
  );
}
