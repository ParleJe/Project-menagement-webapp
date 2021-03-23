import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavigationBar from './components/NavigationBar';
import reportWebVitals from './reportWebVitals';
import Project from './helpers/classes/Project';


let projects: Array<Project> = [new Project(1, "name1", "description1"), new Project(2, "name2", "description2"), new Project(3, "name3", "description3")];

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar projects={projects} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
