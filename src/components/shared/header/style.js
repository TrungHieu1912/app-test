import styled from 'styled-components';
import {
    NavLink
} from "react-router-dom";
export const HeaderWrapper = styled.div`
    height: 60px;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    padding: 20px 200px;
    justify-content:space-around;
`;
export const LogoWrapper = styled.div`
display: flex;
width: 30%;
justify-content:center;
`;
export const MenuWrapper = styled.div`
    display: flex;
    justify-content:space-around;
    width: 70%;
`;
export const MenuItem = styled(NavLink)`
    color: white;
    text-decoration:none;
    cursor: pointer;
    &:hover{
        color:#FFC20E;
    }
`;

// export const LogoWrapper = styled.div``;