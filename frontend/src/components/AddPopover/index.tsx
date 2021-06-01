import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRange, MDBSpinner } from 'mdb-react-ui-kit';
import { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingStateEnum from '../../helpers/enums/LoadingStateEnum';
import { useAppSelector } from '../../redux/hooks';
import { tryAdd } from './actions';
import { initialState, reducer } from './reducer';

interface AddPopoverProps {
    show: boolean,
    setShow: Function,
    idProject?: number
}

const AddPopover = ({ show, setShow, idProject }: AddPopoverProps) => {
    const addType: boolean = idProject === undefined;
    const [range, setRange] = useState<number>(1);
    const [state, dispatch] = useReducer(reducer, initialState);
    const loadingState = useAppSelector((state) => idProject === undefined ? state.projects.loading : state.hugeTasks.loading)
    const reduxDispatch = useDispatch();

    useEffect(() => {
        if (loadingState === "succeeded" && state !== initialState) {
            dispatch({ type: 'name', payload: initialState.name })
            dispatch({ type: 'description', payload: initialState.description })
            dispatch({ type: 'priority', payload: initialState.priority })
            dispatch({ type: 'reset' })
            setShow(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingState, setShow])

    return (
        <MDBModal backdrop show={show} getOpenState={(e: any) => setShow(e)} tabIndex='1'>
            <MDBModalDialog centered size='md'>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Create New
                                <strong className={addType ? "text-info" : "text-success"}> <u>{addType ? "Project" : "Task"}</u></strong> !
                            </MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput onChange={(e: any) => dispatch({ type: 'name', payload: e.target.value })} label='title' id='title' type='text' />
                        <br />
                        <MDBInput onChange={(e: any) => dispatch({ type: 'description', payload: e.target.value })} label='description' id='desc' textarea rows={4} />
                        <br />
                        {!addType && <MDBRange
                            value={range}
                            min='1'
                            max='5'
                            step='1'
                            id='priority'
                            label='Prioritize value'
                            onChange={(e: any) => {
                                setRange(e.target.value);
                                dispatch({ type: 'priority', payload: e.target.value })
                            }}
                        />}
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn onClick={() => tryAdd(reduxDispatch, state, idProject)} color={addType ? "info" : "success"}>
                            {loadingState !== LoadingStateEnum.PENDING && "Submit!"}
                            {loadingState === LoadingStateEnum.PENDING && <MDBSpinner size='sm' grow />}
                        </MDBBtn>
                    </MDBModalFooter >
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default AddPopover;