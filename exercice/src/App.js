import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let posts1 = { color : 'blue', fontSize : '30px' };

  function 함수(){
    return 100
  }


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="black-nav">
          <div>개발 Blog</div>
          <div className={ posts }>개발 Blog</div>
          <div style={ posts1 }>개발 Blog</div>
      </div>
      <img src={ logo } className="App-logo" alt="logo" />
      <h4> { posts } </h4>
      <h4> { 함수() } </h4>
    </div>
  );
}

export default App;
