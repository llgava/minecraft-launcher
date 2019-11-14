import styled, { css } from 'styled-components';
import { ColorsHEX } from '../../../assets/styles/colors';

const Container = styled.div`
    animation-delay: 2s, 6.48s;
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-name: toastIn, toastOut;
    background-position-x: 14px;
    background-size: 32px;
    background-position-y: center;
    background-repeat: no-repeat;
    display: block;
    ${props => props.icon === null ? css``: css`background-image: ${props => `url(${props.icon})`}`};
    height: auto;
    padding: 10px 10px 10px ${props => props.icon === null ? '10px' : '58px'};
    position: absolute;
    right: -320px;
    top: 15px;
    width: 248px;

    &::before, &::after {
        display: block;
        font-family: 'Minecraft', sans-serif;
    }

    &::before {
        font-size: 18px;
        content: ${props => `'${props.text}'`};
    }

    &::after { content: ${props => `'${props.description}'`} }

    /* Error */
    ${props => props.design === 'error' && css`
        background-color: ${ColorsHEX.red}; /* #F43C2F */
        background-position-x: 28px;
        background-size: 8px;
        border: 2px solid ${ColorsHEX.black}; /* #000000 */
        box-shadow: inset 0px 0px 0px 4px ${ColorsHEX.dark_red}; /* #B73229 */
        
        &::before { color: ${ColorsHEX.dark_red_2}; } /* #7A221B */
    `}

    /* Normal */
    ${props => props.design === 'normal' && css`
        background-color: ${ColorsHEX.light_grey_3}; /* #DEDEDE */
        color: ${ColorsHEX.black}; /* #000000 */
        border: 2px solid ${ColorsHEX.black}; /* #000000 */
        box-shadow: inset 0px 0px 0px 4px ${ColorsHEX.light_grey_2}; /* #AAAAAA */
        
        &::before { color: ${ColorsHEX.dark_purple}; } /* #500050 */
    `}

    /* Narrator */
    ${props => props.design === 'narrator' && css`
    background-color: ${ColorsHEX.dark_blue}; /* #00284C */
        border: 2px solid ${ColorsHEX.black}; /* #000000 */
        box-shadow: inset 0px 0px 0px 4px ${ColorsHEX.blue}; /* #006487 */

        &::before { color: ${ColorsHEX.yellow}; } /* #FFFF00 */
    `}

    /* Animation */
    @keyframes toastIn {
        from { right: -320px; }
        to { right: 0; }
    }

    @keyframes toastOut {
        from { right: 0px; }
        to { right: -320px; }
    }
`;

export default Container;
