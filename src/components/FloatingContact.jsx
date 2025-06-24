import { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 mb-4 w-64">
          <div className="flex flex-col space-y-3">
            <a
              href="https://wa.me/your_number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700"
            >
              <span className="text-xl">💬</span>
              <span>WhatsApp Chat</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <span className="text-xl">✉️</span>
              <span>Send Message</span>
            </Link>
            <a
              href="tel:your_number"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <span className="text-xl">📞</span>
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      >
        <span className="text-2xl">{isOpen ? '✕' : '💬'}</span>
      </button>
    </div>
  );
};

export default FloatingContact;
