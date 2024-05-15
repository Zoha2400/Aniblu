import "./Header.scss";
import SearchComponent from "./SearchInput";

function Header() {
  return (
    <div className="Header-wrapper container-wrapped w-full h-24 bg-zinc-900 flex justify-center items-center">
      <div className="Header w-5/6 flex justify-between ">
        <p className="nameWebSite text-white text-2xl">
          Takedzo<span className="text-red-500">.net</span>
        </p>
        <SearchComponent />
      </div>
    </div>
  );
}

export default Header;
