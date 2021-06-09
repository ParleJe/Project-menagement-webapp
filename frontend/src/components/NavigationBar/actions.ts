import { Dispatch } from 'react';
import SelectedScopeEnum from '../../helpers/enums/SelectedScopeEnum';
import { logoutUser, setScope } from '../../redux/slices/LoggedUserSlice';
import { select } from '../../redux/slices/projectSlice';

const onClickProject = (
  idProject: number,
  reduxDispatch: Dispatch<any>
): void => {
  reduxDispatch(setScope(SelectedScopeEnum.PROJECT));
  reduxDispatch(select(idProject));
};

const onClickProfileButton = (reduxDispatch: Dispatch<any>): void => {
  reduxDispatch(logoutUser());
};

export { onClickProject, onClickProfileButton };
