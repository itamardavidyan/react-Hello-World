import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import RightCol from './rightCol/right';
import LeftCol from './leftCol/left';

ReactDOM.render(
    <div>
        <Header />
        <div>
            <LeftCol />
            <RightCol />
        </div>
    </div>,
    document.querySelector('main')
);