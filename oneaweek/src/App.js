import React, {Component} from "react";
import {Route, HashRouter, Redirect} from "react-router-dom";

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
                    <div className="App pad-bottom">
                        <div className="content">
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/acts" component={Schools}/>
                            <Route exact path="/blog" component={BlogPage}/>
                            <Route exact path="/blog/:id" component={BlogDetailPage}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/podcast" component={Podcast}/>
                            <Route exact path="/share" component={SharePage}/>
                            <PrivateRoute exact path="/admin" component={Admin}/>
                            <PrivateRoute exact path="/admin/blogs" component={AdminBlogs}/>
                            <PrivateRoute exact path="/admin/blogs/add" component={AdminAddBlog}/>
                            <PrivateRoute exact path="/admin/blogs/edit/:id" component={AdminAddBlog}/>
                            <PrivateRoute exact path="/admin/classes" component={AdminClasses}/>
                        </div>
                    </div>
                </HashRouter>
                <Footer/>
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
