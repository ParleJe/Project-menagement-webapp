import { MDBCol, MDBRow, MDBSpinner } from "mdb-react-ui-kit"
import { Fragment, useEffect } from "react"
import KanbanPiece from "./KanbanPiece"

import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import { fetchHugeTasks } from '../../redux/slices/HugeTasksSlice'
import {getTasksDone, getTasksInProgress, getTasksNotStarted} from "../../helpers/responseInterfaces/Simplified"

/*
3 diffrent tables - not started, in progress, done
                    blue         yellow       green
*/
const Kanbon = () => {
    const dispatch = useAppDispatch();
    const SelectedProject = useAppSelector(state => state.projects.selected);
    const HugeTasksFetched = useAppSelector(state => state.hugeTasks.HugeTasks);
    const LoadingState = useAppSelector(state => state.hugeTasks.loading);

    useEffect( () => {
        dispatch( fetchHugeTasks(SelectedProject) );
    },[SelectedProject, dispatch]);
    console.log(HugeTasksFetched);
    if(LoadingState === 'pending') {
        return (
            <Fragment>
                <MDBRow between className="h-100 w-100 pt-2">
                    <div className='d-flex justify-content-center align-items-center'>
                        <MDBSpinner grow color='secondary' style={{ width: '15rem', height: '15rem' }} >
                            <span className='visually-hidden'>Loading...</span>
                        </MDBSpinner>
                    </div>
                </MDBRow>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <MDBRow between className="h-100 w-100 pt-2">
                <MDBCol size="sm-4 md-12 kanban" className="">
                    <KanbanPiece title="Not Started" color="bg-lightblue" tasks={getTasksNotStarted(HugeTasksFetched)} />
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                    <KanbanPiece title="In Progress" color="bg-lightyellow" tasks={getTasksInProgress(HugeTasksFetched)} />
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                    <KanbanPiece title="Done" color="bg-lightred" tasks={getTasksDone(HugeTasksFetched)} />
                </MDBCol>
            </MDBRow>
        </Fragment>
    )
}

export default Kanbon;