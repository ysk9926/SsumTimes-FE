import { Card, CardFooter, Image, image } from "@nextui-org/react";
import ThreeImage, { IImage } from "../util/threeImage";

const imageList: IImage[] = [
  {
    alt: "준비 중",
    src: "https://img.freepik.com/free-vector/coming-soon-background-with-focus-spot-light_1017-31449.jpg?t=st=1724050400~exp=1724054000~hmac=c1f3bfedb1a1d48ccefcecad126ff8e78772130bf2440f6771f3a883031397bf&w=1380",
    text: "준비 중",
    height: 200,
    weidht: 400,
    fotterClass: " flex justify-center items-center z-10 font-semibold",
  },
  {
    alt: "토우가 이미지",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-712482016763834125/original/d1dda39f-b788-499e-9759-08c14d714d3b.jpeg?im_w=1200",
    text: "토우가 팬션 1박 2일 (남6, 여6)",
    height: 200,
    weidht: 400,
    fotterClass: " flex justify-center items-center z-10 font-semibold",
  },
  {
    alt: "준비 중",
    src: "https://img.freepik.com/free-vector/coming-soon-background-with-focus-spot-light_1017-31449.jpg?t=st=1724050400~exp=1724054000~hmac=c1f3bfedb1a1d48ccefcecad126ff8e78772130bf2440f6771f3a883031397bf&w=1380",
    text: "준비 중",
    height: 200,
    weidht: 400,
    fotterClass: " flex justify-center items-center z-10 font-semibold",
  },
];

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
      <ThreeImage imageList={imageList} />
      {/* <div className="flex justify-center items-center mt-2">
        <Card radius="lg" className=" border-none" shadow="none">
          <Image
            alt="토우가 이미지"
            className=" object-cover"
            height={200}
            src="https://www.agoda.com/wp-content/uploads/2023/12/Phuket-couples-1244x700.jpg"
            width={200}
          />
          <CardFooter className=" flex justify-center items-center z-10">
            <p className=" font-semibold text-tiny">토우가 팬션 1박 2일 (남6, 여6)</p>
          </CardFooter>
        </Card>
      </div> */}
    </div>
  );
}
