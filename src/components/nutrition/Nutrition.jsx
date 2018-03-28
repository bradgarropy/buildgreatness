import React from "react"
import {Link} from "react-router-dom"


class Nutrition extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

        }

    }

    render() {

        return (

            <div className="nutrition">

                <h1>Nutrition</h1>

                <Link to="/nutrition/food">Food</Link>
                <Link to="/nutrition/meals">Meals</Link>

            </div>

        )

    }

}


// export
export default Nutrition
