import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Example icons
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const FAQ = () => {
  const navigate = useNavigate();
  const faqData = [
    {
      question: 'How do I apply for a job?',
      answer: 'To apply for a job, navigate to the job listing page, find the job you are interested in, and click on the "Apply Now" button. Follow the instructions provided in the application form. You may need to upload your resume and cover letter.'
    },
    {
      question: 'Is registration required to apply for jobs?',
      answer: 'Yes, you need to register an account on our platform to create a profile, save jobs, and apply for positions. Registration is free and easy! It allows us to keep track of your applications and preferences.'
    },
    {
      question: 'How can employers post job openings?',
      answer: 'Employers can post job openings by signing up for an employer account and then navigating to the "Post a Job" section. Follow the steps to fill in the job details, specify requirements, and set the application deadline. We offer various pricing plans for job postings.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all users. If you encounter any issues or have questions, please contact our support team at support@examplejobportal.com. We aim to respond to all inquiries within 24-48 hours during business days.'
    },
    {
      question: 'Can I save jobs and apply later?',
      answer: 'Absolutely! Once you are registered and logged in, you can save job listings that interest you by clicking the "Save" or "Favorite" icon. You can then access your saved jobs from your dashboard and apply at your convenience.'
    },
    {
      question: 'How do I create a professional profile?',
      answer: 'To create a professional profile, go to the "My Profile" section after registering or logging in. You can upload your resume, add details about your education, work experience, skills, and other relevant information. A complete profile helps employers find you and makes applying easier.'
    },
    {
      question: 'What if I forget my password?',
      answer: 'If you forget your password, simply click on the "Forgot Password" link on the login page. You will be prompted to enter your registered email address, and we will send you instructions on how to reset your password.'
    },
    {
      question: 'How often are new jobs posted?',
      answer: 'New job openings are posted on our platform daily. We encourage you to check our website regularly or set up job alerts based on your criteria to stay updated on the latest opportunities.'
    },
    {
      question: 'Do you offer any career advice or resources?',
      answer: 'Yes, we have a dedicated blog section (accessible from the navigation) where we regularly publish articles on resume writing, interview tips, career development, and industry insights to help job seekers succeed.'
    },
    {
      question: 'How do I contact an employer directly?',
      answer: 'The best way to contact an employer is through the application process for a specific job listing. Some employers may provide contact information within the job description, but we generally recommend applying through our platform to ensure your application is properly tracked.'
    },
    // Add even more FAQ items as needed
  ];

  const containerStyle = {
    maxWidth: '900px',
    margin: '50px auto',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    fontFamily: 'Roboto, sans-serif',
  };

  const titleStyle = {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '40px',
    textAlign: 'center',
  };

  const faqItemStyle = {
    marginBottom: '30px',
    borderBottom: '1px solid #eee',
    paddingBottom: '25px',
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

  const questionContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '15px',
    cursor: 'pointer',
  };

  const answerStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.7',
    paddingLeft: '20px',
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out',
  };

  const answerVisibleStyle = {
    maxHeight: '500px', // Adjust as needed
    padding: '20px',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: '#007bff',
    marginLeft: '15px',
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
      <h2 style={titleStyle}>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} style={faqItemStyle}>
          <div style={questionContainerStyle} onClick={() => toggleAnswer(index)}>
            {item.question}
            <span style={iconStyle}>
              {expandedIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </div>
          <p style={{ ...answerStyle, ...(expandedIndex === index && answerVisibleStyle) }}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;