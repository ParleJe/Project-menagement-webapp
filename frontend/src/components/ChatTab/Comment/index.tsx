import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Fragment } from "react";


interface CommentProps {
    own?: boolean | undefined,
    content: string,
    name: string
}

const Comment = ({ own, content, name }: CommentProps) => {

    return (
        <Fragment>
            <MDBRow className="mb-2" end={own ? true : false}>
                <MDBCol size="8" className={own ? "bg-info text-end shadow rounded" : "shadow text-start rounded"} >
                    <p className="mb-0">{content}</p>
                    {!own && <p className="text-muted mb-0"><small>{name}</small></p>}
                </MDBCol>
            </MDBRow>
        </Fragment>
    )

}

export default Comment;