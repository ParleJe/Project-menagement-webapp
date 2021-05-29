import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRadio, MDBRange, MDBSpinner } from 'mdb-react-ui-kit';
import { Dispatch, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { types } from '../../helpers/interfaces/TypeEnum';
import Project from '../../helpers/responseInterfaces/Project';
import { useAppSelector } from '../../redux/hooks';
import { addTask, TaskPayload } from '../../redux/slices/HugeTasksSlice';
import { addProject } from '../../redux/slices/projectSlice';
import { initialState, reducer, AddPopoverReducerState } from './reducer';
import Simplified from '../../helpers/responseInterfaces/Simplified';

interface props {
    show: boolean,
    setShow: Function,
    idProject?: number
}

const tryAdd = (dispatchFunc: Dispatch<any>, inputState:AddPopoverReducerState, idProject?: number): void => {
        if(idProject === undefined) return dispatchFunc(addProject(inputState as unknown as Project));
        const payload: TaskPayload = {
            task: inputState as Simplified,
            idProject: idProject
        };
        return dispatchFunc(addTask(payload));
}

const AddPopover = ({show, setShow, idProject}: props) => {
    const addType: boolean = idProject === undefined;
    const [range, setRange] = useState<number>(1);
    const [state, dispatch] = useReducer(reducer, initialState);
    const loadingState = useAppSelector((state) => idProject===undefined?state.projects.loading: state.hugeTasks.loading)
    const reduxDispatch = useDispatch();

    return(
            <MDBModal backdrop show={show} getOpenState={(e: any) => setShow(e)} tabIndex='1'>
                <MDBModalDialog centered size='md'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Create New 
                                <strong className={addType?"text-info":"text-success"}> <u>{addType?"Project": "Task"}</u></strong> !
                            </MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput onChange={(e: any) => dispatch({type:'name', payload: e.target.value})} label='title' id='title' type='text' />
                            <br />
                            <MDBInput onChange={(e: any) => dispatch({type:'description', payload: e.target.value})} label='description' id='desc' textarea rows={4} />
                            <br />
                            {addType && <MDBRange
                                value={range}
                                min='1'
                                max='5'
                                step='1'
                                id='priority'
                                label='Prioritize value'
                                onChange={(e: any ) => {
                                    setRange(e.target.value);
                                    dispatch({type:'priority', payload: e.target.value})
                                }}
                            />}
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn onClick={() => tryAdd(reduxDispatch, state, idProject)} color={addType?"info":"success"}>
                                {loadingState !== 'pending' && "Submit!"}
                                {loadingState === 'pending' && <MDBSpinner size='sm' grow />}
                            </MDBBtn>
                        </MDBModalFooter >
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    )
}

export default AddPopover;