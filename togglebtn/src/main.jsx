import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from "./redux/Store.jsx"
import { ContextProvider } from './thapa-muvieApp/contextApiStore/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // provider of redux
  <Provider store={Store}>
    {/* provider of context api */}
    <ContextProvider>
      <App />

    </ContextProvider>
  </Provider>
)
