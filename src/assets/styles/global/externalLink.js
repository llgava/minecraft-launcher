import styled from 'styled-components';
import { ColorsRGBA } from '../colors';

const ExternalLink = styled.a`
    border-radius: 5px;
    padding: 2px 4px;
    font-weight: bold;
    text-decoration: underline;

    &:hover { background-color: ${ColorsRGBA.light_grey}; } /* rgba(137, 137, 137, .3) */
`;

export default ExternalLink;
