import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import '../../App.css'
import '../../index.css'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)
    // const [loginError, setLoginError] = useState("")
    const loginSubmit = async event => {
        
        event.preventDefault()
        // const response=null

        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        
        const payload = await response.json()
        console.log(response.status)
        if (response.status >= 400) {
          // if (response==null) {
           setAuth(false)
          //  setLoginError("Login error")
            // let { from } = location.state || { from: { pathname: "/" } };
   //history.replace(from);
            // history.replace({pathname: "/listing"})
        } else {
          
          sessionStorage.setItem('token', payload.token)
          console.log(payload.token)
            let { from } = location.state || { from: { pathname: "/Listing" } };
            history.replace(from);
          }
    }

    return (
        <Container>
        {!auth && 
            <Card className="text-white bg-danger my-5 py-4 text-center">
            <CardBody>
                <CardText className="text-white m-0">Invalid credentials, please try again</CardText>
            </CardBody>
        </Card>
        }
        <Form className="my-5" onSubmit={loginSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="usernameEntry">Email</Label>
                <Input type="text" name="email" id="EmailEntry" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="passwordEntry">Password</Label>
                <Input type="password" name="password" id="passwordEntry" placeholder="Valid password" onChange={e => setPassword(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
            {/* {loginError ? <Label>loginError</Label> : null } */}
          <Button color="success">Sign in</Button>
        </Form></Container>
    )
}

export default Login