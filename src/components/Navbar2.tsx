import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Navbar2() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-green-600">CleanAlley</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" icon={ArrowLeft } text="Back" />
                        
                    </div>

                    
                </div>
            </div>
        </nav>
    );
}

function NavLink({ to, icon: Icon, text}: { to: string, icon: React.ComponentType<any>, text: string }) {
    return (
        <Link
            to={to}
            className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-green-600"
        >
            <Icon className="w-4 h-4" />
            <span>{text}</span>
        </Link>
    );
}