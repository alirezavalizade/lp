import React from 'react';
import styled from 'styled-components';

const Component = styled.span.attrs({ role: 'img' })``;

const Emoji = ({ e, ...rest }) => {
    return (
        <Component {...rest}>
            {e}
        </Component>
    );
};

export default Emoji;