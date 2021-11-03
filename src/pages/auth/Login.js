import React from 'react';
import LoginForm from '../../components/shared/forms/LoginForm';
import styled from 'styled-components';
// import { LoginWapper } from "./style";
// import { NormalText } from './style';
export const LoginWapper = styled.div`
    width: 100px;
`
const Login = () => {
    return (
        <div>
            <LoginWapper>
                <LoginForm />
            </LoginWapper>
        </div>
    );
}

export default Login;