import { Suspense, lazy } from "react";
import { ColorModeContext, useMode } from "./Themes/Themes";
import { CssBaseline,  ThemeProvider } from "@mui/material";
// import Header2 from "./components/header/Header2";
import HeaderThree from "./components/header/HeaderThree";
import HeaderOne from "./components/header/HeaderOne";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Spinner from "./components/Loading/Spinner";
// import CartShopping from "./components/context/CartShopping";
const CartShopping = lazy(() => import( "./components/context/CartShopping"))
import './index.css'
import "./i18next"
// import { CacheProvider } from "@emotion/react";
// import createCache from '@emotion/cache';
// import { prefixer } from 'stylis';
// import rtlPlugin from 'stylis-plugin-rtl';
// import { createTheme } from '@mui/material/styles'; 
const HeaderTwo = lazy(() => import("./components/header/HeaderTwo"))

// const cacheRtl = createCache({
//   key: 'muirtl',
//   stylisPlugins: [prefixer, rtlPlugin],
// });

function App() {
  const [theme, colorMode] = useMode();
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> 
        <CssBaseline />
        <Suspense fallback={<Spinner />}>
          <CartShopping>
            <HeaderOne />
            <HeaderTwo />
            <HeaderThree />
              <Hero />
              <Main />
            <Footer />
          </CartShopping> 
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>


  )
}

export default App
