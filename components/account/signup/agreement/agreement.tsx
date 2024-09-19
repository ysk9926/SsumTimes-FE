"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IAccountAgreement } from "../util/interface";
import RequiredCheckbox from "../util/input/requiredCheckbox";
import { Button, Checkbox } from "@nextui-org/react";
import TermsOfService from "./termsOfService";
import NotificationText from "./notificationText";
import AgreedSmsText from "./agreedSmsText";

// import { SubmitHandler, useForm } from "react-hook-form";
// import { Button, Checkbox } from "@nextui-org/react";
// import { IAccountAgreement } from "../util/interface";
// import RequiredCheckbox from "../util/input/requiredCheckbox";
// import TermsOfService from "./termsOfService";

// export default function SignupAgreeForm() {
//   const { register, watch, setValue, handleSubmit } =
//     useForm<IAccountAgreement>({
//       mode: "onChange",
//       defaultValues: {
//         agreeAll: false,
//         agreedToPrivacyPolicy: false,
//         agreedToEventNotifications: false,
//         agreedToSMS: false,
//         agreedToEmail: false,
//         isOver14: false,
//       },
//     });

//   // 각 체크박스 상태 감시
//   const agreeAll = watch("agreeAll");
//   const agreedToPrivacyPolicy = watch("agreedToPrivacyPolicy");
//   const agreedToEventNotifications = watch("agreedToEventNotifications");
//   const agreedToSMS = watch("agreedToSMS");
//   const agreedToEmail = watch("agreedToEmail");
//   const isOver14 = watch("isOver14");

//   // 모두 동의 버튼을 눌렀을 때 모든 체크박스 값을 설정하는 함수
//   const handleAllAgree = () => {
//     console.log(agreeAll, agreedToPrivacyPolicy);

//     setValue("agreedToPrivacyPolicy", agreeAll);
//     setValue("agreedToEventNotifications", agreeAll);
//     setValue("agreedToSMS", agreeAll);
//     setValue("agreedToEmail", agreeAll);
//     setValue("isOver14", agreeAll);
//   };

//   // submit 함수 추가
//   const onSubmitValid: SubmitHandler<IAccountAgreement> = async (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="flex flex-col">
//       <span className="mb-4">썸타임즈 회원 가입을 진행합니다.</span>
//       <span className="mb-6">
//         회원으로 가입하시면 새로운 하트트래블 개최 소식을 알려드립니다.
//       </span>
//       <form className="flex flex-col" onSubmit={handleSubmit(onSubmitValid)}>
//         {/* 모두 동의 */}
//         <label className="mb-10">
//           <Checkbox
//             {...register("agreeAll")}
//             color="default"
//             onChange={handleAllAgree} // 모든 체크박스 값 변경
//           >
//             <span className="text-sm">
//               이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
//             </span>
//           </Checkbox>
//         </label>

//         {/* 이용약관 동의 */}
//         <RequiredCheckbox
//           register={register}
//           labelText="이용약관 동의"
//           required={true}
//           fieldName="agreedToPrivacyPolicy"
//
//           checked={agreedToPrivacyPolicy} // 개별 체크박스 상태 전달
//         />
//         <TermsOfService />
//         {/* 개인정보 수집 및 이용 동의 */}
//         <RequiredCheckbox
//           register={register}
//           labelText="개인정보 수집 밎 이용 동의"
//           required={true}
//           fieldName="agreedToEventNotifications"
//
//           checked={agreedToEventNotifications} // 개별 체크박스 상태 전달
//         />
//         {/* <NotificationText /> */}
//         {/* 수신 동의 */}
//         {/* <AgreedSmsText /> */}
//         <RequiredCheckbox
//           register={register}
//           labelText="SMS 수신 동의"
//           required={false}
//           fieldName="agreedToSMS"
//
//           checked={agreedToSMS} // 개별 체크박스 상태 전달
//         />
//         <RequiredCheckbox
//           register={register}
//           labelText="E-MAIL 수신 동의"
//           required={false}
//           fieldName="agreedToEmail"
//
//           checked={agreedToEmail} // 개별 체크박스 상태 전달
//         />
//         {/* 14세 이상 */}
//         <RequiredCheckbox
//           register={register}
//           labelText="만 14세 이상입니다."
//           required={true}
//           fieldName="isOver14"
//
//           checked={isOver14} // 개별 체크박스 상태 전달
//         />
//         <Button radius="none" type="submit">
//           가입하기
//         </Button>
//       </form>
//     </div>
//   );
// }

// ("use clients");

export default function SignupAgreeForm() {
  const { register, watch, setValue, handleSubmit } =
    useForm<IAccountAgreement>({});
  // submit 함수 추가
  const onSubmitValid: SubmitHandler<IAccountAgreement> = async (data) => {
    console.log(data);
  };

  const checkValue = watch("agreeAll");
  const agreedToPrivacyPolicy = watch("agreedToPrivacyPolicy");
  const agreedToEventNotifications = watch("agreedToEventNotifications");
  const agreedToSMS = watch("agreedToSMS");
  const agreedToEmail = watch("agreedToEmail");
  const isOver14 = watch("isOver14");

  const handleAll = () => {
    console.log(!checkValue);
    setValue("agreedToPrivacyPolicy", !checkValue);
    setValue("agreedToEventNotifications", !checkValue);
    setValue("agreedToSMS", !checkValue);
    setValue("agreedToEmail", !checkValue);
    setValue("isOver14", !checkValue);
  };
  return (
    <form className="flex flex-col px-5" onSubmit={handleSubmit(onSubmitValid)}>
      <label className="mb-10">
        <Checkbox
          {...register("agreeAll")}
          color="default"
          onClick={handleAll}
          size="sm"
        >
          <span className="text-xs">
            이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
          </span>
        </Checkbox>
      </label>
      {/* 이용약관 동의 */}
      <RequiredCheckbox
        register={register}
        labelText="이용약관 동의"
        required={true}
        fieldName="agreedToPrivacyPolicy"
        checked={agreedToPrivacyPolicy}
      />
      <TermsOfService />
      {/* 개인정보 수집 및 이용 동의 */}
      <RequiredCheckbox
        register={register}
        labelText="개인정보 수집 밎 이용 동의"
        required={true}
        fieldName="agreedToEventNotifications"
        checked={agreedToEventNotifications} // 개별 체크박스 상태 전달
      />
      <NotificationText />
      {/* 수신 동의 */}
      <AgreedSmsText />
      <RequiredCheckbox
        register={register}
        labelText="SMS 수신 동의"
        required={false}
        fieldName="agreedToSMS"
        checked={agreedToSMS} // 개별 체크박스 상태 전달
      />
      <RequiredCheckbox
        register={register}
        labelText="E-MAIL 수신 동의"
        required={false}
        fieldName="agreedToEmail"
        checked={agreedToEmail} // 개별 체크박스 상태 전달
      />
      {/* 14세 이상 */}
      <RequiredCheckbox
        register={register}
        labelText="만 14세 이상입니다."
        required={true}
        fieldName="isOver14"
        checked={isOver14} // 개별 체크박스 상태 전달
      />
      <Button radius="none" type="submit">
        가입하기
      </Button>
    </form>
  );
}
