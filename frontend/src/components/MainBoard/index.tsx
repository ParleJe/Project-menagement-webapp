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
        <MDBRow className="h-100">
            <div className="col-lg-6 col-md-12 h-100 bg-primary">
                <MDBContainer fluid>KANBON</MDBContainer>
            </div>
            <div className="col-lg-6 col-md-12 h-100 bg-warning">
                <MDBRow className="h-50">
                    <MDBCol size="6" className="h-100 bg-warning">CHART TAB</MDBCol>
                    <MDBCol size="6" className="h-100 bg-secondary">TODO LIST</MDBCol>
                </MDBRow>
                <MDBRow className="h-50">
                    <MDBCol size="6" className="h-100 bg-info">MEMBERS TAB</MDBCol>
                    <MDBCol size="6" className="h-100 bg-danger">CHAT TAB</MDBCol>
                </MDBRow>
            </div>
        </MDBRow>
    )
}

export default MainBoard;