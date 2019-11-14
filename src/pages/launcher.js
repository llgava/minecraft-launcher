import React from 'react';
import GlobalStyle from '../assets/styles/globalStyle';

// Elements (e.g. images)
import Icon from '../assets/images/icons/github.svg'

// Components (e.g. all external components from this file, like a global menu)
import Helmet from '../helmets/launcher';
import Toast from '../components/global/toast';

const Launcher = () =>
    <>
        <Helmet />
        <Toast design="normal" icon={Icon} text="Developer message" description="I am on GitLab! gitlab.com/FyatLindu" sound />
        <GlobalStyle />
    </>

export default Launcher;

