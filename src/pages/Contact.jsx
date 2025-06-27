import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const formElement = e.target;
      const formData = new FormData(formElement);
      
      // Send form data to FormSubmit service which will forward to reachus@irisvertex.com
      const response = await fetch('https://formsubmit.co/reachus@irisvertex.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        // Reset form
        formElement.reset();
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' }
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again later.' }
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Reach out to us for custom solutions tailored to your business needs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <form action="https://formsubmit.co/reachus@irisvertex.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit configuration fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from iTech Pillar Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              {status.info.msg && (
                <div className={`p-4 rounded-lg ${status.info.error ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
                  {status.info.msg}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-primary hover:bg-accent px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/50 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
                {!status.submitting && (
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">New York, NY</p>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">contact@example.com</p>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
