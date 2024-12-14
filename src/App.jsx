import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';

import { ColorModeContext, useMode } from "./Themes/Themes";
import { CssBaseline,  ThemeProvider } from "@mui/material";
// import Header2 from "./components/header/Header2";
// import HeaderThree from "./components/header/HeaderThree";
// import HeaderOne from "./components/header/HeaderOne";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Spinner from "./components/Loading/Spinner";
// import CartShopping from "./components/context/CartShopping";
const CartShopping = lazy(() => import( "./components/context/CartShopping"))
import './index.css'
import "./i18next"
import WhoWeAre from "./components/pages/WhoWeAre";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
const HeaderTwo = lazy(() => import("./components/header/HeaderTwo"))


function App() {
  const [theme, colorMode] = useMode();
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> 
        <CssBaseline />
        <Suspense fallback={<Spinner />}>
          <CartShopping>
              <HeaderTwo />
              <Routes>
                {/* <Route path="/" element={<Hero />} /> */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/main" element={<Hero />} /> */}
                <Route path="/whoWeAre" element={<WhoWeAre />} />
                <Route path="/contactUs" element={<ContactUs />} />
              </Routes>
            <Footer />
          </CartShopping> 
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>


  )
}

export default App


// return (

//   <ColorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}> 
//       <CssBaseline />
//       <Suspense fallback={<Spinner />}>
//         <CartShopping>
//           {/* <HeaderOne /> */}
//           <HeaderTwo />
//           {/* <HeaderThree /> */}
//             <Hero />
//             <Main />
//           <Footer />
//         </CartShopping> 
//       </Suspense>
//     </ThemeProvider>
//   </ColorModeContext.Provider>


// )
