import { MDBContainer, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import { Fragment } from "react"
import Simplified from "../../../helpers/responseInterfaces/Simplified";

interface props {
    color: string,
    title: string,
    tasks: Simplified[]
}

const KanbanPiece = ({color, title, tasks}: props) => {

    return (
        <Fragment>
            <MDBRow className={"justify-content-center w-100 py-2 m-0 shadow rounded-top "+color}>
                <h5>{title}</h5>
            </MDBRow>
            <MDBContainer className="mt-0 p-0 overflow-auto h-90 w-100">
                {tasks.length === 0 && 
                        <div className="card my-1 mx-2 border shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Nothing here yet :c</h5>
                            </div>
                        </div>
                        }
                {tasks.map(task => {
                    return(
                        <div className="card my-1 mx-2 border shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">{task.name}</h5>
                                <p className="card-text">{task.description}</p>
                            </div>
                            <div className="card-footer">2 days ago</div>
                        </div>
                    )
                })}
            </MDBContainer>
        </Fragment>
    )

}

export default KanbanPiece;