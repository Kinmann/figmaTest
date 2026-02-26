import React from 'react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Building2, Shield, Sparkles } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (role: 'admin' | 'user') => {
    login(role);
    setTimeout(() => {
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/app/dashboard');
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative h-16 w-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
              <Building2 className="w-8 h-8" />
            </div>
          </div>
        </div>
        <h2 className="mt-6 text-center text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
          게임덱스에 오신 것을 환영합니다
        </h2>
        <p className="mt-3 text-center text-base text-gray-600">
          현대적인 조직 관리 플랫폼
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/80 backdrop-blur-lg py-10 px-6 shadow-2xl sm:rounded-2xl sm:px-12 border border-gray-100">
          <div className="space-y-6">
            <div className="space-y-4">
              {/* User Login */}
              <button
                onClick={() => handleLogin('user')}
                className="group w-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform transition-transform group-hover:scale-105"></div>
                <div className="relative flex items-center justify-center py-3.5 px-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <img
                      className="h-5 w-5"
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                      alt="Microsoft logo"
                    />
                    <span className="text-white font-semibold text-base">
                      Microsoft로 로그인
                    </span>
                  </div>
                  <Sparkles className="absolute right-4 w-5 h-5 text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>

              {/* Admin Login */}
              <button
                onClick={() => handleLogin('admin')}
                className="group w-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 transform transition-transform group-hover:scale-105"></div>
                <div className="relative flex items-center justify-center py-3.5 px-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-semibold text-base">
                      관리자 콘솔 로그인
                    </span>
                  </div>
                  <Sparkles className="absolute right-4 w-5 h-5 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-500 font-medium">
                  보안 SSO 접근
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  계정 접근에 도움이 필요하신가요?{' '}
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 underline decoration-blue-300">
                    관리자에게 문의
                  </a>{' '}
                  하여 로그인 문제를 해결하세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-100">
            <div className="text-2xl mb-1">🔒</div>
            <div className="text-xs font-medium text-gray-700">보안</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-100">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-xs font-medium text-gray-700">빠름</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-100">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-xs font-medium text-gray-700">간편</div>
          </div>
        </div>
      </div>
    </div>
  );
}