import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"

import routes, {routesMap} from "~/router";

import withStore from "~/hocs/withStore";
import {Switch} from "react-router-dom";

class App extends React.Component {
    render() {
        const { cart: storeCart } = this.props.store;
        return (
            <Router>
                <header>
                    <div className="row justify-content-between">
                        <div className="col col-4">
                            <div className="alert alert-success">React.js</div>
                        </div>
                        <div className="col col-3">
                            <span>In cart: {storeCart.cart.length}</span> <br/>
                            <span>Total: {storeCart.totalPrice}</span>
                        </div>
                    </div>
                </header>
                <NavLink activeClassName="btn-success" className="btn btn-primary mr-2" to={routesMap.products}>Products</NavLink>
                <NavLink activeClassName="btn-success" className="btn btn-primary mr-2" to={routesMap.cart}>Cart</NavLink>
                <NavLink activeClassName="btn-success" className="btn btn-primary mr-2" to={routesMap.result}>Result</NavLink>
                <NavLink activeClassName="btn-success" className="btn btn-primary" to={routesMap.test}>Test</NavLink>
                <hr/>
                <Switch>
                    {
                        routes.map(e => {
                            return <Route key={e.id} path={e.to} component={e.component} exact={e.exact} />
                        })
                    }
                </Switch>
            </Router>
        )
    }
}

export default withStore(App);
