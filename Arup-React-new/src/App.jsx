// import React, { useState } from "react";
// import Navbar from "./assets/Components/Navbar";
// import Home from "./assets/Components/Home";
// import Services from "./assets/Components/Services";
// import Project from "./assets/Components/Project";
// import Insights from "./assets/Components/Insights";
// import About from "./assets/Components/About";
// import Contact from "./assets/Components/Contact";
// import HeroSection from "./assets/Components/HeroSection";

// function App() {
//   const [activeSection, setActiveSection] = useState("services");

//   const renderSection = () => {
//     switch (activeSection) {
//       case "Home":
//         return <Home />;
//       case "services":
//         return <Services />;
//       case "project":
//         return <Project />;
//       case "insights":
//         return <Insights />;
//       case "about":
//         return <About />;
//       case "contact":
//         return <Contact />;
//       default:
//         return <Services />;
//     }
//   };

//   // Detect hash change (when user clicks anchor links)
//   React.useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash.replace("#", "");
//       if (hash) setActiveSection(hash);
//     };
//     window.addEventListener("hashchange", handleHashChange);
//     handleHashChange(); // run once when loaded
//     return () => window.removeEventListener("hashchange", handleHashChange);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Home/>
//       <div className="mt-20">{renderSection()}</div>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Navbar from "./assets/Components/Navbar";
// import HeroSection from "./assets/Components/HeroSection";
// import Services from "./assets/Components/Services";
// import Project from "./assets/Components/Project";
// import Insights from "./assets/Components/Insights";
// import About from "./assets/Components/About";
// import Contact from "./assets/Components/Contact";

// function App() {
//   const [activePage, setActivePage] = useState("home");

//   const renderPage = () => {
//     switch (activePage) {
//       case "services":
//         return <Services />;
//       case "project":
//         return <Project />;
//       case "insights":
//         return <Insights />;
//       case "about":
//         return <About />;
//       case "contact":
//         return <Contact />;
//       default:
//         return <HeroSection />;
//     }
//   };

//   return (
//     <>
//       <Navbar setActivePage={setActivePage} />
//       {renderPage()}
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import Navbar from "./assets/Components/Navbar";
import Services from "./assets/Components/Services";
import Project from "./assets/Components/Project";
import Insights from "./assets/Components/Insights";
import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";
import HeroSection from "./assets/Components/HeroSection";
import Footer from "./assets/Components/Footer";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HeroSection />;
      case "services":
        return <Services />;
      case "project":
        return <Project />;
      case "insights":
        return <Insights />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      <div className="mt-20">{renderPage()}</div>
      <Footer/>
    </>
  );
}

export default App;
