import Link from 'next/link';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="w-full py-4 px-8 bg-cyber-dark-blue/30 border-b-2 border-neon-purple relative">
      <div className="loading-line"></div>
      <nav className="max-w-4xl mx-auto flex items-center space-x-6">
        <span className="font-cyber text-neon-purple mr-4">Contact Me</span>
        <Link 
          href="https://facebook.com/yourprofile" 
          target="_blank"
          className="font-tech text-white hover:text-neon-purple transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </Link>
        <Link 
          href="https://twitter.com/yourhandle" 
          target="_blank"
          className="font-tech text-white hover:text-neon-purple transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </Link>
        <Link 
          href="mailto:your.email@example.com" 
          className="font-tech text-white hover:text-neon-purple transition-colors duration-300"
        >
          <FaEnvelope size={24} />
        </Link>
      </nav>
    </header>
  );
}
