import { Dispatch } from 'react';
import { SecurityPopoverModesEnum } from '../../helpers/enums/SecurityPopoverModesEnum';
import UserPost from '../../helpers/responseInterfaces/UserPost';
import { tryLog, tryRegister } from '../../redux/slices/LoggedUserSlice';

const dispatchAccordingly = (
  mode: SecurityPopoverModesEnum,
  state: UserPost,
  reduxDispatch: Dispatch<any>
): void => {
  if (mode === SecurityPopoverModesEnum.login) {
    return reduxDispatch(tryLog(state));
  }
  return reduxDispatch(tryRegister(state));
};

const handleSecurityPopoverSubmit = (
  reducerDispatch: Dispatch<any>,
  reduxDispatch: Dispatch<any>,
  inputState: UserPost,
  mode: SecurityPopoverModesEnum,
  modeSetter: Function
): void => {
  dispatchAccordingly(mode, inputState, reduxDispatch);
  reducerDispatch({ type: 'reset', payload: '' });
  modeSetter(SecurityPopoverModesEnum.login);
};

export { handleSecurityPopoverSubmit };
