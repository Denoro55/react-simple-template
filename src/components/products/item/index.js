import React from 'react';

import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

import LinkButton from "~/components/links/button";

export default function (props) {
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <LinkButton to={props.link}>Go back</LinkButton>
            </Card.Body>
        </Card>
    )
}
