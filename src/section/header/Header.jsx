
import Navbar from "../../components/Navbar";
import HeaderContents from "./HeaderContents";

function Header() {
  return (
    <div className="bg-pry top-0 w-full px-[5%] mx-auto">
      <div className="mx-auto"></div>
      <Navbar />
      <HeaderContents/>
    </div>
  );
}

export default Header;
