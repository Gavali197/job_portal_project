

import React from 'react';

const Master = () => {
  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e7eb',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    color: '#000',
  };

  const logoDotStyle = {
    width: '0.75rem',
    height: '0.75rem',
    backgroundColor: '#3b82f6',
    borderRadius: '50%',
  };




  const authStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  };

  const signInButtonStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  };

  const signUpButtonStyle = {
    backgroundColor: '#3b82f6',
    fontWeight: 'bold',
    color: '#fff',
    padding: '0.75rem 1.25rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };

  const heroStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const heroContainerStyle = {
    maxWidth: '768px',
    margin: '0 auto',
    position: 'relative',
  };

  const badgeStyle = {
    backgroundColor: '#e0f2fe',
    color: '#3b82f6',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.8rem',
    marginBottom: '1rem',
    display: 'inline-block',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '1.5rem',
    color: '#1e293b',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#4b5563',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const buttonsStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  };

  const primaryButtonStyle = {
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: '#4b5563',
    padding: '1rem 2rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontWeight: '500',
    border: '1px solid #d1d5db',
  };

  const cornerTextStyle = {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    boxShadow: '0 1px 3px rgba(0,0,0,.1)',
    fontSize: '0.8rem',
    fontWeight: 'medium',
    display: 'none', // Initially hidden, will adjust with media queries
  };

  const companiesStyle = {
    padding: '3rem 2rem',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #eee',
    textAlign: 'center',
  };

  const companiesContainerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
  };

  const trustedTextStyle = {
    color: '#718096',
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
  };

  const logosStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  };

  const logoItemStyle = {
    color: '#a0aec0',
    fontSize: '1.25rem',
    fontWeight: 'semibold',
  };

  const featuresStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
  };

  const featuresContainerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const featuresTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1e293b',
  };

  const featuresSubtitleStyle = {
    color: '#4b5563',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1rem',
  };

  const featuresGridStyle = {
    display: 'flex', // Changed to flex
    gap: '4rem',
    marginTop: '2rem',
    justifyContent: 'center', // Center the two columns
    alignItems: 'flex-start', // Align items to the top
    flexWrap: 'wrap', // Allow wrapping on smaller screens
  };

  const featureGroupStyle = {
    textAlign: 'left',
    flex: '1 1 300px', // Distribute space, minimum width
  };

  const featureGroupTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1e293b',
  };

  const featureItemStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    alignItems: 'flex-start',
  };

  const featureIconStyle = {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1rem',
  };

  const featureTextContainerStyle = {};

  const featureItemTitleStyle = {
    fontWeight: 'semibold',
    color: '#1e293b',
    marginBottom: '0.25rem',
    fontSize: '0.9rem',
  };

  const featureItemDescriptionStyle = {
    color: '#4b5563',
    fontSize: '0.8rem',
  };

  const footerStyle = {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #eee',
    textAlign: 'center',
    color: '#718096',
    fontSize: '0.875rem',
  };
  

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    padding: '1rem 0',
    margin: 0,
  };
  
  const navLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '16px',
    position: 'relative',
    padding: '0.5rem 0',
  };


  const footerContainerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
  };

  const footerLogoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    color: '#000',
  };

  const footerCopyrightStyle = {};

  const companiesData = [
    { name: "Google" },
    { name: "amazon" },
    { name: "asana" },
    { name: "stripe" },
    { name: "Notion" },
    { name: "Booking.com" },
    { name: "hotjar" },
  ];

  const recruiterFeaturesData = [
    {
      icon: "🧰",
      title: "Set up job posts, enhance company branding, and access HR tools—all for free.",
      bgColor: '#ccfbf1',
      iconColor: '#14b8a6',
    },
    {
      icon: "📈",
      title: "An applicant tracking system and free integration with existing ATS.",
      bgColor: '#e0f2fe',
      iconColor: '#3b82f6',
    },
    {
      icon: "🤖",
      title: "AI-powered candidate matching and recruitment assistance.",
      bgColor: '#e0f2f7',
      iconColor: '#06b6d4',
    },
  ];

  const seekerFeaturesData = [
    {
      icon: "🤝",
      title: "Connect directly with founders and recruiters, no third party at all.",
      bgColor: '#f0fdf4',
      iconColor: '#86efac',
    },
    {
      icon: "📄",
      title: "Access all essential details upfront, including salary, ratings, before applying.",
      bgColor: '#fefce8',
      iconColor: '#facc15',
    },
    {
      icon: "🚀",
      title: "No need cover letters. One click to apply anywhere possible.",
      bgColor: '#fdf2f8',
      iconColor: '#ec4899',
    },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Header */}
      <header style={headerStyle}>
        <a href="/" style={logoStyle}>
          <div style={logoDotStyle}></div>
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Meri Nokri</span>
        </a>
        <nav style={{ background:'white' }}> {/* Hide for mobile initially */}
          <ul style={navStyle}>
            <li><a href="#" style={navLinkStyle}>Home</a></li>
            <li><a href="/master/faq" style={navLinkStyle}>FAQ</a></li>
            <li><a href="/master/blog" style={navLinkStyle}>Blog</a></li>
            <li><a href="/master/about" style={navLinkStyle}>About</a></li>
          </ul>
        </nav>
        <div style={authStyle}>
         
          <button style={signUpButtonStyle}> <a href="/login" style={{ ...signInButtonStyle}}>Login</a> </button>

           
          <button style={signUpButtonStyle}><a href="/register" style={{ ...signInButtonStyle}}>Sign up</a></button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroContainerStyle}>
          <div style={{ ...cornerTextStyle, left: '0', top: '0', transform: 'translateY(-50%)', display: 'none' }}>Software Engineer</div>
          <div style={{ ...cornerTextStyle, right: '0', top: '0', transform: 'translateY(-50%)', display: 'none' }}>Product Manager</div>
          <div style={{ ...cornerTextStyle, left: '0', bottom: '0', transform: 'translateY(50%)', display: 'none' }}>Business Analyst</div>
          <div style={{ ...cornerTextStyle, right: '0', bottom: '0', transform: 'translateY(50%)', display: 'none' }}>Product Designer</div>

          <div style={{ position: 'relative', zIndex: 10 }}>
            <span style={badgeStyle}>Check our new job list released! →</span>
            <h1 style={titleStyle}>
              Hire Our Professional Candidate <br style={{ display: 'none' }} />
              and Find Your Best Job
            </h1>
            <p style={subtitleStyle}>
              We're here to help you unlock remote job opportunities in fields you're
              passionate about in no matter where you are.
            </p>
            <div style={buttonsStyle}>
              <a href="#" style={primaryButtonStyle}>Start Hiring Today</a>
              <a href="#" style={secondaryButtonStyle}>Start Applying Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section style={companiesStyle}>
        <div style={companiesContainerStyle}>
          <p style={trustedTextStyle}>Trusted by 5000+ international companies</p>
          <div style={logosStyle}>
            {companiesData.map((company) => (
              <div key={company.name} style={logoItemStyle}>{company.name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresStyle}>
        <div style={featuresContainerStyle}>
          <h2 style={featuresTitleStyle}>The Perfect Match for Talent & Opportunities</h2>
          <p style={featuresSubtitleStyle}>Our platform bridges the gap between opportunity and expertise</p>
          <div style={featuresGridStyle}>
            <div style={featureGroupStyle}>
              <h3 style={featureGroupTitleStyle}>Why recruiters love us</h3>
              {recruiterFeaturesData.map((feature, index) => (
                <div key={index} style={featureItemStyle}>
                  <div style={{ ...featureIconStyle, backgroundColor: feature.bgColor, color: feature.iconColor }}>{feature.icon}</div>
                  <div style={featureTextContainerStyle}>
                    <h4 style={featureItemTitleStyle}>{feature.title}</h4>
                    {/* <p style={featureItemDescriptionStyle}>{feature.title.split('—')[1]}</p> */}
                  </div>
                </div>
              ))}
            </div>
            <div style={featureGroupStyle}>
              <h3 style={featureGroupTitleStyle}>Why job seekers love us</h3>
              {seekerFeaturesData.map((feature, index) => (
                <div key={index} style={featureItemStyle}>
                  <div style={{ ...featureIconStyle, backgroundColor: feature.bgColor, color: feature.iconColor }}>{feature.icon}</div>
                  <div style={featureTextContainerStyle}>
                    <h4 style={featureItemTitleStyle}>{feature.title}</h4>
                    {/* <p style={featureItemDescriptionStyle}>{feature.title.split('.')[1]}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={footerContainerStyle}>
          <a href="/" style={footerLogoStyle}>
            <div style={logoDotStyle}></div>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Remote</span>
          </a>
          <div style={footerCopyrightStyle}>© 2025 Remote. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Master;



// import React from 'react';
// import styled from 'styled-components';

// // --- Styled Components ---

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2rem 5rem;
//   font-family: sans-serif;
//   background-color: #f8f8f8;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const NavLinks = styled.nav`
//   display: flex;
//   gap: 1.5rem;
// `;

// const NavLink = styled.a`
//   text-decoration: none;
//   color: #333;
//   font-weight: 500;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #4A90E2;
//   }
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const Button = styled.button`
//   padding: 0.75rem 1.5rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-weight: 600;
//   ${(props) =>
//     props.primary
//       ? `background-color: #4A90E2; color: white;`
//       : `background-color: transparent; border: 1px solid #4A90E2; color: #4A90E2;`}
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #4A90E2;
// `;

// const HeroContainer = styled.section`
//   text-align: center;
//   padding: 4rem 5rem;
//   font-family: sans-serif;
// `;

// const JobTags = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   margin: 2rem 0;
//   flex-wrap: wrap;
// `;

// const Tag = styled.span`
//   background-color: #E8F0FE;
//   padding: 0.5rem 1rem;
//   border-radius: 15px;
//   font-size: 0.9rem;
//   color: #4A90E2;
// `;

// const Companies = styled.div`
//   text-align: center;
//   padding: 2rem 5rem;
//   background-color: #F8F8F8;
//   font-family: sans-serif;
// `;

// const LogoGrid = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
//   margin-top: 1rem;
//   flex-wrap: wrap;
// `;

// const Features = styled.section`
//   padding: 4rem 5rem;
//   font-family: sans-serif;
// `;

// const FeatureGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 2rem;
//   margin-top: 2rem;
// `;

// const FeatureColumn = styled.div`
//   text-align: left;
// `;

// const FeatureItem = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 1rem;
//   margin-bottom: 1.5rem;
// `;

// const Icon = styled.div`
//   width: 30px;
//   height: 30px;
//   background-color: #E8F0FE;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const JobPortalPage = () => {
//   return (
//     <div>
//       <HeaderContainer>
//         <Logo className='merinokri'>Meri Nokri</Logo>
//         <NavLinks>
//           <NavLink href="#">Home</NavLink>
//           <NavLink href="#">Find Jobs</NavLink>
//           <NavLink href="#">FAQ</NavLink>
//           <NavLink href="#">Blog</NavLink>
//           <NavLink href="#">Pricing</NavLink>
//         </NavLinks>
//         <Buttons>
//           <Button>Sign In</Button>
//           <Button primary>Sign Up</Button>
//         </Buttons>
//       </HeaderContainer>

//       <HeroContainer>
//         <h1>Hire Our Professional Candidate and Find Your Best Job</h1>
//         <p>
//           We're here to help you unlock remote job opportunities in fields you're
//           passionate about in no matter where you are.
//         </p>
//         <JobTags>
//           <Tag>Software Engineer</Tag>
//           <Tag>Product Manager</Tag>
//           <a href="#">Check out new jobs just released</a>
//           <Tag>Business Analyst</Tag>
//           <Tag>Product Designer</Tag>
//         </JobTags>
//         <div>
//           <Button>Start Hiring Today</Button>
//           <Button primary>Start Applying Now</Button>
//         </div>
//       </HeroContainer>

//       <Companies>
//         <p>Trusted by 1,000 top international companies</p>
//         <LogoGrid>
//           <span>Google</span>
//           <span>Amazon</span>
//           <span>Asana</span>
//           <span>Stripe</span>
//           <span>Notion</span>
//           <span>Booking.com</span>
//           <span>Hotjar</span>
//           <Logo className='merinokri'>Meri Nokri</Logo>
//         </LogoGrid>
//       </Companies>

//       <Features>
//         <h2>The Perfect Match for Talent & Opportunities</h2>
//         <p>Our platform bridges the gap between opportunity and expertise</p>
//         <FeatureGrid>
//           <FeatureColumn>
//             <h3>Why recruiters love us</h3>
//             <FeatureItem>
//               <Icon>🚀</Icon>
//               <div>
//                 Set up job posts, enhance company branding, and access HR tools - all for free.
//               </div>
//             </FeatureItem>
//             <FeatureItem>
//               <Icon>🔗</Icon>
//               <div>An applicant tracking system and free integration with existing ATS.</div>
//             </FeatureItem>
//             <FeatureItem>
//               <Icon>🤖</Icon>
//               <div>AI-powered candidate matching and recruitment assistance.</div>
//             </FeatureItem>
//           </FeatureColumn>
//           <FeatureColumn>
//             <h3>Why job seekers love us</h3>
//             <FeatureItem>
//               <Icon>🤝</Icon>
//               <div>Connect directly with founders and recruiters, no third party at all.</div>
//             </FeatureItem>
//             <FeatureItem>
//               <Icon>📋</Icon>
//               <div>Access all essential details upfront, including salary, ratings, before applying.</div>
//             </FeatureItem>
//             <FeatureItem>
//               <Icon>⚡</Icon>
//               <div>No need cover letters. One click to apply anywhere possible.</div>
//             </FeatureItem>
//           </FeatureColumn>
//         </FeatureGrid>
//       </Features>
//     </div>
//   );
// };

// export default JobPortalPage;