import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import moment from "moment"

// material ui
import {Table} from "material-ui/Table"
import {TableBody} from "material-ui/Table"
import {TableHeader} from "material-ui/Table"
import {TableHeaderColumn} from "material-ui/Table"
import {TableRow} from "material-ui/Table"
import {TableRowColumn} from "material-ui/Table"
import RaisedButton from "material-ui/RaisedButton"

// api
import measurements from "../../api/measurements"

// style
import "./Measurements.css"


class Measurements extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            measurements: [],
        }

        this.onRowSelection = this.onRowSelection.bind(this)

    }

    componentDidMount() {

        measurements.readAll()
            .then((response) => {

                const measurements = response.data
                this.setState({measurements})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    onRowSelection(selectedRows) {

        const selectedRow = selectedRows[0]
        const measurement = this.state.measurements[selectedRow]
        const id = measurement._id

        this.props.history.push(`/measurements/${id}`)

    }

    render() {

        const tableRowStyle = {cursor: "pointer"}

        return (

            <div className="measurements">

                <div className="measurements-header">

                    <h2>Measurements</h2>

                    <RaisedButton
                        primary
                        label="add"
                        containerElement={<Link to="/measurements/add"/>}
                    />

                </div>


                <Table onRowSelection={this.onRowSelection}>

                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >

                        <TableRow>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            <TableHeaderColumn>Weight</TableHeaderColumn>
                            <TableHeaderColumn>Body Fat</TableHeaderColumn>
                            <TableHeaderColumn>Bicep</TableHeaderColumn>
                            <TableHeaderColumn>Calf</TableHeaderColumn>
                            <TableHeaderColumn>Chest</TableHeaderColumn>
                            <TableHeaderColumn>Quad</TableHeaderColumn>
                            <TableHeaderColumn>Shoulder</TableHeaderColumn>
                            <TableHeaderColumn>Waist</TableHeaderColumn>
                        </TableRow>

                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={false}
                        showRowHover={true}
                    >

                        {this.state.measurements.map((measurement, index) => (
                            <TableRow
                                style={tableRowStyle}
                                key={index}
                            >
                                <TableRowColumn>{moment(measurement.date).format("YYYY-MM-DD")}</TableRowColumn>
                                <TableRowColumn>{measurement.weight}</TableRowColumn>
                                <TableRowColumn>{measurement.body_fat}</TableRowColumn>
                                <TableRowColumn>{measurement.bicep}</TableRowColumn>
                                <TableRowColumn>{measurement.calf}</TableRowColumn>
                                <TableRowColumn>{measurement.chest}</TableRowColumn>
                                <TableRowColumn>{measurement.quad}</TableRowColumn>
                                <TableRowColumn>{measurement.shoulder}</TableRowColumn>
                                <TableRowColumn>{measurement.waist}</TableRowColumn>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table>

            </div>

        )

    }

}


Measurements.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }),
}


// export
export default Measurements
