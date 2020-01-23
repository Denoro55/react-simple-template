import React from 'react';

import {Alert} from "react-bootstrap";

export default class extends React.Component {
    render() {
        return (
            <Alert variant='warning'>
                Page not found!
            </Alert>
        )
    }
}
