import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#181818',
    color: '#f0f0f0',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    lineHeight: '1.4',
    boxSizing: 'border-box',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px', // Increased gap between sections
  };

  const sectionStyle = {
    flex: '1 1 calc(20% - 30px)', // Adjust flex basis to account for gap
    marginBottom: '30px', // Reduced margin-bottom as gap provides spacing
  };

  const quickLinksStyle = {
    ...sectionStyle,
    flex: '1 1 calc(16.66% - 30px)', // Adjust
  };

  const employerLinksStyle = {
    ...sectionStyle,
    flex: '1 1 calc(16.66% - 30px)', // Adjust
  };

  const featuredCategoriesStyle = {
    ...sectionStyle,
    flex: '1 1 calc(16.66% - 30px)', // Adjust
  };

  const contactStyle = {
    ...sectionStyle,
    flex: '1 1 calc(20% - 30px)', // Adjust
  };

  const headingStyle = {
    color: '#eee',
    marginBottom: '15px',
  };

  const subHeadingStyle = {
    color: '#ddd',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '0.9em',
    color: '#ccc',
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#bbb',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    display: 'inline-block',
    marginRight: '15px',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    verticalAlign: 'middle',
    marginRight: '5px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const copyrightStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #333',
    fontSize: '0.8em',
    color: '#999',
  };

  const copyrightLinkStyle = {
    color: '#999',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Meri Nokri</h3>
          <p style={paragraphStyle}>Your go-to platform for finding the best career opportunities. Connecting talent with leading companies.</p>
          <div style={{ marginTop: '20px' }}>
            <a href="#" style={linkStyle}>
              <FaLinkedin style={iconStyle} />
              LinkedIn
            </a>
            <a href="#" style={linkStyle}>
            <MdFacebook style={iconStyle} />
              Facebook
            </a>
          </div>
        </div>

        <div style={quickLinksStyle}>
          <h4 style={subHeadingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Browse Jobs</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Companies</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>My Account</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Job Alerts</a></li>
          </ul>
        </div>

        {/* New "Featured Categories" Section */}
        <div style={featuredCategoriesStyle}>
          <h4 style={subHeadingStyle}>Featured Categories</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Technology</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Marketing</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Finance</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Healthcare</a></li>
            {/* Add more categories as needed */}
          </ul>
        </div>

        <div style={employerLinksStyle}>
          <h4 style={subHeadingStyle}>For Employers</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Post a Job</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Search Candidates</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Pricing</a></li>
            <li style={listItemStyle}><a href="#" style={{ ...linkStyle, marginRight: 0 }}>Employer Dashboard</a></li>
          </ul>
        </div>

        <div style={contactStyle}>
          <h4 style={subHeadingStyle}>Contact Us</h4>
          <p style={paragraphStyle}>Email: <a href="mailto:info@example.com" style={linkStyle}>info@example.com</a></p>
          <p style={paragraphStyle}>Phone: +91 9876543210</p>
          <p style={paragraphStyle}>Address: 123 Innovation Park, Surat, Gujarat, India</p>
        </div>
      </div>
      <div style={copyrightStyle}>
        &copy; 2025 Meri Nokri. All rights reserved. created by hemant gavali ty bca  | <a href="#" style={copyrightLinkStyle}>Privacy Policy</a> | <a href="#" style={copyrightLinkStyle}>Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;