import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import './App.scss'


import Courierlogin from './components/Courierlogin'
import Home from './components/Home'
import InputNewPwd from './components/InputNewPwd'
import Items from './components/Items'
import NavigationHeader from './components/NavigationHeader'
import UserLogin from './components/UserLogin'
import RidersMap from './components/RidersMap'
import OfficeEmployees from './components/OfficeEmployees'
import DispatchRiders from './components/DispatchRiders'
import UserProfile from './components/UserProfile'

export class App extends Component {
  
  render() {
    const {auth, newUser} = this.props;
    const withnavhead = auth.uid && !newUser && <NavigationHeader/>
    const link = auth.uid ? Home : Courierlogin
    return (
      <div className = "app-main">
          {withnavhead}
          <Switch>
            <Route exact path = '/' component = {link} />
            <Route exact path = '/userlogin' component = {UserLogin} />
            <Route exact path = '/inputNewPassword' component = {InputNewPwd} />
            <Route exact path = '/home' component = {Home} />
            <Route exact path = '/items' component = {Items} />
            <Route exact path = '/ridersMap' component = {RidersMap} />
            <Route exact path = '/officeEmployees' component = {OfficeEmployees} />
            <Route exact path = '/dispatchRiders' component = {DispatchRiders} />
            <Route exact path = '/userProfile' component = {UserProfile} />
          </Switch>
  
          <div className = "footer">
               <h2>Copyright @ StreetEfficient 2021</h2>
           </div>  
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
      newUser: state.courier.newuser,
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps) (App)