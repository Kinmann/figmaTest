import React from 'react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role: 'admin' | 'user') => {
    // Simulate MS SSO login
    setTimeout(() => {
      if (role === 'admin') {
        navigate('/admin/members');
      } else {
        navigate('/app/address-book');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            R
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Runway
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or <a href="#" className="font-medium text-blue-600 hover:text-blue-500">contact your administrator</a> if you have trouble.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <div className="space-y-6">
            <div className="space-y-3">
              <Button 
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => handleLogin('user')}
              >
                <img 
                  className="h-5 w-5 mr-2" 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                  alt="Microsoft logo" 
                />
                Sign in with Microsoft (User)
              </Button>
              <Button 
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={() => handleLogin('admin')}
              >
                Admin Console Login
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Secure SSO Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
