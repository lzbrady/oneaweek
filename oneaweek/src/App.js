import React, {Component} from "react";
import {Route, HashRouter, Redirect} from "react-router-dom";

import "./App.css";

import HomePage from "./Home/HomePage";
import BlogPage from "./Blog/BlogPage";
import BlogDetailPage from "./Blog/BlogDetailPage";
import Menu from "./Menu";
import SharePage from "./Share/SharePage";
import Sponsors from "./Sponsors/Sponsors";
import Admin from "./Admin/Admin";
import Login from "./Admin/Login";
import AdminClasses from "./Admin/AdminClasses/AdminClasses";
import AdminBlogs from "./Admin/AdminBlogs/AdminBlogs";
import AdminAddBlog from "./Admin/AdminBlogs/AdminAddBlog";
import AdminMenu from "./Admin/AdminMenu";
import {fakeAuth} from "./Admin/Login";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/> {fakeAuth.isAuthenticated && <AdminMenu/>}
                <HashRouter>
                    <div className="App">
                        <div className="content">
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/blog" component={BlogPage}/>
                            <Route exact path="/blog/:id" component={BlogDetailPage}/>
                            <Route exact path="/share" component={SharePage}/>
                            <Route exact path="/sponsors" component={Sponsors}/>
                            <Route exact path="/login" component={Login}/>
                            <PrivateRoute exact path="/admin" component={Admin}/>
                            <PrivateRoute exact path="/admin/classes" component={AdminClasses}/>
                            <PrivateRoute exact path="/admin/blogs" component={AdminBlogs}/>
                            <PrivateRoute exact path="/admin/blogs/add" component={AdminAddBlog}/>
                            <PrivateRoute exact path="/admin/blogs/edit/:id" component={AdminAddBlog}/>
                        </div>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) => (fakeAuth.isAuthenticated === true
        ? <Component {...props}/>
        : <Redirect to='/login'/>)}/>
)

export default App;
