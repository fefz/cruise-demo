import styled from "styled-components";

export const MessageContent = styled.div`
    display: flex;
    justify-content: space-between;
    >div{
        width: calc(100% - 20px);
        maxWidth: 33.3333%;
        padding: 20px;
        height: 80px;
        position: relative;
    }
`;