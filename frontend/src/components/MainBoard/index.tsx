import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";


const MainBoard = () => {
    return(
        // <MDBContainer  className="h-100 bg-dark" fluid>
        // <MDBRow className="h-100">
        //    <MDBCol size="6" className="h-100 bg-primary">Kanbon</MDBCol>
        //    <MDBCol className="h-100">
        //        <MDBRow  className="h-50">
        //             <MDBCol size="6" className="h-100 bg-warning">chart</MDBCol>
        //             <MDBCol size="6" className="h-100 bg-secondary">description</MDBCol>
        //        </MDBRow>
        //        <MDBRow className="h-50">
        //             <MDBCol size="6" className="h-100 bg-info">chart 2</MDBCol>
        //             <MDBCol size="6" className="h-100 bg-danger">chat</MDBCol>
        //        </MDBRow>
        //    </MDBCol>
        // </MDBRow>
        // </MDBContainer>
        <MDBContainer className="h-100">
            <MDBCol size="6" className="h-100" />
            <MDBCol size="6" className="h-100"/>
        </MDBContainer>
    )
}

export default MainBoard;