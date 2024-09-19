import RedDot from "@/components/apply/util/redDot";
import { termsOfService } from "../util/termData"; // termsOfService 객체를 불러옵니다.

export default function TermsOfService() {
  return (
    <div className=" text-xs mb-3">
      <div className=" border border-gray-200 p-2 flex flex-col h-[200px] overflow-auto">
        {/* header */}
        <span className=" mb-4">{termsOfService.title}</span>
        {/* body */}
        <div className=" flex flex-col space-y-1 mb-4">
          {termsOfService.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <span className="font-bold">{section.sectionTitle}</span>
              {Array.isArray(section.content) ? (
                <ul className="ml-4 list-disc">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}
        </div>
        {/* footer */}
        <div className=" flex flex-col space-y-1">
          <span>귀하는 이용약관에 동의하지 않을 권리가 있습니다.</span>
          <span>
            그러나 동의를 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
}
