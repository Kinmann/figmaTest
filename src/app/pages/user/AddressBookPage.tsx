import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { mockMembers } from '../../data/mockData';
import { Search, Mail, Phone, MapPin, Building2 } from 'lucide-react';

export function AddressBookPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = mockMembers
    .filter((m) => m.status === 'Active' || m.status === 'Pending') // Active 또는 Pending 모두 표시
    .filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getDepartmentColor = (dept: string) => {
    // 한국 부서명에 맞는 색상 매핑
    const colors: { [key: string]: string } = {
      '미래성장R&D': 'bg-blue-100 text-blue-700 border-blue-200',
      '글로벌사업개발본부': 'bg-green-100 text-green-700 border-green-200',
      '경영혁신본부': 'bg-purple-100 text-purple-700 border-purple-200',
      '글로벌운영본부': 'bg-orange-100 text-orange-700 border-orange-200',
      'IT센터': 'bg-pink-100 text-pink-700 border-pink-200',
      '마케팅본부': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      '인사문화팀': 'bg-indigo-100 text-indigo-700 border-indigo-200',
      '재무회계팀': 'bg-teal-100 text-teal-700 border-teal-200',
    };
    return colors[dept] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">주소록</h1>
        <p className="text-gray-600 mt-1">구성원 연락처 정보</p>
      </div>

      {/* Search */}
      <Card className="p-4 border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="이름, 이메일 또는 부서로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 text-base"
          />
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 border-gray-100 text-center">
          <div className="text-2xl font-bold text-blue-600">{filteredMembers.length}</div>
          <div className="text-sm text-gray-600 mt-1">전체 연락처</div>
        </Card>
        <Card className="p-4 border-gray-100 text-center">
          <div className="text-2xl font-bold text-green-600">
            {Array.from(new Set(filteredMembers.map((m) => m.department))).filter(d => d !== '미배정').length}
          </div>
          <div className="text-sm text-gray-600 mt-1">부서</div>
        </Card>
        <Card className="p-4 border-gray-100 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {filteredMembers.filter((m) => m.position === 'CEO' || m.position === '본부장' || m.position === '팀장' || m.position === '센터장' || m.position === '실장').length}
          </div>
          <div className="text-sm text-gray-600 mt-1">리더</div>
        </Card>
        <Card className="p-4 border-gray-100 text-center">
          <div className="text-2xl font-bold text-orange-600">
            {filteredMembers.filter((m) => m.phone).length}
          </div>
          <div className="text-sm text-gray-600 mt-1">전화번호 등록</div>
        </Card>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredMembers.map((member) => (
          <Card
            key={member.id}
            className="p-6 border-gray-100 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16 ring-2 ring-blue-100">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xl">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-lg truncate">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {member.position && member.duty ? `${member.position} / ${member.duty}` : member.position || member.duty || member.role}
                </p>
                <Badge variant="outline" className={getDepartmentColor(member.department)}>
                  {member.department}
                </Badge>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center text-gray-600 group">
                <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-blue-600 truncate transition-colors"
                >
                  {member.email}
                </a>
              </div>
              {member.phone && (
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{member.phone}</span>
                </div>
              )}
              {member.memberCode && (
                <div className="flex items-center text-gray-600">
                  <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                  <span>사번: {member.memberCode}</span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">최근 활동</span>
                <span className="text-xs font-medium text-gray-700">{member.lastActive}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">검색 결과 없음</h3>
          <p className="text-gray-600">다른 검색어로 시도해보세요</p>
        </div>
      )}
    </div>
  );
}