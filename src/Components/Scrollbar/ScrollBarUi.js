import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './imgs/6340255dae4cf97496aa010e_Influencer Froot (1).svg';
import img2 from './imgs/6340255dae4cf97496aa010e_Influencer Froot.svg';
import Right from './imgs/right-img.svg';
import './Tabs.css'
function Tabs() {
    return (
        <div className='Tabs'>
        <div className='container'>
            <Row>
                <Col md={6}>
                    <div className='Tabs-img'>
                        <h2>For all creators</h2>
                        <div className='Tabs-img-1'>
                        <img src={img1} alt="ll" className='img' />
                        <img src={img2} alt="ll" className='img' />
                        <img src={img1} alt="ll" className='img' />
                        <img src={img2} alt="ll" className='img' />
                        <img src={img1} alt="ll" className='img' />
                        <img src={img2} alt="ll" className='img' />
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                <div className='jiii'>
                    <div className='right py-2'>
                        <img src={Right} alt="ll" />
                        <h2>Podcasters</h2>
                    </div>
                    <div className='right1 py-2'>
                        <img src={Right} alt="ll" />
                        <h2>Youtubers</h2>
                    </div>
                    <div className='right2 py-2'>
                        <img src={Right} alt="ll" />
                        <h2>Newsletter Writers</h2>
                    </div>
                    <div className='right3 py-2'>
                        <img src={Right} alt="ll" />
                        <h2>Media companies</h2>
                    </div>
                    <div className='right4 py-2 '>
                        <img src={Right} alt="ll" />
                        <h2>TikTokers</h2>
                    </div>
                    <div className='right5 py-2'>
                        <img src={Right} alt="ll" />
                        <h2>Influencers</h2>
                    </div>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}
export default Tabs