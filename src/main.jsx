import React from 'react'
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
        <Router>
        <Provider store={store}> 
          <App /> 
          </Provider>
        </Router>

  </React.StrictMode>
)
