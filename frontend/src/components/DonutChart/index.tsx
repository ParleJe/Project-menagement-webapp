import { MDBContainer } from 'mdb-react-ui-kit';
import { CSSProperties, Fragment } from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import { getTasksDone, getTasksInProgress, getTasksNotStarted } from '../../helpers/responseInterfaces/Simplified';
import { useAppSelector } from '../../redux/hooks';
import { scopes } from '../../redux/slices/LoggedUserSlice';

const DonutChart = () => {

    const scopeSelected = useAppSelector((state) => state.logged.scope);
    const dataToEvaluate = useAppSelector((state) => {
      switch(scopeSelected) {
        case scopes.Project: return state.hugeTasks.HugeTasks;
        case scopes.HugeTask: return state.toDos.toDos;
        default: return null;
      }
    })

    const data = [
      { title: 'Done', key: 1, value: dataToEvaluate===null?0:getTasksDone(dataToEvaluate).length, color: '#00b74a' },
      { title: 'Not Started', key: 2, value: dataToEvaluate===null?0:getTasksNotStarted(dataToEvaluate).length, color: '#f93154' },
      { title: 'In Progress', key: 3, value: dataToEvaluate===null?0:getTasksInProgress(dataToEvaluate).length, color: '#39c0ed' },
    ];

    

    return (
        <Fragment>
            <h1 className="text-center">Progress:</h1>
            <MDBContainer className="h-80 w-100">
                    <PieChart viewBoxSize={[100,100]} animate onClick={(e,index) => alert(data[index].title)} lineWidth={30} rounded data={data} />
            </MDBContainer>
        </Fragment>
    )
}
export default DonutChart;