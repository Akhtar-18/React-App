import React, { Component } from 'react';
import {Form, Button, Container, Row, Col, FormLabel, FormCheck, FormControl} from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return(
    <div>
      <NavigationBar />
      <Container className="col-md-5">
        <Form>
          <br/>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
<FormLabel column sm={2}>
Name
</FormLabel>
<Col sm={10}>
<Form.Control type="text" placeholder="Name" />
</Col>
</Form.Group>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
<FormLabel column sm={2}>
Email
</FormLabel>
<Col sm={10}>
<Form.Control type="email" placeholder="Email" />
</Col>
</Form.Group>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalUserName">
<FormLabel column sm={2}>
User Name
</FormLabel>
<Col sm={10}>
<Form.Control type="text" placeholder="User Name" />
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


<Form.Group as={Row} className="mb-3 justify-content-start" >
<FormLabel column sm={2}>
User Type
</FormLabel>
<Col sm={10}>
<FormCheck name="usertype" type="radio" label="Super Admin" />
<FormCheck name="usertype" type="radio" label="Admin" />
<FormCheck name="usertype" type="radio" label="User" />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
<Col sm={{ span: 10, offset: 2 }}>
<Button type="submit">Sign up</Button>
</Col>
</Form.Group>
</Form>
        
    </Container>
    </div>
    
      
  );
}

export default Register;