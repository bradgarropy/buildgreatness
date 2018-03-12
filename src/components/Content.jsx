import React from "react"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

// style
import "../css/Content.css"

// components
import Landing from "./routes/Landing"
import Register from "./routes/Register"
import Login from "./routes/Login"
import Protected from "./routes/Protected"
import ProtectedRoute from "./ProtectedRoute"


const Content = () => (

    <div className="content">

        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/protected" component={Protected}/>
        </Switch>

    </div>

)


// export
export default Content
