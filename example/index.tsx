import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from '../dist/lib/redux';

redux.sayHi('hello');

const App = () => {
  return <div>app</div>;
};
ReactDOM.render(<App/>, document.getElementById('root'));