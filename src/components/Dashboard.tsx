import React from 'react';
import { Users, Shield, Key, Activity } from 'lucide-react';
import { initialUsers, roles, permissions } from '../data/mock';

export default function Dashboard() {
  const stats = [
    { icon: Users, label: 'Total Users', value: initialUsers.length },
    { icon: Shield, label: 'Roles', value: roles.length },
    { icon: Key, label: 'Permissions', value: permissions.length },
    { icon: Activity, label: 'Active Users', value: initialUsers.filter(u => u.status === 'active').length },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
      {stats.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 text-white rounded-xl shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-teal-100">{label}</p>
              <p className="mt-2 text-4xl font-bold text-white">{value}</p>
            </div>
            <div className="p-4 bg-white rounded-full shadow-md">
              <Icon className="h-8 w-8 text-teal-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
