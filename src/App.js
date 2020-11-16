import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './App.css'
import { Container } from './globalStyles'
import GlobalStyle from './globalStyles'
import Header from './components/Header/Header'
import HomePage from './containers/Home/Home'
import Footer from './components/Footer/Footer'
import PhotoDetailsPage from './containers/PhotoDetailsPage/PhotoDetailsPage'

import CategoriesPage from './containers/CategoriesPage/CategoriesPage'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Header />
        <Switch>
          <Route path="/category/:categoryId" component={HomePage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/photos/:imageId" component={PhotoDetailsPage} />
          <Route path="/" exact component={HomePage}>
            <Redirect to="/category/1" />
          </Route>
        </Switch>
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
