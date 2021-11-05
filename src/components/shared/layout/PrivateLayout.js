import React from 'react';
import FooterComponent from '../footer/Footer';
import HeaderComponent from '../header/Header';

function PrivateLayout({ children }) {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    );
}

export default PrivateLayout;
