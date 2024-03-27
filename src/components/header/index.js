import React from 'react';
import HeaderClient from './header';



const Header = async ({params}) => {
    return <HeaderClient data={params}/>;
};

export default Header;