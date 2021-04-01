import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DonutChart from "../DonutChart";
import ToDoList from "../ToDoList";
const MainBoard = () => {
    return(
        <MDBRow className="h-100">
            <div className="col-lg-6 col-md-12 h-100 bg-primary">
                <MDBContainer fluid>KANBON</MDBContainer>
            </div>
            <div className="col-lg-6 col-md-12 h-100 bg-warning">
                <MDBRow className="h-50 my-2">
                    <MDBCol size="6" className="h-100 bg-warning"> <DonutChart/> </MDBCol>
                    <MDBCol size="6" className="h-100 bg-secondary"> <ToDoList/> </MDBCol>
                </MDBRow>
                <MDBRow className="h-50 my-2">
                    <MDBCol size="6" className="h-100 bg-success">MEMBERS TAB</MDBCol>
                    <MDBCol size="6" className="h-100 bg-danger">CHAT TAB</MDBCol>
                </MDBRow>
            </div>
        </MDBRow>
    )
}

export default MainBoard;