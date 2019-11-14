import React from 'react';
import { Container } from './style';

// Elements (e.g. images)
import MinecraftLogo from '../../assets/images/logos/minecraft.png'

// Components (e.g. all external components from this file, like a global menu)
import CustomCheckbox from '../global/customCheckbox';
import ExternalLink from '../../assets/styles/global/externalLink';
import CustomButton from '../global/customButton';

export default class Login extends React.Component {
   render() {
      return (
         <Container>
            <img src={MinecraftLogo} alt="Minecraft Logo" />

            <form>
               <label for="email">EMAIL </label>
               <input type="email" name="email"/>

               <label for="password">PASSWORD</label>
               <input type="password" name="password"/>

               <section>
                  <CustomCheckbox text="Keep me logged in" />
                  <ExternalLink href="https://my.minecraft.net/password/forgot/" target="_blank" >Forgot password?</ExternalLink>
               </section>
            </form>

            <a href="/launcher"><CustomButton design="play" size="big" text="Log in" /></a>
            <p>Don't have an account? <ExternalLink href="https://my.minecraft.net/store/minecraft/#register" target="_blank" >Sing up</ExternalLink></p>
         </Container>
      );
   }
}
