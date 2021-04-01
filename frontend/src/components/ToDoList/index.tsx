import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBContainer, MDBIcon, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import ToDo from "../../helpers/classes/ToDo";
import ToDoListProps from "../../helpers/interfaces/ToDoListProps";
import {useState} from "react";

const MockData: ToDoListProps = {
    ToDos: [new ToDo(1, "task1", [], false),new ToDo(2, "task2", [], false),new ToDo(3, "task3", [], false),
            // new ToDo(4, "task4", [], true),new ToDo(5, "task5", [], true),new ToDo(6, "task6", [], false),
            new ToDo(7, "task7", [], false),new ToDo(8, "task8", [], true)]
    //ToDos: []
}

const ToDoList = () => {
    const [count, forceRefresh] = useState<number>(0);

    

    return (
            <MDBContainer className="h-100 overflow-auto">
                <MDBListGroup className="">
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
                    <MDBListGroupItem>
                        <div className="d-flex w-100 justify-content-between align-items-center ">
                            <input className="w-75" />
                            {/* <MDBIcon size='m' icon="plus" /> */}
                            <MDBBadge pill>+</MDBBadge>
                        </div>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBContainer>
    )

}

export default ToDoList;