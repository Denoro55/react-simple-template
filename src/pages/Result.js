import React from 'react';

import {Form, Button, Row, Col} from "react-bootstrap";
import withStore from "~/hocs/withStore";

class Result extends React.Component {
    render() {
        const {order} = this.props.store;
        return (
            <Row>
                <Col xs={4}>
                    <Form>
                        { Object.values(order.formData).map(field => {
                            return (
                                <Form.Group key={field.name}>
                                    <Form.Label>{field.name}</Form.Label>
                                    <Form.Control type="email" onChange={(e) => order.change(field.name, e.target.value)} value={field.value} placeholder={`enter ${field.name}`} />
                                    { (field.value !== '' && !field.valid) && <Form.Text className="text-muted">
                                        { field.errorText }
                                    </Form.Text> }
                                </Form.Group>
                            )
                        }) }
                        <Button variant="primary" disabled={!order.isFormValid} type="submit">
                            Submit
                        </Button>
                        <div className="result">Your phone is {order.data['phone']}</div>
                        <Button variant="primary">
                            Test
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default withStore(Result);
