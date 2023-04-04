import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <CTA>
            <CtaLogo src='/images/cta-logo-one.svg'/>
            <SignUp>get all there</SignUp>
            <Describtion>
                Get Premier Access to Raa and the Last Dragon for an additional fee with a Disney+ subscribtion. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by s1.
            </Describtion>
            <CtaLogoTwo src='/images/cta-logo-two.png'/>
        </CTA>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 70px);
    background-image: url('/images/login-background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const CTA = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 650px;
    @media(max-width: 768px) {
        width: 70%;
    }
`

const CtaLogo = styled.img ``
const CtaLogoTwo = styled.img `
    width: 100%;
`

const SignUp = styled.a`
    width: 100%;
    // display: inline-block;
    padding: 17px 0;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #0063e5;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    margin: 8px 0 12px;
    letter-spacing: 1.5px;
    transition: all 250ms;
    cursor: pointer;

    &:hover {
        background-color: #0483ee;
    }
`

const Describtion = styled.p`
margin-bottom: 10px;
    font-size: 11px;
    letter-spacingL 1.5px;
    text-align: center;
    line-height: 1.5;
`