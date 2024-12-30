import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';

import { ColorModeContext, useMode } from "./Themes/Themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import Header2 from "./components/header/Header2";
// import HeaderThree from "./components/header/HeaderThree";
// import HeaderOne from "./components/header/HeaderOne";
import Footer from "./components/footer/Footer";
import Spinner from "./components/Loading/Spinner";
// import CartShopping from "./components/context/CartShopping";
const CartShopping = lazy(() => import("./components/context/CartShopping"))
import './index.css'
import "./i18next"
import WhoWeAre from "./components/pages/WhoWeAre";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import LuigiBormioli from "./components/pages/LuigiBormioli";
import LaTavola from "./components/pages/LaTavola";
import Retail from "./components/pages/Retail";
import Glassware from "./components/pages/Glassware";
import Chinaware from "./components/pages/Chinaware";
import CastIronOven from "./components/pages/CastIronOven";
import Polycarbonate from "./components/pages/Polycarbonate";
import Silverware from "./components/pages/Silverware";
import Buffetware from "./components/pages/Buffetware";
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
              <Route path="/" element={<Home />} />
              <Route path="/whoWeAre" element={<WhoWeAre />} />
              <Route path="/Luigi-Bormioli" element={<LuigiBormioli />} />
              <Route path="/La-Tavola" element={<LaTavola />} />
              <Route path="/glassware" element={<Glassware />} />
              <Route path="/chinaware" element={<Chinaware />} />
              <Route path="/CastIronOven" element={<CastIronOven />} />
              <Route path="/Polycarbonate" element={<Polycarbonate />} />
              <Route path="/Silverware" element={<Silverware />} />
              <Route path="/Buffetware" element={<Buffetware />} />
              <Route path="/Retail" element={<Retail />} />
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
