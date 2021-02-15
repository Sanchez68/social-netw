import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import  {Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "react-router-dom/es/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
if(!this.props.initialized) {
    return <Preloader/>
}

        return (

            <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<Preloader/>}>
                            <Route path='/Profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/News' component={News}/>
                            <Route path='/Music' component={Music}/>
                            <Route path='/Settings' component={Settings}/>
                            <Route path='/Users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/Login'
                                   render={() => <LoginPage/>}/>
                        </Suspense>

                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)