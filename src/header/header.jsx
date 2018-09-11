import React from 'react';

const header = {
  color: 'blue',
  padding: '30px',
  fontSize: '40px',
  textAlign: 'center',
  background: 'white'
};

var Header = React.createClass({
  render: function() {
    return <div style={header}>
                <h2>Blog Name</h2>
            </div>
  }    
});

export default Header;
