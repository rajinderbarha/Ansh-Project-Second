import React from 'react'
import firstimg from './imgs/firstimg.jpg'
import iconsj from './imgs/62fe0836e336482825f6ccb4_gamerpay-symbol.svg'
import './app.css'
import Countup  from 'react-countup';

function Box() {
  return (
    <div className='Box-main'>
    <div className='container'>
      
        <div className='row  Box '>
            <div className='col-md-3 '>
                <img src={firstimg} alt="hh" className='Box-img'/>
            </div>
           
            <div className='col-md-6'>
                <div className='Teamway '>
                    <div >
                <p className='boxpara '>Teamway is simply a great solution, quick to get started and find incredible developers, easy to onboard and a perfect solution when you need real flexibility without compromising on quality.</p>
                </div>
                <div className='d-flex gap-3  align-items-center '>
                    <img className='icon ' src={iconsj} alt="hh"></img>
                    <div className='icon-div'>
                    <h5>Mathias Hermansen</h5>
                    <p>Co-Founder & CEO,GamerPay</p>
                    </div>
                </div>
            </div>
            
           
            </div>
            <div className='col-md-3'>
                <div className='100%'>
                    <div>
                    <div className='Countup' style={{fontSize:'70px' }}>
        <Countup
          start={0}
          end={100}
          duration={3}
        /> %   
      </div>
             <p>match rate.</p>
             </div>
             </div>
            </div>
        </div>
        <div className='row  Box  mt-5'>
            <div className='col-md-3 '>
                <img src={firstimg} alt="hh" className='Box-img'/>
            </div>
           
            <div className='col-md-6'>
                <div className='Teamway '>
                    <div >
                <p className='boxpara '>If you too are finding it difficult and time-consuming to hire strong engineers, you should try Teamway. Super intuitive platform, incredible talent and speed.
</p>
                </div>
                <div className='d-flex gap-3  align-items-center '>
                    <img className='icon ' alt="hh" src={iconsj}></img>
                    <div className='icon-div'>
                    <h5>Dennis Green-Lieber</h5>
                    <p>Head of Product,Neurons</p>
                    </div>
                </div>
            </div>
            
           
            </div>
            <div className='col-md-3'>
                <div className='100%'>
                    <div>
             <h2>7px</h2>
             <p>faster than traditional hiring.</p>
             </div>
             </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Box