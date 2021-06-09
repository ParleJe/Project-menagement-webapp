import { MDBContainer } from 'mdb-react-ui-kit';
import { Fragment } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import SelectedScopeEnum from '../../helpers/enums/SelectedScopeEnum';
import {
  getTasksDone,
  getTasksInProgress,
  getTasksNotStarted,
} from '../../helpers/responseInterfaces/Simplified';
import { useAppSelector } from '../../redux/hooks';

const DonutChart = () => {
  const scopeSelected = useAppSelector((state) => state.logged.scope);
  const dataToEvaluate = useAppSelector((state) => {
    switch (scopeSelected) {
      case SelectedScopeEnum.PROJECT:
        return state.hugeTasks.tasks;
      case SelectedScopeEnum.TASK:
        return state.toDos.toDos;
      default:
        return null;
    }
  });

  const data = [
    {
      title: 'Done',
      key: 1,
      value: dataToEvaluate === null ? 0 : getTasksDone(dataToEvaluate).length,
      color: '#00b74a',
    },
    {
      title: 'Not Started',
      key: 2,
      value:
        dataToEvaluate === null ? 0 : getTasksNotStarted(dataToEvaluate).length,
      color: '#f93154',
    },
    {
      title: 'In Progress',
      key: 3,
      value:
        dataToEvaluate === null ? 0 : getTasksInProgress(dataToEvaluate).length,
      color: '#39c0ed',
    },
  ];

  return (
    <Fragment>
      <h1 className="text-center">
        {scopeSelected + scopeSelected !== SelectedScopeEnum.NONE ? ':' : ''}
      </h1>
      <MDBContainer className="h-80 w-100">
        <PieChart
          viewBoxSize={[100, 100]}
          animate
          onClick={(e, index) => alert(data[index].title)}
          lineWidth={30}
          rounded
          data={data}
        />
      </MDBContainer>
    </Fragment>
  );
};
export default DonutChart;
