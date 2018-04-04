import React from "react"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

// style
import "./Content.css"

// components
import UserRegister from "../user/UserRegister"
import UserLogin from "../user/UserLogin"
import Feedback from "../feedback/Feedback"
import Landing from "../landing/Landing"
import Training from "../training/Training"
import Nutrition from "../nutrition/Nutrition"
import Food from "../nutrition/food/Food"
import FoodAdd from "../nutrition/food/FoodAdd"
import FoodEdit from "../nutrition/food/FoodEdit"
import Meals from "../nutrition/meals/Meals"
import MealsAdd from "../nutrition/meals/MealsAdd"
import MealsEdit from "../nutrition/meals/MealsEdit"
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
            <ProtectedRoute exact path="/feedback" component={Feedback}/>
            <ProtectedRoute exact path="/measurements" component={Measurements}/>
            <ProtectedRoute exact path="/measurements/add" component={MeasurementsAdd}/>
            <ProtectedRoute exact path="/measurements/:id" component={MeasurementsEdit}/>
            <ProtectedRoute exact path="/nutrition" component={Nutrition}/>
            <ProtectedRoute exact path="/nutrition/food" component={Food}/>
            <ProtectedRoute exact path="/nutrition/food/add" component={FoodAdd}/>
            <ProtectedRoute exact path="/nutrition/food/:id" component={FoodEdit}/>
            <ProtectedRoute exact path="/nutrition/meals" component={Meals}/>
            <ProtectedRoute exact path="/nutrition/meals/add" component={MealsAdd}/>
            <ProtectedRoute exact path="/nutrition/meals/:id" component={MealsEdit}/>
            <ProtectedRoute exact path="/training" component={Training}/>
        </Switch>

    </div>

)


// export
export default Content
