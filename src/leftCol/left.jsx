import React from 'react';

const leftcolumn = {
  float: 'left',
  width: '75%'
};

const card = {
  backgroundColor: 'white',
  padding: '20px',
  marginTop: '20px'
};

const fakeimg = {
  backgroundColor: '#aaa',
  width: '100%',
  padding: '20px'
};

var LeftCol = React.createClass({
  render: function() {
    return   <div style={leftcolumn}>
              <div style={card}>
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div style={fakeimg}>Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
              <div style={card}>
                <h2>TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2017</h5>
                <div style={fakeimg}>Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>
  }    
});

export default LeftCol;