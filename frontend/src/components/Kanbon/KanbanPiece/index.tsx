import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Fragment } from "react"

interface props {
    color: string
    title: string
}

const KanbanPiece = ({color, title}: props) => {

    return (
        <Fragment>
            <MDBRow className={"justify-content-center w-100 py-2 m-0 shadow rounded-top "+color}>
                <h5>{title}</h5>
            </MDBRow>
            <MDBContainer className="mt-0 p-0 overflow-auto h-90 w-100">
                            <div className="card my-1 mx-2 border shadow-lg">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk.
                                    </p>
                                </div>
                                <div className="card-footer">2 days ago</div>
                            </div>

                            <div className="card my-1 mx-2 border shadow-lg">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk.
                                    </p>
                                </div>
                                <div className="card-footer">2 days ago</div>
                            </div>

                            <div className="card my-1 mx-2 border shadow-lg">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk.
                                    </p>
                                </div>
                                <div className="card-footer">2 days ago</div>
                            </div>

                            <div className="card my-1 mx-2 border shadow-lg">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk.
                                    </p>
                                </div>
                                <div className="card-footer">2 days ago</div>
                            </div>

                            <div className="card my-1 mx-2 border shadow-lg">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk.
                                    </p>
                                </div>
                                <div className="card-footer">2 days ago</div>
                            </div>
            </MDBContainer>
        </Fragment>
    )

}

export default KanbanPiece;