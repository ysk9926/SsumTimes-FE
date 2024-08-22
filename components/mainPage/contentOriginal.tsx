import ThreeImage from "../util/threeImage";
import { mainContentImageList } from "../util/image";

export default function ContentOriginal() {
  return (
    <div className="w-[990px] flex flex-col justify-start">
      <div className=" flex flex-col justify-start mb-4">
        <div className=" text-2xl font-bold flex justify-start items-center">
          <span>썸타임즈 오리지널 </span>
          <span className=" pl-2 pb-1"> &gt;</span>
        </div>
        <p className=" text-lg text-gray-400 mt-1">싱글남녀 12명의 설레는 만남</p>
      </div>
      <ThreeImage imageList={mainContentImageList} />
    </div>
  );
}
