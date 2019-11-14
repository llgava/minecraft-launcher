import { createGlobalStyle, css } from 'styled-components';
import { ColorsHEX, ColorsRGBA } from './colors';

// Elements (e.g. images)
import MinecraftTen from '../fonts/MinecraftTen.ttf';
import Minecraft from '../fonts/Minecraft.otf';

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

   @font-face {
      font-family: 'MinecraftTen';
      src: url(${MinecraftTen});
   }

   @font-face {
      font-family: 'Minecraft';
      src: url(${Minecraft});
   }

   * {
      border: 0;
      color: ${ColorsHEX.white};
      font-family: 'Roboto', sans-serif;
      margin: 0;
      outline: 0;
      padding: 0;
      text-decoration: none;
   }

   html, body, #root { height: 100%; }

   body { 
      background-color: ${ColorsHEX.grey};
      background-position: center;
      background-size: cover;
      overflow: hidden;
   }

   a {
      margin:0;
      padding:0;
    }

   ${props => props.externalLink && css`
      background-color: red;
      border-radius: 5px;
      padding: 2px 4px;
      font-weight: bold;
      text-decoration: underline;

      &:hover { background-color: ${ColorsRGBA.light_grey}; } /* rgba(137, 137, 137, .3) */
   `}

   ::selection { background-color: ${ColorsHEX.green}; }
`;
