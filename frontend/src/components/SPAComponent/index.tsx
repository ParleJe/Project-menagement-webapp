import { MDBContainer } from 'mdb-react-ui-kit';
import { useAppSelector } from '../../redux/hooks';
import MainBoard from '../MainBoard';
import NavigationBar from '../NavigationBar';
import SecurityPopover from '../SecurityPopover';

const SPAComponent = () => {
  const LoggedUser = useAppSelector((state) => state.logged.logged);
  const isLogged = LoggedUser === null;

  return (
    <MDBContainer fluid className="h-100">
      {isLogged && <SecurityPopover show={isLogged} />}
      <NavigationBar />
      <MainBoard />
    </MDBContainer>
  );
};

export default SPAComponent;
