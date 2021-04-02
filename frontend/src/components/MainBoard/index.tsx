import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ChatTab from "../ChatTab";
import DonutChart from "../DonutChart";
import MembersTab from "../MembersTab";
import ToDoList from "../ToDoList";
const MainBoard = () => {

    const width = window.innerWidth;
    console.log(width);
    return(
        <MDBRow className="h-100">
            <div className="col-lg-6 col-md-12 h-100 border-end border-start">
                <MDBContainer fluid>KANBON</MDBContainer>
            </div>
            <div className="col-lg-6 col-md-12 h-100">
                <MDBRow className="component-wrapper my-2">
                    <MDBCol size="md-6 12" className="component"> <ToDoList /> </MDBCol>
                    <MDBCol size="md-6 12" className="component"> <MembersTab />  </MDBCol>
                </MDBRow>
                <MDBRow className="component-wrapper my-2">
                    <MDBCol size="md-6 12" className="component"> <DonutChart /> </MDBCol>
                    <MDBCol size="md-6 12" className="component"> <ChatTab /> </MDBCol>
                </MDBRow>
            </div>
        </MDBRow>
    )
}

export default MainBoard;