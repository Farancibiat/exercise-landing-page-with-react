import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from "./components/navigationbar";
import Header from "./components/header";
import CardField from "./components/cardfield";
import PageFooter from './components/pagefooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css";




ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <Header/>
    <CardField/>
    <PageFooter/>
  </React.StrictMode>,
  document.getElementById('root')
);


