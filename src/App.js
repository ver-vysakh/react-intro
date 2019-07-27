import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import routes from './routes';
import Home from './components/home';
import Grid from './components/table/table';
import About from './components/about-us/aboutUs';
import Header from './components/header/header';


class App extends Component {
  render() {
    // return (
    //   <div>
    //     <Header></Header>
    //   {/* <About></About> */}
    //   </div>
    // );
    return (
      <Router>
        <>
          <Navbar bg="light">
            <Nav className="mx-auto">
              {routes.map(route => (
                <Nav.Link
                  key={route.path}
                  as={NavLink}
                  to={route.path}
                  activeClassName="active"
                  exact
                >
                  {route.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar>
          <Container className="container">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={0}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Container>
        </>
      </Router>
    )
  }

}

export default App;
