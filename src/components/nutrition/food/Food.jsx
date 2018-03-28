import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

// material ui
import RaisedButton from "material-ui/RaisedButton"

// style
import "./Food.css"


class Food extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

        }

    }

    render() {

        return (

            <div className="food">

                <div className="food-header">

                    <h2>Food</h2>

                    <RaisedButton
                        primary
                        label="add"
                        containerElement={<Link to="/nutrition/food/add"/>}
                    />

                </div>

            </div>


        )

    }

}


Food.propTypes = {

}


Food.defaultProps = {

}


// export
export default Food
