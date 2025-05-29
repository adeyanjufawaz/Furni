import Navbar from "../../components/Navbar";
import HeaderContents from "./HeaderContents";

function Header() {
  return (
    <div className="bg-pry top-0 w-full mx-auto">
      <div className="mx-auto w-3/4">
        <Navbar />
        <HeaderContents />
      </div>
    </div>
  );
}

export default Header;
