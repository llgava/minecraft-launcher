/* eslint-disable no-useless-concat */
import React from 'react';
import { Container } from './style';

export default class CustomCheckbox extends React.Component {
    render() {
        const propsText = this.props.text;
        const defaultValue = { text: 'Hello world!' };
        var object = { text: propsText };
        let CustomCheckbox;

        /* Object definition */
        if (propsText === undefined || propsText.length <= 0 || propsText === true) {
            object.text = defaultValue.text;
            CustomCheckbox = <Container text={defaultValue.text}><input type="checkbox" /><span /></Container>;
        } else {
            /* Verify props values */
            if (propsText.length > 0) {
                CustomCheckbox = <Container text={propsText}><input type="checkbox" /><span /></Container>;
            } else {
                CustomCheckbox = <Container text={defaultValue.text}><input type="checkbox" /><span /></Container>;
            }
        }

        console.log("%c[%cReact" + "%c." + "%cComponent" + "%c]" + "%c CustomCheckbox", "font-weight: bold;", "font-weight: bold; color: #007C97;", "font-weight: bold; color: initial;", "font-weight: bold; color: #007C97", "font-weight: bold; color: initial;", "font-weight: normal; color: initial;", object);
        return CustomCheckbox;
    }
}
