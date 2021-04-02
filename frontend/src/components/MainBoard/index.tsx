import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ChatTab from "../ChatTab";
import DonutChart from "../DonutChart";
import MembersTab from "../MembersTab";
import ToDoList from "../ToDoList";
const MainBoard = () => {
    return(
        <MDBRow className="h-100">
            <div className="col-lg-6 col-md-12 h-100 border-end border-start">
                <MDBContainer fluid>KANBON</MDBContainer>
            </div>
            <div className="col-lg-6 col-md-12 h-100">
                <MDBRow className="h-50 my-2">
                    <MDBCol size="6" className="h-100 border-bottom"> <ToDoList /> </MDBCol>
                    <MDBCol size="6" className="h-100 border-bottom"> <MembersTab />  </MDBCol>
                </MDBRow>
                <MDBRow className="h-50 my-2">
                    <MDBCol size="6" className="h-100"> <DonutChart /> </MDBCol>
                    <MDBCol size="6" className="h-100"> <ChatTab /> </MDBCol>
                </MDBRow>
            </div>
        </MDBRow>
    )
}

export default MainBoard;