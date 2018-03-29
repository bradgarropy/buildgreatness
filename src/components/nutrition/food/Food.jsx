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
import "./Food.css"

// api
import foodAPI from "../../../api/food"


class Food extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            foods: [],
        }

        this.onRowSelection = this.onRowSelection.bind(this)

    }

    componentDidMount() {

        foodAPI.readAll()
            .then((response) => {

                const foods = response.data
                this.setState({foods})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    onRowSelection(selectedRows) {

        const selectedRow = selectedRows[0]
        const food = this.state.foods[selectedRow]
        const id = food._id

        this.props.history.push(`/nutrition/food/${id}`)

    }

    render() {

        const tableRowStyle = {cursor: "pointer"}

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

                <Table onRowSelection={this.onRowSelection}>

                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >

                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Protein</TableHeaderColumn>
                            <TableHeaderColumn>Carbs</TableHeaderColumn>
                            <TableHeaderColumn>Fat</TableHeaderColumn>
                            <TableHeaderColumn>Fiber</TableHeaderColumn>
                            <TableHeaderColumn>Sodium</TableHeaderColumn>
                        </TableRow>

                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={false}
                        showRowHover={true}
                    >

                        {this.state.foods.map((food, index) => (
                            <TableRow
                                style={tableRowStyle}
                                key={index}
                            >
                                <TableRowColumn>{food.name}</TableRowColumn>
                                <TableRowColumn>{food.protein}</TableRowColumn>
                                <TableRowColumn>{food.carbs}</TableRowColumn>
                                <TableRowColumn>{food.fat}</TableRowColumn>
                                <TableRowColumn>{food.fiber}</TableRowColumn>
                                <TableRowColumn>{food.sodium}</TableRowColumn>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table>

            </div>

        )

    }

}


Food.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }),
}


// export
export default Food
