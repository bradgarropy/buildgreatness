import React from "react"
import ReactDOM from "react-dom"
import registerServiceWorker from "./registerServiceWorker"

// components
import App from "./components/containers/App.jsx"

// styles
import "./components/containers/index.css"


ReactDOM.render(
    <App />,
    document.getElementById("root")
)

registerServiceWorker()
