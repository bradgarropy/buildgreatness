import React from "react"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

// style
import "./Content.css"

// components
import UserRegister from "../user/UserRegister"
import UserLogin from "../user/UserLogin"
import Landing from "./Landing"
import Training from "../training/Training"
import Nutrition from "../nutrition/Nutrition"
import Food from "../nutrition/food/Food"
import Meals from "../nutrition/meals/Meals"
import Measurements from "../measurements/Measurements"
import MeasurementsAdd from "../measurements/MeasurementsAdd"
import MeasurementsEdit from "../measurements/MeasurementsEdit"
import ProtectedRoute from "../common/ProtectedRoute"


const Content = () => (

    <div className="content">

        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={UserRegister}/>
            <Route exact path="/login" component={UserLogin}/>
            <ProtectedRoute exact path="/measurements" component={Measurements}/>
            <ProtectedRoute exact path="/measurements/add" component={MeasurementsAdd}/>
            <ProtectedRoute exact path="/measurements/:id" component={MeasurementsEdit}/>
            <ProtectedRoute exact path="/nutrition" component={Nutrition}/>
            <ProtectedRoute exact path="/nutrition/food" component={Food}/>
            <ProtectedRoute exact path="/nutrition/meals" component={Meals}/>
            <ProtectedRoute exact path="/training" component={Training}/>
        </Switch>

    </div>

)


// export
export default Content
