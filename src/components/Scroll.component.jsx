import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '90vh', border: '1px solid red'}}>
            {props.children}
        </div>
    );
};

export default Scroll;