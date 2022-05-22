import react from 'react';
import reactDOM from 'react-dom';

function sayHello() {
  return react.createElement('div', null, react.createElement('p', null, '버튼이 없지요'));
}

const container = document.getElementById('root');

reactDOM.render(react.createElement(sayHello), container);
