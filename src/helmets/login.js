import React from 'react';
import { Helmet } from 'react-helmet';

// Elements (e.g. images)
import BackgroundLogin from '../assets/images/backgrounds/login.jpg';

export default function ReactHelmet() {
   return (
      <Helmet>
         <title>Minecraft Launcher | Log in</title>
         
         <style>
            { `body { background-image: url(${BackgroundLogin});}` }
         </style>
      </Helmet>
   );
}
