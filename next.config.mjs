/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 버전 및 기타 관련 설정
  reactStrictMode: true, // 엄격 모드를 활성화하여 코드 문제 감지

  // 이미지 관련 설정
  images: {
    // 외부 이미지 도메인 허용 설정
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sometimes-image.s3.ap-northeast-2.amazonaws.com", // 외부 이미지 도메인
        pathname: "/content-image/**", // 이 경로 하위의 이미지를 허용
      },
    ],

    // 기본 도메인 방식일 때 사용
    // domains: ['sometimes-image.s3.ap-northeast-2.amazonaws.com'],

    // 디바이스에 맞춰 이미지 크기 자동 조정
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // 이미지 품질 조정 (default: 75)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 성능 최적화를 위한 추가 설정 (optional)
  experimental: {
    scrollRestoration: true, // 페이지 스크롤 위치 복원
  },
};

export default nextConfig;
