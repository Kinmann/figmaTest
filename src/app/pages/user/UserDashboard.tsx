import React from 'react';
import { Card } from '../../components/ui/card';
import { useAuth } from '../../context/AuthContext';
import { Calendar, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">안녕하세요, {user?.name}님! 👋</h1>
        <p className="text-blue-100">개인 대시보드에 오신 것을 환영합니다.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: CheckCircle, label: '완료한 작업', value: '24', color: 'from-green-500 to-green-600' },
          { icon: Clock, label: '대기 중', value: '8', color: 'from-orange-500 to-orange-600' },
          { icon: Calendar, label: '회의', value: '5', color: 'from-blue-500 to-blue-600' },
          { icon: TrendingUp, label: '생산성', value: '92%', color: 'from-purple-500 to-purple-600' },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className="p-6 border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="p-6 border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">최근 활동</h3>
        <div className="space-y-4">
          {[
            { title: '프로필이 업데이트되었습니다', time: '2시간 전', color: 'bg-blue-100 text-blue-600' },
            { title: '새 메시지를 받았습니다', time: '5시간 전', color: 'bg-green-100 text-green-600' },
            { title: '회의가 예약되었습니다', time: '1일 전', color: 'bg-purple-100 text-purple-600' },
          ].map((activity, idx) => (
            <div key={idx} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
              <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center font-bold`}>
                {activity.title.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}