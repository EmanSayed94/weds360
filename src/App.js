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
import { Redirect, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import PhotoDetailsPage from './features/PhotoDetailsPage/PhotoDetailsPage'
import {
  NavMobileContainer,
  NavMobileItem,
  NavMobileItemSmall,
} from './elements/navMobile'

function App() {
  return (
    <div>
      {/* <div>jhjhj</div> */}
      <GlobalStyle />

      <Container>
        <Header />
        <Switch>
          <Route path="/category/:categoryId" component={HomePage} />
          <Route path="/photos/:imageId" component={PhotoDetailsPage} />
          <Route path="/" exact component={HomePage}>
            <Redirect to="/category/1" />
          </Route>
        </Switch>
        {/* <PhotoDetailsPage /> */}
        {/* <HomePage /> */}
      </Container>
      <Footer />

      {/* <ImageSlider
          images={[
            'navy_1.jpeg',
            'Navy.jpeg',
            'navy_2.jpeg',
            'navy_3.jpeg',
            'navy_4.jpeg',
          ]}
        /> */}
    </div>
  )
}

export default App
