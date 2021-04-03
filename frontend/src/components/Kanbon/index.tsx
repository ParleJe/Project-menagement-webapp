import { MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit"
import { Fragment } from "react"
import KanbanPiece from "./KanbanPiece"

/*
3 diffrent tables - not started, in progress, done
                    blue         yellow       green
*/
const Kanbon = () => {

    return (
        <Fragment>
            <MDBRow between className="h-100 w-100 pt-2">

                <MDBCol size="4 h-100" className="">
                    <KanbanPiece color="bg-lightblue" />
                </MDBCol>

                <MDBCol size="4 h-100" className="">
                    <KanbanPiece color="bg-lightyellow" />
                </MDBCol>

                <MDBCol size="4 h-100" className="">
                    <KanbanPiece color="bg-lightred" />
                </MDBCol>

            </MDBRow>
        </Fragment>
    )
}

export default Kanbon;