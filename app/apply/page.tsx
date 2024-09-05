import Form from "@/components/apply/form/form";
import ApplyInfo from "@/components/apply/info";

export default function Apply() {
  return (
    <div className=" px-10 flex flex-col items-center">
      <ApplyInfo />
      <Form />
    </div>
  );
}
