import styled from 'styled-components';

const Input = styled.input`
    outline: none;
    padding: 20px;
    padding-right: 70px;
    border: 2px solid #fff;
    width: 300px;
    border-radius: ${p => p.theme.pixels.radius}px;
    background-color: transparent;
    color: #FFF;
    font-size: 25px;
    font-family: ${p => p.theme.typography[p.f || 'bold']};

    &:focus {
        border-color: #0055ff;
    }

    &::placeholder {
        color: ${p => p.theme.hex('#FFFFFF', .9)};
        opacity: 1;
    }
`;

export default Input;