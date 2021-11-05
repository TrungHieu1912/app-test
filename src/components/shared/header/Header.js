import React, {useEffect} from 'react';
import { HeaderWrapper, LogoWrapper, MenuItem, MenuWrapper } from './style';
import { useLocation } from 'react-router-dom';

const ListItemMenu = [
    {
        id: '1',
        name: 'HOME',
        path: '/home',
    },
    {
        id: '2',
        name: 'PAGES',
        path: '/contact',
    },
    {
        id: '4',
        name: 'FEATURES',
        path: '/home',
    },
    {
        id: '5',
        name: 'PORTFOLIO',
        path: '/home',
    },
    {
        id: '6',
        name: 'SHORTCODES',
        path: '/home',
    },
    {
        id: '6',
        name: 'BLOG',
        path: '/home',
    },
    {
        id: '6',
        name: 'SHOP',
        path: '/home',
    },
]


const HeaderComponent = () => {
    let location = useLocation();
    return (
        <HeaderWrapper>
            <LogoWrapper >
                allo
            </LogoWrapper >
            <MenuWrapper >
                {
                    ListItemMenu.map((item) =>
                        <MenuItem 
                        to={item.path} 
                        key={item} 
                        >{item.name}</MenuItem>
                    )
                }
            </MenuWrapper>
        </HeaderWrapper>
    );
}

export default HeaderComponent;