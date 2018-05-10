import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import * as actions from '../actions';

export class App extends React.Component{ 


    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                         <Route path="/" exact component={Landing} />
                        {/*<Route path="/surveys" exact component={} />
                        <Route path="/surveys/new" exact component={} /> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);