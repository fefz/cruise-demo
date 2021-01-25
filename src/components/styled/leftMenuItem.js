import styled from 'styled-components';

export const LeftMenuItem = styled.li`
    list-style: none;
    content: ".";
    margin-left: -40px;
    >a{
        display: flex;
        text-decoration: none;
        color: #fff;
        height: 45px;
        align-items: center;
        cursor: pointer;
        font-size: 12px;
        :hover{
            color: #00b4cf;
            background-color: #435466;
        }
        padding: 0 20px;
        >i{
            margin: 0 20px 0 0;
            font-size: 18px;
        }
        ${(props)=> props}
    };
`;