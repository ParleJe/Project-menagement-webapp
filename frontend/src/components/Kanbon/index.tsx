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

                <MDBCol size="sm-4 md-12 kanban" className="">
                    <KanbanPiece title="Not Started" color="bg-lightblue" />
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                    <KanbanPiece title="In Progress" color="bg-lightyellow" />
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                    <KanbanPiece title="Done" color="bg-lightred" />
                </MDBCol>

            </MDBRow>
        </Fragment>
    )
}

export default Kanbon;