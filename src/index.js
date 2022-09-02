import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.scss"
import App from "./App.tsx"
import { OrderProvider } from "./contexts/OrderContext"
import { ServerErrorProvider } from "./contexts/ServerErrorContext"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {
        <OrderProvider>
          <ServerErrorProvider>
            <App />
          </ServerErrorProvider>
        </OrderProvider>
      }
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
