import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, LayoutDashboard, HelpCircle, UserCircle } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">CleanAlley</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={Home} text="Home" />
            <NavLink to="/community" icon={Users} text="Community" />
            <NavLink to="/dashboard" icon={LayoutDashboard} text="Dashboard" />
            <NavLink to="/faq" icon={HelpCircle} text="FAQs" />
            <NavLink to="/profile" icon={UserCircle} text="Profile" />
          </div>

          <div className="flex items-center">
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon: Icon, text }: { to: string, icon: React.ComponentType<any>, text: string }) {
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