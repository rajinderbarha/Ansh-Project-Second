import {Col,Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import img1 from '../Assets/firstimg.svg'
import img2 from '../Assets/secondimg.svg'
import img3 from '../Assets/thirdimg.svg'
import img4 from '../Assets/fourthimg.svg'
import img5 from '../Assets/fifthimg.svg'
import Right from '../Assets/right-img.svg'
import './Scrollbar.css'

function MyApp() {
    const [imageSrc, setImageSrc] = useState(img1); // Initial image source
    const [text, setText]= useState("color")
    const [none, setNone]= useState("none")
    const [none1, setNone1]= useState("none1")
    const [none2, setNone2]= useState("none2")
    const [none3, setNone3]= useState("none3")
    const [none4, setNone4]= useState("none4")


    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.pageYOffset; // Get current scroll position
            if (scrollPosition > 750) {
                setImageSrc(img2); // Update image source based on scroll position
                setText("colorchanj");
                setNone("block")
                setNone1("none1")
                setNone2("none2")
                setNone3("none3")
                setNone4("none4")

            } else if (scrollPosition > 600) {
                setImageSrc(img3);
                setText("colorchanj");
                setNone("none")
                setNone1("block")
                setNone2("none2")
                setNone3("none3")
                setNone4("none4")
            } else if (scrollPosition >450) {
                setImageSrc(img4);
                setText("colorchanj");
                setNone("none")
                setNone1("none1")
                setNone2("block")
                setNone3("none3")
                setNone4("none")
            } else if (scrollPosition > 200) {
                setImageSrc(img5);
                setText("colorchanj");
                setNone("none")
                setNone1("none1")
                setNone2("none2")
                setNone3("block")
                setNone4("none4")
            }  else if (scrollPosition > 200) {
                setImageSrc(img5);
                setText("colorchanj");
                setNone("none")
                setNone1("none1")
                setNone2("none2")
                setNone3("block")
                setNone4("none4")
            }
            else {
                setImageSrc(img1);
                setText("colorchanj");
                setNone("none")
                setNone1("none1")
                setNone2("none2")
                setNone3("none3")
                setNone4("block")
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            
            <div className='Tabs'>
                <div className='container'>
                    <Row>
                        <Col md={6}>
                            <div className='Tabs-img'>
                                <h2>For all creators</h2>
                                <div className='Tabs-img-1'>
                                    <img src={imageSrc} alt="ll" className='img' />
                              

                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='jiii'>
                                <div className='right py-2'>
                                    <img src={Right} alt="ll" className={none4} />
                                    <h3 className={`right-text ${text}`}>Podcasters</h3>
                                </div>
                                <div className='right1 d-flex gap-3 py-2'>
                                    <img src={Right} alt="ll" className={none3}/>
                                    <h3 className={`right-text ${text}`}>Youtubers</h3>
                                </div>
                                <div className='right2 d-flex gap-3 py-2'>
                                    <img src={Right} alt="ll" className={none2}/>
                                    <h3 className={`right-text ${text}`}>Newsletter Writers</h3>
                                </div>
                                <div className='right3 d-flex gap-3 py-2'>
                                    <img src={Right} alt="ll" className={none1}/>
                                    <h3 className={`right-text ${text}`}>Content Creators </h3>
                                </div>
                                <div className='right3 d-flex gap-3 py-2'>
                                    <img src={Right} alt="ll" className={none}/>
                                    <h3 className={`right-text ${text}`}> Creators </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default MyApp;
