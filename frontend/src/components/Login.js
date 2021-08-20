import React, { Component } from 'react';
import {Form, Button, Container, Row, Col, FormLabel, FormCheck, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';

function Login() {
        return(
          <div>
            <NavigationBar/>
            <Container className="col-md-5">
              <Form>
                <br/>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <FormLabel column sm={2}>
      Email
    </FormLabel>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <FormLabel column sm={2}>
      Password
    </FormLabel>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  
  
  <Form.Group as={Row} className="mb-3 justify-content-start">
    <Col sm={{ span: 2, offset: 2 }}>
      <FormCheck id="inlineFormInputGroup" type="checkbox" label="Remember" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
              
          </Container>
          </div>
          
            
        );
}

export default Login;