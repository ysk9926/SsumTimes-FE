export default function DetailNote() {
  return (
    <div className="flex flex-col mt-4 px-5 space-y-2 text-xs">
      <div className=" mt-4 flex flex-col space-y-1">
        <span>※ 유의 사항 (공통 안내 사항)</span>
      </div>
      <div className=" mt-4 flex flex-col space-y-1">
        <span>[참가 자격]</span>
        <span>- 미성년자, 기혼자는 참가할 수 없습니다. (사실혼 포함)</span>
        <span>- 신청 정보에 허위/위조 사실이 발견되면 참석이 취소될 수 있습니다.</span>
      </div>
      <div className=" mt-4 flex flex-col space-y-1">
        <span>[참가자 선정]</span>
        <span>- 참가 신청서의 내용을 바탕으로 서비스 운영자가 참가자를 선정합니다.</span>
        <span>
          - 참가자 선정 결과 발표 당일 중, 참가 대상자로 선정된 분들께 문자메시지(SMS) 또는 카카오톡 채널을 통해 참가
          의사 최종 확인을 진행합니다.
        </span>
        <span>
          - 참가 의사를 기한 내 회신하지 않을 경우, 참가 의사가 없는 것으로 간주하여 참가 대상에서 제외됩니다.
        </span>
      </div>
      <div className=" mt-4 flex flex-col space-y-1">
        <span>[취소/환불]</span>
        <span>- 참가 신청을 취소하려면 1:1문의 메일로 불참 의사를 전달해주세요.</span>
        <span>- 최종 참가자로 선정된 분들만 참가비 결제를 진행합니다.</span>
        <span>
          - 최종 참가자 확정 안내가 나간 후에는 취소/환불이 불가합니다. (단, 직계가족 경조사, 재해, 질병 등 긴급하고
          부득이한 사유로 인정될 만한 사정이 있는 경우에는 증빙서류 제출을 해주시면 환불을 진행해 드립니다.)
        </span>
        <span>
          {" "}
          - 개최 최소 인원 미달로 인한 행사 취소 시 사전에 개별 연락 드립니다. . 6:6 모임의 최소인원: 10명(남자5, 여자5)
        </span>
      </div>
      <div className=" mt-4 flex flex-col space-y-1">
        <span>[행사 당일 진행]</span>
        <span>- 행사 당일 신분증으로 본인 확인을 진행합니다. 신분증을 꼭 가져와 주세요.</span>
        <span>- 개최 장소까지는 개별 이동입니다.</span>
        <span className="pl-2">
          단, 개최 장소에 따라 각 회차마다 교통편 예매 또는 픽업을 지원해드리는 경우가 있습니다.
        </span>
        <span className="pl-2">자세한 내용은 최종 참가자에게 별도로 안내해 드립니다.</span>
        <span>- 행사 중 사진 촬영이 진행될 수 있으며, 얼굴을 가리고 행사 후기에 활용됩니다.</span>
        <span>- 행사 당일의 교통/기상 상황 등 현지 여건에 따라 일정 및 프로그램이 일부 변경될 수 있습니다.</span>
        <span>- 안전하고 원활한 진행을 위해 운영자의 안내/진행과 질서 유지에 협조 부탁 드립니다.</span>
        <span>- 다른 참가자의 개인정보를 요구하거나, 무단으로 수집/이용하는 행위는 금지입니다.</span>
        <span>- 질병, 신체 이상 등의 사유로 개별 관리가 필요하여 단체 행사의 원활한 참여에 어려움이 있거나,</span>
        <span>
          영업, 종교 포교, 홍보 등 행사의 목적과 관계 없는 사유로 참여하였거나, 정당한 사유 없이 행사 진행에 지장을
          초래하는 경우에는 참석 거절 또는 퇴소 조치 될 수 있으며, 환불 불가 합니다.
        </span>
      </div>
      <div className=" mt-4 flex flex-col space-y-1">
        <span>[기타 사항]</span>
        <span>- 참가자 선정을 위한 목적으로 개인정보를 수집/이용합니다.</span>
        <span>- 최종 선택 매칭 시 서로 연락처를 교환해 드립니다.</span>
        <span>- 회원 정보에 등록되어 있는 연락처로만 연락 드리오니 연락처를 정확하게 등록해 주시기 바랍니다.</span>
        <span>
          - 본 행사는 여행자 보험에 가입되어 있지 않습니다. 개인 부주의에 의한 안전 사고는 참여자 본인의 책임입니다.
        </span>
        <span>- 신청서에 기재된 정보를 바탕으로 이상형 매칭을 통해 참가자를 선정합니다.</span>
        <span>
          그러나 주최자가 각 참가자 이상형의 완전한 합치 및 신청서 기재 정보의 사실 여부를 보장하는 것은 아닙니다.
        </span>
        <span>- 썸타임즈은 다른 사람과 함께하는 곳입니다.</span>
        <span> 환경에 민감하거나 성격이 예민하신 분 등 단체 활동이 어려우신 분은 하트트래블과 맞지 않습니다.</span>
      </div>
      <div className=" mt-4 flex flex-col space-y-1">
        <span>- 문의처: 마이페이지&gt;1:1문의 또는 </span>
      </div>
      <div className=" mt-4 flex flex-col space-y-1">
        <span>ssomtimes22@gmail.com</span>
      </div>
    </div>
  );
}
