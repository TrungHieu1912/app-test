import styled from 'styled-components';

export const LoginFormWapper = styled.div`
    margin: 100px;
    width:30%;
    height: 700px;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:10px;
    transform:${props => props.signinStatus === true ? "translateX(100%)" : "translateY(0px)"};
    transition: 3s;
    overflow: hidden;
    padding: 10px;
    /* z-index:1000; */
    background-color:#1C1E21;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    /* &:after {
        content: "";
        position: absolute;
        top: 60%;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #FFC20E;
        clip-path: circle(100px at 0% 20%);
        z-index:-1;
    }
    &:before {
        content: "";
        position: absolute;
        top: -37px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #FFC20E;
        clip-path: circle(180px at 80% 20%);
        z-index:-1;
    } */
`;

export const Span = styled.span`
    color:#1fb4f7;
`;

export const Checkboxbtn = styled.input`
    margin-right: 8px;
    background:#5268F4 !important;
`;

export const InputAuth = styled.input`
    color:white;
    width: 80%;
    height: 30px;
    border-radius:8px;
    margin: 10px 0;
    font-size: 20px;
    outline:#5268F4;
    padding: 10px;
    border: none;
    background: #303030;
    letter-spacing:1px;
`;

export const Contentmain = styled.div`
    color: #fff;
    width: 80%;
`;

export const Terms = styled.div`
    margin: 20px 0;
    color: #fff;
`;

export const ListInput = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
`;

export const MainContentWrapper = styled.div`
 width: 100%;
`;


export const MainContent = styled.div`
    margin: 20px 0;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    width: 100%;
    /* font-family: 'Fruktur', cursive; */
    font-family: 'Lato', sans-serif;
`;
export const PrimaryContent = styled.div`
color: #a7a7a7;

`;

export const BtnLogin = styled.div`
    background: #5268F4;
    width: 80%;
    height: 60px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    font-weight: 600;
    color: #fff;
    width: 50%;
    margin-bottom: 20px;
`;