import styled from 'styled-components';
import logon_icon from "../../images/ASSETS/logo/logo.svg";
import ubuntu from "../../images/ASSETS/os icons/ubuntu.png";

export const TopBarBox = styled.div`
    width: 100%;
    height: 60px;
    line-height: 80px;
    backGround: white;
    position: fixed;
    z-index: 3;
`;

export const TopBarTitle = styled.div`
    width: 144px;
    height: 40px;
    background-image: url(${logon_icon});
    background-repeat: no-repeat;
    display: inherit;
    background-size: contain;
    background-position: 50%;
    margin-top: 10px;
    margin-right: 40%;
`;

export const TopBarUserInco = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${ubuntu});
    background-repeat: no-repeat;
    display: inherit;
    background-size: contain;
    background-position: 50%;
    margin-top: 10px;
`;