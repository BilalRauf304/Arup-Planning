// import React, { useState } from "react";

// function Navbar({ setActivePage }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = (page) => {
//     setActivePage(page);
//     setIsOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="fixed w-full bg-white shadow-md top-0  z-50">
//       <nav className="max-w-7xl mx-auto px-0 py-3">
//         {/* Desktop Navbar */}
//         <div className="hidden md:flex items-center gap-[10rem] w-full px-6">
//           {/* Left Side */}
//           <h1
//             onClick={() => handleClick("home")}
//             className="text-3xl font-bold text-red-600 cursor-pointer"
//           >
//             ARUP
//           </h1>
//           <ul className="flex space-x-8 font-medium">
//             <li>
//               <button
//                 onClick={() => handleClick("home")}
//                 className="hover:text-blue-500"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleClick("services")}
//                 className="hover:text-blue-500"
//               >
//                 Services
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleClick("project")}
//                 className="hover:text-blue-500"
//               >
//                 Project
//               </button>
//             </li>
//           </ul>

          

//           {/* Right Side */}
//           <ul className="flex space-x-8 font-medium ">
//             <li>
//               <button
//                 onClick={() => handleClick("insights")}
//                 className="hover:text-blue-500"
//               >
//                 Insights
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleClick("about")}
//                 className="hover:text-blue-500"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleClick("contact")}
//                 className="hover:text-blue-500"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile Navbar */}
//         <div className="md:hidden flex justify-between items-center">
//           <h1
//             onClick={() => handleClick("home")}
//             className="text-3xl font-bold text-red-600 cursor-pointer"
//           >
//             ARUP
//           </h1>
//           <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4 flex flex-col space-y-2 font-medium  ">
//             <button onClick={() => handleClick("home")} className="hover:text-blue-500">
//               Home
//             </button>
//             <button onClick={() => handleClick("services")} className="hover:text-blue-500">
//               Services
//             </button>
//             <button onClick={() => handleClick("project")} className="hover:text-blue-500">
//               Project
//             </button>
//             <button onClick={() => handleClick("insights")} className="hover:text-blue-500">
//               Insights
//             </button>
//             <button onClick={() => handleClick("about")} className="hover:text-blue-500">
//               About
//             </button>
//             <button onClick={() => handleClick("contact")} className="hover:text-blue-500">
//               Contact
//             </button>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";

function Navbar({ setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed w-full bg-white shadow-md top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LEFT SIDE — 3 buttons + logo */}
        <div className="flex items-center space-x-8 font-medium">
              {/* Logo */}
          <h1
            onClick={() => handleClick("home")}
            className="text-3xl font-bold text-red-600 cursor-pointer ml-6"
          >
            ARUP
          </h1>
          <button onClick={() => handleClick("home")} className="hover:text-blue-500">
            Home
          </button>
          <button onClick={() => handleClick("services")} className="hover:text-blue-500">
            Services
          </button>
          <button onClick={() => handleClick("project")} className="hover:text-blue-500">
            Project
          </button>

        
        </div>

        {/* RIGHT SIDE — 3 buttons */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <button onClick={() => handleClick("insights")} className="hover:text-blue-500">
            Insights
          </button>
          <button onClick={() => handleClick("about")} className="hover:text-blue-500">
            About
          </button>
          <button onClick={() => handleClick("contact")} className="hover:text-blue-500">
            Contact
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 font-medium text-center pb-4">
          <button onClick={() => handleClick("home")} className="hover:text-blue-500">
            Home
          </button>
          <button onClick={() => handleClick("services")} className="hover:text-blue-500">
            Services
          </button>
          <button onClick={() => handleClick("project")} className="hover:text-blue-500">
            Project
          </button>
          <button onClick={() => handleClick("insights")} className="hover:text-blue-500">
            Insights
          </button>
          <button onClick={() => handleClick("about")} className="hover:text-blue-500">
            About
          </button>
          <button onClick={() => handleClick("contact")} className="hover:text-blue-500">
            Contact
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
