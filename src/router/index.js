import React, {useState} from 'react';
import {observable, action, computed} from "mobx";

import TB1 from '~/components/TB1';
import TB2 from '~/components/TB2';

class Router {
    routes = {
        'page1': <div>Hello</div>,
        'page2': <TB2 />,
    };

    @observable activeRoute = 'page1'

    @computed get component() {
        return this.routes[this.activeRoute];
    }

    @action moveTo(route) {
        this.activeRoute = route;
    }
}

export default new Router;
