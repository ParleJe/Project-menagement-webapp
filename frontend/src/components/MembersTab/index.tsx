import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";


const MembersTab = () => {

    return (
        <MDBContainer className="h-100 bg-warning" fluid>
            <MDBRow className="bg-primary h-25 my-1"> 
            <MDBCol size="4 h-100 bg-secondary px-0">
                <img className="img-fluid h-100" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
            </MDBCol>
            <MDBCol center size="8" className="bg-success align-items-center">
                <h5>Name Surname</h5>
                <small>CEO</small>
            </MDBCol>
            </MDBRow>


            <MDBRow className="bg-primary h-25 my-1"> 
            <MDBCol size="4 h-100 bg-secondary px-0">
                <img className="img-fluid h-100" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
            </MDBCol>
            <MDBCol center size="8" className="bg-success align-items-center">
                <h5>Name Surname</h5>
                <small>CEO</small>
            </MDBCol>
            </MDBRow>

            
            <MDBRow className="bg-primary h-25 my-1"> 
            <MDBCol size="4 h-100 bg-secondary px-0">
                <img className="img-fluid h-100" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
            </MDBCol>
            <MDBCol center size="8" className="bg-success align-items-center">
                <h5>Name Surname</h5>
                <small>CEO</small>
            </MDBCol>
            </MDBRow>

            
        </MDBContainer>
    );
};

export default MembersTab;

// eslint-disable-next-line no-lone-blocks
{/* <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody> */}