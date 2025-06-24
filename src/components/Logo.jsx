export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>

      {/* Background Circuit Pattern */}
      <path
        d="M10 50 H30 L35 45 H45 L50 50 H60 L65 45 H90"
        stroke="url(#circuitGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M10 60 H25 L30 55 H40 L45 60 H55 L60 55 H90"
        stroke="url(#circuitGradient)"
        strokeWidth="2"
        fill="none"
      />

      {/* Main Tech Shape */}
      <path
        d="M50 20
           L75 45
           L65 65
           H35
           L25 45
           Z"
        fill="url(#logoGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
      />

      {/* Digital Dots */}
      <circle cx="50" cy="40" r="3" fill="currentColor" className="text-gray-900" />
      <circle cx="40" cy="50" r="3" fill="currentColor" className="text-gray-900" />
      <circle cx="60" cy="50" r="3" fill="currentColor" className="text-gray-900" />
      
      {/* Connection Lines */}
      <path
        d="M50 40 L40 50
           M50 40 L60 50"
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-900"
      />

      {/* Highlight */}
      <path
        d="M45 25 L55 35"
        stroke="white"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}
