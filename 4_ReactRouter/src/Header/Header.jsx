import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="w-full bg-slate-800 flex justify-between align-middle px-8 py-4 rounded-lg">
        <div className="flex">
          <img src="/vite.svg" alt="Logo" />
        </div>
        <div className="flex">
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink to="/" className={({isActive}) => `px-5 py-2 ${isActive ? "text-slate-500" : "text-slate-300" } cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => `px-5 py-2 ${isActive ? `text-slate-500` : `text-slate-300` } cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md`}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => `px-5 py-2 ${isActive ? "text-slate-500" : "text-slate-300" } cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md`}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex align-middle">
          <NavLink to="#" className="px-4 py-2 text-gray-300 cursor-pointer bg-black bg-opacity-20 hover:bg-opacity-40 rounded-md">
            Log In
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
