import { navigateImageList } from "../util/image";
import ThreeImage from "../util/threeImage";

export default function NavigateImage() {
  return (
    <div className="flex justify-center items-center bg-white pt-20">
      <ThreeImage imageList={navigateImageList} />
    </div>
  );
}
