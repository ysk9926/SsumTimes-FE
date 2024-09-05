export default function ApplyInfo() {
  return (
    <div className=" w-[900px] mb-20">
      {/* 신청서 작성 안내 */}
      <div className="flex flex-col font-semibold text-sm space-y-1 mb-5">
        <span>[썸타임즈 참가 신청서 작성 안내]</span>
        <span>- 제출하신 내용을 바탕으로 하트트래블 참가자 선정을 진행합니다.</span>
        <span>- 한 번 제출하시면 이후 신처하는 회차에도 본 신청서의 내용으로 참가자 선정을 진행합니다.</span>
      </div>
      {/* 조회, 수정, 삭제 안내 */}
      <div className="flex flex-col font-semibold text-sm space-y-1 mb-5">
        <span>[조회, 수정, 삭제 안내]</span>
        <span>- 조회/삭제: 이미 제출한 내용을 조회/삭제하고 싶으시면 "마이페이지 &gt; 1:1문의"에 요청해주세요.</span>
        <span>
          - 수정/변경: 이미 제출한 내용을 수정/변경하시려면 다시 제출해주시면 됩니다. (가장 최근에 제출하신 신청서만
          활용됩니다.)
        </span>
      </div>
      {/* 경고 */}
      <span className=" font-semibold text-sm text-red-500">
        ※ 하트트래블 각 회차별 참가 신청은 '하트트래블 신청하기' 메뉴에서 별도로 해주셔야 합니다.
      </span>
    </div>
  );
}
