import React from 'react';
import MainHaeader from './main-header';

const layout = (props) => {
    return (
        <>
         <MainHaeader/>
         <main>{props.children}</main>   
        </>
    );
};

export default layout;