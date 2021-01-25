import styled from "styled-components";

export const HistoryItem = styled.li`
    color: #999;
    margin-left: -25px;
    font-size: 12px;
    line-height: 25px;
    >a{
        color: #999;
        text-decoration:none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        :hover{
            color:#00B4CF;
        }
    }
`;