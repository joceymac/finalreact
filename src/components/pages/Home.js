import React from 'react'
import '../../App.css'
import '../../index.css'

const Home = () => {
    return (
        <React.Fragment> 
            <div className="row">
                <div className="column left">
                    <h1>Hello, I am Jocelyne Mak </h1> 
                    <p> I am technologist who is committed in creating 
                        digital solutions that enable sustainable human connection, 
                        drive positive impact in diversity, environment and society. 
                        Based in Toronto, currently work for a financial institution, 
                        focusing on automation strategies, adopting and assessing new 
                        trends and technologies that enable product development acceleration 
                        and effective operational readiness.
                    </p>
                </div>
                <div className="column_right right">
                <img src={require("../../assets/turtle.jpg")} alt="turtle" width="450"></img>
                </div>
            </div>
        </React.Fragment>

    )
}


export default Home




// import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'

// const Home = () => {
//     return(
//         <Container>
//             <Row className="my-5">
//                 <Col lg="7">
//                     <img className="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
//                 </Col>
//                 <Col lg="5">
//                     <h1 className="font-weight-light">Business Name or Tagline</h1>
//                     <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
//                     <Button color="primary">Call to Action!</Button>
//                 </Col>
//             </Row>
//             <Card className="text-white bg-secondary my-5 py-4 text-center">
//                 <CardBody>
//                     <CardText><p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p></CardText>
//                 </CardBody>
//             </Card>
//             <Row>
//                 <Col md="4" className="mb-5">
//                     <Card>
//                         <CardBody>
//                             <CardTitle><h2>Card One</h2></CardTitle>
//                             <CardBody>Some text</CardBody>
//                         </CardBody>
//                         <CardFooter>
//                             <Button color="primary" size="sm">CTA</Button>
//                         </CardFooter>
//                     </Card>
//                 </Col>
//                 <Col md="4" className="mb-5">
//                     <Card>
//                         <CardBody>
//                             <CardTitle><h2>Card One</h2></CardTitle>
//                             <CardBody>Some text</CardBody>
//                         </CardBody>
//                         <CardFooter>
//                             <Button color="primary" size="sm">CTA</Button>
//                         </CardFooter>
//                     </Card>
//                 </Col>
//                 <Col md="4" className="mb-5">
//                     <Card>
//                         <CardBody>
//                             <CardTitle><h2>Card One</h2></CardTitle>
//                             <CardBody>Some text</CardBody>
//                         </CardBody>
//                         <CardFooter>
//                             <Button color="primary" size="sm">CTA</Button>
//                         </CardFooter>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }
