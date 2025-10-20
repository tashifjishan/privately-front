import { FaMask } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { RiHome3Fill, RiMessage3Fill } from "react-icons/ri";
import { Link } from "react-router";

export default function Nav() {
  return (
    <div className="bg-gray-900 border-r-[1px] text-white flex flex-col items-center gap-6  py-6 px-2">
      <p className="text-3xl font-mono">YP</p>
      <RiHome3Fill className="text-xl mt-auto hover:text-slate-500 duration-300 cursor-pointer" />
      <Link to="/">
        <RiMessage3Fill className="text-xl hover:text-slate-500 duration-300 cursor-pointer" />
      </Link>
      <Link to="/watch">
        <MdLocalMovies className="text-xl hover:text-slate-500 duration-300 cursor-pointer" />
      </Link>
      <FaMask className="text-xl hover:text-slate-500 duration-300 cursor-pointer" />
    </div>
  );
}
