import { MDBBtn, MDBContainer, MDBInputGroup, MDBInputGroupElement } from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import Comment from "./Comment";

const ChatTab = () => {

    const mockData = //[]
    [{content: "bla bla bla", post:"Mike"},{content: "blah blah blah", post:"Sarah"}, 
     {content: "blah blah blah", post:"Sarah"}, {content: "bla bla bla", post:"Mike"},
     {content: "blah blah blah blah blah blah blah blah blah blah blah blah", post:"Sarah"}, {content: "bla bla bla", post:"Mike"},
     {content: "bla bla bla", post:"Jeremy"},{content: "bla bla bla bla bla bla bla bla bla bla bla bla", post:"Jeremy"},]

    return (
        <Fragment>
            <MDBContainer fluid className="h-80 mb-2 overflow-auto shadow-sm">
                {mockData.map((comment:any, key:number) => {
                    return (
                        <Comment key={key} own={comment.post === "Mike"} name={comment.post} content={comment.content} />
                    )
                })}
            </MDBContainer>
            <MDBInputGroup className="shadow"> 
                    <MDBInputGroupElement type='text' placeholder="what you think" />
                    <MDBBtn outline color="secondary">post</MDBBtn>
            </MDBInputGroup>  
        </Fragment>
    )

}

export default ChatTab;