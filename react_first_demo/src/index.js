import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element1=React.createElement("h1",null,"helloWorld");
const element2=React.createElement("h2",null,"how are you?");


//jsx element java script element
const element3=<h3>i am  h3 jsx element </h3>
root.render([element1, element2,element3,"data is here"]);

root.render(<div>{element1} ,{element2},{element3},data,<App/></div>);

//  setTimeout(()=>root.unmount(), 3000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
