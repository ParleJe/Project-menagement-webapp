import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ChatTab from "../ChatTab";
import DonutChart from "../DonutChart";
import Kanbon from "../Kanbon";
import MembersTab from "../MembersTab";
import ToDoList from "../ToDoList";

const MainBoard = () => {

    return(
        <MDBRow className="h-100 p-0">
            <div className="col-lg-7 col-md-12 kanban-wrapper pe-0 m-0">
                <MDBContainer fluid className="w-100 h-100 pe-0"> <Kanbon /> </MDBContainer>
            </div>
            <div className="col-lg-5 col-md-12 h-100">
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