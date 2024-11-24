import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ErrorMessage({ message }) {
  return (
    <div className="bg-gradient-to-r from-red-100 via-red-50 to-red-100 border-l-4 border-red-500 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg my-4">
      <div className="flex items-center">
        <AlertTriangle className="h-6 w-6 text-red-500" />
        <p className="ml-3 text-sm font-medium text-red-800">
          {message || 'An error occurred. Please try again.'}
        </p>
      </div>
    </div>
  );
}
