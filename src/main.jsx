import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import RightCol from './rightCol/right';
import LeftCol from './leftCol/left';
import glamorous from 'glamorous';  

const row = glamorous.div({
    '&::after': {
        content: '',
        display: 'table',
        clear: 'both',
        color: 'red'
    }
})

const all = {
    boxSizing: 'border-box'
}

const { Div } = glamorous;


ReactDOM.render(
    <div style={all}>
        <Header />
        <div style={row}>
            <LeftCol />
            <RightCol />
        </div>
    </div>,
    document.querySelector('main')
);