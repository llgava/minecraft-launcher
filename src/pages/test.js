import React from 'react';
import GlobalStyle from '../assets/styles/globalStyle';

// Elements (e.g. images)

// Components (e.g. all external components from this file, like a global menu)
import Helmet from '../helmets/test';

const Test = () =>
    <>
        <Helmet />
        
        <GlobalStyle />
    </>

export default Test;
