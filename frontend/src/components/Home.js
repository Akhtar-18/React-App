import React, { Component } from 'react';
import {Form, Button, Container, Row, Col, FormLabel, FormCheck, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './NavigationBar';
import Login from './Login';
import Register from './Register';

function Home(){
    return(
            <NavigationBar />
    );
}

export default Home;