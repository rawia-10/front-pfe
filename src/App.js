import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Navbar from './Navbar';
import Footer from './Footer'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Logins = React.lazy(() => import('./views/Pages/LoginS'));
const LoginM = React.lazy(() => import('./views/Pages/LoginM'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const RegisterM =React.lazy(()=>import('./views/Pages/RegisterM'));
const Patient =React.lazy(()=>import('./views/Pages/Patient'));
const LoginP =React.lazy(()=>import('./views/Pages/LoginP'));
const Medecin =React.lazy(()=>import('./views/Pages/medecin'));
const RegisterP = React.lazy(() => import('./views/Pages/RegisterP'));
const Infomedecin  = React.lazy(() => import('./views/Pages/medecin/medecinInfo'))
class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
          {/* <Navbar/> */}
            <Switch>
             
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/loginsecretaire" name="Login Page" render={props => <Logins {...props}/>} />
              <Route exact path="/loginmedecin" name="Login Page" render={props => <LoginM {...props}/>} />
              <Route exact path="/loginpatient" name="Login Page" render={props => <LoginP {...props}/>} />
              <Route exact path="/infomedecin" name="Login Page" render={props => <Infomedecin {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />7
              <Route exact path="/registerP" name="Register Page" render={props => <RegisterP {...props}/>} />
              <Route exact path="/registerM" name="Register Page" render={props => <RegisterM {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/Patient" name="Page Patient" render={props => <Patient {...props}/>} />  
              <Route exact path="/Medecin" name="Page Medecin" render={props => <Medecin {...props}/>} /> 
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />


              </Switch>
              {/* <Footer/> */}
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
