import styled from 'styled-components';

export const ContentBox = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: ${(props) => props.justifyContent};
`;