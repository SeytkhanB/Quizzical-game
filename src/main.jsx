
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {UserNameContextProvider} from './UserNameContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNameContextProvider>
      <App />
    </UserNameContextProvider>
  </React.StrictMode>
)