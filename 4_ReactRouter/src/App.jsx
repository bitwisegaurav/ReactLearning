// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home, { Test } from "./Main/Home";
import About from "./Main/About";
import Contact from "./Main/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//     ],
//   }
// ])

function App() {
  return (
    <>
      <div className="flex justify-center py-4">
        <div className="grid w-5/6 rounded-lg p-5 text-gray-300 gap-6">
          <Header />
          <div className="relative overflow-hidden flex flex-col justify-start items-center w-full bg-slate-800 rounded-lg" style={{height: "calc(100vh - 16rem)"}}>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/test/:text" element={<Test/>} />
            </Routes>
          
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
