import { Dispatch } from 'react';
import ExecutionStatusEnum from '../../helpers/enums/ExecutionStatusEnum';
import Simplified from '../../helpers/responseInterfaces/Simplified';
import { addToDo, removeToDo, updateToDo } from '../../redux/slices/ToDoSlice';

const createAddToDoPayload = (name: string, idTask: number) => {
  return {
    toDo: {
      name: name,
      description: '',
      state: ExecutionStatusEnum.NOT_STARTED,
      priority: 1,
    },
    idTask: idTask,
  };
};

const dispatchAddToDo = (
  name: string,
  idTask: number,
  reduxDispatch: Dispatch<any>
) => {
  const requestPayload = createAddToDoPayload(name, idTask);

  return reduxDispatch(addToDo(requestPayload));
};

const dispatchUpdateToDo = (
  toDo: Simplified,
  reduxDispatch: Dispatch<any>
): void => {
  const updatedState =
    toDo.state === ExecutionStatusEnum.NOT_STARTED
      ? ExecutionStatusEnum.DONE
      : ExecutionStatusEnum.NOT_STARTED;
  const updatedToDo: Simplified = { ...toDo, state: updatedState };

  return reduxDispatch(updateToDo(updatedToDo));
};

const dispatchRemoveToDo = (id: number, reduxDispatch: Dispatch<any>): void => {
  return reduxDispatch(removeToDo(id));
};

export { dispatchUpdateToDo, dispatchRemoveToDo, dispatchAddToDo };
