import styled from 'styled-components';
import {
    Link
} from "react-router-dom";
export const LoginWapper = styled.div`
transition: 3s;
    display:flex;
    justify-content:space-around;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const InforWrapper = styled.div`
margin: 100px;
    /* background: ${props => props.loginStatus ? "black" : "-webkit-linear-gradient( black 25%, 75%,  #FFC20E);"};
    background:  ${props => props.loginStatus ? "black" : "linear-gradient( black 25%, 75%,  #FFC20E);"}; */
    background:linear-gradient( black 25%, 75%,  #FFC20E);
    background: -webkit-linear-gradient( black 25%, 75%,  #FFC20E);
    width:50%;
    height: 700px;
    border-radius:10px;
    transform:${props => props.loginStatus === true ? "translateX(-22%)" : "translateX(-85%)"};
    color:${props => props.loginStatus === true ? "white" : "black"};
    transition: 3s;
    overflow: hidden;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
`
export const BtnWatchVideoMain = styled.div`
    background:  ${props => props.loginStatus ? "#FFC20E" : 'black'};
    border-radius:50px ;
    width:200px;
    height:60px;
    padding : 10px;
    display: flex;
    justify-content:space-around;
    align-items:center;
    color: ${props => props.loginStatus ? "black" : '#FFC20E'};
    font-weight: bold;
`;

export const ListAction = styled.div`
    display: flex;
    justify-content:space-around;
    color: ${props => props.loginStatus ? "black" : 'white'};
    font-weight:bold;
`;
export const BtnVid = styled.button`
    width:50px;
    height:50px;
    border-radius:50%;
    color: ${props => props.loginStatus ? "#FFC20E" : 'white'};
    border:none;
`;

export const SloganWapper = styled.div`
`;
export const SloganContent = styled.div`
    font-size: 80px;
    font-weight: bold;
    overflow: hidden;
    color: ${props => props.loginStatus ? "#FFC20E" : 'white'};
`;
export const LogoLogin = styled.div`
color: ${props => props.loginStatus ? "white" : '#FFC20E'};
`;
export const WVid = styled.div``;
export const BtnAction = styled(Link)`
    color: ${props => props.loginStatus ? "#FFC20E" : 'black'};
    text-decoration: none;
    cursor: pointer;
    /* &:hover{
        color: ${props => props.loginStatus ? "white" : '#FFC20E'}
    } */
`;
