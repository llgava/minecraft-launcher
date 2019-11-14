import styled, { css } from 'styled-components';
import { ColorsHEX } from '../../../assets/styles/colors';

// Elements (e.g. images)
import SmallPlay from '../../../assets/images/elements/play_button/small.png'
import SmallPlayHover from '../../../assets/images/elements/play_button/small_hover.png'
import SmallPlayActive from '../../../assets/images/elements/play_button/small_active.png'

import NormalPlay from '../../../assets/images/elements/play_button/normal.png'
import NormalPlayHover from '../../../assets/images/elements/play_button/normal_hover.png'
import NormalPlayActive from '../../../assets/images/elements/play_button/normal_active.png'

import BigPlay from '../../../assets/images/elements/play_button/big.png'
import BigPlayHover from '../../../assets/images/elements/play_button/big_hover.png'
import BigPlayActive from '../../../assets/images/elements/play_button/big_active.png'

import SmallError from '../../../assets/images/elements/error_button/small.png';
import SmallErrorHover from '../../../assets/images/elements/error_button/small_hover.png';
import SmallErrorActive from '../../../assets/images/elements/error_button/small_active.png';

import NormalError from '../../../assets/images/elements/error_button/normal.png';
import NormalErrorHover from '../../../assets/images/elements/error_button/normal_hover.png';
import NormalErrorActive from '../../../assets/images/elements/error_button/normal_active.png';

import BigError from '../../../assets/images/elements/error_button/big.png';
import BigErrorHover from '../../../assets/images/elements/error_button/big_hover.png';
import BigErrorActive from '../../../assets/images/elements/error_button/big_active.png';

const Container = styled.div`
    cursor: pointer;
    color: ${ColorsHEX.white}; /* #FFFFFF */
    font-family: 'MinecraftTen', sans-serif;
    font-size: 28px;
    height: 54px;
    letter-spacing: 1px;
    line-height: 150%;
    margin: 10px 0;
    width: 412px;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    text-shadow: 0 2px ${ColorsHEX.black}; /* #000000 */
    user-select: none;

    &:hover {
        font-size: 30px;
        line-height: 140%;
    }

    &:active {
        font-size: 28px;
        line-height: 150%;
    }

    &::before {
        content: ${props =>`'${props.text}'`};
        display: block;
    }

    ${props => props.size === 'small' && css`
        width: 128px;

        /* Play Button */
        ${props => props.design === 'play' && css`
            background-image: url(${SmallPlay});

            &:hover { background-image: url(${SmallPlayHover}); }
            &:active { background-image: url(${SmallPlayActive}); }
        `}

        /* Error Button */
        ${props => props.design === 'error' && css`
            background-image: url(${SmallError});

            &:hover { background-image: url(${SmallErrorHover}); }
            &:active { background-image: url(${SmallErrorActive}); }
        `}
        
    `}

    ${props => props.size === 'normal' && css`
        width: 248px;

        /* Play Button */
        ${props => props.design === 'play' && css`
            background-image: url(${NormalPlay});

            &:hover { background-image: url(${NormalPlayHover}); }
            &:active { background-image: url(${NormalPlayActive}); }
        `}

        /* Error Button */
        ${props => props.design === 'error' && css`
            background-image: url(${NormalError});

            &:hover { background-image: url(${NormalErrorHover}); }
            &:active { background-image: url(${NormalErrorActive}); }
        `}
        
    `}

    ${props => props.size === 'big' && css`
        width: 412px;

        /* Play Button */
        ${props => props.design === 'play' && css`
            background-image: url(${BigPlay});

            &:hover { background-image: url(${BigPlayHover}); }
            &:active { background-image: url(${BigPlayActive}); }
        `}

        /* Error Button */
        ${props => props.design === 'error' && css`
            background-image: url(${BigError});

            &:hover { background-image: url(${BigErrorHover}); }
            &:active { background-image: url(${BigErrorActive}); }
        `}
    `}
    
    /* Responsivity */
    @media only screen and (max-width: 1080px) {
        ${props => props.size === 'normal' && css`
            width: 128px;

            /* Play Button */
            ${props => props.design === 'play' && css`
                background-image: url(${SmallPlay});

                &:hover { background-image: url(${SmallPlayHover}); }
                &:active { background-image: url(${SmallPlayActive}); }
            `}

            /* Error Button */
            ${props => props.design === 'error' && css`
                background-image: url(${SmallError});

                &:hover { background-image: url(${SmallErrorHover}); }
                &:active { background-image: url(${SmallErrorActive}); }
        `}
    `}
    }
`;

export default Container;
