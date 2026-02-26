import React from 'react';
import { Card } from '../../components/ui/card';
import { useAuth } from '../../context/AuthContext';
import { mockMembers, getTopLevelDepartments } from '../../data/mockData';
import { TrendingUp, Users, Activity, Award, ArrowUp, ArrowDown } from 'lucide-react';

export function AdminDashboard() {
  const { user } = useAuth();

  // Calculate real stats from mockMembers
  const totalMembers = mockMembers.length;
  const activeMembers = mockMembers.filter(m => m.status === 'Active' || m.status === 'Pending').length;
  const topLevelDepartments = getTopLevelDepartments();
  const departmentCount = topLevelDepartments.length;

  const stats = [
    {
      title: '전체 구성원',
      value: totalMembers.toString(),
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: '활성 사용자',
      value: activeMembers.toString(),
      change: '+8%',
      trend: 'up',
      icon: Activity,
      color: 'from-green-500 to-green-600',
    },
    {
      title: '최상위 부서',
      value: departmentCount.toString(),
      change: '+2',
      trend: 'up',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: '성장률',
      value: '15%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  // Calculate department stats (top-level only)
  const departmentStats = topLevelDepartments.slice(0, 6).map(dept => {
    const count = mockMembers.filter(m => m.departmentCode?.startsWith(dept.department_code)).length;
    return {
      name: dept.department_name,
      count: count,
      percentage: totalMembers > 0 ? Math.round((count / totalMembers) * 100) : 0,
      color: 'bg-blue-500'
    };
  });

  // Assign colors to departments
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'];
  departmentStats.forEach((dept, idx) => {
    dept.color = colors[idx % colors.length];
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-600 mt-1">환영합니다, {user?.name}님</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 border-gray-100 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              <div
                className={`flex items-center space-x-1 text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.trend === 'up' ? (
                  <ArrowUp className="h-4 w-4" />
                ) : (
                  <ArrowDown className="h-4 w-4" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">최근 활동</h3>
          <div className="space-y-4">
            {mockMembers.slice(0, 4).map((member, index) => {
              const actions = ['팀에 합류했습니다', '프로필을 업데이트했습니다', '온보딩을 완료했습니다', '새 요청을 제출했습니다'];
              const colors = ['bg-blue-100 text-blue-600', 'bg-green-100 text-green-600', 'bg-purple-100 text-purple-600', 'bg-orange-100 text-orange-600'];
              return (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-full ${colors[index]} flex items-center justify-center font-bold text-sm`}>
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">{actions[index]}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{member.lastActive}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6 border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">부서 현황</h3>
          <div className="space-y-3">
            {departmentStats.map((dept) => (
              <div key={dept.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{dept.name}</span>
                  <span className="text-gray-600">{dept.count}명</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${dept.color} rounded-full transition-all duration-500`}
                    style={{ width: `${dept.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}