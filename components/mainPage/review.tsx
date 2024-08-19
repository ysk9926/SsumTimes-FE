export default function Review() {
  return (
    <div className="bg-black bg-opacity-10 flex flex-col justify-center items-center h-[400px] -ml-[500px]">
      <div className=" text-white flex flex-col justify-center items-start w-[400px]">
        <span className=" text-2xl mb-3">썸타임즈 참가자들의</span>
        <span className=" text-3xl font-bold">생생한 후기를 듣고싶다면?</span>
      </div>
      <div className=" flex justify-start items-center w-[400px] mt-16">
        <div className=" font-semibold text-pink-500 bg-white px-6 py-2 rounded-full">
          <span>후기 보러가기 </span>
          <span className=" pl-2 pb-1"> &gt;</span>
        </div>
      </div>
    </div>
  );
}
