interface HoverInformationProps {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HoverInformation({ setIsHovered }: HoverInformationProps) {
  return (
    <div
      className=" absolute top-14 left-0 w-28 bg-slate-200 text-black text-sm"
      onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" py-1 pl-2 hover:bg-green-500 hover:text-white">이용 가이드</div>
      <div className=" py-1 pl-2 hover:bg-green-500 hover:text-white">자주 묻는 질문</div>
      <div className=" py-1 pl-2 hover:bg-green-500 hover:text-white">공지사항</div>
    </div>
  );
}
