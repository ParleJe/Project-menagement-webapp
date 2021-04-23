import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBContainer, MDBIcon, MDBInput, MDBBtn, MDBInputGroup, MDBInputGroupElement } from "mdb-react-ui-kit";
import ToDo from "../../helpers/responseInterfaces/ToDo";
import ToDoListProps from "../../helpers/interfaces/ToDoListProps";
import React, {Fragment, useState} from "react";

// const MockData: ToDoListProps = {
//     ToDos: [new ToDo(1, "task1", [], false),new ToDo(2, "task2", [], false),new ToDo(3, "task3", [], false),
//             new ToDo(4, "task4", [], true),new ToDo(5, "task5", [], true),new ToDo(6, "task6", [], false),
//             new ToDo(7, "task7", [], false),new ToDo(8, "task8", [], true)]
//     //ToDos: []
// }

const ToDoList = () => {
    const [count, forceRefresh] = useState<number>(0);

    

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow"> 
                <MDBInputGroupElement type='text' placeholder="new TO DO? :)" />
                <MDBBtn outline color="primary">add</MDBBtn>
            </MDBInputGroup>
            <MDBContainer className="m-0 p-0 h-80 overflow-auto shadow-sm">
                <MDBListGroup className="m-0 p-0 px-2">
                    {MockData.ToDos.map((el:ToDo, key:number) => {
                        return(
                            <MDBListGroupItem key={key} color={(key%2===0)?"dark":"light"}>
                                <div className="d-flex w-100 justify-content-between align-items-center ">
                                    <h5>{el.name}</h5>
                                    <MDBBadge onClick={() => {el.isDone= !el.isDone; forceRefresh(count+1)}} color={el.isDone?"success":"danger"} pill>
                                        {el.isDone?"done": "not done"}
                                    </MDBBadge>
                                </div>
                            </MDBListGroupItem>
                        )
                    })}
                </MDBListGroup>
            </MDBContainer>
        </Fragment>
    )

}

export default ToDoList;