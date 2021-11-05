import React from 'react';
import { BtnLogin, Checkboxbtn, Contentmain, InputAuth, ListInput, LoginFormWapper, MainContent, MainContentWrapper, PrimaryContent, Span, Terms } from './style';

function LoginForm(props) {
    const [signinStatus, setSigninStatus] = React.useState(false);
    React.useEffect(() => {
        setSigninStatus(false)
    }, []);
    const switchSignin = () => {
        setSigninStatus(prevState => !prevState)
    }
    return (
        <LoginFormWapper signinStatus={signinStatus ?? ''} >
            <button onClick={() => switchSignin()}> 🦄 🦄 🦄 🦄 🦄</button>
            <Contentmain>
                <MainContentWrapper>
                    <MainContent>
                        Join over 25 milion lorem<br />
                        learners from around the globe <br />
                    </MainContent>
                    <PrimaryContent>
                        Join over 25 milion lorem Join over 25 milion lorem<br />
                        learners from around the globe Join over 25 milion lorem Join over 25 milion lorem Join over 25 milion lorem Join over 25 milion lorem<br />
                    </PrimaryContent>
                </MainContentWrapper>
            </Contentmain>
            <ListInput>
                <InputAuth type="text" placeholder="Your mail"></InputAuth>
                <InputAuth type="text" placeholder="Name acc"></InputAuth>
                <InputAuth type="text" placeholder="Password"></InputAuth>
            </ListInput>
            <Terms>
                <Checkboxbtn type="checkbox"></Checkboxbtn>
                I agree to all statements included in <Span>Terms of use</Span>
            </Terms>
            <BtnLogin>
                Start with Hieu !
            </BtnLogin>
        </LoginFormWapper >
    );
}

export default LoginForm;