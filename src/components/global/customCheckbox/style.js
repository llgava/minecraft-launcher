import styled from 'styled-components';
import { ColorsHEX, ColorsRGBA } from '../../../assets/styles/colors';

export const Container = styled.label`
    cursor: pointer;
    display: inline-block;
    padding-left: 24px;
    position: relative;

    &::after {
        content: ${props => `'${props.text}'`};
        display: block;
        font-size: 14px;
        font-weight: initial;
    }

    input {
        cursor: pointer;
        height: 0;
        opacity: 0;
        position: absolute;
        width: 0;
    }

   span {
        background-color: transparent;
        border: 1px solid ${ColorsHEX.white}; /* #FFFFFF */
        height: 16px;
        left: 0;
        position: absolute;
        top: 0;
        width: 16px;
   }

   &:hover input ~ span { background-color: ${ColorsHEX.light_grey}; } /* #898989 */

   input:checked ~ span {
        background-color: ${ColorsHEX.green}; /* #008542 */
        border: 1px solid ${ColorsHEX.green}; /* #008542 */
    }

    input:active ~ span { box-shadow: 0px 0px 0px 3px ${ColorsRGBA.light_grey}; } /* rgba(137, 137, 137, .3) */
    input:checked ~ span:after { display: block; }

    span:after {
        border: solid white;
        border-width: 0 2px 2px 0;
        height: 8px;
        left: 5px;
        top: 1px;
        transform: rotate(45deg);
        width: 4px;
    }

    span:after {
        content: "";
        display: none;
        position: absolute;
    }

`;
