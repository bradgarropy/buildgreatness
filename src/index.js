import React from "react"
import ReactDOM from "react-dom"
import registerServiceWorker from "./registerServiceWorker"

// components
import App from "./components/App.jsx"

// styles
import "./css/index.css"


ReactDOM.render(
    <App />,
    document.getElementById("root")
)

registerServiceWorker()
