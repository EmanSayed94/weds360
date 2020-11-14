import React from 'react'
// import logo from './logo.svg';
// import Counter from './features/Counter/Counter';
// import {Counter} from "./features/counter/Counter"
import './App.css'

// import { NavDropdown, DropDownItemLink } from './elements/navDropdown'
import { Container } from './globalStyles'
import GlobalStyle from './globalStyles'
import Header from './components/Header/Header'
import HomePage from './features/Home/Home'
import ImageSlider from './components/Slider/Slider'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <div>jhjhj</div> */}
      <GlobalStyle />
      <Container>
        <Header />
        <Switch>
          <Route path="/home/suits" component={HomePage} />
        </Switch>
        {/* <ImageSlider
          images={[
            'navy_1.jpeg',
            'Navy.jpeg',
            'navy_2.jpeg',
            'navy_3.jpeg',
            'navy_4.jpeg',
          ]}
        /> */}
        <HomePage />
      </Container>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      {/* <Button ></Button> */}
      {/* <Button dark>
        clear
      </Button> */}
    </div>
  )
}

export default App
