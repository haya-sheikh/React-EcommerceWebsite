import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linksContainerStyle}>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a href="/" style={linkStyle}>Home</a>
            </li>
            <li style={listItemStyle}>
              <a href="/about" style={linkStyle}>About</a>
            </li>
            <li style={listItemStyle}>
              <a href="/services" style={linkStyle}>Services</a>
            </li>
            <li style={listItemStyle}>
              <a href="/contact" style={linkStyle}>Contact</a>
            </li>
          </ul>
        </div>
        <div style={contentContainerStyle}>
          <p style={textStyle}>&copy; {new Date().getFullYear()} 2HR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'black',
  padding: '20px',
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linksContainerStyle = {
  flex: 1,
};

const listStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
  padding: 0,
};

const listItemStyle = {
  margin: '0 10px',
};

const contentContainerStyle = {
  flex: 1,
};

const linkStyle = {
  color: 'blue', 
};

const textStyle = {
  color: 'white', 
};

export default Footer;
