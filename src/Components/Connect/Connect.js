import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Connect.css'
function Connect() {
    function Submit(event){
        event.preventDefault()
        alert("Clicked")
    }
    return (<>
        <div className='Connect-main'>
            <div className='container'>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <div className="Connect">
                            <p className='coloer-borderr mb-4'>CRM FOR STARTUPS</p>
                            <h2>The real-time CRM for scaling startups.</h2>
                            <p className='mt-4'>Infinitely flexible, Attio is built for every stage of the startup journey – from zero to IPO.</p>
                            <button className='px-4 py-3 mt-3 bg-dark text-white rounded-3 me-3' >Try for free</button>
                            <button className='px-4 py-3 mt-3  text-dark border bg-white rounded-3 me-3'>Talk to sales</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='form px-4 py-5'>
                            <Form onSubmit={Submit}>
                                <div className='row '>
                                    <div className='col-md-6'>
                                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />

                                        </Form.Group>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Number" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className=''>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </div>
                                <div className='pb-3'>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                </div>
                                <Button variant="light"  type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>)
}
export default Connect