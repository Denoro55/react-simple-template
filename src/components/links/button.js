import React from "react";
import {withRouter} from 'react-router-dom'

const LinkButton = (props) => {
    const { to, history, staticContext, location, match, ...other} = props;
    return (
        <button {...other} onClick={() => {history.push(to)}} className="btn btn-primary">Back</button>
    )
};

export default withRouter(LinkButton);
