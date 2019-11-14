/* eslint-disable no-useless-concat */
import React from 'react';
import Container from './style';

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            design: null,
            size: null,
            text: 'Hello world!'
        };
    }

    componentDidMount() {
        const propsDesign = this.props.design, 
              propsSize = this.props.size,
              propsText = this.props.text,
              stateText = this.state.text;

        var object = {
            design: propsDesign,
            size: propsSize,
            text: propsText
        };

        if(propsDesign === 'play' || propsDesign === 'error') {
            this.setState({design: propsDesign});

            if(propsSize === 'small' || propsSize === 'normal' || propsSize === 'big') {
                this.setState({size: propsSize});

                /* props.text */
                if(propsText === undefined || propsText.length <= 0 || propsText === true) {
                    object.text = stateText;
                    this.setState({text: stateText});
                } else {
                    this.setState({text: propsText});
                }
            } else {
                object.design = 'error';
                object.size = 'big';
                object.text = 'Invalid value on size';
                this.setState({
                    design: 'error',
                    size: 'big',
                    text: 'Invalid value on size',
                });
            }
        } else {
            object.design = 'error';
            object.size = 'big';
            object.text = 'Invalid value on design';
            this.setState({
                design: 'error',
                size: 'big',
                text: 'Invalid value on design',
            });
        }

        console.log("%c[%cReact"+"%c."+"%cComponent"+"%c]"+"%c CustomButton", "font-weight: bold;", "font-weight: bold; color: #007C97;", "font-weight: bold; color: initial;", "font-weight: bold; color: #007C97", "font-weight: bold; color: initial;", "font-weight: normal; color: initial;", object);
    }

    render() {
        return (
            <Container  design={this.state.design} size={this.state.size} text={this.state.text} />
        );
    }
}
