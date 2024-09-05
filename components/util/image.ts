export interface IImageList {
  alt: string;
  src: string;
  text: string;
  height: number;
  weidht: number;
  fotterClass: string;
}

export const navigateImageList: IImageList[] = [
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

export const mainContentImageList: IImageList[] = [
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

interface IImage {
  src: string;
  alt: string;
  class: string;
}

export const titleImageInfo: IImage = {
  src: "https://shoppingmall-product-image.s3.ap-northeast-2.amazonaws.com/product_detail_img/7abd3d43-b073-4654-82b1-ba0df1235b2b.jpg",
  // src: "https://www.agoda.com/wp-content/uploads/2023/12/Phuket-couples-1244x700.jpg",
  alt: "couple_image",
  class: "w-full h-full absolute -z-10",
};

export const backgroundImageInfo: IImage = {
  src: "https://shoppingmall-product-image.s3.ap-northeast-2.amazonaws.com/product_detail_img/f2078553-01f5-42e4-94ba-271c79e9b6fb.jpg",
  // src: "https://plus.unsplash.com/premium_photo-1676667573109-273586405c96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "bgImage",
  class: "",
};
