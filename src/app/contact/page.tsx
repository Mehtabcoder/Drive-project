'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      // Prepare the pre-filled message for WhatsApp
      const { name, phone, message } = formData;
      const encodedMessage = encodeURIComponent(
        `Hello, I am ${name}. My phone number is ${phone}. My message is: ${message}`
      );

      // WhatsApp Click to Chat URL (replace with your business WhatsApp number)
      const whatsappURL = `https://wa.me/11234567890?text=${encodedMessage}`;

      // Open WhatsApp with the pre-filled message
      window.open(whatsappURL, '_blank');
      
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Contact Us</h1>
        
        {/* Success or Error message */}
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
            <p>Your message has been successfully sent! We’ll get back to you shortly.</p>
          </div>
        )}
        {submitError && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
            <p>{submitError}</p>
          </div>
        )}
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-4 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter your message here"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 text-lg font-bold rounded-lg transition ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
            </button>
          </div>
        </form>


        
      </div>
    </div>

    
  );
};

export default ContactPage;
