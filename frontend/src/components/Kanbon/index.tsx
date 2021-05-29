import { MDBCol, MDBRow } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import KanbanPiece from "./KanbanPiece"
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { fetchHugeTasks } from '../../redux/slices/HugeTasksSlice'
import { getTasksDone, getTasksInProgress, getTasksNotStarted } from "../../helpers/responseInterfaces/Simplified"
import { scopes } from "../../redux/slices/LoggedUserSlice"
import LoadingIndicator from "../LoadingIndicator"
import AddPopover from "../AddPopover"


const Kanbon = () => {
    const dispatch = useAppDispatch();
    const SelectedProject = useAppSelector(state => state.projects.selected);
    const HugeTasksFetched = useAppSelector(state => state.hugeTasks.HugeTasks);
    const loadingState = useAppSelector(state => state.hugeTasks.loading);
    const currentScope = useAppSelector(state => state.logged.scope)
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const togglePopup = () => setShowPopup(!showPopup);
    useEffect(() => {
        if (currentScope === scopes.Project) dispatch(fetchHugeTasks(SelectedProject));
    }, [SelectedProject, currentScope, dispatch]);

    return (
        <MDBRow between className="h-100 w-100 pt-2 position-relative">
            {showPopup && <AddPopover idProject={SelectedProject} show={showPopup} setShow={setShowPopup} />}
            <MDBCol size="sm-4 md-12 kanban" className="">
                <KanbanPiece title="Not Started" color="bg-lightblue" tasks={getTasksNotStarted(HugeTasksFetched)} togglePopup={togglePopup} />
            </MDBCol>

            <MDBCol size="sm-4 lg-12 kanban" className="">
                <KanbanPiece title="In Progress" color="bg-lightyellow" tasks={getTasksInProgress(HugeTasksFetched)} />
                {loadingState === 'pending' && <LoadingIndicator />}
            </MDBCol>

            <MDBCol size="sm-4 lg-12 kanban" className="">
                <KanbanPiece title="Done" color="bg-lightred" tasks={getTasksDone(HugeTasksFetched)} />
            </MDBCol>
        </MDBRow>
    )
}

export default Kanbon;