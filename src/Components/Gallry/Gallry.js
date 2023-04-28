import { Col, Row } from 'react-bootstrap';
import './Gallry.css';
import Man from '../imgs/man1.jpg'
import Con from '../imgs/Con-1.jpg'
import con2 from '../imgs/Con-2.jpg'
import con3 from '../imgs/Con-3.jpg'
import con4 from '../imgs/Con-4.jpg'
import Countup from 'react-countup';

function Gallry() {
    return (<>
        <div className='Gallry'>
            <div className='containerx'>
                <Row>
                    <Col md={5}>
                        <div className='Konstantin d-flex'>
                            <div className='Konstantin1'>
                                <img src={Man} alt='hh' />
                                <div className='Konstantin1-img'>
                                    <p>Members</p>
                                    <div className='Countup' style={{ fontSize: '40px' }}>
                                        <Countup
                                            start={0}
                                            end={100}
                                            duration={3}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className='Konstantin2'>
                                <img src={Con} alt='hh' />
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className='Countries d-flex'>
                            <div className='Countries-main '>
                                <div className='Konstantin1 d-flex gap-2'>
                                    <div className='Konstantin1-img chanj-co'>
                                        <p>Countries</p>
                                        <div className='Countup' style={{ fontSize: '40px' }}>
                                            <Countup
                                                start={0}
                                                end={100}
                                                duration={3}
                                            />
                                        </div>
                                    </div>
                                    <img src={Man} alt='hh' />
                                </div>
                                <div className='Countries2'>
                                    <img src={con3} alt='hh' />
                                </div>
                            </div>
                            <div className='Konstantin2'>
                                <img src={con4} alt='hh' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    </>)
}
export default Gallry;