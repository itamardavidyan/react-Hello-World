import React from 'react';

const rightcolumn = {
  float: 'left',
  width: '25%',
  paddingLeft: '20px'
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

var RightCol = React.createClass({
  render: function() {
    return     <div style={rightcolumn}>
                <div style={card}>
                  <h2>About Me</h2>
                  <div style={fakeimg}>Image</div>
                  <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div style={card}>
                  <h3>Popular Post</h3>
                  <div style={fakeimg}>Image</div><br></br>
                  <div style={fakeimg}>Image</div><br></br>
                  <div style={fakeimg}>Image</div>
                </div>
                <div style={card}>
                  <h3>Follow Me</h3>
                  <p>Some text..</p>
                </div>
              </div>
  }    
});

export default RightCol;
