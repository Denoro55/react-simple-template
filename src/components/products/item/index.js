import React from 'react';

import {Button, Card} from "react-bootstrap";

import LinkButton from "~/components/links/button";

export default function (props) {
    let btn;
    if (props.inCart) {
        btn = <Button onClick={props.onRemove} className="btn btn-danger mr-2">Remove</Button>
    } else {
        btn = <Button onClick={props.onAdd} className="btn btn-success mr-2">Add</Button>
    }
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
                {btn}
                <LinkButton to={props.link}>Go back</LinkButton>
            </Card.Body>
        </Card>
    )
}
