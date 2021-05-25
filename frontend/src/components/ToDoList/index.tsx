import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBContainer, MDBIcon, MDBInput, MDBBtn, MDBInputGroup, MDBInputGroupElement } from "mdb-react-ui-kit";
import ToDo from "../../helpers/responseInterfaces/ToDo";
import ToDoListProps from "../../helpers/interfaces/ToDoListProps";
import React, {Fragment, useEffect, useState} from "react";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { fetchAllToDo, updateToDo } from "../../redux/slices/ToDoSlice";
import { scopes } from "../../redux/slices/LoggedUserSlice";


const ToDoList = () => {
    const scopeSelected = useAppSelector(state => state.logged.scope);
    const ToDos = useAppSelector(state => state.toDos.toDos);
    const selected = useAppSelector(state => state.hugeTasks.selected);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(scopeSelected !== scopes.HugeTask) return;
        dispatch(fetchAllToDo(selected!));
    })

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow"> 
                <MDBInputGroupElement type='text' placeholder="new TO DO? :)" />
                <MDBBtn outline color="primary">add</MDBBtn>
            </MDBInputGroup>
            <MDBContainer className="m-0 p-0 h-80 overflow-auto shadow-sm">
                <MDBListGroup className="m-0 p-0 px-2">
                    {ToDos.map((el:ToDo, key:number) => {
                        return(
                            <MDBListGroupItem key={key} color={(key%2===0)?"dark":"light"}>
                                <div className="d-flex w-100 justify-content-between align-items-center ">
                                    <h5>{el.name}</h5>
                                    <MDBBadge onClick={() => {dispatch(updateToDo(el))}} color={el.isDone?"success":"danger"} pill>
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