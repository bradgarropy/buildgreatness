import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

// material ui
import {Table} from "material-ui/Table"
import {TableBody} from "material-ui/Table"
import {TableHeader} from "material-ui/Table"
import {TableHeaderColumn} from "material-ui/Table"
import {TableRow} from "material-ui/Table"
import {TableRowColumn} from "material-ui/Table"
import RaisedButton from "material-ui/RaisedButton"

// style
import "./Meals.css"

// api
import mealsAPI from "../../../api/meals"


class Meals extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            meals: [],
        }

        this.onRowSelection = this.onRowSelection.bind(this)

    }

    componentDidMount() {

        mealsAPI.readAll()
            .then((response) => {

                const meals = response.data
                this.setState({meals})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    onRowSelection(selectedRows) {

        const selectedRow = selectedRows[0]
        const meal = this.state.meals[selectedRow]
        const id = meal.id

        this.props.history.push(`/nutrition/meals/${id}`)

    }

    render() {

        const tableRowStyle = {cursor: "pointer"}

        return (

            <div className="food">

                <div className="food-header">

                    <h2>Meals</h2>

                    <RaisedButton
                        primary
                        label="add"
                        containerElement={<Link to="/nutrition/meals/add"/>}
                    />

                </div>

                <Table onRowSelection={this.onRowSelection}>

                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >

                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Food</TableHeaderColumn>
                            <TableHeaderColumn>Quantity</TableHeaderColumn>
                        </TableRow>

                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={false}
                        showRowHover={true}
                    >

                        {this.state.meals.map((meal, index) => (
                            <TableRow
                                style={tableRowStyle}
                                key={index}
                            >
                                <TableRowColumn>{meal.name}</TableRowColumn>
                                <TableRowColumn>{meal.food}</TableRowColumn>
                                <TableRowColumn>{meal.quanity}</TableRowColumn>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table>

            </div>

        )

    }

}


Meals.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }),
}


// export
export default Meals
