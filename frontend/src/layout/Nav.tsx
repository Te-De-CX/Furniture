import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { id: 1, text: 'home' },
        { id: 2, text: 'services' },
        { id: 3, text: 'doctors' },
        { id: 4, text: 'products' },
        { id: 5, text: 'gallery' },
    ];

    return (
        <nav className="py-8 px-4 md:px-20 flex justify-between items-center bg-white text-white sticky top-0 z-50 shadow-sm">
            <h2 className="text-4xl font-bold text-blue-900">furniture</h2>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-14 font-semibold text-xm text-black">
                {navLinks.map((link) => (
                    <li key={link.id} className="hover:text-blue-700 transition-colors">
                        {link.text}
                    </li>
                ))}
            </ul>
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-blue-900 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 right-0 bg-white py-4 px-6 shadow-md capitalize">
                    <ul className="flex flex-col gap-4 font-semibold text-black">
                        {navLinks.map((link) => (
                            <li 
                                key={link.id} 
                                className="hover:text-blue-700 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.text}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;