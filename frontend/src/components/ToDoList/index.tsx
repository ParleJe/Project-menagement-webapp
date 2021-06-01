import {
    MDBListGroup,
    MDBListGroupItem,
    MDBContainer,
    MDBBtn,
    MDBInputGroup,
    MDBInputGroupElement,
    MDBSwitch,
    MDBSpinner
} from "mdb-react-ui-kit";
import React, { Fragment, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { clearArr, fetchAllToDo } from "../../redux/slices/ToDoSlice";
import Simplified from "../../helpers/responseInterfaces/Simplified";
import LoadingIndicator from "../LoadingIndicator";
import { dispatchAddToDo, dispatchRemoveToDo, dispatchUpdateToDo } from "./actions";
import LoadingStateEnum from "../../helpers/enums/LoadingStateEnum";
import SelectedScopeEnum from "../../helpers/enums/SelectedScopeEnum";
import ExecutionStatusEnum from "../../helpers/enums/ExecutionStatusEnum";

const ToDoList = () => {
    const scopeSelected = useAppSelector(state => state.logged.scope);
    const ToDos = useAppSelector(state => state.toDos.toDos);
    const selected = useAppSelector(state => state.hugeTasks.selected);
    const loadingState = useAppSelector((state) => state.toDos.loading);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    useEffect(() => {
        if (scopeSelected !== SelectedScopeEnum.TASK) {
            dispatch(clearArr())
            return;
        }
        dispatch(fetchAllToDo(selected!));
    }, [dispatch, scopeSelected, selected])

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow">
                <MDBInputGroupElement onChange={(e: any) => setName(e.target.value)} type='text' placeholder="new TO DO? :)" />
                <MDBBtn onClick={() => dispatchAddToDo(name, selected, dispatch)} outline color="primary">
                    {loadingState !== LoadingStateEnum.PENDING && 'add'}
                    {loadingState === LoadingStateEnum.PENDING && <MDBSpinner grow color="primary" size="sm" >
                                                                      <span className="visually-hidden">Loading...</span>
                                                                  </MDBSpinner> }
                </MDBBtn>
            </MDBInputGroup>
            <MDBContainer className="m-0 p-0 h-80 overflow-auto shadow-sm position-relative">
                <MDBListGroup className="m-0 p-0 px-2">
                    {ToDos.map((el: Simplified, key: number) => {
                        return (
                            <MDBListGroupItem key={key} color={(key % 2 === 0) ? "dark" : "light"}>
                                <div className="d-flex w-100 justify-content-between ">
                                    <h5>{el.name}</h5>
                                    <div className="d-flex">
                                        <MDBSwitch checked={el.state === ExecutionStatusEnum.DONE} onClick={() => dispatchUpdateToDo(el, dispatch)} />
                                        <MDBBtn onClick={() => dispatchRemoveToDo(el.id!, dispatch)} className='btn-close' color='none' />
                                    </div>
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
