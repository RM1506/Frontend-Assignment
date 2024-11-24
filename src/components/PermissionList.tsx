import React from 'react';
import { permissions } from '../data/mock';
import { Key, Edit2, Trash2, MoreVertical } from 'lucide-react';

export default function PermissionList() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="p-6 bg-white border-b border-gray-200 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Permissions</h2>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition-opacity">
            Add Permission
          </button>
        </div>
      </div>

      {/* Permission Items */}
      <div className="divide-y divide-gray-200">
        {permissions.map((permission) => (
          <div
            key={permission.id}
            className="p-6 hover:bg-indigo-50 transition-colors rounded-lg flex justify-between items-center"
          >
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full">
                <Key className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{permission.name}</h3>
                <p className="text-sm text-gray-600">{permission.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                title="Edit Permission"
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <Edit2 size={20} />
              </button>
              <button
                title="Delete Permission"
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 size={20} />
              </button>
              <button
                title="More Options"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
