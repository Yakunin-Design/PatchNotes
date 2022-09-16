import styled, { css } from 'styled-components';

const Container = styled.div`
    padding: 0 2rem;
    max-width: 800px;
    margin: 0 auto;

    ${props =>
        props.main &&
        css`
            min-height: 100vh;
            margin-top: 6rem;
            margin-bottom: 30vh;
        `}
`;

export default Container;
