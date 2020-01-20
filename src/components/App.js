import React, {useState} from 'react';
import {observer} from "mobx-react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import store from '~/store';

import Page1 from '~/components/TB1';
import Page2 from '~/components/TB2';
import Page3 from '~/components/Page3';

import { Modal, Button } from 'react-bootstrap'

import router from '../router';

const App = observer(() => {
    let [activeRoute, setActiveRoute] = useState('');
    let [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(!show);
    };

	return (
		<div>
            {/*<button onClick={() => router.moveTo('page1')}>page 1</button>*/}
            {/*<button onClick={() => router.moveTo('page2')}>page 2</button>*/}
            {/*<button onClick={() => router.moveTo('page3')}>page 3</button>*/}
            <Router>
                <Link className="btn btn-primary mr-2" to="page1">page 1</Link>
                <Link className="btn btn-primary mr-2" to="page2">page 2</Link>
                <Link className="btn btn-primary" to="page3">page 3</Link>
                <hr/>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
            </Router>
		</div>
	)
});

export default App;
