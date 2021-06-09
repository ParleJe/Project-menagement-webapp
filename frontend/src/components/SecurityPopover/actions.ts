import { Dispatch } from 'react';
import { SecurityPopoverModes } from '../../helpers/enums/SecurityPopoverModesEnum';
import UserPost from '../../helpers/responseInterfaces/UserPost';
import { tryLog, tryRegister } from '../../redux/slices/LoggedUserSlice';



const handleSecurityPopoverSubmit = (
  reducerDispatch: Dispatch<any>,
  reduxDispatch: Dispatch<any>,
  inputState: UserPost,
  mode: SecurityPopoverModes
) => {
  const stateToSend = inputState;
  reducerDispatch({ type: 'reset', payload: '' });
  if (mode === SecurityPopoverModes.login) {
    return reduxDispatch(tryLog(stateToSend));
  }
  return reduxDispatch(tryRegister(stateToSend));
};

export { handleSecurityPopoverSubmit };
