import { MDBContainer } from 'mdb-react-ui-kit';
import { CSSProperties, Fragment } from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import { useAppSelector } from '../../redux/hooks';
import { scopes } from '../../redux/slices/LoggedUserSlice';

const DonutChart = () => {

    const scopeSelected = useAppSelector((state) => state.logged.scope);
    const dataToEvaluate = useAppSelector((state) => {
      switch(scopeSelected) {
        case scopes.HugeTask: return state.hugeTasks.HugeTasks;
        case scopes.ToDo: return state.toDos.toDos;
        default: return null;
      }
    })

    const dataMock = [
        { title: 'Done', key: 1, value: 10, color: '#00b74a' },
        { title: 'Not Started', key: 2, value: 6, color: '#f93154' },
        { title: 'In Progress', key: 3, value: 20, color: '#39c0ed' },
      ];

    return (
        <Fragment>
            <h1 className="text-center">Progress:</h1>
            <MDBContainer className="h-80 w-100">
                    <PieChart viewBoxSize={[100,100]} animate onClick={(e,index) => alert(dataMock[index].title)} lineWidth={30} rounded data={dataMock} />
            </MDBContainer>
        </Fragment>
    )
}
export default DonutChart;