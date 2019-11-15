import React from 'react';
import GlobalStyle from '../assets/styles/globalStyle';

// Elements (e.g. images)
import Icon from '../assets/images/icons/yellow_exclamation.svg';

// Components (e.g. all external components from this file, like a global menu)
import Helmet from '../helmets/login';
import Toast from '../components/global/toast';
import LoginBox from '../components/loginbox';

const Login = () =>
    <>
        <Helmet />
        <Toast design="normal" icon={Icon} text="Developer tip" description="Log in button redirect you to launcher page" sound />
        <LoginBox />
        <GlobalStyle />
    </>

export default Login;
