import React from 'react';
import { FaUserCircle, FaCalendarAlt, FaShareAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Blog = () => {
  const navigate = useNavigate();
  const blogPosts = [
    {
      title: 'The Future of Remote Work in the Tech Industry: Trends and Predictions',
      author: 'Eleanor Vance',
      date: 'April 7, 2025',
      excerpt: 'Explore the evolving landscape of remote work, its profound impact on the tech industry, and insightful predictions for how distributed teams will function in the coming years...',
      image: 'https://via.placeholder.com/800x400/f0f8ff/333?Text=Remote+Work',
      link: '/blog/remote-work-trends'
    },
    {
      title: 'Top 10 Essential Skills Every Job Seeker Needs to Thrive in 2025',
      author: 'Franklin Carter',
      date: 'April 3, 2025',
      excerpt: 'In today\'s dynamic and competitive job market, certain skills are highly valued by employers. Discover the top 10 essential skills that will significantly enhance your candidacy and help you thrive...',
      image: 'https://via.placeholder.com/800x400/e0f2f7/333?Text=Job+Skills',
      link: '/blog/essential-job-seeker-skills'
    },
    {
      title: 'Crafting a Compelling Cover Letter: Tips and Examples That Get Noticed',
      author: 'Sophia Rodriguez',
      date: 'March 30, 2025',
      excerpt: 'Your cover letter is a crucial tool to make a strong first impression. Learn how to craft compelling and personalized cover letters with practical tips and effective examples that will get you noticed by recruiters...',
      image: 'https://via.placeholder.com/800x400/e8f5e9/333?Text=Cover+Letter',
      link: '/blog/compelling-cover-letter'
    },
    {
      title: 'Mastering the Art of the Virtual Job Interview: Strategies for Success',
      author: 'Daniel Lee',
      date: 'March 22, 2025',
      excerpt: 'Virtual job interviews have become increasingly common. Master the art of the online interview with key strategies for preparation, technical setup, and effective communication to ace your next virtual meeting...',
      image: 'https://via.placeholder.com/800x400/ede7f6/333?Text=Virtual+Interview',
      link: '/blog/mastering-virtual-interviews'
    },
    {
      title: 'Networking for Introverts: Building Meaningful Connections Without the Pressure',
      author: 'Olivia Green',
      date: 'March 15, 2025',
      excerpt: 'Networking can feel daunting for introverts, but it\'s a vital part of career growth. Discover effective strategies for building meaningful connections in a way that feels comfortable and authentic for introverted professionals...',
      image: 'https://via.placeholder.com/800x400/f3e5f5/333?Text=Networking',
      link: '/blog/networking-for-introverts'
    },
    // Add even more blog posts as needed
  ];

  const containerStyle = {
    maxWidth: '1000px',
    margin: '50px auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    fontFamily: 'Open Sans, sans-serif',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '40px',
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

  const postStyle = {
    marginBottom: '50px',
    paddingBottom: '40px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '35%',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
  };

  const contentStyle = {
    width: '65%',
  };

  const postTitleStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '15px',
    fontWeight: '600',
  };

  const metaStyle = {
    fontSize: '0.95rem',
    color: '#777',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  };

  const excerptStyle = {
    fontSize: '1.1rem',
    color: '#444',
    lineHeight: '1.8',
    marginBottom: '15px', // Reduced margin before the button
  };

  const readMoreStyle = {
    display: 'block', // Make it a block-level element
    width: 'fit-content', // Adjust width to content
    padding: '12px 24px',
    backgroundColor: '#008cba',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    marginTop: '10px', // Add some space above the button
  };

  const readMoreHoverStyle = {
    backgroundColor: '#005f73',
  };

  const shareButtonStyle = {
    backgroundColor: '#f0f0f0',
    color: '#555',
    border: 'none',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s ease',
  };

  const shareButtonHoverStyle = {
    backgroundColor: '#e0e0e0',
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
      <h2 style={titleStyle}>Latest Articles</h2>
      {blogPosts.map((post, index) => (
        <div key={index} style={postStyle}>
          <img src={post.image} alt={post.title} style={imageStyle} />
          <div style={contentStyle}>
            <h3 style={postTitleStyle}>{post.title}</h3>
            <div style={metaStyle}>
              <div style={metaItemStyle}>
                <FaUserCircle /> {post.author}
              </div>
              <div style={metaItemStyle}>
                <FaCalendarAlt /> {post.date}
              </div>
              <button style={shareButtonStyle} onMouseOver={(e) => Object.assign(e.target.style, shareButtonHoverStyle)} onMouseOut={(e) => Object.assign(e.target.style, shareButtonStyle)}>
                <FaShareAlt />
              </button>
            </div>
            <p style={excerptStyle}>{post.excerpt}</p> {/* Removed the button from the paragraph */}
            <a
              href={post.link}
              style={readMoreStyle}
              onMouseOver={(e) => Object.assign(e.target.style, readMoreHoverStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, readMoreStyle)}
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;