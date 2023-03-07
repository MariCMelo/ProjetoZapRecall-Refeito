import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './components/GlobalStyles'
import App from './constants/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <GlobalStyle/>
  <App />
  </React.StrictMode>
)
