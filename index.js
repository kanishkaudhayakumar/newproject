import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2021, 5, 12, 12);
curDate = curDate.getHours();
let gree = '';
const cssStyle = {};
if (curDate >= 1 && curDate < 12) {
  gree = 'Good Morning';
  cssStyle.color = 'green';
} else if (curDate >= 12 && curDate < 19) {
  gree = 'Good Afternoon';
  cssStyle.color = 'orange';
} else {
  gree = 'Good Night';
  cssStyle.color = 'Black';
}
ReactDOM.render(
  <div>
    <h1>
      hello ,<span style={cssStyle}>{gree}</span>
    </h1>
    , document.getElementById("root")
  </div>
);
