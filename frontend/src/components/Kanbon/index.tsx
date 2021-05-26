import { MDBCol, MDBRow, MDBSpinner } from "mdb-react-ui-kit"
import { Fragment, useEffect } from "react"
import KanbanPiece from "./KanbanPiece"

import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import { fetchHugeTasks } from '../../redux/slices/HugeTasksSlice'
import {getTasksDone, getTasksInProgress, getTasksNotStarted} from "../../helpers/responseInterfaces/Simplified"
import { scopes } from "../../redux/slices/LoggedUserSlice"

/*
3 diffrent tables - not started, in progress, done
                    blue         yellow       green
*/
const Kanbon = () => {
    const dispatch = useAppDispatch();
    const SelectedProject = useAppSelector(state => state.projects.selected);
    const HugeTasksFetched = useAppSelector(state => state.hugeTasks.HugeTasks);
    const LoadingState = useAppSelector(state => state.hugeTasks.loading);
    const currentScope = useAppSelector(state => state.logged.scope)
    useEffect( () => {
        if(currentScope === scopes.Project) dispatch( fetchHugeTasks(SelectedProject) );
    },[SelectedProject, currentScope, dispatch]);

    return (
            <MDBRow between className="h-100 w-100 pt-2 position-relative">
                <MDBCol size="sm-4 md-12 kanban" className="">
                    <KanbanPiece title="Not Started" color="bg-lightblue" tasks={getTasksNotStarted(HugeTasksFetched)} />
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                     <KanbanPiece title="In Progress" color="bg-lightyellow" tasks={getTasksInProgress(HugeTasksFetched)} />
                     {LoadingState === 'pending' && <div className='position-absolute top-50 start-50 translate-middle'>
                                                        <MDBSpinner grow style={{ width: '15rem', height: '15rem', color: '#F3AA99' }} >
                                                            <span className='visually-hidden'>Loading...</span>
                                                        </MDBSpinner>
                                                    </div>}
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                    <KanbanPiece title="Done" color="bg-lightred" tasks={getTasksDone(HugeTasksFetched)} />
                </MDBCol>
            </MDBRow>
    )
}

export default Kanbon;