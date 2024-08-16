export default function ContentOriginal() {
  return (
    <div className=" w-[990px] flex flex-col justify-start">
      {/* TITLE */}
      <div className="flex justify-start items-center font-bold text-2xl mb-3">
        <span className=" ">썸타임즈 오리지널</span>
        <span className=" pb-1"> &gt;</span>
      </div>
      {/* 내용 이미지 */}
      <div className="flex flex-col justify-center items-center space-y-2">
        {/* image */}
        <img
          src="https://www.agoda.com/wp-content/uploads/2023/12/Phuket-couples-1244x700.jpg"
          alt="text"
          className=" h-[300px] w-full"
        />
        {/* content_title */}
        <div className=" font-semibold text-slate-500">토우가 팬션 1박 2일 (남6, 여6)</div>
      </div>
    </div>
  );
}
