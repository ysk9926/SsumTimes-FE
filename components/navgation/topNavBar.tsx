import AccountButton from "./button/accountButton";
import MenuButton from "./button/menuButton";

export default function TopNavBar() {
  return (
    <div>
      <div className=" h-14 flex justify-center items-center">logo</div>
      <div className=" flex justify-between items-center bg-white px-10 text-black text-sm sticky w-full z-50">
        <MenuButton />
        <AccountButton />
      </div>
    </div>
  );
}
