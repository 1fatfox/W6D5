import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';



  const docs = [
    {title: "To do" , content: "Finish Tabs"},
    {title: "Recipes" , content: "Shukshuka"},
    {title: "Shop" , content: "Headphones"}
  ];





function Root() {
  return (
    <>
    <div><Clock/></div>
    <div><Tabs docs={docs}/></div>
    </>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root/>, main);
});
