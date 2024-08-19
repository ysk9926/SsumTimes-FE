import ThreeImage, { IImage } from "../util/threeImage";

const imageList: IImage[] = [
  {
    alt: "신청 가이드 이미지",
    src: "https://cdn.imweb.me/thumbnail/20240222/3e5b0d8aacf1b.png",
    text: "신청 가이드",
    height: 200,
    weidht: 200,
    fotterClass: " flex justify-center items-center -mt-6 z-10 font-bold text-lg",
  },
  {
    alt: "여행 이미지",
    src: "https://cdn.imweb.me/thumbnail/20240222/1035bc9905eea.png",
    text: "여행",
    height: 200,
    weidht: 200,
    fotterClass: " flex justify-center items-center -mt-6 z-10 font-bold text-lg",
  },
  {
    alt: "후가 이미지",
    src: "https://cdn.imweb.me/thumbnail/20240222/c74c14a43354e.png",
    text: "후기",
    height: 200,
    weidht: 200,
    fotterClass: " flex justify-center items-center -mt-6 z-10 font-bold text-lg",
  },
];

export default function NavigateImage() {
  return (
    <div className="flex justify-center items-center bg-white pt-20">
      <ThreeImage imageList={imageList} />
    </div>
  );
}
