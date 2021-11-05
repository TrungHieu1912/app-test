import React from 'react';
import LoginForm from '../../components/shared/forms/LoginForm';
import { LoginWapper, InforWrapper, ListAction, SloganWapper, SloganContent, LogoLogin, BtnWatchVideoMain, BtnVid, BtnAction, WVid } from './style';

const Login = () => {
    const [loginStatus, setLoginStatus] = React.useState(false);
    React.useEffect(() => {
        setLoginStatus(false)
    }, []);
    console.log('loginStatus', loginStatus);
    const switchLogin = () => {
        console.log('alo');
        setLoginStatus(prevState => !prevState);
    }
    return (
        <LoginWapper>
            <LoginForm />
            <InforWrapper loginStatus={loginStatus ?? ''}>
                <LogoLogin />
                <SloganWapper loginStatus={loginStatus ?? ''}>
                    <SloganContent loginStatus={loginStatus ?? ''}>Learn to code .<br />
                        Interactively. <br />
                        For free.</SloganContent>
                </SloganWapper>
                <BtnWatchVideoMain loginStatus={loginStatus ?? ''}>
                    <BtnVid loginStatus={loginStatus ?? ''} onClick={() => switchLogin()}> </BtnVid>
                    <WVid>Watch Video</WVid>
                </BtnWatchVideoMain>
                <ListAction loginStatus={loginStatus ?? ''}>
                    <BtnAction to="/home" >Home </BtnAction>
                    <BtnAction to="/Tour">Tour</BtnAction>
                    <BtnAction to="/Blog">Blog</BtnAction>
                    <BtnAction to="/Contact">Contact</BtnAction>
                </ListAction>
            </InforWrapper>

        </LoginWapper>
    );
}

export default Login;