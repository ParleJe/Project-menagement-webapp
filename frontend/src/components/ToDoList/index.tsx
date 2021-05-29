import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBContainer, MDBBtn, MDBInputGroup, MDBInputGroupElement } from "mdb-react-ui-kit";
import React, {Fragment, useEffect, useState} from "react";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { addToDo, clearArr, fetchAllToDo, removeToDo, updateToDo } from "../../redux/slices/ToDoSlice";
import { scopes } from "../../redux/slices/LoggedUserSlice";
import Simplified from "../../helpers/responseInterfaces/Simplified";
import LoadingIndicator from "../LoadingIndicator";

const ToDoList = () => {
    const scopeSelected = useAppSelector(state => state.logged.scope);
    let ToDos = useAppSelector(state => state.toDos.toDos);
    const selected = useAppSelector(state => state.hugeTasks.selected);
    const loadingState = useAppSelector((state) => state.toDos.loading);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const createSimplifiedObj = () => {
        return {
            toDo: {name: name,
                description: '',
                state: 'not started',
                priority: 1,},
            idTask: selected
        }
    }
    useEffect(() => {
        if(scopeSelected !== scopes.HugeTask){
         dispatch(clearArr())
         return;
        }
        dispatch(fetchAllToDo(selected!));
    }, [dispatch, scopeSelected, selected])

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow"> 
                <MDBInputGroupElement onChange={(e: any) => setName(e.target.value)} type='text' placeholder="new TO DO? :)" />
                <MDBBtn onClick={() => dispatch(addToDo(createSimplifiedObj()))} outline color="primary">add</MDBBtn>
            </MDBInputGroup>
            <MDBContainer className="m-0 p-0 h-80 overflow-auto shadow-sm position-relative">
            {loadingState === 'pending' && <LoadingIndicator />}
                <MDBListGroup className="m-0 p-0 px-2">
                    {ToDos.map((el:Simplified, key:number) => {
                        return(
                            <MDBListGroupItem key={key} color={(key%2===0)?"dark":"light"}>
                                <div className="d-flex w-100 justify-content-between ">
                                    <h5>{el.name}</h5>
                                    <MDBBtn onClick={() => dispatch(removeToDo(el.id!))} className='btn-close' color='none' />
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
