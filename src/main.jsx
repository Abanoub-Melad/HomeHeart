import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import  { store } from './Rudex/Store.js'
import './index.css'
// const Login = lazy(()   => import('./components/RegisterSystem/Login.jsx'))
// const Register = lazy(()   => import('./components/RegisterSystem/Register.jsx'))
// import Register from './components/RegisterSystem/Register.jsx'
// import Login from './components/RegisterSystem/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Provider store={store}> <App /> </Provider>} /> */}
        <Router>
        <Provider store={store}> <App /> </Provider>
        {/* <App />  */}
        </Router>
        {/* <Route  path="/Register"   element={<Register/>}/> */}
        {/* <Route  path="/Login"   element={<Login/>}/> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
