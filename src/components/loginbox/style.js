import styled from 'styled-components';
import { ColorsHEX, ColorsRGBA } from '../../assets/styles/colors';

// Elements (e.g. images)
import ExternalLink from '../../assets/styles/global/externalLink';
import CustomButton from '../global/customButton/style';

export const Container = styled.div`
   @media only screen and (max-width: 532px) {
      padding: 0 44px;
      width: calc(500px - 88px);
   }

   font-size: 14px;
   background-color: ${ColorsHEX.dark_grey_2};
   border-radius: 5px;
   box-shadow: 0px 0px 5px 1px ${ColorsRGBA.black};
   display: block;
   height: 432px;
   left: 50%;
   padding: 0 60px;
   position: absolute;
   top: 50%;
   transform: translate(-50%, -50%);
   width: calc(532px - 120px);

   img {
      display: block;
      height: auto;
      margin: -45px auto 10px auto;
      width: 412px;
      user-select: none;
   }

   label {
      color: ${ColorsHEX.white};
      font-size: 10px;
      font-weight: bold;
   }

   input {
      background-color: ${ColorsHEX.dark_grey};
      border-radius: 5px;
      border: 2px solid transparent;
      color: ${ColorsHEX.white};
      display: block;
      height: 32px;
      margin: 0 auto 35px auto;
      padding: 0 10px;
      transition: .1s ease-in-out;
      width: calc(412px - 20px);
   }

   input:hover { background-color: ${ColorsHEX.dark_grey_3}; }
   input:focus { border: 2px solid ${ColorsHEX.light_grey}; }

   section { display: flex; }

   ${CustomButton} {
      left: 50%;
      margin: 25px 0;
      position: relative;
      transform: translateX(-50%);
   }

   ${ExternalLink} { margin: 0 0 0 auto; }

   p { text-align: center; }
`;
