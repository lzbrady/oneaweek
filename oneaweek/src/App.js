import React, {Component} from "react";
import {Route, HashRouter} from "react-router-dom";

import "./App.css";

import HomePage from "./Home/HomePage";
import BlogPage from "./Blog/BlogPage";
import Menu from "./Menu";
import SharePage from "./Share/SharePage";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <HashRouter>
                    <div className="App">
                        <div className="content">
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/blog" component={BlogPage}/>
                            <Route exact path="/share" component={SharePage}/>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
