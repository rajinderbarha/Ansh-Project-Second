import './Banner.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import boy from './imgs/360_F_303514968_eeVPWukEGgHye26kCRBK7A7FQk8HLeVq.webp'
import { BsArrowRight } from "react-icons/bs";
function Banner() {
    return (
        <>
            <div className='Banner'>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col md={6} xl={6}>
                            <div className='banner-sec'>
                                <h1>Mental health redesigned</h1>
                                <p className='my-5'>Helping your students succeed and thrive with the help of licensed therapists and a community of peers. When and where they need it most.</p>
                                <button><div className='hiiii'><BsArrowRight /></div>Join now</button>
                            </div>
                        </Col>
                        <Col md={6} xl={6}>
                            <div className='img-banner'>
                            <img src={boy} alt='ff'/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Banner