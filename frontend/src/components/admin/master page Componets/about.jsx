import React from 'react';
import { FaUsers, FaBriefcase, FaLightbulb, FaCheckCircle, FaHandshake, FaRocket } from 'react-icons/fa'; // More icons
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; // Import the left arrow icon

const About = () => {
  const navigate = useNavigate();
  const containerStyle = {
    maxWidth: '1050px',
    margin: '60px auto',
    padding: '50px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
    fontFamily: 'Nunito, sans-serif',
    lineHeight: '2',
  };

  const titleStyle = {
    fontSize: '3.6rem',
    fontWeight: '800',
    color: '#008cba',
    marginBottom: '50px',
    textAlign: 'center',
  };

  const backButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 15px',
    backgroundColor: '#e7f2ff',
    color: '#007bff',
    border: '1px solid #b3d7ff',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
  };

  const backButtonHoverStyle = {
    backgroundColor: '#d0e6ff',
    color: '#0056b3',
    borderColor: '#0056b3',
  };

  const backIconStyle = {
    fontSize: '1.2rem',
  };

  const sectionStyle = {
    marginBottom: '50px',
    paddingBottom: '40px',
    borderBottom: '1px solid #e0e0e0',
  };

  const sectionTitleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '25px',
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.15rem',
    color: '#555',
    marginBottom: '25px',
  };

  const valuePropositionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    padding: '40px 0',
  };

  const valueItemStyle = {
    textAlign: 'center',
  };

  const valueIconStyle = {
    fontSize: '3rem',
    color: '#008cba',
    marginBottom: '20px',
  };

  const valueTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '12px',
  };

  const teamSectionStyle = {
    ...sectionStyle,
    borderBottom: 'none',
    paddingTop: '40px',
  };

  const teamMembersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '30px',
    padding: '30px 0',
  };

  const teamMemberStyle = {
    textAlign: 'center',
  };

  const teamMemberImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const teamMemberNameStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
  };

  const teamMemberRoleStyle = {
    fontSize: '0.95rem',
    color: '#777',
  };

  const teamData = [
    { name: 'Alice Johnson', role: 'CEO & Founder', image: 'https://via.placeholder.com/100/4CAF50/FFFFFF?Text=AJ' },
    { name: 'Bob Williams', role: 'Chief Technology Officer', image: 'https://via.placeholder.com/100/2196F3/FFFFFF?Text=BW' },
    { name: 'Charlie Brown', role: 'Head of Marketing', image: 'https://via.placeholder.com/100/FF9800/FFFFFF?Text=CB' },
    { name: 'Diana Miller', role: 'Lead Product Manager', image: 'https://via.placeholder.com/100/9C27B0/FFFFFF?Text=DM' },
    { name: 'Ethan Davis', role: 'Senior Engineer', image: 'https://via.placeholder.com/100/673AB7/FFFFFF?Text=ED' },
    { name: 'Fiona Garcia', role: 'User Experience Designer', image: 'https://via.placeholder.com/100/00BCD4/FFFFFF?Text=FG' },
  ];

  const coreValueStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '30px 0',
  };

  const coreValueItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const coreValueIconStyle = {
    fontSize: '2rem',
    color: '#008cba',
  };

  const coreValueTextStyle = {
    fontSize: '1.1rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <button
        style={backButtonStyle}
        onMouseOver={(e) => Object.assign(e.target.style, backButtonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, backButtonStyle)}
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft style={backIconStyle} /> Back
      </button>
      <h2 style={titleStyle}>About Our Job Portal</h2>

      <div style={sectionStyle}>
        <div style={sectionTitleContainerStyle}>
          <FaRocket style={{ fontSize: '1.5rem', color: '#008cba' }} />
          <h3 style={sectionTitleStyle}>Our Story</h3>
        </div>
        <p style={paragraphStyle}>Founded in [Year], our job portal was born out of a passion to connect talented individuals with the right career opportunities efficiently and transparently. Frustrated by the complexities and inefficiencies of traditional hiring processes, we envisioned a platform that prioritizes user experience and fosters meaningful connections between job seekers and employers.</p>
        <p style={paragraphStyle}>Since our inception, we've been dedicated to innovation, constantly evolving our platform to meet the changing needs of the job market. We believe in the power of technology to simplify and enhance the hiring journey for everyone.</p>
      </div>

      <div style={sectionStyle}>
        <div style={sectionTitleContainerStyle}>
          <FaLightbulb style={{ fontSize: '1.5rem', color: '#008cba' }} />
          <h3 style={sectionTitleStyle}>Our Core Values</h3>
        </div>
        <div style={coreValueStyle}>
          <div style={coreValueItemStyle}>
            <FaCheckCircle style={coreValueIconStyle} />
            <p style={coreValueTextStyle}>**Integrity & Transparency:** We operate with honesty and openness in all our interactions.</p>
          </div>
          <div style={coreValueItemStyle}>
            <FaRocket style={coreValueIconStyle} />
            <p style={coreValueTextStyle}>**Innovation & Excellence:** We strive for continuous improvement and cutting-edge solutions.</p>
          </div>
          <div style={coreValueItemStyle}>
            <FaUsers style={coreValueIconStyle} />
            <p style={coreValueTextStyle}>**User-Centricity:** Our users' needs are at the heart of everything we do.</p>
          </div>
          <div style={coreValueItemStyle}>
            <FaHandshake style={coreValueIconStyle} />
            <p style={coreValueTextStyle}>**Collaboration & Partnership:** We believe in working together to achieve mutual success.</p>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>What We Offer</h3>
        <div style={valuePropositionStyle}>
          <div style={valueItemStyle}>
            <FaUsers style={valueIconStyle} />
            <h4 style={valueTitleStyle}>Vast Job Database</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Explore thousands of job openings across various industries and locations, updated daily.</p>
          </div>
          <div style={valueItemStyle}>
            <FaBriefcase style={valueIconStyle} />
            <h4 style={valueTitleStyle}>Direct Employer Connections</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Connect directly with top companies and recruiters, streamlining the application process.</p>
          </div>
          <div style={valueItemStyle}>
            <FaLightbulb style={valueIconStyle} />
            <h4 style={valueTitleStyle}>Comprehensive Career Resources</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Access a wealth of articles, guides, and tools to help you navigate your career journey.</p>
          </div>
          <div style={valueItemStyle}>
            <FaUsers style={valueIconStyle} />
            <h4 style={valueTitleStyle}>Personalized Job Recommendations</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Receive tailored job suggestions based on your unique skills, experience, and preferences.</p>
          </div>
          <div style={valueItemStyle}>
            <FaCheckCircle style={valueIconStyle} />
            <h4 style={valueTitleStyle}>Easy Application Process</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>A simple and intuitive application process, saving you time and effort.</p>
          </div>
          <div style={valueItemStyle}>
            <FaRocket style={valueIconStyle} />
            <h4 style={valueTitleStyle}>Advanced Search & Filtering</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Refine your job search with advanced filters to find the perfect match.</p>
          </div>
        </div>
      </div>

      <div style={teamSectionStyle}>
        <div style={sectionTitleContainerStyle}>
          <FaUsers style={{ fontSize: '1.5rem', color: '#008cba' }} />
          <h3 style={sectionTitleStyle}>Meet Our Team</h3>
        </div>
        <div style={teamMembersStyle}>
          {teamData.map((member, index) => (
            <div key={index} style={teamMemberStyle}>
              <img src={member.image} alt={member.name} style={teamMemberImageStyle} />
              <h5 style={teamMemberNameStyle}>{member.name}</h5>
              <p style={teamMemberRoleStyle}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;