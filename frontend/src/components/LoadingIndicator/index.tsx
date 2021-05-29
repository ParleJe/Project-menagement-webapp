import { MDBSpinner } from "mdb-react-ui-kit"
import React from "react"


const LoadingIndicator = () => {
    return (
        <div style={{zIndex: 5000}} className="position-absolute top-50 start-50 translate-middle">
            <MDBSpinner grow color="info" style={{ width: "15rem", height: "15rem"}} >
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
        </div>
    );
}

export default LoadingIndicator;