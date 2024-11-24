import React from 'react';
import { Users, Shield, Key, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Shield, label: 'Roles', href: '/roles' },
  { icon: Key, label: 'Permissions', href: '/permissions' },
];

interface SidebarProps {
  onNavigate: (href: string) => void;
  active: string;
}

export default function Sidebar({ onNavigate, active }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      exit={{ x: -200 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen fixed left-0 top-0 shadow-lg"
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-indigo-500">RBAC Admin</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {navItems.map(({ icon: Icon, label, href }) => (
          <button
            key={href}
            onClick={() => onNavigate(href)}
            className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              active === href
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Icon size={20} className={`${active === href ? 'text-white' : 'text-gray-400'}`} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
