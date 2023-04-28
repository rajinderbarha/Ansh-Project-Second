import './Footer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icons from './Icons';
function Footer(props) {
    return (
        <>
            <div className="Footer">
                <div className='Footer-con'>
                    <Row>
                        <Col   md={4}><h1>sawg</h1></Col>
                        <Col md={8}>
                            <Row>
                                <Col md={3}>
                                    <h4 className='mb-3'>Product</h4>
                                    <ul className='Footer-ul'>
                                        <li><a href="#g">Features</a></li>
                                        <li><a href="#g">Work</a></li>
                                        <li><a href="#g">Career</a></li>
                                        <li><a href="#g">Money</a></li>
                                        <li><a href="#g">Benefits</a></li>
                                    </ul>
                                </Col>
                                <Col md={3}>
                                    <h4 className='mb-3'>Product</h4>
                                    <ul className='Footer-ul'>
                                        <li><a href="#g">Help Centre</a></li>
                                        <li><a href="#g">Chat</a></li>
                                        <li><a href="#g">Report a bug</a></li>
                                    </ul>
                                </Col>
                                <Col md={3}>
                                    <h4 className='mb-3'>Product</h4>
                                    <ul className='Footer-ul' >
                                        <li><a href="#g">Contact</a></li>
                                        <li><a href="#g">Sales</a></li>
                                    </ul>
                                </Col>
                                <Col md={3}>
                                    <h4 className='mb-3'>Product</h4>
                                    <ul className='Footer-ul' >
                                        <li><a href="#g">Australia</a></li>
                                        <li><a href="#g">New Zealand</a></li>
                                        <li><a href="#g">United Kingdom</a></li>
                                        <li><a href="#g">Singapore</a></li>
                                        <li><a href="#g">Malaysia</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className='Footer-icon'>
                        <button>Download Now</button>
                        <div className='footer0icons'>
                            <Icons />
                        </div>
                    </div>
                    <div className='Copy-right'>
                        <div className='copy-nav'>
                            <ul className='copy-nav-ul' >
                                <li><a href="#g">Legal Centre</a></li>
                                <li><a href="#g">Cookies</a></li>
                                <li><a href="#g"> Cookie Policy </a></li>
                                <li><a href="#g">Privacy Policy</a></li>
                                <li><a href="#g">Terms</a></li>
                            </ul>
                            <h4 >2023 © Swag. All rights reserved. Powered by Employment Hero</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
