import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="w-full bg-slate-800 flex justify-between align-middle px-8 py-4 rounded-lg">
        <div className="flex items-center gap-4">
          <img src="/vite.svg" alt="Logo" />
          <p>Vite</p>
        </div>
        <div className="flex">
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="https://github.com/BitwiseGaurav" className="px-3 py-2 text-gray-300 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
                GitHub
              </Link>
            </li>
            <li>
              <Link to="https://linkedin.com/in/BitwiseGaurav" className="px-3 py-2 text-gray-300 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">Linkedin</Link>
            </li>
            <li>
              <Link to="https://replit.com/@BitwiseGaurav" className="px-3 py-2 text-gray-300 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">Replit</Link>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Footer