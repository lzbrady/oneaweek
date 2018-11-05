import React, {Component} from "react";
import {Route, HashRouter, Redirect} from "react-router-dom";
import {auth} from "./server/fire";

import "./App.css";

import HomePage from "./Home/HomePage";
import Contact from "./Contact/Contact";
import Schools from "./Acts/Schools";
import BlogPage from "./Blog/BlogPage";
import BlogDetailPage from "./Blog/BlogDetailPage";
import Podcast from "./Podcast/Podcast";
import Menu from "./Menu";
import Footer from "./Footer/Footer";
import SharePage from "./Share/SharePage";
import About from "./About/About";
import Admin from "./Admin/Admin";
import SignIn from "./Admin/SignIn";
import AdminClasses from "./Admin/AdminClasses/AdminClasses";
import AdminBlogs from "./Admin/AdminBlogs/AdminBlogs";
import AdminAddBlog from "./Admin/AdminBlogs/AdminAddBlog";
import AdminMenu from "./Admin/AdminMenu";

class App extends Component {

    constructor() {
        super();

        this.state = {
            authUser: {}
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({authUser})
                : this.setState({authUser: null});
        });
    }

    render() {
        const PrivateRoute = ({
            component: Component,
            ...rest
        }) => (
            <Route
                {...rest}
                render={(props) => (this.state.authUser
                ? <Component {...props}/>
                : <Redirect to='/login'/>)}/>
        )

        return (
            <div>
                <Menu/> {this.state.authUser && <AdminMenu authUser={this.state.authUser}/>}
                <HashRouter>
                    <div className="App pad-bottom">
                        <div className="content">
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/acts" component={Schools}/>
                            <Route exact path="/blog" component={BlogPage}/>
                            <Route exact path="/blog/:id" component={BlogDetailPage}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/podcast" component={Podcast}/>
                            <Route exact path="/share" component={SharePage}/>
                            <Route exact path="/login" component={SignIn}/>
                            <PrivateRoute
                                authUser={this.state.authUser}
                                exact
                                path="/admin"
                                component={Admin}/>
                            <PrivateRoute
                                auth={this.state.authUser}
                                exact
                                path="/admin/blogs"
                                component={AdminBlogs}/>
                            <PrivateRoute
                                auth={this.state.authUser}
                                exact
                                path="/admin/blogs/add"
                                component={AdminAddBlog}/>
                            <PrivateRoute
                                auth={this.state.authUser}
                                exact
                                path="/admin/blogs/edit/:id"
                                component={AdminAddBlog}/>
                            <PrivateRoute
                                auth={this.state.authUser}
                                exact
                                path="/admin/classes"
                                component={AdminClasses}/>
                        </div>
                    </div>
                </HashRouter>
                <Footer/>
            </div>
        )
    }
}

export default App;
