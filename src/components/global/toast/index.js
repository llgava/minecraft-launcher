/* eslint-disable no-useless-concat */
import React from 'react';
import Sound from 'react-sound';
import Container from './style';

// Elements (e.g. images)
import ToastsSound from '../../../assets/audios/toasts.ogg';
import Icon from '../../../assets/images/icons/red_exclamation.svg'

export default class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            design: null,
            icon: null,
            text: 'Hello world!',
            description: 'Hello world from Brazil!',
            sound: false
        };
    }
      
    componentDidMount() {
        /* 
            Starts with props -> this.props
            Starts with state -> this.state (need a constructor)
        */
        const propsDesign = this.props.design, 
              propsIcon = this.props.icon,
              propsText = this.props.text,
              propsDescription = this.props.description,
              propsSound = this.props.sound,
              stateText = this.state.text,
              stateDescription = this.state.description;

        var object = {
                design: propsDesign,
                icon: propsIcon,
                text: propsText,
                description: propsDescription,
                sound: propsSound
            },
            extension = true;

        if(propsIcon === undefined || propsIcon <= 0 || propsIcon === true) {
            console.log("Without icon property");
        } else {
            var bmp = propsIcon.startsWith("data:image/bmp") || propsIcon.endsWith("bmp"),
                cur = propsIcon.endsWith("cur"),
                gif = propsIcon.startsWith("data:image/gif") || propsIcon.endsWith("gif"),
                ico = propsIcon.endsWith("ico") || propsIcon.endsWith("ico"),
                jpg = propsIcon.startsWith("data:image/jpeg") || propsIcon.endsWith("jpeg"),
                png = propsIcon.startsWith("data:image/png") || propsIcon.endsWith("png"),
                svg = propsIcon.startsWith("data:image/svg+xml;") || propsIcon.endsWith("svg"),
                tif = propsIcon.endsWith("tif"),
                webp = propsIcon.startsWith("data:image/webp") || propsIcon.endsWith("webp");

            /* check the extension */
            switch(extension) {
                case bmp: this.setState({bmp: true}); extension = true; break;
                case cur: this.setState({cur: true}); extension = true; break;
                case gif: this.setState({gif: true}); extension = true; break;
                case ico: this.setState({ico: true}); extension = true; break;
                case jpg: this.setState({jpg: true}); extension = true; break;
                case png: this.setState({png: true}); extension = true; break;
                case svg: this.setState({svg: true}); extension = true; break;
                case tif: this.setState({tif: true}); extension = true; break;
                case webp: this.setState({webp: true}); extension = true; break;
                    
                default: extension = false;
            }
        }

        /* props.design */
        if(propsDesign === 'normal' || propsDesign === 'narrator' || propsDesign === 'error' ) {
            this.setState({design: propsDesign});

            /* props.icon */
            if(extension === true) {     
                if(propsIcon === undefined || propsIcon <= 0 || propsIcon === true) {
                    object.icon = null;
                    this.setState({icon: null});
                } else {
                    this.setState({icon: propsIcon});
                }

                /* props.text */
                if(propsText === undefined || propsText.length <= 0 || propsText === true) {
                    object.text = stateText;
                    this.setState({text: stateText});
                } else {
                    this.setState({text: propsText});
                }

                /* props.description */
                if(propsDescription === undefined || propsDescription.length <= 0 || propsDescription === true) {
                    object.description = stateDescription;
                    this.setState({description: stateDescription});
                } else {
                    this.setState({description: propsDescription}); 
                }
            
                /* props.sound */
                if(propsSound === undefined) {
                    object.sound = false;
                    this.setState({sound: false});
                } else {
                    object.sound = true;
                    this.setState({sound: true});
                }
            } else {
                object.design = 'error';
                object.icon = Icon;
                object.text = 'Error on icon property';
                object.description = 'This file format is not supported';
                object.sound = true;
                this.setState({
                    design: 'error',
                    icon: Icon,
                    text: 'Error on icon property',
                    description: 'This file format is not supported',
                    sound: true
                });
            }

        } else {
            object.design = 'error';
            object.icon = Icon;
            object.text = 'Error on design property';
            object.description = 'Enter a valid value';
            object.sound = true;
            this.setState({
                design: 'error',
                icon: Icon,
                text: 'Error on design property',
                description: 'Enter a valid value',
                sound: true
            });
        }

        console.log("%c"+"[%cReact"+"%c."+"%cComponent"+"%c]"+"%c Toast", "font-weight: bold;", "font-weight: bold; color: #007C97;", "font-weight: bold; color: initial;", "font-weight: bold; color: #007C97", "font-weight: bold; color: initial;", "font-weight: normal; color: initial;", object);
    }
   
    
    render() {
        var stateSound = this.state.sound,
            stateDesign = this.state.design,
            stateIcon = this.state.icon,
            stateText = this.state.text,
            stateDescription = this.state.description;

        let ToastSound;

        if(stateSound) {
            ToastSound = <Sound url={ToastsSound} playStatus={Sound.status.PLAYING} autoLoad />
        } else {
            ToastSound = <></>
        }
        
        return (
            <>
                <Container  design={stateDesign} icon={stateIcon} text={stateText} description={stateDescription} />
                {ToastSound}
            </>
        );
    }
}
