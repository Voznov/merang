import React, { Component } from 'react';
import './App.css';
import {
  Redirect,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN, APP_NAME } from '../constants';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Greeting from '../pages/Greeting';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Deals from '../pages/Deals';
import Item from '../pages/Item';
import SearchForm from '../pages/SearchForm';

import { Layout, notification, Table } from 'antd';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import AppFooter from './AppFooter';
import DesktopApp from './DesktopApp';
const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 2,
    });
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo = "/", notificationType = "success", description = "Вы успешно вышли") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);

    notification[notificationType]({
      message: APP_NAME,
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: APP_NAME,
      description: "Вы успешно вошли",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if (!this.isMobile) {
      return <DesktopApp />
    }

    if (this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      this.state.isAuthenticated
        ? <div className="app-layout">
          <Switch>
            <Route path="/users" />
            <Route style={{ display: "table" }}>
              <div className="block-title">
                <Switch>
                  <Route path="/chat">
                    <div className="block-title-wrap" >
                      <p className="block-title-text">Чаты</p>
                    </div>
                  </Route>
                  <Route path="/offer">
                    <div className="block-title-wrap" >
                      <p className="block-title-text">Сделки</p>
                    </div>
                  </Route>
                  <Route path="/search">
                    <div className="block-title-wrap" >
                      <p className="block-title-text">Поиск</p>
                      <SearchForm />
                    </div>
                  </Route>
                  <Route path="/liked">
                    <div className="block-title-wrap" >
                      <p className="block-title-text">Нравится</p>
                    </div>
                  </Route>
                  } />
                </Switch>
              </div>
            </Route>
          </Switch>
          <div className="app-content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/search" />
              </Route>
              <Route path="/chat">
                {/* CHAT */}
              </Route>
              <Route path="/offer">
                <Deals />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/liked">
                {/* LIKED */}
                <Item />
              </Route>
              <Route path="/users/:username" render={
                (props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} {...props} />
              } />
            </Switch>
          </div>
          <div className="app-footer">
            <AppFooter currentUsername={this.state.currentUser.username} />
          </div>
        </div>
        : <div className="app-content">
          <Switch>
            <Route exact path="/">
              <Greeting {...this.props} />
            </Route>
            <Route path="/login"
              render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
