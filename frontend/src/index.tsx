import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SPAComponent from './components/SPAComponent';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SPAComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
