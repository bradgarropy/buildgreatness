import React from "react"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

// style
import "../css/Content.css"

// components
import Register from "./views/Register"
import Login from "./views/Login"
import Landing from "./views/Landing"
import Training from "./views/Training"
import Nutrition from "./views/Nutrition"
import Measurements from "./views/Measurements"
import MeasurementsAdd from "./views/MeasurementsAdd"
import MeasurementsEdit from "./views/MeasurementsEdit"
import ProtectedRoute from "./ProtectedRoute"


const Content = () => (

    <div className="content">

        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/training" component={Training}/>
            <ProtectedRoute exact path="/nutrition" component={Nutrition}/>
            <ProtectedRoute exact path="/measurements" component={Measurements}/>
            <ProtectedRoute exact path="/measurements/add" component={MeasurementsAdd}/>
            <ProtectedRoute exact path="/measurements/:id" component={MeasurementsEdit}/>
        </Switch>

    </div>

)


// export
export default Content
