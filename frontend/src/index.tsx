import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavigationBar from './components/NavigationBar';
import reportWebVitals from './reportWebVitals';
import MainBoard from './components/MainBoard';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Provider } from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MDBContainer fluid className="h-100">
        <NavigationBar />
        <MainBoard />
      </MDBContainer>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
