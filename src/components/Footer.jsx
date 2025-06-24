import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <Logo className="h-14 w-14 text-primary group-hover:text-accent transition-all duration-300 transform group-hover:rotate-3" />
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent tracking-tight">
                IrisVertex
              </span>
            </Link>
            <p className="text-gray-400 mb-4 text-lg">
              Elevating businesses with peak technology solutions. We combine vision with expertise
              to deliver transformative enterprise solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/nextgenreporting" className="text-gray-400 hover:text-white transition-colors">
                  Next Gen Reporting
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Oracle EBS Solutions</li>
              <li className="text-gray-400">Modern Web Development</li>
              <li className="text-gray-400">Integration Services</li>
              <li className="text-gray-400">Cloud Solutions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {new Date().getFullYear()} IrisVertex. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            irisVertex is part of iTechPillar registered with head office in Morganville, NJ.
          </p>
        </div>
      </div>
    </footer>
  );
}
