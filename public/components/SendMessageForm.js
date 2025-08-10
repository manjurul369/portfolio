"use client";
import React, { useState } from 'react';

export default function SendMessageForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full mt-10 mb-20'>
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #2b2b2b inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div className='flex flex-col sm:flex-row gap-6 w-full'>
          <div className='w-full'>
            <label htmlFor="name" className='block text-sm font-medium text-para-black'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='mt-1 block w-full bg-[#2b2b2b] px-4 py-2 rounded-md shadow-sm text-white outline-none'
              required
              disabled={isSubmitting}
            />
          </div>
          <div className='w-full'>
            <label htmlFor="email" className='block text-sm font-medium text-para-black'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='mt-1 bg-[#2b2b2b] px-4 py-2 block w-full rounded-md shadow-sm text-white outline-none'
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className='block text-sm font-medium text-para-black'>Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className='mt-1 block w-full bg-[#2b2b2b] px-4 py-2 outline-none rounded-md shadow-sm text-white'
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        {submitStatus === 'success' && (
          <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded'>
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className='w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}