

import Banner from '../Components/Banner';
import Running from '../Components/Running/Running';
import Box from '../Components/Box';

import Gallry from '../Components/Gallry/Gallry';
import ImgClick from '../Components/ImgClick';
import React from 'react';
import MyApp from '../Components/Scrollbar/ScrollBar';
import MyComponent from '../Components/UpwardScroll/UpwardScroll';
function Home() {
  return (
    <div>
      <Banner />
      <MyApp />
      <Running />
   
      <Box />
      <ImgClick />
      <Gallry />

    </div>
  )
}

export default Home