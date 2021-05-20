import { MDBCol, MDBRow } from "mdb-react-ui-kit"
import { Fragment, useEffect } from "react"
import KanbanPiece from "./KanbanPiece"

import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import { fetchHugeTasks } from '../../redux/slices/HugeTasksSlice'
import HugeTask from "../../helpers/responseInterfaces/HugeTask"

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
    
    if(HugeTasksFetched.length !== 0) mapTasksToCategories(HugeTasksFetched);

    return (
        <Fragment>
            <MDBRow between className="h-100 w-100 pt-2">

                <MDBCol size="sm-4 md-12 kanban" className="">
                    <KanbanPiece title="Not Started" color="bg-lightblue" />
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                    <KanbanPiece title="In Progress" color="bg-lightyellow" />
                </MDBCol>

                <MDBCol size="sm-4 lg-12 kanban" className="">
                    <KanbanPiece title="Done" color="bg-lightred" />
                </MDBCol>

            </MDBRow>
        </Fragment>
    )
}

const mapTasksToCategories = (tasks: HugeTask[]) => {
    //TODO
}

export default Kanbon;